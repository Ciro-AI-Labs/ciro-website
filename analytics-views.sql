-- Create analytics views for the admin dashboard
-- Run this in your Supabase SQL editor

-- Create device analytics view
CREATE OR REPLACE VIEW device_analytics AS
SELECT 
  device_type,
  browser,
  os,
  COUNT(*) as sessions,
  COUNT(DISTINCT session_id) as unique_sessions,
  AVG(time_on_page) as avg_time_on_page,
  AVG(scroll_depth) as avg_scroll_depth
FROM visitors 
WHERE device_type IS NOT NULL
GROUP BY device_type, browser, os
ORDER BY sessions DESC;

-- Create geographic analytics view
CREATE OR REPLACE VIEW geographic_analytics AS
SELECT 
  country,
  city,
  COUNT(*) as sessions,
  COUNT(DISTINCT session_id) as unique_sessions,
  COUNT(DISTINCT CASE WHEN event_type = 'form_submission' THEN session_id END) as conversions
FROM visitors 
WHERE country IS NOT NULL
GROUP BY country, city
ORDER BY sessions DESC;

-- Create visitor analytics view
CREATE OR REPLACE VIEW visitor_analytics AS
SELECT 
  DATE(timestamp) as date,
  event_type,
  page,
  COUNT(*) as event_count,
  COUNT(DISTINCT session_id) as unique_sessions,
  COUNT(DISTINCT email) as unique_users,
  AVG(time_on_page) as avg_time_on_page,
  AVG(scroll_depth) as avg_scroll_depth,
  COUNT(DISTINCT country) as countries_reached
FROM visitors 
GROUP BY DATE(timestamp), event_type, page
ORDER BY date DESC, event_count DESC;

-- Create conversion funnel view
CREATE OR REPLACE VIEW conversion_funnel AS
SELECT 
  DATE(timestamp) as date,
  COUNT(DISTINCT CASE WHEN event_type = 'page_view' THEN session_id END) as page_views,
  COUNT(DISTINCT CASE WHEN event_type = 'form_submission' THEN session_id END) as form_submissions,
  COUNT(DISTINCT CASE WHEN event_type = 'newsletter_signup' THEN session_id END) as newsletter_signups,
  ROUND(
    (COUNT(DISTINCT CASE WHEN event_type = 'form_submission' THEN session_id END)::DECIMAL / 
     NULLIF(COUNT(DISTINCT CASE WHEN event_type = 'page_view' THEN session_id END)::DECIMAL, 0)) * 100, 2
  ) as conversion_rate
FROM visitors 
GROUP BY DATE(timestamp)
ORDER BY date DESC; 