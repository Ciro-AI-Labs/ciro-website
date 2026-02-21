import { logVisitorEvent } from './analytics';

export const GA_TRACKING_ID = 'G-G1Q76DWBDC';

/**
 * Send an event to both GA4 and Supabase analytics.
 */
export function trackEvent(action: string, params?: Record<string, any>) {
  // GA4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  }

  // Supabase (fire-and-forget)
  logVisitorEvent({
    event_type: action,
    page: window.location.pathname,
    form_data: params,
  });
}
