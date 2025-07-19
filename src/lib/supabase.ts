import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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