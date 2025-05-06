import { toast } from "sonner";

export type FormData = {
  name: string;
  email: string;
  company: string;
  industry: string;
  message?: string;
};

// Default recipient email if none is provided
const DEFAULT_RECIPIENT = "victor.amaya@ciroai.us";

/**
 * Sends form data to specified recipient email using our serverless API
 * @param formData The form data to send
 * @param recipientEmail Optional recipient email, falls back to environment variable or default
 */
export async function sendFormSubmission(
  formData: FormData, 
  recipientEmail?: string
): Promise<boolean> {
  try {
    // Log form submission data
    console.log("Form submission data:", formData);
    
    // Calculate API URL - use the correct URL for both local development and production
    const apiUrl = '/api/submit-form';
    
    console.log("Sending form data to:", apiUrl);
    
    // Send the form data to our API endpoint
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    // Check if response is OK before trying to parse JSON
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error:", response.status, errorText);
      throw new Error(`API error ${response.status}: ${errorText}`);
    }
    
    // Parse the response
    const result = await response.json();
    
    // Return true to indicate success
    return true;
  } catch (error) {
    console.error("Error sending form submission:", error);
    toast.error("Failed to send form data. Please try again later.");
    return false;
  }
} 