import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement>;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string; // Hidden field for spam detection
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

export function ContactModal({ isOpen, onClose, triggerRef }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitStartTime, setSubmitStartTime] = useState<number | null>(null);
  
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Track when modal opens for time-to-complete validation
  useEffect(() => {
    if (isOpen && !isSuccess) {
      setSubmitStartTime(Date.now());
      // Analytics event
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'contact_modal_open', {
          event_category: 'engagement',
          event_label: window.location.pathname,
        });
      }
    }
  }, [isOpen, isSuccess]);

  // Focus management
  useEffect(() => {
    if (isOpen && nameInputRef.current && !isSuccess) {
      const timer = setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isSuccess]);

  // Return focus to trigger when modal closes
  useEffect(() => {
    if (!isOpen && triggerRef?.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, triggerRef]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear specific field error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Anti-spam checks
    if (formData.honeypot) {
      // Honeypot field was filled - likely spam
      toast({
        title: "Error",
        description: "Please try again later.",
        variant: "destructive",
      });
      return;
    }

    const timeToComplete = submitStartTime ? Date.now() - submitStartTime : 0;
    if (timeToComplete < 2000) {
      // Too fast - likely spam
      toast({
        title: "Error", 
        description: "Please take a moment to review your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(`https://iyfnaqvqytofesawninf.supabase.co/functions/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5Zm5hcXZxeXRvZmVzYXduaW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4NjA1MDksImV4cCI6MjA3MDQzNjUwOX0.h71bnUty2--IXFZoSkirwkY6jsu8ssqw3GLQYOPzpes'}`,
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          pageUrl: window.location.href,
          pageTitle: document.title,
          userAgent: navigator.userAgent,
          timeToComplete,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrors({ general: result.error || 'Failed to send message. Please try again.' });
        }
        return;
      }

      // Success
      setIsSuccess(true);
      
      // Analytics event
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: window.location.pathname,
        });
      }

      // Auto-close after 6 seconds
      setTimeout(() => {
        handleClose();
      }, 6000);

    } catch (error) {
      console.error('Error submitting contact form:', error);
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      setErrors({});
      setSubmitStartTime(null);
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && !isSubmitting) {
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="sm:max-w-md max-h-[90vh] overflow-y-auto"
        onKeyDown={handleKeyDown}
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        <DialogHeader>
          <DialogTitle id="contact-modal-title">
            Contact for Questions
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-6 text-center space-y-4">
            <div className="text-primary text-lg font-medium">
              Thanks! Your message has been sent. We'll reply by email soon.
            </div>
            <Button onClick={handleClose} className="w-full">
              Done
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div id="contact-modal-description" className="text-sm text-muted-foreground p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <strong>Please don't share private health details.</strong> If this is an emergency, call 911 or go to the nearest ER.
              <br />
              <em>This form is for general questions only; do not include sensitive health information.</em>
            </div>

            {errors.general && (
              <div className="text-sm text-destructive p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                {errors.general}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => handleInputChange('honeypot', e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="space-y-2">
                <Label htmlFor="contact-name">Name *</Label>
                <Input
                  ref={nameInputRef}
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={errors.name ? 'border-destructive' : ''}
                  disabled={isSubmitting}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <div id="name-error" className="text-sm text-destructive">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email *</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={errors.email ? 'border-destructive' : ''}
                  disabled={isSubmitting}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <div id="email-error" className="text-sm text-destructive">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Your question *</Label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
                  placeholder="Please describe your question or how we can help..."
                  disabled={isSubmitting}
                  maxLength={1000}
                  aria-describedby={errors.message ? 'message-error' : 'message-helper'}
                  aria-invalid={!!errors.message}
                />
                <div id="message-helper" className="text-xs text-muted-foreground text-right">
                  {formData.message.length}/1000 characters
                </div>
                {errors.message && (
                  <div id="message-error" className="text-sm text-destructive">
                    {errors.message}
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}