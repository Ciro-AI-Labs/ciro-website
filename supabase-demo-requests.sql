-- Demo Requests Table for Enhanced Contact Form
-- This table captures all the comprehensive information from our new contact form

CREATE TABLE IF NOT EXISTS demo_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Personal Information
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  
  -- Company Information
  company VARCHAR(255) NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  industry VARCHAR(100) NOT NULL,
  company_size VARCHAR(50) NOT NULL,
  
  -- Use Case and Timeline
  use_case VARCHAR(100) NOT NULL,
  timeline VARCHAR(100) NOT NULL,
  message TEXT,
  
  -- Preferences and Compliance
  newsletter_subscription BOOLEAN DEFAULT false,
  privacy_policy_accepted BOOLEAN DEFAULT false,
  
  -- Calendly Integration
  calendly_event_id VARCHAR(255),
  calendly_event_url VARCHAR(500),
  scheduled_demo_time TIMESTAMP WITH TIME ZONE,
  
  -- Status and Processing
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'scheduled', 'completed', 'cancelled', 'no_show')),
  assigned_to VARCHAR(255),
  notes TEXT,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Indexes for performance
  CONSTRAINT unique_email_company UNIQUE(email, company)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_demo_requests_email ON demo_requests(email);
CREATE INDEX IF NOT EXISTS idx_demo_requests_company ON demo_requests(company);
CREATE INDEX IF NOT EXISTS idx_demo_requests_industry ON demo_requests(industry);
CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_demo_requests_scheduled_demo_time ON demo_requests(scheduled_demo_time);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_demo_requests_updated_at 
    BEFORE UPDATE ON demo_requests 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create a view for analytics
CREATE OR REPLACE VIEW demo_requests_analytics AS
SELECT 
  DATE(created_at) as date,
  COUNT(*) as total_requests,
  COUNT(CASE WHEN status = 'scheduled' THEN 1 END) as scheduled_demos,
  COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_demos,
  COUNT(CASE WHEN status = 'cancelled' THEN 1 END) as cancelled_demos,
  COUNT(CASE WHEN newsletter_subscription = true THEN 1 END) as newsletter_signups,
  industry,
  company_size,
  use_case
FROM demo_requests
GROUP BY DATE(created_at), industry, company_size, use_case
ORDER BY date DESC;

-- Insert some sample data for testing (optional)
INSERT INTO demo_requests (
  first_name, last_name, email, company, job_title, industry, company_size, 
  use_case, timeline, message, newsletter_subscription, privacy_policy_accepted
) VALUES 
  ('John', 'Smith', 'john.smith@manufacturing.com', 'ABC Manufacturing', 'Operations Manager', 'manufacturing', '501-1000', 'real-time-monitoring', 'quarter', 'Interested in real-time monitoring for our production lines', true, true),
  ('Sarah', 'Johnson', 'sarah.j@logistics.com', 'XYZ Logistics', 'Supply Chain Director', 'logistics', '1001-5000', 'supply-chain', 'immediate', 'Need to optimize our supply chain operations', false, true),
  ('Mike', 'Chen', 'mike.chen@energy.com', 'Green Energy Corp', 'Plant Manager', 'energy', '5000+', 'energy-efficiency', 'year', 'Looking to improve energy efficiency across our facilities', true, true);

-- Row Level Security (RLS) policies
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated users to read their own demo requests
CREATE POLICY "Users can view their own demo requests" ON demo_requests
  FOR SELECT USING (auth.email() = email);

-- Policy to allow public insert for demo requests
CREATE POLICY "Public can insert demo requests" ON demo_requests
  FOR INSERT WITH CHECK (true);

-- Policy to allow authenticated users to update their own demo requests
CREATE POLICY "Users can update their own demo requests" ON demo_requests
  FOR UPDATE USING (auth.email() = email);

-- Policy to allow service role to manage all demo requests
CREATE POLICY "Service role can manage all demo requests" ON demo_requests
  FOR ALL USING (auth.role() = 'service_role'); 