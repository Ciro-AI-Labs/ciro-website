# 🚀 Vercel Deployment with Supabase

## The Issue
Your website is deployed on Vercel but showing a black screen because Supabase environment variables are missing from your Vercel project settings.

## ✅ Quick Fix: Add Environment Variables to Vercel

### Step 1: Get Your Supabase Credentials
1. Go to [supabase.com](https://supabase.com) and create a project (if you haven't already)
2. In your Supabase dashboard, go to **Settings** → **API**
3. Copy your **Project URL** (looks like: `https://your-project-id.supabase.co`)
4. Copy your **anon public** key (starts with `eyJ...`)

### Step 2: Add Environment Variables to Vercel
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **ciro-website** project
3. Go to **Settings** tab
4. Click on **Environment Variables** in the left sidebar
5. Add these two environment variables:

**Variable 1:**
- **Name:** `VITE_SUPABASE_URL`
- **Value:** `https://your-project-id.supabase.co` (replace with your actual URL)
- **Environment:** Production, Preview, Development
- **Click:** Add

**Variable 2:**
- **Name:** `VITE_SUPABASE_ANON_KEY`
- **Value:** `your-anon-key-here` (replace with your actual key)
- **Environment:** Production, Preview, Development
- **Click:** Add

### Step 3: Redeploy Your Site
1. After adding the environment variables, go to **Deployments** tab
2. Click **Redeploy** on your latest deployment
3. Or make a small change to your code and push to GitHub to trigger a new deployment

## 🔧 Set Up Database Tables

### Option 1: Use Supabase Dashboard
1. In your Supabase dashboard, go to **SQL Editor**
2. Run the SQL commands from `README_SUPABASE.md` to create the tables
3. Or run the commands from `analytics-views.sql` for analytics tables

### Option 2: Use Supabase CLI (Advanced)
```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-id

# Run migrations
supabase db push
```

## 🎯 What This Fixes
- ✅ Website loads without black screen on Vercel
- ✅ Contact forms work and save data
- ✅ Newsletter signups work
- ✅ Admin dashboard shows real data
- ✅ Analytics tracking works
- ✅ All features function properly in production

## 📝 Important Notes

### Environment Variable Names
Make sure to use exactly these names in Vercel:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Security
- The `anon` key is safe to use in the browser
- Never add the `service_role` key to Vercel environment variables
- Vercel automatically encrypts your environment variables

### Local Development
For local development, you can still create a `.env` file:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 🆘 Troubleshooting

### Still seeing black screen?
1. Check Vercel deployment logs for errors
2. Verify environment variables are set correctly
3. Make sure you redeployed after adding the variables

### Forms not working?
1. Check Supabase dashboard for database tables
2. Verify Row Level Security policies are set up
3. Check browser console for specific errors

### Need help with Supabase setup?
Check the detailed guide in `README_SUPABASE.md`

## 🚀 After Setup
Once you've added the environment variables to Vercel and set up your database:
1. Your website will load properly
2. All forms will save data to Supabase
3. Admin dashboard will show real submissions
4. Analytics will track visitor data
5. Everything will work in production!

## 📞 Support
If you need help with Vercel or Supabase setup, check:
- [Vercel Environment Variables Docs](https://vercel.com/docs/projects/environment-variables)
- [Supabase Getting Started](https://supabase.com/docs/guides/getting-started)
- Your project's `README_SUPABASE.md` for detailed database setup 