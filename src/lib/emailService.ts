import { supabase, EmailSubmission, NewsletterSubscription } from './supabase'

export class EmailService {
  // Submit a general email (contact form, partnership inquiry, etc.)
  static async submitEmail(submission: Omit<EmailSubmission, 'id' | 'created_at'>) {
    try {
      const { data, error } = await supabase
        .from('email_submissions')
        .insert([submission])
        .select()

      if (error) {
        console.error('Error submitting email:', error)
        throw new Error(error.message)
      }

      return { success: true, data }
    } catch (error) {
      console.error('Email submission failed:', error)
      throw error
    }
  }

  // Subscribe to newsletter
  static async subscribeToNewsletter(email: string) {
    try {
      // Use upsert to handle both new subscriptions and reactivations
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .upsert(
          [{ email, status: 'active' }],
          { 
            onConflict: 'email',
            ignoreDuplicates: false 
          }
        )
        .select()

      if (error) {
        console.error('Error subscribing to newsletter:', error)
        throw new Error(error.message)
      }

      return { success: true, data }
    } catch (error) {
      console.error('Newsletter subscription failed:', error)
      throw error
    }
  }

  // Unsubscribe from newsletter
  static async unsubscribeFromNewsletter(email: string) {
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .update({ status: 'unsubscribed' })
        .eq('email', email)

      if (error) {
        console.error('Error unsubscribing from newsletter:', error)
        throw new Error(error.message)
      }

      return { success: true }
    } catch (error) {
      console.error('Newsletter unsubscription failed:', error)
      throw error
    }
  }

  // Get all email submissions (for admin purposes)
  static async getEmailSubmissions() {
    try {
      const { data, error } = await supabase
        .from('email_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching email submissions:', error)
        throw new Error(error.message)
      }

      return data
    } catch (error) {
      console.error('Failed to fetch email submissions:', error)
      throw error
    }
  }

  // Get newsletter subscribers (for admin purposes)
  static async getNewsletterSubscribers() {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching newsletter subscribers:', error)
        throw new Error(error.message)
      }

      return data
    } catch (error) {
      console.error('Failed to fetch newsletter subscribers:', error)
      throw error
    }
  }
} 