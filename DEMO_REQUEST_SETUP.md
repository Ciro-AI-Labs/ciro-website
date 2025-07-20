# Demo Request System Setup Guide

This guide covers the setup for the enhanced demo request system with Supabase integration and Calendly scheduling.

## 🗄️ Supabase Setup

### 1. Database Schema

Run the SQL commands in `supabase-demo-requests.sql` in your Supabase SQL editor:

```sql
-- Execute the entire supabase-demo-requests.sql file
-- This creates the demo_requests table with all necessary fields
```

### 2. Environment Variables

Add these environment variables to your `.env.local` file:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email Configuration
SENDGRID_API_KEY=your_sendgrid_api_key
FORM_RECIPIENT=hola@ciroai.us

# Calendly Integration (Optional)
CALENDLY_API_KEY=your_calendly_api_key
```

### 3. Supabase Row Level Security (RLS)

The SQL script automatically sets up RLS policies:
- Public can insert demo requests
- Users can view/update their own requests
- Service role has full access

## 📧 Email Integration

### SendGrid Setup

1. Create a SendGrid account
2. Generate an API key
3. Verify your sender domain (ciroai.us)
4. Add the API key to environment variables

### Email Templates

The system sends detailed notifications including:
- Demo request ID
- All form fields
- Company and contact information
- Use case and timeline details

## 📅 Calendly Integration

### 1. Calendly Account Setup

1. Create a Calendly account
2. Set up a demo event type (30-60 minutes)
3. Configure event questions to match form fields
4. Get your Calendly API key

### 2. Event Type Configuration

Configure your Calendly event type with these questions:
- Email (pre-filled)
- Company (pre-filled)
- Industry (pre-filled)
- Use Case (pre-filled)
- Additional Requirements

### 3. Webhook Setup (Optional)

For advanced integration, set up Calendly webhooks to automatically update demo request status when events are scheduled/cancelled.

## 🔧 API Endpoints

### Demo Request Submission

**Endpoint:** `POST /api/submit-demo-request`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@company.com",
  "phone": "+1 (555) 123-4567",
  "company": "Example Corp",
  "jobTitle": "Operations Manager",
  "industry": "manufacturing",
  "companySize": "501-1000",
  "useCase": "real-time-monitoring",
  "timeline": "quarter",
  "message": "Interested in real-time monitoring",
  "newsletter": true,
  "privacy": true
}
```

**Response:**
```json
{
  "success": true,
  "demoRequestId": "uuid-here",
  "message": "Demo request submitted successfully"
}
```

## 📊 Analytics

### Demo Request Analytics View

The system creates an analytics view (`demo_requests_analytics`) that provides:
- Daily request counts
- Conversion rates (pending → scheduled → completed)
- Industry breakdown
- Company size distribution
- Use case popularity

### Query Examples

```sql
-- Get daily demo request trends
SELECT * FROM demo_requests_analytics 
WHERE date >= NOW() - INTERVAL '30 days'
ORDER BY date DESC;

-- Get conversion rates by industry
SELECT 
  industry,
  COUNT(*) as total_requests,
  COUNT(CASE WHEN status = 'scheduled' THEN 1 END) as scheduled,
  COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed,
  ROUND(
    COUNT(CASE WHEN status = 'completed' THEN 1 END)::DECIMAL / COUNT(*) * 100, 2
  ) as conversion_rate
FROM demo_requests 
GROUP BY industry
ORDER BY conversion_rate DESC;
```

## 🚀 Deployment

### Vercel Deployment

1. Add environment variables to Vercel dashboard
2. Deploy the API functions
3. Test the form submission

### Environment Variables for Production

```bash
# Production environment variables
SUPABASE_URL=your_production_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
SENDGRID_API_KEY=your_production_sendgrid_key
FORM_RECIPIENT=hola@ciroai.us
CALENDLY_API_KEY=your_production_calendly_key
```

## 🔒 Security Considerations

### Data Protection

- All form data is encrypted in transit
- Supabase provides automatic encryption at rest
- RLS policies ensure data access control
- Privacy policy acceptance is required

### GDPR Compliance

- Privacy policy checkbox is mandatory
- Newsletter subscription is opt-in
- Data retention policies can be configured
- Right to deletion can be implemented

## 🧪 Testing

### Local Testing

1. Start the development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check Supabase dashboard for new records
5. Verify email notifications

### API Testing

```bash
curl -X POST http://localhost:8080/api/submit-demo-request \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "company": "Test Corp",
    "jobTitle": "Manager",
    "industry": "manufacturing",
    "companySize": "501-1000",
    "useCase": "real-time-monitoring",
    "timeline": "quarter",
    "privacy": true
  }'
```

## 📈 Monitoring

### Key Metrics to Track

- Form submission success rate
- Email delivery success rate
- Calendly scheduling conversion rate
- Demo completion rate
- Industry and use case trends

### Error Handling

The system includes comprehensive error handling:
- Form validation errors
- Supabase connection errors
- SendGrid API errors
- Network timeout handling

## 🔄 Future Enhancements

### Planned Features

1. **Advanced Calendly Integration**
   - Automatic status updates
   - Custom event types per industry
   - Follow-up scheduling

2. **CRM Integration**
   - HubSpot/Salesforce sync
   - Lead scoring
   - Automated follow-ups

3. **Analytics Dashboard**
   - Real-time metrics
   - Conversion funnel analysis
   - ROI tracking

4. **Multi-language Support**
   - Spanish form fields
   - Localized email templates
   - Regional Calendly links

## 📞 Support

For technical support or questions about the demo request system:
- Email: hola@ciroai.us
- Documentation: This file
- GitHub Issues: For bug reports and feature requests 