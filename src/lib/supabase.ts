import { createClient } from '@supabase/supabase-js'

// Handle both development (VITE_) and production (non-prefixed) environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY

// Mock data for demo purposes when queries fail
const mockData = {
  email_submissions: [
    { id: '1', email: 'demo@example.com', name: 'Demo User', company: 'Demo Corp', type: 'contact', created_at: new Date().toISOString() }
  ],
  newsletter_subscriptions: [
    { id: '1', email: 'demo@example.com', status: 'active', created_at: new Date().toISOString() }
  ],
  visitors: [
    { id: '1', page: '/', event_type: 'page_view', timestamp: new Date().toISOString() }
  ],
  conversion_funnel: [
    { id: '1', date: new Date().toISOString().split('T')[0], page_views: 100, conversions: 5 }
  ],
  device_analytics: [
    { id: '1', device_type: 'Desktop', browser: 'Chrome', os: 'Windows', sessions: 50, avg_time_on_page: 120, avg_scroll_depth: 75 }
  ],
  geographic_analytics: [
    { id: '1', country: 'United States', city: 'New York', sessions: 25, conversions: 2 }
  ],
  visitor_analytics: [
    { id: '1', total_visitors: 100, unique_visitors: 75, page_views: 200, avg_session_duration: 180 }
  ]
}

// Create a simple mock client for fallback
const createMockClient = () => {
  const mockResult = { data: null, error: null };
  // Chainable promise: acts as both a thenable and an object with query methods
  const chainable = (): any => {
    const promise = Promise.resolve(mockResult);
    const chain: any = {
      select: () => chainable(),
      eq: () => chainable(),
      gte: () => chainable(),
      order: () => chainable(),
      limit: () => chainable(),
      single: () => promise,
      not: () => chainable(),
      is: () => chainable(),
      then: promise.then.bind(promise),
      catch: promise.catch.bind(promise),
    };
    return chain;
  };

  return {
    from: (table: string) => {
      const tableData = mockData[table as keyof typeof mockData] || [];
      const selectResult = Promise.resolve({ data: tableData, error: null });
      const selectChainable = (): any => {
        const chain: any = {
          eq: () => selectChainable(),
          gte: () => selectChainable(),
          order: () => selectChainable(),
          limit: () => selectChainable(),
          single: () => selectResult,
          not: () => selectChainable(),
          is: () => selectChainable(),
          then: selectResult.then.bind(selectResult),
          catch: selectResult.catch.bind(selectResult),
        };
        return chain;
      };

      return {
        insert: () => chainable(),
        upsert: () => chainable(),
        update: () => chainable(),
        delete: () => chainable(),
        select: () => selectChainable(),
      };
    },
    channel: () => ({
      on: () => ({ subscribe: () => ({ unsubscribe: () => {} }) })
    })
  };
}

// Create the Supabase client
let supabase: any

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Using mock client.')
  supabase = createMockClient()
} else {
  console.log('Supabase environment variables found. Creating real client.')
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