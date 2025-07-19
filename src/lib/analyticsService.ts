import { supabase } from './supabase';

export interface VisitorEvent {
  id: string;
  event_type: string;
  page: string;
  referrer: string;
  user_agent: string;
  email: string;
  name: string;
  form_data: any;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  session_id: string;
  timestamp: string;
  ip_address: string;
  country: string;
  city: string;
  timezone: string;
  screen_resolution: string;
  language: string;
  device_type: string;
  browser: string;
  os: string;
  page_load_time: number;
  time_on_page: number;
  scroll_depth: number;
  clicks_count: number;
  conversion_value: number;
  conversion_currency: string;
  experiment_id: string;
  variant_id: string;
  custom_dimension_1: string;
  custom_dimension_2: string;
  custom_dimension_3: string;
  created_at: string;
  updated_at: string;
}

export interface AnalyticsSummary {
  totalEvents: number;
  uniqueSessions: number;
  uniqueUsers: number;
  pageViews: number;
  formSubmissions: number;
  newsletterSignups: number;
  conversionRate: number;
  avgTimeOnPage: number;
  avgScrollDepth: number;
}

export interface DeviceAnalytics {
  device_type: string;
  browser: string;
  os: string;
  sessions: number;
  unique_sessions: number;
  avg_time_on_page: number;
  avg_scroll_depth: number;
}

export interface GeographicAnalytics {
  country: string;
  city: string;
  sessions: number;
  unique_sessions: number;
  conversions: number;
}

export interface ConversionFunnel {
  date: string;
  page_views: number;
  form_submissions: number;
  newsletter_signups: number;
  conversion_rate: number;
}

export interface VisitorAnalytics {
  date: string;
  event_type: string;
  page: string;
  event_count: number;
  unique_sessions: number;
  unique_users: number;
  avg_time_on_page: number;
  avg_scroll_depth: number;
  countries_reached: number;
}

export class AnalyticsService {
  // Get all visitor events
  static async getVisitorEvents(limit = 1000): Promise<VisitorEvent[]> {
    const { data, error } = await supabase
      .from('visitors')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching visitor events:', error);
      return [];
    }

    return data || [];
  }

  // Get analytics summary
  static async getAnalyticsSummary(): Promise<AnalyticsSummary> {
    const { data, error } = await supabase
      .from('visitor_analytics')
      .select('*')
      .limit(1);

    if (error || !data || data.length === 0) {
      return {
        totalEvents: 0,
        uniqueSessions: 0,
        uniqueUsers: 0,
        pageViews: 0,
        formSubmissions: 0,
        newsletterSignups: 0,
        conversionRate: 0,
        avgTimeOnPage: 0,
        avgScrollDepth: 0,
      };
    }

    const events = await this.getVisitorEvents();
    const pageViews = events.filter(e => e.event_type === 'page_view').length;
    const formSubmissions = events.filter(e => e.event_type === 'form_submission').length;
    const newsletterSignups = events.filter(e => e.event_type === 'newsletter_signup').length;
    const uniqueSessions = new Set(events.map(e => e.session_id)).size;
    const uniqueUsers = new Set(events.filter(e => e.email).map(e => e.email)).size;

    return {
      totalEvents: events.length,
      uniqueSessions,
      uniqueUsers,
      pageViews,
      formSubmissions,
      newsletterSignups,
      conversionRate: pageViews > 0 ? (formSubmissions / pageViews) * 100 : 0,
      avgTimeOnPage: events.reduce((sum, e) => sum + (e.time_on_page || 0), 0) / events.length || 0,
      avgScrollDepth: events.reduce((sum, e) => sum + (e.scroll_depth || 0), 0) / events.length || 0,
    };
  }

  // Get device analytics
  static async getDeviceAnalytics(): Promise<DeviceAnalytics[]> {
    try {
      const { data, error } = await supabase
        .from('device_analytics')
        .select('*')
        .order('sessions', { ascending: false });

      if (error) {
        console.error('Error fetching device analytics:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Device analytics view not found, returning empty array');
      return [];
    }
  }

  // Get geographic analytics
  static async getGeographicAnalytics(): Promise<GeographicAnalytics[]> {
    try {
      const { data, error } = await supabase
        .from('geographic_analytics')
        .select('*')
        .order('sessions', { ascending: false })
        .limit(20);

      if (error) {
        console.error('Error fetching geographic analytics:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Geographic analytics view not found, returning empty array');
      return [];
    }
  }

  // Get conversion funnel
  static async getConversionFunnel(days = 30): Promise<ConversionFunnel[]> {
    try {
      const { data, error } = await supabase
        .from('conversion_funnel')
        .select('*')
        .gte('date', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching conversion funnel:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Conversion funnel view not found, returning empty array');
      return [];
    }
  }

  // Get visitor analytics by date
  static async getVisitorAnalytics(days = 30): Promise<VisitorAnalytics[]> {
    try {
      const { data, error } = await supabase
        .from('visitor_analytics')
        .select('*')
        .gte('date', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching visitor analytics:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Visitor analytics view not found, returning empty array');
      return [];
    }
  }

  // Get top pages
  static async getTopPages(limit = 10): Promise<{ page: string; views: number }[]> {
    const { data, error } = await supabase
      .from('visitors')
      .select('page')
      .eq('event_type', 'page_view');

    if (error) {
      console.error('Error fetching top pages:', error);
      return [];
    }

    const pageCounts = data?.reduce((acc, event) => {
      acc[event.page] = (acc[event.page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>) || {};

    return Object.entries(pageCounts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  }

  // Get UTM campaign performance
  static async getUTMCampaignPerformance(): Promise<{ campaign: string; sessions: number; conversions: number }[]> {
    const { data, error } = await supabase
      .from('visitors')
      .select('utm_campaign, event_type, session_id')
      .not('utm_campaign', 'is', null);

    if (error) {
      console.error('Error fetching UTM campaign performance:', error);
      return [];
    }

    const campaignStats = data?.reduce((acc, event) => {
      if (!event.utm_campaign) return acc;
      
      if (!acc[event.utm_campaign]) {
        acc[event.utm_campaign] = { sessions: new Set(), conversions: 0 };
      }
      
      acc[event.utm_campaign].sessions.add(event.session_id);
      
      if (event.event_type === 'form_submission' || event.event_type === 'newsletter_signup') {
        acc[event.utm_campaign].conversions++;
      }
      
      return acc;
    }, {} as Record<string, { sessions: Set<string>; conversions: number }>) || {};

    return Object.entries(campaignStats)
      .map(([campaign, stats]) => ({
        campaign,
        sessions: stats.sessions.size,
        conversions: stats.conversions,
      }))
      .sort((a, b) => b.sessions - a.sessions);
  }

  // Export analytics data
  static async exportAnalyticsData(): Promise<{ visitors: VisitorEvent[]; summary: AnalyticsSummary }> {
    const [visitors, summary] = await Promise.all([
      this.getVisitorEvents(10000),
      this.getAnalyticsSummary(),
    ]);

    return { visitors, summary };
  }
} 