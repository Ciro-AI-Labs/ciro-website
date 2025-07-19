import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, Eye } from 'lucide-react';

interface VisitorData {
  id: string;
  location: string;
  country: string;
  timestamp: Date;
  page: string;
}

const VisitorNotifications = () => {
  const [visitors, setVisitors] = useState<VisitorData[]>([]);
  const [currentVisitor, setCurrentVisitor] = useState<VisitorData | null>(null);

  // Simulated visitor data (in production, this would come from your analytics)
  const mockVisitors = [
    { location: 'São Paulo', country: 'Brazil', page: 'Products' },
    { location: 'Stuttgart', country: 'Germany', page: 'AI Analytics' },
    { location: 'Detroit', country: 'USA', page: 'Vision System' },
    { location: 'Shanghai', country: 'China', page: 'Use Cases' },
    { location: 'Mumbai', country: 'India', page: 'Contact' },
    { location: 'Mexico City', country: 'Mexico', page: 'About' },
    { location: 'Toronto', country: 'Canada', page: 'Products' },
    { location: 'Barcelona', country: 'Spain', page: 'AI Analytics' },
    { location: 'Tokyo', country: 'Japan', page: 'Vision System' },
    { location: 'London', country: 'UK', page: 'Contact' },
  ];

  useEffect(() => {
    const generateVisitor = () => {
      const randomVisitor = mockVisitors[Math.floor(Math.random() * mockVisitors.length)];
      const newVisitor: VisitorData = {
        id: Math.random().toString(36).substr(2, 9),
        location: randomVisitor.location,
        country: randomVisitor.country,
        timestamp: new Date(),
        page: randomVisitor.page,
      };

      setCurrentVisitor(newVisitor);
      setVisitors(prev => [newVisitor, ...prev.slice(0, 4)]); // Keep last 5 visitors

      // Hide notification after 4 seconds
      setTimeout(() => {
        setCurrentVisitor(null);
      }, 4000);
    };

    // Generate a visitor immediately
    generateVisitor();

    // Then generate visitors every 8-15 seconds
    const interval = setInterval(() => {
      generateVisitor();
    }, Math.random() * 7000 + 8000); // Random between 8-15 seconds

    return () => clearInterval(interval);
  }, []);

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - timestamp.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    return `${Math.floor(diffInSeconds / 3600)}h ago`;
  };

  return (
    <>
      {/* Real-time Visitor Notification */}
      <AnimatePresence>
        {currentVisitor && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-900/95 to-blue-900/95 backdrop-blur-sm text-white p-4 rounded-lg shadow-2xl border border-purple-500/30 max-w-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 text-sm font-medium">
                  <MapPin className="w-3 h-3 text-purple-300" />
                  <span className="text-purple-200">{currentVisitor.location}, {currentVisitor.country}</span>
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  Viewing <span className="text-blue-300 font-medium">{currentVisitor.page}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visitor Count Badge (Fixed position) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-green-900/95 to-emerald-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg border border-green-500/30"
      >
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4 text-green-300" />
            <span className="text-green-200">{Math.floor(Math.random() * 45) + 23} watching</span>
          </div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </motion.div>

      {/* Recent Visitors List (Hidden on mobile) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="fixed top-24 right-6 z-30 bg-black/80 backdrop-blur-sm text-white p-3 rounded-lg shadow-lg border border-gray-700/50 hidden lg:block max-w-xs"
      >
        <div className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          Recent Visitors
        </div>
        <div className="space-y-1">
          {visitors.slice(0, 3).map((visitor) => (
            <div key={visitor.id} className="text-xs text-gray-400 flex items-center justify-between">
              <span className="truncate">{visitor.location}, {visitor.country}</span>
              <span className="text-gray-500 ml-2">{formatTimeAgo(visitor.timestamp)}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default VisitorNotifications; 