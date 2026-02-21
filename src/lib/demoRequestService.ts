import { DemoRequestResponse } from '@/types/demo-request';

const DEMO_API_URL = 'https://c2jyevo11a.execute-api.us-west-2.amazonaws.com/demo-request';

/**
 * Submit a demo request via the Lambda API (handles Supabase + email)
 */
export async function submitDemoRequest(formData: any): Promise<DemoRequestResponse> {
  try {
    const res = await fetch(DEMO_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company,
        jobTitle: formData.jobTitle,
        industry: formData.industry,
        companySize: formData.companySize,
        useCase: formData.useCase,
        timeline: formData.timeline,
        message: formData.message || null,
        newsletter: formData.newsletter || false,
        privacy: formData.privacy || false,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      console.error('Demo request API error:', data);
      return {
        success: false,
        error: data.error || 'Failed to submit demo request',
        details: data.details,
      };
    }

    return {
      success: true,
      demoRequestId: data.demoRequestId,
      message: data.message || 'Demo request submitted successfully! We will contact you within 24 hours.',
    };
  } catch (error) {
    console.error('Error submitting demo request:', error);
    return {
      success: false,
      error: 'Network error',
      details: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Create Calendly scheduling link
 */
export function createCalendlyLink(formData: any): string {
  const params = new URLSearchParams({
    email: formData.email,
    name: `${formData.firstName} ${formData.lastName}`,
    company: formData.company,
    industry: formData.industry,
    use_case: formData.useCase,
  });

  return `https://calendly.com/meet-ciro?${params.toString()}`;
}
