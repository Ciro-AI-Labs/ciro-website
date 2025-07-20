// TypeScript interfaces for demo request functionality

export interface DemoRequest {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  company: string
  job_title: string
  industry: string
  company_size: string
  use_case: string
  timeline: string
  message?: string
  newsletter_subscription: boolean
  privacy_policy_accepted: boolean
  calendly_event_id?: string
  calendly_event_url?: string
  scheduled_demo_time?: string
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled' | 'no_show'
  assigned_to?: string
  notes?: string
  created_at?: string
  updated_at?: string
}

export interface DemoRequestFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company: string
  jobTitle: string
  industry: string
  companySize: string
  useCase: string
  timeline: string
  message?: string
  newsletter: boolean
  privacy: boolean
}

export interface DemoRequestResponse {
  success: boolean
  demoRequestId?: string
  message?: string
  error?: string
  missingFields?: string[]
  details?: string
}

export interface Industry {
  value: string
  label: string
}

export interface CompanySize {
  value: string
  label: string
}

export interface UseCase {
  value: string
  label: string
}

export interface Timeline {
  value: string
  label: string
}

// Analytics types
export interface DemoRequestAnalytics {
  date: string
  total_requests: number
  scheduled_demos: number
  completed_demos: number
  cancelled_demos: number
  newsletter_signups: number
  industry: string
  company_size: string
  use_case: string
}

// Calendly integration types
export interface CalendlyEvent {
  uri: string
  start_time: string
  end_time: string
  event_type: {
    name: string
    uri: string
  }
  invitee: {
    name: string
    email: string
    questions_and_answers: Array<{
      question: string
      answer: string
    }>
  }
}

export interface CalendlyWebhookPayload {
  event: CalendlyEvent
  time: string
} 