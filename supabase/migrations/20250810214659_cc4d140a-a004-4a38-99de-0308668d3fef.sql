-- Create contact_submissions table for form submissions
CREATE TABLE public.contact_submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    page_url TEXT,
    page_title TEXT,
    user_agent TEXT,
    ip_address TEXT,
    time_to_complete INTEGER,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for service role to manage all contact submissions
CREATE POLICY "Service role can manage contact submissions" 
ON public.contact_submissions 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for efficient rate limiting queries
CREATE INDEX idx_contact_submissions_ip_created ON public.contact_submissions(ip_address, created_at);

-- Create index for email lookups
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);

-- Create index for timestamp queries
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at);