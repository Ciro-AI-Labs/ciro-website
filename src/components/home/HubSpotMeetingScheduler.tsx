import { useEffect, useRef, useState } from 'react';

interface HubSpotMeetingSchedulerProps {
  portalId: string;
  meetingId: string;
  region?: string;
  className?: string;
}

const HubSpotMeetingScheduler = ({ 
  portalId, 
  meetingId, 
  region = 'na1', 
  className = '' 
}: HubSpotMeetingSchedulerProps) => {
  const schedulerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!schedulerRef.current) {
      setError('Scheduler container not found');
      setIsLoading(false);
      return;
    }

    // Clear any existing content
    schedulerRef.current.innerHTML = '';

    // Create the meetings iframe container
    const meetingsContainer = document.createElement('div');
    meetingsContainer.className = 'meetings-iframe-container';
    meetingsContainer.setAttribute('data-src', `https://meetings.hubspot.com/${meetingId}?embed=true`);
    meetingsContainer.style.width = '100%';
    meetingsContainer.style.height = '600px';
    meetingsContainer.style.borderRadius = '0.5rem';
    meetingsContainer.style.background = 'transparent';

    // Add the container to our ref
    schedulerRef.current.appendChild(meetingsContainer);

    // Load the HubSpot Meetings script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    
    script.onload = () => {
      console.log('HubSpot Meetings script loaded successfully');
      setIsLoading(false);
      setError(null);
    };
    
    script.onerror = () => {
      console.error('Failed to load HubSpot Meetings script');
      setError('Failed to load meeting scheduler. Please try again.');
      setIsLoading(false);
    };

    // Add script to document
    document.head.appendChild(script);

    // Set a timeout as backup
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.log('HubSpot Meetings loading timeout - checking if loaded');
        // Check if the meetings container has been populated
        if (meetingsContainer.children.length > 0) {
          console.log('Meetings container populated successfully');
          setIsLoading(false);
          setError(null);
        } else {
          console.log('Meetings container timeout - showing error');
          setError('Meeting scheduler loading timeout. Please try again.');
          setIsLoading(false);
        }
      }
    }, 10000); // 10 second timeout

    return () => {
      clearTimeout(timeoutId);
      // Clean up script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [meetingId, isLoading]);

  const handleRetry = () => {
    setIsLoading(true);
    setError(null);
    // Force re-render by updating state
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  const handleOpenInNewTab = () => {
    window.open(`https://meetings.hubspot.com/${meetingId}`, '_blank');
  };

  return (
    <div className={`hubspot-meeting-scheduler ${className}`}>
      <div 
        id={`hubspot-meeting-${meetingId}`}
        ref={schedulerRef}
        className="min-h-[600px] w-full"
      />
      
      {isLoading && (
        <div className="flex items-center justify-center h-[600px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading meeting scheduler...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="flex items-center justify-center h-[600px]">
          <div className="text-center">
            <div className="text-red-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className="text-red-400 mb-4">{error}</p>
            <div className="space-y-3">
              <button 
                onClick={handleRetry}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors mr-2"
              >
                Retry
              </button>
              <button 
                onClick={handleOpenInNewTab}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
              >
                Open in New Tab
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Meeting ID: {meetingId}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HubSpotMeetingScheduler; 