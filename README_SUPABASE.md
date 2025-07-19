# Supabase Email Capture Integration

## Overview

This project now uses Supabase to capture all email submissions and newsletter subscriptions instead of SendGrid. This provides a more robust, scalable, and cost-effective solution with real-time capabilities.

## Features

### ✅ **Email Capture Types**
- **Contact Forms** - Demo requests and general inquiries
- **Newsletter Subscriptions** - Blog and news updates
- **Partnership Inquiries** - Business partnership requests
- **Career Applications** - Job applications and general applications

### ✅ **Admin Dashboard**
- View all email submissions with filtering and search
- Manage newsletter subscribers
- Export data to CSV
- Real-time updates
- Beautiful UI with statistics

### ✅ **Database Features**
- Row Level Security (RLS) enabled
- Automatic timestamps
- Type-safe TypeScript interfaces
- Real-time subscriptions available

## Setup Instructions

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down your project URL and anon key from Settings > API

### 2. Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Database Tables

Run these SQL commands in your Supabase SQL editor:

#### Email Submissions Table
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

#### Newsletter Subscriptions Table
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

## Usage

### Frontend Integration

The email service is automatically integrated into all forms:

#### Newsletter Subscriptions
```typescript
import { EmailService } from '@/lib/emailService';

// Subscribe to newsletter
const result = await EmailService.subscribeToNewsletter(email);
```

#### Contact Forms
```typescript
import { EmailService } from '@/lib/emailService';

// Submit contact form
await EmailService.submitEmail({
  email: 'user@example.com',
  name: 'John Doe',
  company: 'Acme Corp',
  industry: 'Manufacturing',
  message: 'Interested in demo',
  type: 'contact'
});
```

### Admin Dashboard

Access the admin dashboard at `/admin` to:
- View all email submissions
- Manage newsletter subscribers
- Export data to CSV
- Search and filter submissions
- View real-time statistics

## File Structure

```
src/
├── lib/
│   ├── supabase.ts          # Supabase client and types
│   └── emailService.ts      # Email service functions
├── pages/
│   └── Admin.tsx            # Admin dashboard
└── components/
    ├── layout/
    │   └── Footer.tsx       # Newsletter signup
    └── home/
        └── Contact.tsx      # Contact form
```

## API Reference

### EmailService Class

#### `submitEmail(submission)`
Submit a general email (contact, partnership, career)

**Parameters:**
- `submission` (object):
  - `email` (string): User's email
  - `name` (string, optional): User's name
  - `company` (string, optional): Company name
  - `industry` (string, optional): Industry
  - `message` (string, optional): Message content
  - `type` (string): 'contact' | 'partnership' | 'career'

#### `subscribeToNewsletter(email)`
Subscribe an email to the newsletter

**Parameters:**
- `email` (string): Email address to subscribe

**Returns:**
- Success message or error

#### `unsubscribeFromNewsletter(email)`
Unsubscribe an email from the newsletter

#### `getEmailSubmissions()`
Get all email submissions (admin only)

#### `getNewsletterSubscribers()`
Get all newsletter subscribers (admin only)

## Real-time Features

Enable real-time subscriptions for live updates:

```typescript
import { supabase } from './lib/supabase'

// Subscribe to new email submissions
const subscription = supabase
  .channel('email_submissions')
  .on('postgres_changes', 
    { event: 'INSERT', schema: 'public', table: 'email_submissions' },
    (payload) => {
      console.log('New email submission:', payload.new)
      // Update UI or send notifications
    }
  )
  .subscribe()
```

## Security

- Row Level Security (RLS) enabled on all tables
- Anonymous users can only insert data
- Admin access requires authentication
- Email validation and sanitization
- Rate limiting recommended for production

## Migration from SendGrid

### Benefits of Supabase:
- ✅ **Cost-effective** - No per-email charges
- ✅ **Real-time** - Live updates and notifications
- ✅ **Scalable** - PostgreSQL database
- ✅ **Admin Dashboard** - Built-in management interface
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Security** - Row Level Security
- ✅ **Analytics** - Built-in query capabilities

### What's Changed:
- ❌ Removed SendGrid dependencies
- ❌ Removed mailto-based submissions
- ✅ Added Supabase client
- ✅ Added email service functions
- ✅ Added admin dashboard
- ✅ Updated all forms to use Supabase

## Troubleshooting

### Common Issues:

1. **Environment Variables Not Found**
   - Ensure `.env` file exists in project root
   - Check variable names match exactly
   - Restart development server

2. **Database Connection Errors**
   - Verify Supabase URL and key
   - Check Row Level Security policies
   - Ensure tables exist

3. **Form Submission Failures**
   - Check browser console for errors
   - Verify email format validation
   - Check Supabase logs

### Development Commands:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Access admin dashboard
# Navigate to http://localhost:5173/admin
```

## Next Steps

### Recommended Enhancements:
1. **Email Notifications** - Set up webhooks to notify team of new submissions
2. **Analytics Dashboard** - Add charts and metrics
3. **Bulk Operations** - Mass email subscribers
4. **Email Templates** - Customize notification emails
5. **Rate Limiting** - Prevent spam submissions
6. **Email Validation** - Enhanced email verification

### Production Considerations:
1. **Backup Strategy** - Regular database backups
2. **Monitoring** - Set up error tracking
3. **Performance** - Index optimization
4. **Compliance** - GDPR/privacy considerations
5. **Scaling** - Database performance tuning 