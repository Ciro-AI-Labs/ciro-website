import { toast } from "sonner";

export type FormData = {
  name: string;
  email: string;
  company: string;
  industry: string;
  message?: string;
};

/**
 * Client-side only implementation of form submission
 * This version completely bypasses the API and just logs the data
 */
export async function sendFormSubmission(
  formData: FormData
): Promise<boolean> {
  try {
    // Format message for logging and storage
    const formattedData = `
========== NEW DEMO REQUEST ==========
Time: ${new Date().toISOString()}
From: ${formData.name} (${formData.email})
Company: ${formData.company}
Industry: ${formData.industry}
Message: ${formData.message || "No message provided"}
======================================
    `;
    
    // Log the submission to console
    console.log("Form submission:", formattedData);
    
    // Store in localStorage for demo purposes
    const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
    submissions.push({
      timestamp: new Date().toISOString(),
      data: formData
    });
    localStorage.setItem('form_submissions', JSON.stringify(submissions));
    
    // Show success message
    toast.success("Demo request received! We'll contact you shortly.");
    
    // Return true to indicate success
    return true;
  } catch (error) {
    console.error("Error processing form:", error);
    toast.error("Something went wrong. Please try again later.");
    return false;
  }
} 