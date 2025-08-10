# Contact Modal Setup Documentation

## Overview
The Contact Modal system automatically attaches to any "Contact for Questions" CTA across the site, providing a unified contact form experience.

## Environment Variables Required

### Supabase Configuration
The following environment variables are automatically available in Lovable projects with Supabase enabled:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

### Email Service Configuration (Supabase Secrets)
Add these secrets to your Supabase project:
- `RESEND_API_KEY` - API key for Resend email service
- `CONTACT_TO_EMAIL` - Email address to receive contact forms (defaults to brigettemft@gmail.com)

## Setup Instructions

### 1. Configure Email Service
1. Sign up for Resend (https://resend.com)
2. Get your API key from the Resend dashboard
3. Add the API key to Supabase secrets as `RESEND_API_KEY`
4. Optionally set `CONTACT_TO_EMAIL` to change the recipient

### 2. Deploy Supabase Edge Function
The edge function is located at `supabase/functions/send-contact-email/index.ts`

Deploy it using the Supabase CLI:
```bash
supabase functions deploy send-contact-email
```

### 3. Verify Domain (Optional but Recommended)
In Resend dashboard, verify the domain `elgietherapy.com` to:
- Improve email deliverability
- Use branded sender address (no-reply@elgietherapy.com)
- Remove Resend branding

## How It Works

### Automatic CTA Detection
The system automatically finds and binds to:
- Any button/link with text "Contact for Questions" (case-insensitive)
- Any element with `data-contact-cta="true"` attribute

### Form Features
- **Validation**: Client and server-side validation
- **Anti-spam**: Honeypot field, time-to-complete check, rate limiting
- **Accessibility**: Focus management, keyboard navigation, ARIA labels
- **Analytics**: Google Analytics events (if GA4 is present)

### Email Content
Emails include:
- Contact details (name, email)
- Message content
- Page where form was submitted
- Timestamp and user agent
- Reply-to set to submitter's email

## Testing Checklist

### Modal Functionality
- [ ] Modal opens from all "Contact for Questions" CTAs
- [ ] Modal opens from elements with `data-contact-cta="true"`
- [ ] Form validates required fields
- [ ] Email format validation works
- [ ] Message length validation (10-1000 chars)
- [ ] Honeypot spam detection works
- [ ] Time-to-complete check works
- [ ] Success state displays correctly
- [ ] Modal auto-closes after 6 seconds

### Accessibility
- [ ] Focus moves to first input when modal opens
- [ ] Tab navigation works properly
- [ ] Escape key closes modal
- [ ] Focus returns to trigger element after closing
- [ ] Screen readers can navigate form
- [ ] Error messages are announced

### Email Delivery
- [ ] Emails are sent to correct recipient
- [ ] Subject line includes page title
- [ ] HTML and text versions render correctly
- [ ] Reply-to works for responses
- [ ] Rate limiting prevents spam (5 requests/minute)

### Mobile Experience
- [ ] Modal displays correctly on mobile
- [ ] Form inputs are touch-friendly
- [ ] Virtual keyboard doesn't break layout
- [ ] Buttons are easily tappable

## File Structure

```
src/
├── components/
│   ├── ContactModal.tsx              # Main modal component
│   └── ContactModalProvider.tsx      # Provider for site-wide integration
├── hooks/
│   └── useContactModal.tsx           # Modal state management hook
├── lib/
│   ├── contactBindings.ts            # Auto-binding system
│   └── supabase.ts                   # Supabase client configuration
├── api/
│   └── contact.ts                    # Client-side API wrapper
└── App.tsx                           # ContactModalProvider integration

supabase/
└── functions/
    └── send-contact-email/
        └── index.ts                  # Edge function for email sending
```

## Binding Statistics
You can check how many CTAs are bound using:
```javascript
import { getContactBindingStats } from '@/lib/contactBindings';
console.log(getContactBindingStats());
```

## Troubleshooting

### Modal Doesn't Open
- Check if ContactModalProvider is wrapped around your app
- Verify CTA text matches "Contact for Questions" (case-insensitive)
- Check browser console for JavaScript errors

### Emails Not Sending
- Verify RESEND_API_KEY is set in Supabase secrets
- Check Supabase function logs for errors
- Ensure edge function is deployed

### Rate Limiting Issues
- Default: 5 requests per minute per IP
- Modify in edge function if needed
- Consider implementing Redis for production scaling

### Accessibility Issues
- Test with screen reader
- Verify keyboard navigation
- Check color contrast ratios