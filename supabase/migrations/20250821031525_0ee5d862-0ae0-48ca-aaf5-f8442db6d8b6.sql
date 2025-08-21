-- Fix security vulnerability: Implement proper RLS policies for contact_submissions table
-- to prevent unauthorized access to customer contact information

-- Drop existing policies to replace with more secure ones
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users cannot read contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Service role full access" ON public.contact_submissions;

-- Allow anonymous users to INSERT contact form submissions (form functionality)
CREATE POLICY "Allow contact form submissions"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Explicitly deny all SELECT access to anonymous users
CREATE POLICY "Deny anonymous read access"
ON public.contact_submissions
FOR SELECT
TO anon
USING (false);

-- Explicitly deny SELECT access to authenticated users (except admin role if implemented)
CREATE POLICY "Deny authenticated read access" 
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (false);

-- Allow service role to read/write for backend processing (edge functions)
CREATE POLICY "Service role access for backend processing"
ON public.contact_submissions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Deny all UPDATE and DELETE operations to non-service roles
CREATE POLICY "Deny updates to non-service roles"
ON public.contact_submissions
FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

CREATE POLICY "Deny deletes to non-service roles" 
ON public.contact_submissions
FOR DELETE
TO anon, authenticated
USING (false);