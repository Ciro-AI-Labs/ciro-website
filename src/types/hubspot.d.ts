declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region?: string;
          target: string;
          onFormReady?: (form: any) => void;
          onFormSubmit?: (form: any) => void;
        }) => void;
      };
      meetings: {
        create: (config: {
          portalId: string;
          meetingId: string;
          target: string;
          region?: string;
          onMeetingScheduled?: (meeting: any) => void;
        }) => void;
      };
    };
  }
}

export {}; 