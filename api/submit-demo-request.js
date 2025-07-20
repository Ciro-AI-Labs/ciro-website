import { createClient } from '@supabase/supabase-js'

// Environment variables
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const CALENDLY_API_KEY = process.env.CALENDLY_API_KEY
const DEFAULT_RECIPIENT = "hola@ciroai.us"

// Initialize Supabase client with service role key for admin operations
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

/**
 * Enhanced API function to handle demo request form submissions
 * Integrates with Supabase, SendGrid, and Calendly
 */
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const formData = req.body
    console.log("Received demo request:", formData)
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'company', 'jobTitle', 'industry', 'companySize', 'useCase', 'timeline', 'privacy']
    const missingFields = requiredFields.filter(field => !formData[field])
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: 'Missing required fields', 
        missingFields 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

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
    }

    // Insert into Supabase
    const { data: supabaseData, error: supabaseError } = await supabase
      .from('demo_requests')
      .insert([demoRequestData])
      .select()

    if (supabaseError) {
      console.error("Supabase error:", supabaseError)
      return res.status(500).json({ 
        error: 'Failed to save demo request',
        details: supabaseError.message 
      })
    }

    console.log("Demo request saved to Supabase:", supabaseData)

    // Send email notification
    await sendEmailNotification(formData, supabaseData[0].id)

    // Handle newsletter subscription if requested
    if (formData.newsletter) {
      await handleNewsletterSubscription(formData.email, formData.firstName, formData.lastName)
    }

    // Return success response with demo request ID
    return res.status(200).json({ 
      success: true,
      demoRequestId: supabaseData[0].id,
      message: 'Demo request submitted successfully. We will contact you within 24 hours.'
    })

  } catch (error) {
    console.error("Error processing demo request:", error)
    return res.status(500).json({ 
      error: 'Server error', 
      details: error.message 
    })
  }
}

/**
 * Send email notification using SendGrid
 */
async function sendEmailNotification(formData, demoRequestId) {
  if (!SENDGRID_API_KEY) {
    console.log("No SendGrid API key found. Skipping email notification.")
    return
  }

  try {
    const recipient = process.env.FORM_RECIPIENT || DEFAULT_RECIPIENT
    
    // Format message content
    const messageContent = `
New Demo Request Received

Demo Request ID: ${demoRequestId}

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}

Company Information:
- Company: ${formData.company}
- Job Title: ${formData.jobTitle}
- Industry: ${formData.industry}
- Company Size: ${formData.companySize}

Use Case & Timeline:
- Primary Use Case: ${formData.useCase}
- Implementation Timeline: ${formData.timeline}
- Additional Details: ${formData.message || 'None provided'}

Preferences:
- Newsletter Subscription: ${formData.newsletter ? 'Yes' : 'No'}
- Privacy Policy Accepted: ${formData.privacy ? 'Yes' : 'No'}

Submitted at: ${new Date().toISOString()}
    `
    
    const email = {
      personalizations: [
        {
          to: [{ email: recipient }],
          subject: `New Demo Request: ${formData.firstName} ${formData.lastName} from ${formData.company}`
        }
      ],
      from: { email: "noreply@ciroai.us", name: "Ciro AI Demo Requests" },
      reply_to: { email: formData.email, name: `${formData.firstName} ${formData.lastName}` },
      content: [
        {
          type: "text/plain",
          value: messageContent
        }
      ]
    }
    
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SENDGRID_API_KEY}`
      },
      body: JSON.stringify(email)
    })
    
    if (response.status !== 202) {
      const errorText = await response.text()
      console.error("SendGrid API error:", response.status, errorText)
    } else {
      console.log("Email notification sent successfully")
    }
  } catch (error) {
    console.error("Error sending email notification:", error)
  }
}

/**
 * Handle newsletter subscription
 */
async function handleNewsletterSubscription(email, firstName, lastName) {
  try {
    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .eq('email', email)
      .single()

    if (!existing) {
      // Insert new subscription
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{
          email,
          status: 'active',
          metadata: {
            first_name: firstName,
            last_name: lastName,
            source: 'demo_request_form'
          }
        }])

      if (error) {
        console.error("Error subscribing to newsletter:", error)
      } else {
        console.log("Newsletter subscription created")
      }
    } else if (existing.status === 'unsubscribed') {
      // Reactivate subscription
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .update({ 
          status: 'active',
          updated_at: new Date().toISOString()
        })
        .eq('email', email)

      if (error) {
        console.error("Error reactivating newsletter subscription:", error)
      } else {
        console.log("Newsletter subscription reactivated")
      }
    }
  } catch (error) {
    console.error("Error handling newsletter subscription:", error)
  }
}

/**
 * Create Calendly scheduling link (for future integration)
 */
async function createCalendlyLink(demoRequestId, formData) {
  if (!CALENDLY_API_KEY) {
    console.log("No Calendly API key found. Skipping Calendly integration.")
    return null
  }

  try {
    // This would integrate with Calendly API to create a scheduling link
    // For now, return a placeholder
    return `https://calendly.com/ciro-ai/demo?email=${encodeURIComponent(formData.email)}&name=${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}&company=${encodeURIComponent(formData.company)}`
  } catch (error) {
    console.error("Error creating Calendly link:", error)
    return null
  }
} 