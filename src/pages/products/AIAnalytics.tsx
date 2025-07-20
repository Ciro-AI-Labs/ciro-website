
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  Database, 
  Zap, 
  Eye, 
  Brain, 
  Shield, 
  Globe, 
  Cpu, 
  Network, 
  Cloud, 
  Lock,
  ArrowRight,
  CheckCircle,
  Sparkles,
  BarChart3,
  MessageSquare,
  Workflow,
  Code,
  Server
} from "lucide-react";

const AIAnalytics = () => {
  const techStack = [
    { name: "Apache Kafka", description: "Real-time event streaming", icon: MessageSquare, color: "text-orange-500" },
    { name: "Apache Airflow", description: "Workflow orchestration", icon: Workflow, color: "text-blue-500" },
    { name: "Apache Flink", description: "Stream processing engine", icon: Zap, color: "text-purple-500" },
    { name: "Custom LLMs", description: "Private AI models", icon: Brain, color: "text-green-500" },
    { name: "Private Nodes", description: "Secure deployment", icon: Lock, color: "text-red-500" },
    { name: "50+ Connectors", description: "Universal integration", icon: Network, color: "text-indigo-500" }
  ];

  const connectors = [
    { category: "Databases", items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "ClickHouse"] },
    { category: "Cloud Services", items: ["AWS", "Azure", "GCP", "Snowflake", "BigQuery", "Redshift"] },
    { category: "Enterprise", items: ["SAP", "Salesforce", "Workday", "ServiceNow", "Jira", "Slack"] },
    { category: "IoT & Industrial", items: ["OPC UA", "Modbus", "MQTT", "PLC Systems", "SCADA", "Sensors"] },
    { category: "File Systems", items: ["CSV", "Excel", "JSON", "XML", "PDF", "Parquet"] },
    { category: "Streaming", items: ["Kafka", "RabbitMQ", "Pulsar", "Kinesis", "EventHub", "Pub/Sub"] }
  ];

  const features = [
    {
      title: "Real-Time Event Streaming",
      description: "Apache Kafka-powered ingestion handling 500k+ events/sec with <12ms latency. Process streaming data with Apache Flink for instant insights.",
      icon: MessageSquare,
      tech: ["Apache Kafka", "Apache Flink", "Real-time Processing"]
    },
    {
      title: "Intelligent Workflow Orchestration", 
      description: "Apache Airflow-driven automation with custom DAGs. Trigger actions based on real-time events and predictive analytics.",
      icon: Workflow,
      tech: ["Apache Airflow", "Custom DAGs", "Event Triggers"]
    },
    {
      title: "Custom LLM Integration",
      description: "Deploy your own AI models or use our pre-trained ones. Private inference with full data sovereignty and custom fine-tuning.",
      icon: Brain,
      tech: ["Custom LLMs", "Private Inference", "Fine-tuning"]
    },
    {
      title: "Universal Data Connectors",
      description: "50+ pre-built connectors for databases, cloud services, enterprise systems, IoT devices, and file formats.",
      icon: Network,
      tech: ["50+ Connectors", "Universal Integration", "Auto-discovery"]
    },
    {
      title: "Private Node Deployment",
      description: "Deploy Ciro AI on your infrastructure with full data isolation. On-premise, hybrid, or multi-cloud architectures supported.",
      icon: Lock,
      tech: ["Private Nodes", "Data Sovereignty", "Multi-cloud"]
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 Type II, ISO 27001 certified. End-to-end encryption, role-based access, and compliance with industry standards.",
      icon: Shield,
      tech: ["SOC 2 Type II", "ISO 27001", "End-to-end Encryption"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <section className="pt-20 pb-16 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-orange-500 to-blue-500">
                    Ciro AI Analytics
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-6 text-gray-300">
                  Enterprise-grade AI analytics platform powered by Apache Kafka, Airflow, and Flink
                </p>
                <p className="text-gray-400 mb-8 text-lg">
                  Unify your data ecosystem with 50+ connectors, deploy custom LLMs on private nodes, and orchestrate intelligent workflows at scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Link to="/contact">Request Enterprise Demo</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    View Architecture
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
                  <div className="border-b border-gray-700 mb-6 pb-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      Real-Time Analytics Dashboard
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-gray-600">
                      <div className="text-gray-400 mb-2 text-sm">Events/sec</div>
                      <div className="text-2xl font-semibold text-green-400">487.2K</div>
                      <div className="h-2 w-full bg-gray-600 mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{ width: "87%" }} />
                      </div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-gray-600">
                      <div className="text-gray-400 mb-2 text-sm">Latency</div>
                      <div className="text-2xl font-semibold text-blue-400">8.3ms</div>
                      <div className="h-2 w-full bg-gray-600 mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: "92%" }} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg mb-4 border border-gray-600">
                    <div className="text-gray-400 mb-2 text-sm">Active Connectors</div>
                    <div className="flex flex-wrap gap-2">
                      {["Kafka", "PostgreSQL", "SAP", "AWS", "MongoDB"].map((connector, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30">
                          {connector}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg border border-gray-600">
                    <div className="flex justify-between mb-2">
                      <div className="text-gray-400 text-sm">AI Assistant</div>
                      <div className="text-xs text-green-400 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Online
                      </div>
                    </div>
                    <div className="p-3 bg-slate-800 rounded border border-gray-600">
                      <div className="text-sm italic text-gray-400 mb-2">
                        "Analyze production bottlenecks using Apache Flink"
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-sm text-gray-300">Processing with custom LLM...</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
                <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Powered by Enterprise Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built on industry-standard Apache technologies with custom AI capabilities for enterprise-scale operations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-slate-700/50 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors`}>
                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Enterprise Features & Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI analytics platform designed for enterprise-scale operations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-gray-700 rounded-xl p-6 shadow-lg hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Connectors Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                50+ Pre-built Connectors
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Universal integration with databases, cloud services, enterprise systems, and IoT devices
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {connectors.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-gray-700 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-purple-400" />
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Enterprise Architecture
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Scalable, secure, and flexible deployment options for enterprise environments
              </p>
            </motion.div>
            
            <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-blue-400" />
                    Cloud Deployment
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Fully managed SaaS platform
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Auto-scaling infrastructure
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Global CDN and edge locations
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Lock className="w-5 h-5 text-red-400" />
                    Private Nodes
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      On-premise deployment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Full data sovereignty
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Custom AI model hosting
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Network className="w-5 h-5 text-purple-400" />
                    Hybrid & Multi-Cloud
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Cross-cloud orchestration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Unified data governance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Disaster recovery
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-8 md:p-12 text-center backdrop-blur-sm"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Data Operations?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience enterprise-grade AI analytics with Apache technologies, custom LLMs, and universal connectors. 
                Get a personalized demo tailored to your infrastructure and use cases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Link to="/contact">Schedule Enterprise Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Download Architecture Guide
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIAnalytics;
