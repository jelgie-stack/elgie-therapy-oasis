import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  pageUrl: string;
  pageTitle: string;
  userAgent: string;
  timeToComplete: number;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", { 
      name: formData.name, 
      email: formData.email,
      pageUrl: formData.pageUrl,
      timeToComplete: formData.timeToComplete
    });

    // Server-side validation
    const errors: FormErrors = {};

    if (!formData.name?.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email?.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message?.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 1000) {
      errors.message = "Message must be less than 1000 characters";
    }

    if (Object.keys(errors).length > 0) {
      return new Response(JSON.stringify({ errors }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Anti-spam checks
    if (formData.timeToComplete < 2000) {
      console.log("Submission rejected: too fast", formData.timeToComplete);
      return new Response(JSON.stringify({ error: "Please take a moment to review your message." }), {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    
    // Check rate limiting (5 submissions per hour per IP)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: recentSubmissions, error: rateLimitError } = await supabase
      .from("contact_submissions")
      .select("id")
      .eq("ip_address", clientIP)
      .gte("created_at", oneHourAgo);

    if (rateLimitError) {
      console.error("Rate limit check error:", rateLimitError);
    } else if (recentSubmissions && recentSubmissions.length >= 5) {
      console.log("Rate limit exceeded for IP:", clientIP);
      return new Response(JSON.stringify({ error: "Too many submissions. Please try again later." }), {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Store submission in database
    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        page_url: formData.pageUrl,
        page_title: formData.pageTitle,
        user_agent: formData.userAgent,
        ip_address: clientIP,
        time_to_complete: formData.timeToComplete,
      });

    if (insertError) {
      console.error("Database insert error:", insertError);
      return new Response(JSON.stringify({ error: "Failed to save submission. Please try again." }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Send email via Resend
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    
    const emailSubject = `New Contact Inquiry – ${formData.pageTitle}`;
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><strong>Submission Details:</strong></p>
      <p><strong>Page URL:</strong> ${formData.pageUrl}</p>
      <p><strong>Page Title:</strong> ${formData.pageTitle}</p>
      <p><strong>Time to Complete:</strong> ${Math.round(formData.timeToComplete / 1000)}s</p>
      <p><strong>User Agent:</strong> ${formData.userAgent}</p>
      <p><strong>IP Address:</strong> ${clientIP}</p>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Elgie Therapy Contact Form <no-reply@elgietherapy.com>",
      to: ["brigettemft@gmail.com"],
      subject: emailSubject,
      html: emailBody,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Message sent successfully" 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("Error in contact function:", error);
    return new Response(JSON.stringify({ 
      error: "Internal server error. Please try again later." 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);