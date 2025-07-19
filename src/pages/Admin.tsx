import { useState, useEffect } from "react";
import { EmailService } from "@/lib/emailService";
import { EmailSubmission, NewsletterSubscription } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Trash2
} from "lucide-react";
import { toast } from "sonner";

const Admin = () => {
  const [emailSubmissions, setEmailSubmissions] = useState<EmailSubmission[]>([]);
  const [newsletterSubscribers, setNewsletterSubscribers] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [submissions, subscribers] = await Promise.all([
        EmailService.getEmailSubmissions().catch(() => []),
        EmailService.getNewsletterSubscribers().catch(() => [])
      ]);
      
      setEmailSubmissions(submissions || []);
      setNewsletterSubscribers(subscribers || []);
    } catch (error) {
      console.error('Error loading data:', error);
      toast.error("Database tables not found. Please create the tables in Supabase first.");
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage email submissions and newsletter subscribers</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/80 border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Submissions</p>
                  <p className="text-2xl font-bold text-white">{emailSubmissions.length}</p>
                </div>
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Newsletter Subscribers</p>
                  <p className="text-2xl font-bold text-white">{newsletterSubscribers.length}</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Contact Forms</p>
                  <p className="text-2xl font-bold text-white">
                    {emailSubmissions.filter(s => s.type === 'contact').length}
                  </p>
                </div>
                <MessageSquare className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Partnership Inquiries</p>
                  <p className="text-2xl font-bold text-white">
                    {emailSubmissions.filter(s => s.type === 'partnership').length}
                  </p>
                </div>
                <Building className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="submissions" className="space-y-6">
          <TabsList className="bg-card/80 border-border/50">
            <TabsTrigger value="submissions" className="data-[state=active]:bg-purple-500/20">
              Email Submissions
            </TabsTrigger>
            <TabsTrigger value="newsletter" className="data-[state=active]:bg-blue-500/20">
              Newsletter Subscribers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="submissions" className="space-y-6">
            {/* Search and Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
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
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
                <Button
                  onClick={loadData}
                  variant="outline"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>

            {/* Submissions List */}
            <div className="space-y-4">
              {filteredSubmissions.map((submission) => (
                <Card key={submission.id} className="bg-card/80 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-white">{submission.name || 'Anonymous'}</h3>
                          <Badge className={getTypeColor(submission.type)}>
                            {submission.type}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Email</p>
                            <p className="text-white">{submission.email}</p>
                          </div>
                          {submission.company && (
                            <div>
                              <p className="text-gray-400">Company</p>
                              <p className="text-white">{submission.company}</p>
                            </div>
                          )}
                          {submission.industry && (
                            <div>
                              <p className="text-gray-400">Industry</p>
                              <p className="text-white">{submission.industry}</p>
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
                          <div className="mt-4">
                            <p className="text-gray-400 mb-1">Message</p>
                            <p className="text-white text-sm bg-card/50 p-3 rounded border border-border/30">
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
          </TabsContent>

          <TabsContent value="newsletter" className="space-y-6">
            {/* Newsletter Actions */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">
                Newsletter Subscribers ({newsletterSubscribers.length})
              </h3>
              <div className="flex gap-2">
                <Button
                  onClick={() => exportToCSV(newsletterSubscribers, 'newsletter-subscribers.csv')}
                  variant="outline"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
                <Button
                  onClick={loadData}
                  variant="outline"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>

            {/* Subscribers List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {newsletterSubscribers.map((subscriber) => (
                <Card key={subscriber.id} className="bg-card/80 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">{subscriber.email}</p>
                        <p className="text-sm text-gray-400">
                          Joined {new Date(subscriber.created_at!).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400">
                        {subscriber.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin; 