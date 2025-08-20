-- Fix contact_submissions security vulnerability
-- Remove the overly permissive policy and create proper access controls

-- First, drop the existing overly permissive policy
DROP POLICY IF EXISTS "Service role can manage contact submissions" ON public.contact_submissions;

-- Create secure policies:

-- 1. Allow anonymous users to INSERT contact submissions (for contact forms)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- 2. Only service role can read/manage contact submissions (for backend processing)
CREATE POLICY "Service role full access" 
ON public.contact_submissions 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- 3. Authenticated admin users can read contact submissions
-- Note: This assumes you'll implement user roles in the future
-- For now, we'll keep it restrictive and only allow service role access
CREATE POLICY "Authenticated users cannot read contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated 
USING (false);

-- Ensure RLS is enabled
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;