-- Final fix: Disable RLS for demo_requests table to allow public inserts
-- This is the simplest solution for a public demo request form

-- Disable RLS on the demo_requests table
ALTER TABLE demo_requests DISABLE ROW LEVEL SECURITY;

-- Verify RLS is disabled
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE tablename = 'demo_requests';

-- Also check if there are any remaining policies
SELECT 
  schemaname,
  tablename,
  policyname
FROM pg_policies 
WHERE tablename = 'demo_requests'; 