-- Fix RLS policies for demo_requests table
-- This script updates the policies to allow public inserts

-- First, let's see what policies exist
SELECT * FROM pg_policies WHERE tablename = 'demo_requests';

-- Drop existing policies that might be causing issues
DROP POLICY IF EXISTS "Users can view their own demo requests" ON demo_requests;
DROP POLICY IF EXISTS "Public can insert demo requests" ON demo_requests;
DROP POLICY IF EXISTS "Users can update their own demo requests" ON demo_requests;
DROP POLICY IF EXISTS "Service role can manage all demo requests" ON demo_requests;

-- Create a simple policy that allows public inserts
CREATE POLICY "Enable public insert for demo requests" ON demo_requests
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows users to view their own requests (if authenticated)
CREATE POLICY "Enable users to view own demo requests" ON demo_requests
  FOR SELECT USING (
    auth.role() = 'authenticated' AND auth.email() = email
  );

-- Create a policy that allows service role full access
CREATE POLICY "Enable service role full access" ON demo_requests
  FOR ALL USING (auth.role() = 'service_role');

-- Create a policy that allows authenticated users to update their own requests
CREATE POLICY "Enable users to update own demo requests" ON demo_requests
  FOR UPDATE USING (
    auth.role() = 'authenticated' AND auth.email() = email
  );

-- Verify the policies are created
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'demo_requests'; 