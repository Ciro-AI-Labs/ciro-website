# 🚨 Quick Fix: Supabase Environment Variables

## The Problem
Your website is showing a black screen because the Supabase environment variables are missing. The error message is:
```
Missing Supabase environment variables
```

## ✅ Temporary Fix Applied
I've updated the code to use a mock client when environment variables are missing, so your website should now load properly.

## 🔧 Permanent Fix: Set Up Supabase

### Step 1: Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login and create a new project
3. Wait for the project to be ready (usually 1-2 minutes)

### Step 2: Get Your Credentials
1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** (looks like: `https://your-project-id.supabase.co`)
3. Copy your **anon public** key (starts with `eyJ...`)

### Step 3: Create Environment File
1. In your project root (`ciro-website/`), create a file called `.env`
2. Add these lines (replace with your actual values):

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 4: Set Up Database Tables
1. In your Supabase dashboard, go to **SQL Editor**
2. Run the SQL commands from `README_SUPABASE.md` to create the tables
3. Or run the commands from `analytics-views.sql` for analytics tables

### Step 5: Restart Development Server
```bash
npm run dev
```

## 🎯 What This Fixes
- ✅ Website loads without black screen
- ✅ Contact forms work properly
- ✅ Newsletter signups work
- ✅ Admin dashboard shows data
- ✅ Analytics tracking works

## 📝 Notes
- The mock client allows the website to function without Supabase
- Forms will appear to work but won't save data until Supabase is set up
- You'll see console warnings about missing environment variables
- Once you add the `.env` file, everything will work normally

## 🆘 Need Help?
If you need help setting up Supabase, check the detailed guide in `README_SUPABASE.md` 