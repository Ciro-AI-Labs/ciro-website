import { useEffect, useRef, useState } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  className?: string;
}

const HubSpotForm = ({ portalId, formId, region = 'na1', className = '' }: HubSpotFormProps) => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    let timeoutId: NodeJS.Timeout;

    const loadHubSpotForm = () => {
      // Check if HubSpot script already exists
      const existingScript = document.querySelector('script[src*="hsforms.net"]');
      
      if (!existingScript) {
        script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/embed/49257214.js';
        script.defer = true;
        script.onload = () => {
          console.log('HubSpot script loaded');
          initializeForm();
        };
        script.onerror = () => {
          console.error('Failed to load HubSpot script');
          setError('Failed to load form. Please try again.');
          setIsLoading(false);
        };
        document.head.appendChild(script);
      } else {
        console.log('HubSpot script already exists');
        initializeForm();
      }
    };

    const initializeForm = () => {
      if (!formRef.current) {
        console.error('Form container not found');
        setError('Form container not found');
        setIsLoading(false);
        return;
      }

      // Clear any existing content
      formRef.current.innerHTML = '';

      try {
        if (window.hbspt && window.hbspt.forms) {
          console.log('Initializing HubSpot form...');
          window.hbspt.forms.create({
            portalId: portalId,
            formId: formId,
            region: region,
            target: `#hubspot-form-${formId}`,
            onFormReady: (form) => {
              console.log('HubSpot form ready:', form);
              setIsLoading(false);
              setError(null);
            },
            onFormSubmit: (form) => {
              console.log('HubSpot form submitted:', form);
            }
          });
        } else {
          console.error('HubSpot forms API not available');
          setError('Form API not available. Please refresh the page.');
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error initializing HubSpot form:', err);
        setError('Failed to initialize form. Please try again.');
        setIsLoading(false);
      }
    };

    // Set a timeout to prevent infinite loading
    timeoutId = setTimeout(() => {
      if (isLoading) {
        console.error('HubSpot form loading timeout');
        setError('Form loading timeout. Please refresh the page.');
        setIsLoading(false);
      }
    }, 10000); // 10 second timeout

    loadHubSpotForm();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [portalId, formId, region, isLoading]);

  return (
    <div className={`hubspot-form-container ${className}`}>
      <div 
        id={`hubspot-form-${formId}`}
        ref={formRef}
        className="min-h-[600px] w-full"
      />
      
      {isLoading && (
        <div className="flex items-center justify-center h-[600px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading HubSpot form...</p>
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
            <button 
              onClick={() => {
                setIsLoading(true);
                setError(null);
                window.location.reload();
              }}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HubSpotForm; 