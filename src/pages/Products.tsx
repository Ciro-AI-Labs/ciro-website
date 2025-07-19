import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BarChart3, Eye, ArrowRight, Zap, Brain, Activity } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b0c10] to-[#06070a] text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                CIRO AI in Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your industrial operations with AI that turns fragmented data streams 
              into automated decisions in milliseconds.
            </p>
            <Badge variant="secondary" className="mb-8">
              Live Product Demo Available
            </Badge>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* AI Analytics Engine */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">AI Analytics Engine</CardTitle>
                    <CardDescription className="text-gray-300">
                      Real-time industrial intelligence
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Connect your data systems for real-time visibility, insights, and automated workflows. 
                    Ask questions in natural language and get instant SQL, KPIs, and actionable insights.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                      <Zap className="h-3 w-3 mr-1" /> Natural Language Analytics
                    </Badge>
                    <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                      <Brain className="h-3 w-3 mr-1" /> AI Agents
                    </Badge>
                    <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                      <Activity className="h-3 w-3 mr-1" /> Real-time Dashboards
                    </Badge>
                  </div>
                  
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link to="/products/ai-analytics" className="flex items-center justify-center gap-2">
                      Explore AI Analytics
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Vision System */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-teal-900/20 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Eye className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Vision Intelligence</CardTitle>
                    <CardDescription className="text-gray-300">
                      Computer vision for industrial automation
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Advanced computer vision and real-time monitoring that transforms your cameras 
                    into intelligent sensors for quality control and operational excellence.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                      <Eye className="h-3 w-3 mr-1" /> Quality Control
                    </Badge>
                    <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                      <Activity className="h-3 w-3 mr-1" /> Anomaly Detection
                    </Badge>
                    <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                      <Zap className="h-3 w-3 mr-1" /> Real-time Alerts
                    </Badge>
                  </div>
                  
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link to="/products/vision" className="flex items-center justify-center gap-2">
                      Explore Vision System
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See CIRO AI in action with a personalized demo of your industrial use case.
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Link to="/contact" className="flex items-center gap-2">
                Book Live Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products; 