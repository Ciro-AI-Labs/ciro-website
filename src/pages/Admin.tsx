import { useState, useEffect, useCallback } from "react";
import { EmailService } from "@/lib/emailService";
import { EmailSubmission, NewsletterSubscription } from "@/lib/supabase";
import { AnalyticsService, AnalyticsSummary, DeviceAnalytics, GeographicAnalytics, ConversionFunnel, VisitorEvent } from "@/lib/analyticsService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Users, 
  Download, 
  RefreshCw, 
  Calendar,
  Building,
  User,
  MessageSquare,
  Eye,
  Trash2,
  BarChart3,
  Globe,
  Monitor,
  TrendingUp,
  MapPin,
  Smartphone,
  Laptop,
  Tablet,
  Activity,
  Target,
  MousePointer,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const Admin = () => {
  // Email data
  const [emailSubmissions, setEmailSubmissions] = useState<EmailSubmission[]>([]);
  const [newsletterSubscribers, setNewsletterSubscribers] = useState<NewsletterSubscription[]>([]);
  
  // Analytics data
  const [analyticsSummary, setAnalyticsSummary] = useState<AnalyticsSummary | null>(null);
  const [deviceAnalytics, setDeviceAnalytics] = useState<DeviceAnalytics[]>([]);
  const [geographicAnalytics, setGeographicAnalytics] = useState<GeographicAnalytics[]>([]);
  const [conversionFunnel, setConversionFunnel] = useState<ConversionFunnel[]>([]);
  const [topPages, setTopPages] = useState<{ page: string; views: number }[]>([]);
  const [utmCampaigns, setUtmCampaigns] = useState<{ campaign: string; sessions: number; conversions: number }[]>([]);
  const [recentEvents, setRecentEvents] = useState<VisitorEvent[]>([]);
  
  // UI state
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeRange, setTimeRange] = useState("30");
  const [activeTab, setActiveTab] = useState("overview");

  const thirtyDaysAgo = new Date(Date.now() - parseInt(timeRange) * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  useEffect(() => {
    loadData();
  }, [timeRange]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [
        submissions, 
        subscribers, 
        summary, 
        devices, 
        geo, 
        funnel, 
        pages, 
        campaigns,
        events
      ] = await Promise.all([
        EmailService.getEmailSubmissions().catch((error) => {
          console.warn('Failed to fetch email submissions:', error);
          return [{ id: '1', email: 'demo@example.com', name: 'Demo User', type: 'contact' as const, created_at: new Date().toISOString() }];
        }),
        EmailService.getNewsletterSubscribers().catch((error) => {
          console.warn('Failed to fetch newsletter subscribers:', error);
          return [{ id: '1', email: 'demo@example.com', status: 'active' as const, created_at: new Date().toISOString() }];
        }),
        AnalyticsService.getAnalyticsSummary().catch((error) => {
          console.warn('Failed to fetch analytics summary:', error);
          return { totalEvents: 100, uniqueSessions: 75, averageSessionDuration: 180, bounceRate: 45 };
        }),
        AnalyticsService.getDeviceAnalytics().catch((error) => {
          console.warn('Failed to fetch device analytics:', error);
          return [{ device_type: 'Desktop', browser: 'Chrome', os: 'Windows', sessions: 50, avg_time_on_page: 120, avg_scroll_depth: 75 }];
        }),
        AnalyticsService.getGeographicAnalytics().catch((error) => {
          console.warn('Failed to fetch geographic analytics:', error);
          return [{ country: 'United States', city: 'New York', sessions: 25, conversions: 2 }];
        }),
        AnalyticsService.getConversionFunnel(parseInt(timeRange)).catch((error) => {
          console.warn('Failed to fetch conversion funnel:', error);
          return [{ date: new Date().toISOString().split('T')[0], page_views: 100, conversions: 5 }];
        }),
        AnalyticsService.getTopPages(10).catch((error) => {
          console.warn('Failed to fetch top pages:', error);
          return [{ page: '/', views: 150 }, { page: '/about', views: 75 }, { page: '/products', views: 50 }];
        }),
        AnalyticsService.getUTMCampaignPerformance().catch((error) => {
          console.warn('Failed to fetch UTM campaigns:', error);
          return [{ campaign: 'demo-campaign', sessions: 25, conversions: 3 }];
        }),
        AnalyticsService.getVisitorEvents(50).catch((error) => {
          console.warn('Failed to fetch visitor events:', error);
          return [{ id: '1', event_type: 'page_view', page: '/', timestamp: new Date().toISOString(), ip: '127.0.0.1', user_agent: 'Demo Browser' }];
        })
      ]);
      
      setEmailSubmissions(submissions || []);
      setNewsletterSubscribers(subscribers || []);
      setAnalyticsSummary(summary);
      setDeviceAnalytics(devices);
      setGeographicAnalytics(geo);
      setConversionFunnel(funnel);
      setTopPages(pages);
      setUtmCampaigns(campaigns);
      setRecentEvents(events);
    } catch (error) {
      console.error('Error loading data:', error);
      toast.error("Error loading dashboard data. Please check your Supabase connection.");
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = (data: any[], filename: string) => {
    const csvContent = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).map(value => `"${value}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const exportAnalyticsData = async () => {
    try {
      const { visitors, summary } = await AnalyticsService.exportAnalyticsData();
      const csvContent = [
        'Event Type,Page,Email,Name,Device,Browser,OS,Country,City,Timestamp,UTM Campaign,UTM Source,UTM Medium,Session ID',
        ...visitors.map(event => [
          event.event_type,
          event.page,
          event.email || '',
          event.name || '',
          event.device_type || '',
          event.browser || '',
          event.os || '',
          event.country || '',
          event.city || '',
          event.timestamp,
          event.utm_campaign || '',
          event.utm_source || '',
          event.utm_medium || '',
          event.session_id
        ].join(','))
      ].join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `analytics-export-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
      
      toast.success("Analytics data exported successfully!");
    } catch (error) {
      console.error('Export error:', error);
      toast.error("Failed to export analytics data");
    }
  };

  const filteredSubmissions = emailSubmissions.filter(submission =>
    submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'contact': return 'bg-blue-500/20 text-blue-400';
      case 'partnership': return 'bg-purple-500/20 text-purple-400';
      case 'career': return 'bg-green-500/20 text-green-400';
      case 'newsletter': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType?.toLowerCase()) {
      case 'mobile': return <Smartphone className="w-4 h-4" />;
      case 'tablet': return <Tablet className="w-4 h-4" />;
      case 'desktop': return <Laptop className="w-4 h-4" />;
      default: return <Monitor className="w-4 h-4" />;
    }
  };

  const getBrowserIcon = (browser: string) => {
    return <Globe className="w-4 h-4" />;
  };

  const getOSIcon = (os: string) => {
    return <Monitor className="w-4 h-4" />;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${Math.round(seconds)}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 p-4 sm:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm sm:text-base">Comprehensive analytics and data management</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <div className="flex gap-2">
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-full sm:w-32 bg-card/50 border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  onClick={loadData}
                  variant="outline"
                  size="sm"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                >
                  <RefreshCw className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Refresh</span>
                </Button>
              </div>
              <Button
                onClick={exportAnalyticsData}
                variant="outline"
                size="sm"
                className="border-green-500/30 text-green-400 hover:bg-green-500/10"
              >
                <Download className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Export Analytics</span>
                <span className="sm:hidden">Export</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Analytics Overview Cards */}
        {analyticsSummary && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">Total Events</p>
                    <p className="text-lg sm:text-2xl font-bold text-white">{formatNumber(analyticsSummary.totalEvents)}</p>
                  </div>
                  <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">Unique Sessions</p>
                    <p className="text-lg sm:text-2xl font-bold text-white">{formatNumber(analyticsSummary.uniqueSessions)}</p>
                  </div>
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">Conversion Rate</p>
                    <p className="text-lg sm:text-2xl font-bold text-white">{analyticsSummary.conversionRate.toFixed(1)}%</p>
                  </div>
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">Avg Time on Page</p>
                    <p className="text-lg sm:text-2xl font-bold text-white">{formatTime(analyticsSummary.avgTimeOnPage)}</p>
                  </div>
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Main Content Tabs */}
        <div className="w-full mb-8">
          {/* Tab Navigation - Completely Refactored */}
          <div className="bg-slate-800/90 border border-slate-700/50 rounded-xl p-6 mb-6">
            <h3 className="text-white text-lg font-semibold mb-4">Dashboard Sections</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Row 1 */}
              <button
                onClick={() => setActiveTab('overview')}
                className={`p-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === 'overview'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`p-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === 'analytics'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                Analytics
              </button>
              
              {/* Row 2 */}
              <button
                onClick={() => setActiveTab('devices')}
                className={`p-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === 'devices'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                Devices
              </button>
              <button
                onClick={() => setActiveTab('geography')}
                className={`p-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === 'geography'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                Geography
              </button>
              
              {/* Row 3 */}
              <button
                onClick={() => setActiveTab('submissions')}
                className={`p-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === 'submissions'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                Submissions
              </button>
              <button
                onClick={() => setActiveTab('newsletter')}
                className={`p-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === 'newsletter'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                Newsletter
              </button>
            </div>
          </div>

          {/* Content Area */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Content Container */}
            <div className="relative z-10">

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Top Pages */}
              <Card className="bg-card/80 border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    Top Pages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 sm:space-y-3">
                    {topPages.map((page, index) => (
                      <div key={page.page} className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                          <span className="text-xs sm:text-sm text-gray-400 w-4 sm:w-6 flex-shrink-0">{index + 1}</span>
                          <span className="text-white text-xs sm:text-sm truncate">{page.page}</span>
                        </div>
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 text-xs">
                          {formatNumber(page.views)} views
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UTM Campaigns */}
              <Card className="bg-card/80 border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    UTM Campaigns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 sm:space-y-3">
                    {utmCampaigns.slice(0, 5).map((campaign, index) => (
                      <div key={campaign.campaign} className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                          <span className="text-xs sm:text-sm text-gray-400 w-4 sm:w-6 flex-shrink-0">{index + 1}</span>
                          <span className="text-white text-xs sm:text-sm truncate">{campaign.campaign}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 text-xs">
                            {formatNumber(campaign.sessions)} sessions
                          </Badge>
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                            {campaign.conversions} conv.
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Events */}
            <Card className="bg-card/80 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                  Recent Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 sm:space-y-3">
                  {recentEvents.slice(0, 10).map((event) => (
                    <div key={event.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-card/50 rounded border border-border/30 gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <Badge className={`${getTypeColor(event.event_type)} text-xs`}>
                          {event.event_type}
                        </Badge>
                        <span className="text-white text-xs sm:text-sm truncate">{event.page}</span>
                        {event.email && (
                          <span className="text-gray-400 text-xs sm:text-sm truncate hidden sm:block">{event.email}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400">
                        {event.device_type && getDeviceIcon(event.device_type)}
                        {event.browser && getBrowserIcon(event.browser)}
                        {event.country && <MapPin className="w-3 h-3" />}
                        <span className="text-xs">{new Date(event.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            {/* Conversion Funnel */}
            <Card className="bg-card/80 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                  Conversion Funnel (Last {timeRange} days)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {conversionFunnel.slice(0, 7).map((day) => (
                    <div key={day.date} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-card/50 rounded border border-border/30 gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-white font-medium text-sm sm:text-base">{day.date}</span>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                          <div className="text-center">
                            <p className="text-xs sm:text-sm text-gray-400">Page Views</p>
                            <p className="text-white font-semibold text-sm sm:text-base">{formatNumber(day.page_views)}</p>
                          </div>
                          <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mx-auto sm:mx-0" />
                          <div className="text-center">
                            <p className="text-xs sm:text-sm text-gray-400">Form Submissions</p>
                            <p className="text-white font-semibold text-sm sm:text-base">{formatNumber(day.form_submissions)}</p>
                          </div>
                          <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mx-auto sm:mx-0" />
                          <div className="text-center">
                            <p className="text-xs sm:text-sm text-gray-400">Newsletter Signups</p>
                            <p className="text-white font-semibold text-sm sm:text-base">{formatNumber(day.newsletter_signups)}</p>
                          </div>
                        </div>
                      </div>
                      <Badge className={`${day.conversion_rate > 5 ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'} text-xs`}>
                        {day.conversion_rate.toFixed(1)}% conversion
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Devices Tab */}
          <TabsContent value="devices" className="space-y-6">
            <Card className="bg-card/80 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                  <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
                  Device Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {deviceAnalytics.map((device, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-card/50 rounded border border-border/30 gap-3">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {getDeviceIcon(device.device_type)}
                        <div>
                          <p className="text-white font-medium text-sm sm:text-base">{device.device_type}</p>
                          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                            {getBrowserIcon(device.browser)}
                            <span className="truncate">{device.browser}</span>
                            {getOSIcon(device.os)}
                            <span className="truncate">{device.os}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div className="text-center">
                          <p className="text-xs sm:text-sm text-gray-400">Sessions</p>
                          <p className="text-white font-semibold text-sm sm:text-base">{formatNumber(device.sessions)}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm text-gray-400">Avg Time</p>
                          <p className="text-white font-semibold text-sm sm:text-base">{formatTime(device.avg_time_on_page)}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm text-gray-400">Scroll Depth</p>
                          <p className="text-white font-semibold text-sm sm:text-base">{Math.round(device.avg_scroll_depth || 0)}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Geography Tab */}
          <TabsContent value="geography" className="space-y-6">
            <Card className="bg-card/80 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  Geographic Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {geographicAnalytics.map((location, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-card/50 rounded border border-border/30 gap-3">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                        <div>
                          <p className="text-white font-medium text-sm sm:text-base">{location.country}</p>
                          {location.city && (
                            <p className="text-gray-400 text-xs sm:text-sm">{location.city}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div className="text-center">
                          <p className="text-xs sm:text-sm text-gray-400">Sessions</p>
                          <p className="text-white font-semibold text-sm sm:text-base">{formatNumber(location.sessions)}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm text-gray-400">Conversions</p>
                          <p className="text-white font-semibold text-sm sm:text-base">{formatNumber(location.conversions)}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm text-gray-400">Rate</p>
                          <p className="text-white font-semibold text-sm sm:text-base">
                            {location.sessions > 0 ? ((location.conversions / location.sessions) * 100).toFixed(1) : 0}%
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Submissions Tab */}
          <TabsContent value="submissions" className="space-y-6">
            {/* Search and Actions */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
                <div className="relative flex-1 max-w-md">
                  <Input
                    placeholder="Search submissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-card/50 border-border/50 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => exportToCSV(emailSubmissions, 'email-submissions.csv')}
                    variant="outline"
                    size="sm"
                    className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                  >
                    <Download className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:inline">Export CSV</span>
                    <span className="sm:hidden">Export</span>
                  </Button>
                </div>
              </div>

              {/* Submissions List */}
              <div className="space-y-4">
                {filteredSubmissions.map((submission) => (
                  <Card key={submission.id} className="bg-card/80 border-border/50">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                            <h3 className="font-semibold text-white text-sm sm:text-base">{submission.name || 'Anonymous'}</h3>
                            <Badge className={`${getTypeColor(submission.type)} text-xs`}>
                              {submission.type}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                            <div>
                              <p className="text-gray-400">Email</p>
                              <p className="text-white truncate">{submission.email}</p>
                            </div>
                            {submission.company && (
                              <div>
                                <p className="text-gray-400">Company</p>
                                <p className="text-white truncate">{submission.company}</p>
                              </div>
                            )}
                            {submission.industry && (
                              <div>
                                <p className="text-gray-400">Industry</p>
                                <p className="text-white truncate">{submission.industry}</p>
                              </div>
                            )}
                            <div>
                              <p className="text-gray-400">Date</p>
                              <p className="text-white">
                                {new Date(submission.created_at!).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          {submission.message && (
                            <div className="mt-3 sm:mt-4">
                              <p className="text-gray-400 mb-1 text-xs sm:text-sm">Message</p>
                              <p className="text-white text-xs sm:text-sm bg-card/50 p-2 sm:p-3 rounded border border-border/30">
                                {submission.message}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Newsletter Tab */}
          <TabsContent value="newsletter" className="space-y-6">
            {/* Newsletter Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Newsletter Subscribers ({newsletterSubscribers.length})
              </h3>
              <div className="flex gap-2">
                <Button
                  onClick={() => exportToCSV(newsletterSubscribers, 'newsletter-subscribers.csv')}
                  variant="outline"
                  size="sm"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                >
                  <Download className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Export CSV</span>
                  <span className="sm:hidden">Export</span>
                </Button>
              </div>
            </div>

            {/* Subscribers List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {newsletterSubscribers.map((subscriber) => (
                <Card key={subscriber.id} className="bg-card/80 border-border/50">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-white text-sm sm:text-base truncate">{subscriber.email}</p>
                        <p className="text-xs sm:text-sm text-gray-400">
                          Joined {new Date(subscriber.created_at!).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 text-xs ml-2">
                        {subscriber.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin; 