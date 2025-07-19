import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a mock client if environment variables are missing
let supabase: any

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Using mock client.')
  // Create a mock client that doesn't throw errors
  supabase = {
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: null }),
      select: () => Promise.resolve({ data: [], error: null }),
      update: () => Promise.resolve({ data: null, error: null }),
      delete: () => Promise.resolve({ data: null, error: null })
    }),
    channel: () => ({
      on: () => ({ subscribe: () => ({ unsubscribe: () => {} }) })
    })
  }
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }

// Types for our database tables
export interface EmailSubmission {
  id?: string
  email: string
  name?: string
  company?: string
  industry?: string
  message?: string
  type: 'newsletter' | 'contact' | 'partnership' | 'career'
  created_at?: string
}

export interface NewsletterSubscription {
  id?: string
  email: string
  created_at?: string
  status?: 'active' | 'unsubscribed'
} 