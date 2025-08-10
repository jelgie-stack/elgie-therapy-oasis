import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const CONTACT_TO_EMAIL = Deno.env.get('CONTACT_TO_EMAIL') || 'brigettemft@gmail.com';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  pageTitle: string;
  pageUrl: string;
  userAgent?: string;
  timestamp: string;
}

interface RateLimitStore {
  [ip: string]: {
    count: number;
    resetTime: number;
  };
}

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitStore: RateLimitStore = {};
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!data.email || typeof data.email !== 'string' || !validateEmail(data.email)) {
    errors.push('Valid email is required');
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  if (data.message && data.message.length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const clientData = rateLimitStore[ip];

  if (!clientData || now > clientData.resetTime) {
    rateLimitStore[ip] = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    };
    return true;
  }

  if (clientData.count >= RATE_LIMIT_MAX) {
    return false;
  }

  clientData.count++;
  return true;
}

async function sendEmail(formData: ContactFormData): Promise<void> {
  if (!RESEND_API_KEY) {
    throw new Error('Email service not configured');
  }

  const emailSubject = `New Contact Inquiry – ${formData.pageTitle || 'Website'}`;
  
  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    
    <h3>Contact Details:</h3>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
    
    <h3>Message:</h3>
    <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #007acc;">
      ${formData.message.replace(/\n/g, '<br>')}
    </p>
    
    <h3>Form Details:</h3>
    <p><strong>Page:</strong> <a href="${formData.pageUrl}">${formData.pageTitle}</a></p>
    <p><strong>Page URL:</strong> ${formData.pageUrl}</p>
    <p><strong>Submitted:</strong> ${new Date(formData.timestamp).toLocaleString()}</p>
    ${formData.userAgent ? `<p><strong>User Agent:</strong> ${formData.userAgent}</p>` : ''}
    
    <hr>
    <p style="color: #666; font-size: 12px;">
      This email was sent from the contact form on elgietherapy.com
    </p>
  `;

  const textBody = `
New Contact Form Submission

Contact Details:
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Form Details:
Page: ${formData.pageTitle}
Page URL: ${formData.pageUrl}
Submitted: ${new Date(formData.timestamp).toLocaleString()}
${formData.userAgent ? `User Agent: ${formData.userAgent}` : ''}

---
This email was sent from the contact form on elgietherapy.com
  `;

  const emailPayload = {
    from: 'Contact Form <noreply@elgietherapy.com>',
    to: [CONTACT_TO_EMAIL],
    reply_to: formData.email,
    subject: emailSubject,
    html: htmlBody,
    text: textBody,
  };

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error('Resend API error:', errorData);
    throw new Error('Failed to send email');
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'unknown';

    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      return new Response(
        JSON.stringify({ 
          error: 'Too many requests. Please wait a moment before trying again.' 
        }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Parse request body
    const formData: ContactFormData = await req.json();

    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      return new Response(
        JSON.stringify({ 
          error: 'Validation failed', 
          details: validation.errors 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Send email
    await sendEmail(formData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});