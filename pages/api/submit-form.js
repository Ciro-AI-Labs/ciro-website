// Default recipient email for notifications
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
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.company || !formData.industry) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log the submission (this will appear in Vercel logs)
    console.log(`
========== NEW DEMO REQUEST ==========
Time: ${new Date().toISOString()}
From: ${formData.name} (${formData.email})
Company: ${formData.company}
Industry: ${formData.industry}
Message: ${formData.message || "No message provided"}
======================================
    `);
    
    // Return success response
    return res.status(200).json({ 
      success: true,
      message: "Your demo request has been recorded. We'll contact you soon!",
      data: {
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        company: formData.company,
        industry: formData.industry,
        hasMessage: !!formData.message
      }
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
} 