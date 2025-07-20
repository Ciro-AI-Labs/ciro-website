import { supabase } from './supabase';
import { DemoRequestResponse } from '@/types/demo-request';

/**
 * Submit a demo request to Supabase
 */
export async function submitDemoRequest(formData: any): Promise<DemoRequestResponse> {
  try {
    // Prepare data for Supabase
    const demoRequestData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || null,
      company: formData.company,
      job_title: formData.jobTitle,
      industry: formData.industry,
      company_size: formData.companySize,
      use_case: formData.useCase,
      timeline: formData.timeline,
      message: formData.message || null,
      newsletter_subscription: formData.newsletter || false,
      privacy_policy_accepted: formData.privacy || false,
      status: 'pending'
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('demo_requests')
      .insert([demoRequestData])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        error: 'Failed to save demo request',
        details: error.message
      };
    }

    console.log("Demo request saved to Supabase:", data);

    // Handle newsletter subscription if requested
    if (formData.newsletter) {
      await handleNewsletterSubscription(formData.email, formData.firstName, formData.lastName);
    }

    return {
      success: true,
      demoRequestId: data[0].id,
      message: 'Demo request submitted successfully! We will contact you within 24 hours.'
    };

  } catch (error) {
    console.error("Error submitting demo request:", error);
    return {
      success: false,
      error: 'Server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Handle newsletter subscription
 */
async function handleNewsletterSubscription(email: string, firstName: string, lastName: string) {
  try {
    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .eq('email', email)
      .single();

    if (!existing) {
      // Insert new subscription (simplified without metadata for now)
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{
          email,
          status: 'active'
        }]);

      if (error) {
        console.error("Error subscribing to newsletter:", error);
      } else {
        console.log("Newsletter subscription created");
      }
    } else if (existing.status === 'unsubscribed') {
      // Reactivate subscription
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .update({ 
          status: 'active',
          updated_at: new Date().toISOString()
        })
        .eq('email', email);

      if (error) {
        console.error("Error reactivating newsletter subscription:", error);
      } else {
        console.log("Newsletter subscription reactivated");
      }
    }
  } catch (error) {
    console.error("Error handling newsletter subscription:", error);
  }
}

/**
 * Create Calendly scheduling link
 */
export function createCalendlyLink(formData: any): string {
  // Use the correct Calendly URL from the main page implementation
  const params = new URLSearchParams({
    email: formData.email,
    name: `${formData.firstName} ${formData.lastName}`,
    company: formData.company,
    industry: formData.industry,
    use_case: formData.useCase
  });
  
  return `https://calendly.com/meet-ciro?${params.toString()}`;
} 