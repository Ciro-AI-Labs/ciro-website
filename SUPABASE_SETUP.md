# Supabase Setup for CIRO Website

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down your project URL and anon key

## 2. Environment Variables

Create a `.env` file in the project root with:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 3. Database Tables

Run these SQL commands in your Supabase SQL editor:

### Email Submissions Table
```sql
CREATE TABLE email_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  industry TEXT,
  message TEXT,
  type TEXT NOT NULL CHECK (type IN ('newsletter', 'contact', 'partnership', 'career')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE email_submissions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts for all users" ON email_submissions
  FOR INSERT WITH CHECK (true);

-- Allow reads only for authenticated users (admin)
CREATE POLICY "Allow reads for authenticated users" ON email_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
```

### Newsletter Subscriptions Table
```sql
CREATE TABLE newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts for all users" ON newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- Allow updates from authenticated and anonymous users
CREATE POLICY "Allow updates for all users" ON newsletter_subscriptions
  FOR UPDATE USING (true);

-- Allow reads only for authenticated users (admin)
CREATE POLICY "Allow reads for authenticated users" ON newsletter_subscriptions
  FOR SELECT USING (auth.role() = 'authenticated');
```

## 4. Usage

The email service is now integrated into your forms:

- **Contact forms** will save to `email_submissions` table with type 'contact'
- **Newsletter signups** will save to `newsletter_subscriptions` table
- **Partnership inquiries** will save to `email_submissions` table with type 'partnership'
- **Career applications** will save to `email_submissions` table with type 'career'

## 5. Admin Access

To view submissions in Supabase dashboard:
1. Go to your Supabase project dashboard
2. Navigate to Table Editor
3. View `email_submissions` and `newsletter_subscriptions` tables

## 6. Real-time Features

You can enable real-time subscriptions to get live updates when new emails are submitted:

```typescript
import { supabase } from './lib/supabase'

// Subscribe to new email submissions
const subscription = supabase
  .channel('email_submissions')
  .on('postgres_changes', 
    { event: 'INSERT', schema: 'public', table: 'email_submissions' },
    (payload) => {
      console.log('New email submission:', payload.new)
    }
  )
  .subscribe()
``` 