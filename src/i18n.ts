import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Most basic i18n setup possible - no language detection, only English
i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Force English only
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          "menu": {
            "home": "Home",
            "products": "Products",
            "useCases": "Use Cases",
            "about": "About",
            "newDesign": "New Design",
            "bookDemo": "Book a Demo",
            "language": "Language"
          },
          "hero": {
            "title": "Where Industrial Data Becomes Real-Time Action",
            "subtitle": "Ciro Labs unifies your plant's data and vision streams into a single AI command center—predict, automate, and optimize operations in milliseconds."
          },
          "about": {
            "title": "About Ciro Labs",
            "subtitle": "We're building the AI Engine for Industry 4.0",
            "mission": "Our Mission",
            "missionText": "Ciro Labs builds intelligent platforms that turn fragmented streams of industrial data into automated decisions, helping manufacturers and logistics operators achieve real-time operational excellence."
          },
          "contact": {
            "title": "Get in Touch",
            "subtitle": "Schedule a demo or reach out with any questions about Ciro Labs.",
            "cta": "Ready to See Ciro in Action?",
            "ctaText": "Experience the power of real-time industrial AI in your operations. Schedule a personalized demo with our team."
          },
          "products": {
            "title": "Our Products",
            "subtitle": "Powerful AI solutions for industrial intelligence",
            "capabilitiesTitle": "Capabilities",
            "aiAnalytics": "AI Analytics Engine",
            "aiAnalyticsDesc": "Connect your data systems for real-time visibility, insights, and automated workflows",
            "nlAnalytics": "Natural-Language Analytics",
            "nlAnalyticsDesc": "Ask questions (or speak them) and CIRO instantly scans billions of rows, returning answers, KPIs, or SQL you can tweak.",
            "aiAgents": "Autonomous AI Agents",
            "aiAgentsDesc": "Continuous anomaly detection, predictive models, and maintenance triggers that fire workflows in Slack, Teams, or WhatsApp—before issues escalate.",
            "aiAgentsActive": "AI Agents Active",
            "workflowAutomation": "Workflow Automation",
            "rtDashboards": "Real-Time Dashboards",
            "rtDashboardsDesc": "Drag charts into live, multi-tab boards; connect Power BI or Looker; and watch every metric update the moment your data changes.",
            "capabilities": {
              "visualizations": {
                "title": "Advanced Visualizations",
                "description": "Generate bar, heat-map, or geospatial charts from a single prompt—then polish them in CIRO Studio à la Canva."
              },
              "templates": {
                "title": "Template Gallery",
                "description": "Kick-start storytelling with pre-built KPI boards and industry templates you can inject with your own data in seconds."
              },
              "alerts": {
                "title": "Omnichannel Alerts",
                "description": "Insight triggers push to email, SMS, Slack, Teams, webhooks—anywhere your team lives—so nothing slips through the cracks."
              },
              "dataScience": {
                "title": "Data Science & Forecasts",
                "description": "Run cleaning, feature engineering, and time-series forecasts without writing Python; export models or schedule automated reports."
              }
            }
          },
          "dataHub": {
            "iot": "IoT",
            "cloud": "Cloud",
            "supply": "Supply",
            "agri": "Agri",
            "food": "Food", 
            "vision": "Vision",
            "db": "DB",
            "docs": "Docs"
          },
          "communication": {
            "title": "Ask Ciro",
            "subtitle": "Get real-time insights with natural language",
            "inputPlaceholder": "Ask a question about your data...",
            "askButton": "Ask",
            "questions": {
              "downtimes": "Show me production line downtimes by cause this month"
            },
            "answers": {
              "downtimes": "SELECT cause, SUM(duration) FROM downtimes WHERE date >= '2023-10-01' GROUP BY cause ORDER BY SUM(duration) DESC"
            },
            "chart": {
              "prodLineDowntimes": "Production Line Downtimes",
              "october": "October 2023",
              "equipment": "Equipment",
              "material": "Material",
              "staff": "Staff",
              "other": "Other"
            }
          },
          "dashboard": {
            "businessOverview": "Business Overview",
            "supplyChain": "Supply Chain",
            "financialKPIs": "Financial KPIs",
            "marketing": "Marketing",
            "live": "Live",
            "revenue": "Revenue",
            "newUsers": "New Users",
            "avgSession": "Avg. Session",
            "bounceRate": "Bounce Rate",
            "revenueTrend": "Revenue Trend",
            "salesByCategory": "Sales by Category",
            "hardware": "Hardware",
            "software": "Software",
            "services": "Services",
            "other": "Other",
            "trafficSources": "Traffic Sources",
            "organic": "Organic",
            "direct": "Direct",
            "referral": "Referral",
            "social": "Social",
            "recentActivity": "Recent Activity",
            "viewAll": "View all",
            "activities": {
              "createdDashboard": "created a new dashboard",
              "updatedForecast": "updated sales forecast",
              "triggeredAlert": "triggered alert: Server CPU > 90%",
              "sharedReport": "shared report with Finance team"
            },
            "timeAgo": {
              "minutes": "min ago",
              "hours": "hour ago"
            }
          },
          "howItWorks": {
            "title": "How Ciro Delivers Real-Time Intelligence",
            "subtitle": "From data ingestion to automated action, see how our platform functions under the hood.",
            "dataIntegration": "Data Integration",
            "aiProcessing": "AI Processing",
            "insightsEngine": "Insights Engine",
            "automatedAction": "Automated Action"
          },
          "footer": {
            "products": "Products",
            "resources": "Resources", 
            "company": "Company",
            "copyright": "© 2024 Ciro Labs, Inc. All rights reserved."
          }
        }
      }
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n; 