import { supabase } from './supabase';

function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
  };
}

function getSessionId() {
  let sessionId = localStorage.getItem('ciro_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem('ciro_session_id', sessionId);
  }
  return sessionId;
}

export async function logVisitorEvent({
  event_type,
  page,
  email,
  name,
  form_data,
}: {
  event_type: string;
  page?: string;
  email?: string;
  name?: string;
  form_data?: any;
}) {
  const { utm_source, utm_medium, utm_campaign } = getUTMParams();
  const referrer = document.referrer || undefined;
  const user_agent = navigator.userAgent;
  const session_id = getSessionId();

  await supabase.from('visitors').insert([
    {
      event_type,
      page: page || window.location.pathname,
      referrer,
      user_agent,
      email,
      name,
      form_data: form_data ? JSON.stringify(form_data) : undefined,
      utm_source,
      utm_medium,
      utm_campaign,
      session_id,
      timestamp: new Date().toISOString(),
    },
  ]);
} 