import { createClient } from '@supabase/supabase-js';

// These will be automatically available in Supabase-enabled Lovable projects
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Send contact form email via Supabase Edge Function
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  pageTitle: string;
  pageUrl: string;
  userAgent?: string;
  timestamp: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const { data, error } = await supabase.functions.invoke('send-contact-email', {
    body: formData
  });

  if (error) {
    console.error('Supabase function error:', error);
    throw new Error(error.message || 'Failed to send email');
  }

  return data;
};