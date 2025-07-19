import { supabase } from './supabase';
import { CookieManager } from './cookieManager';

// Helper functions for enhanced analytics
function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
  };
}

function getDeviceInfo() {
  const userAgent = navigator.userAgent;
  const screenRes = `${screen.width}x${screen.height}`;
  const language = navigator.language;
  
  // Simple device detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(userAgent);
  
  let deviceType = 'desktop';
  if (isTablet) deviceType = 'tablet';
  else if (isMobile) deviceType = 'mobile';
  
  // Browser detection
  let browser = 'unknown';
  if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Safari')) browser = 'Safari';
  else if (userAgent.includes('Edge')) browser = 'Edge';
  
  // OS detection
  let os = 'unknown';
  if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac')) os = 'macOS';
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('Android')) os = 'Android';
  else if (userAgent.includes('iOS')) os = 'iOS';
  
  return {
    screen_resolution: screenRes,
    language,
    device_type: deviceType,
    browser,
    os,
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
  time_on_page,
  scroll_depth,
  clicks_count,
  conversion_value,
}: {
  event_type: string;
  page?: string;
  email?: string;
  name?: string;
  form_data?: any;
  time_on_page?: number;
  scroll_depth?: number;
  clicks_count?: number;
  conversion_value?: number;
}) {
  // Check if analytics cookies are consented to
  const consent = CookieManager.getConsent();
  if (!consent || !consent.analytics) {
    console.log('Analytics logging skipped - no consent for analytics cookies');
    return;
  }

  try {
    const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = getUTMParams();
    const referrer = document.referrer || undefined;
    const user_agent = navigator.userAgent;
    const session_id = getSessionId();
    const deviceInfo = getDeviceInfo();

    const { error } = await supabase.from('visitors').insert([
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
        utm_term,
        utm_content,
        session_id,
        timestamp: new Date().toISOString(),
        ...deviceInfo,
        time_on_page,
        scroll_depth,
        clicks_count,
        conversion_value,
        conversion_currency: conversion_value ? 'USD' : undefined,
      },
    ]);

    if (error) {
      console.error('Analytics logging error:', error);
    }
  } catch (error) {
    console.error('Failed to log analytics event:', error);
  }
} 