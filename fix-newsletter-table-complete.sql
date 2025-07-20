-- Complete fix for newsletter_subscriptions table
-- This script will create the table if it doesn't exist or fix existing structure

-- Drop the table if it exists to recreate with proper structure
DROP TABLE IF EXISTS newsletter_subscriptions;

-- Create the newsletter_subscriptions table with proper structure
CREATE TABLE newsletter_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'pending')),
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_status ON newsletter_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_created_at ON newsletter_subscriptions(created_at);

-- Create trigger to update updated_at automatically
CREATE OR REPLACE FUNCTION update_newsletter_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
DROP TRIGGER IF EXISTS update_newsletter_subscriptions_updated_at ON newsletter_subscriptions;
CREATE TRIGGER update_newsletter_subscriptions_updated_at 
    BEFORE UPDATE ON newsletter_subscriptions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_newsletter_updated_at();

-- Enable Row Level Security (RLS) for newsletter_subscriptions
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for newsletter_subscriptions
-- Allow public inserts (for new subscriptions)
CREATE POLICY "Allow public inserts" ON newsletter_subscriptions
    FOR INSERT WITH CHECK (true);

-- Allow public selects (for checking existing subscriptions)
CREATE POLICY "Allow public selects" ON newsletter_subscriptions
    FOR SELECT USING (true);

-- Allow public updates (for status changes)
CREATE POLICY "Allow public updates" ON newsletter_subscriptions
    FOR UPDATE USING (true);

-- Verify the structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'newsletter_subscriptions'
ORDER BY ordinal_position;

-- Show the policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'newsletter_subscriptions'; 