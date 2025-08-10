import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitContactForm } from '@/api/contact';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageTitle?: string;
  pageUrl?: string;
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

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  pageTitle = '',
  pageUrl = ''
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  
  const nameInputRef = useRef<HTMLInputElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Track form start time for anti-spam
  useEffect(() => {
    if (isOpen && !isSuccess) {
      setStartTime(Date.now());
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      
      // Focus the first input after modal opens
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);

      // Fire analytics event
      if (typeof window !== 'undefined' && 'gtag' in window && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'contact_modal_open', {
          page_title: pageTitle,
          page_location: pageUrl
        });
      }
    }
  }, [isOpen, isSuccess, pageTitle, pageUrl]);

  // Auto-close success state after 6 seconds
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        handleClose();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Anti-spam checks
    const timeTaken = Date.now() - startTime;
    
    // Check honeypot
    if (formData.honeypot) {
      setErrors({ general: 'Spam detected. Please try again.' });
      return;
    }

    // Check minimum time
    if (timeTaken < 2000) {
      setErrors({ general: 'Please take your time filling out the form.' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await submitContactForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        pageTitle,
        pageUrl,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      });

      setIsSuccess(true);
      
      // Fire analytics event
      if (typeof window !== 'undefined' && 'gtag' in window && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'contact_form_submit', {
          page_title: pageTitle,
          page_location: pageUrl
        });
      }

    } catch (error) {
      console.error('Contact form error:', error);
      setErrors({ 
        general: error instanceof Error ? error.message : 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear errors as user types
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', message: '', honeypot: '' });
    setErrors({});
    setIsSubmitting(false);
    setIsSuccess(false);
    setStartTime(0);
    onClose();
    
    // Return focus to previously focused element
    setTimeout(() => {
      previouslyFocusedElement.current?.focus();
    }, 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md" onKeyDown={handleKeyDown}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-primary">
              <CheckCircle className="h-5 w-5" />
              Message Sent!
            </DialogTitle>
          </DialogHeader>
          
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">
              Thanks! Your message has been sent. We'll reply by email soon.
            </p>
            <Button onClick={handleClose} className="w-full">
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg" onKeyDown={handleKeyDown}>
        <DialogHeader>
          <DialogTitle>Contact for Questions</DialogTitle>
        </DialogHeader>

        <div className="mb-4 p-4 bg-accent-light rounded-lg border border-accent/20">
          <p className="text-sm text-accent-foreground">
            <strong>Please don't share private health details.</strong> If this is an emergency, call 911 or go to the nearest ER.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.general && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm text-destructive">{errors.general}</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-sm font-medium">
              Name *
            </Label>
            <Input
              id="contact-name"
              ref={nameInputRef}
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={errors.name ? 'border-destructive' : ''}
              aria-describedby={errors.name ? 'name-error' : undefined}
              disabled={isSubmitting}
              required
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email" className="text-sm font-medium">
              Email *
            </Label>
            <Input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'border-destructive' : ''}
              aria-describedby={errors.email ? 'email-error' : undefined}
              disabled={isSubmitting}
              required
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message" className="text-sm font-medium">
              Your question *
            </Label>
            <Textarea
              id="contact-message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={`min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
              placeholder="Tell us how we can help you..."
              aria-describedby={errors.message ? 'message-error' : undefined}
              disabled={isSubmitting}
              maxLength={1000}
              required
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              {errors.message ? (
                <p id="message-error" className="text-destructive">
                  {errors.message}
                </p>
              ) : (
                <span>Minimum 10 characters</span>
              )}
              <span>{formData.message.length}/1000</span>
            </div>
          </div>

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

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;