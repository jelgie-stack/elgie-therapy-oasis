import { sendContactEmail, type ContactFormData } from '@/lib/supabase';

/**
 * Client-side API handler for contact form submissions
 * This wraps the Supabase edge function call
 */
export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  // Validate required fields
  if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
    throw new Error('All fields are required');
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    throw new Error('Please enter a valid email address');
  }

  // Message length validation
  if (formData.message.trim().length < 10) {
    throw new Error('Message must be at least 10 characters');
  }

  if (formData.message.length > 1000) {
    throw new Error('Message must be less than 1000 characters');
  }

  try {
    await sendContactEmail(formData);
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
};