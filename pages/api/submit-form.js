// SendGrid API key - should be in environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || ""; 
const DEFAULT_RECIPIENT = "victor.amaya@ciroai.us";

/**
 * Serverless API function to handle form submissions
 */
export default async function handler(req, res) {
  // CORS headers to allow client-side requests
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    console.log("Received form data:", formData);
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.company || !formData.industry) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get recipient email (from environment variable if available)
    const recipient = process.env.FORM_RECIPIENT || DEFAULT_RECIPIENT;
    
    // Format message content
    const messageContent = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Industry: ${formData.industry}
Message: ${formData.message || "No message provided"}
    `;
    
    // Construct SendGrid email payload
    const email = {
      personalizations: [
        {
          to: [{ email: recipient }],
          subject: `New Demo Request from ${formData.name} at ${formData.company}`
        }
      ],
      from: { email: "noreply@cirolabs.com", name: "Ciro Labs Demo Requests" },
      reply_to: { email: formData.email, name: formData.name },
      content: [
        {
          type: "text/plain",
          value: messageContent
        }
      ]
    };
    
    // Check if we have a SendGrid API key
    if (!SENDGRID_API_KEY) {
      console.log("No SendGrid API key found. Would have sent email:", email);
      // For development/debugging: just log and return success
      return res.status(200).json({ 
        success: true,
        message: "Email would have been sent (development mode)" 
      });
    }
    
    // Send email using SendGrid API
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SENDGRID_API_KEY}`
      },
      body: JSON.stringify(email)
    });
    
    // SendGrid returns 202 Accepted when successful
    if (response.status !== 202) {
      const errorText = await response.text();
      console.error("SendGrid API error:", response.status, errorText);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    
    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending form submission:", error);
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
} 