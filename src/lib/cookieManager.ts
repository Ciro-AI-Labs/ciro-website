export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
  version: string;
}

export interface CookieSettings {
  [key: string]: {
    name: string;
    description: string;
    category: 'necessary' | 'analytics' | 'marketing' | 'preferences';
    duration: string;
    provider: string;
  };
}

export class CookieManager {
  private static CONSENT_KEY = 'ciro_cookie_consent';
  private static SETTINGS_KEY = 'ciro_cookie_settings';
  private static VERSION = '1.0';

  // Default cookie settings
  static readonly COOKIE_SETTINGS: CookieSettings = {
    'ciro_session_id': {
      name: 'Session ID',
      description: 'Stores a unique session identifier for analytics and user experience',
      category: 'necessary',
      duration: 'Session',
      provider: 'Ciro AI'
    },
    'ciro_cookie_consent': {
      name: 'Cookie Consent',
      description: 'Stores your cookie preferences and consent choices',
      category: 'necessary',
      duration: '1 year',
      provider: 'Ciro AI'
    },
    'ciro_cookie_settings': {
      name: 'Cookie Settings',
      description: 'Stores your detailed cookie preferences',
      category: 'preferences',
      duration: '1 year',
      provider: 'Ciro AI'
    },
    '_ga': {
      name: 'Google Analytics',
      description: 'Used to distinguish unique users and track page views',
      category: 'analytics',
      duration: '2 years',
      provider: 'Google'
    },
    '_ga_*': {
      name: 'Google Analytics',
      description: 'Used to persist session state and track user behavior',
      category: 'analytics',
      duration: '2 years',
      provider: 'Google'
    },
    '_fbp': {
      name: 'Facebook Pixel',
      description: 'Used to track conversions and optimize ad delivery',
      category: 'marketing',
      duration: '3 months',
      provider: 'Facebook'
    },
    '_fbc': {
      name: 'Facebook Pixel',
      description: 'Used to track conversions from Facebook ads',
      category: 'marketing',
      duration: '3 months',
      provider: 'Facebook'
    }
  };

  // Get current consent
  static getConsent(): CookieConsent | null {
    try {
      const consent = localStorage.getItem(this.CONSENT_KEY);
      if (!consent) return null;
      
      const parsed = JSON.parse(consent);
      return parsed.version === this.VERSION ? parsed : null;
    } catch {
      return null;
    }
  }

  // Save consent
  static saveConsent(consent: Partial<CookieConsent>): void {
    const currentConsent = this.getConsent() || {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString(),
      version: this.VERSION
    };

    const updatedConsent: CookieConsent = {
      ...currentConsent,
      ...consent,
      timestamp: new Date().toISOString(),
      version: this.VERSION
    };

    localStorage.setItem(this.CONSENT_KEY, JSON.stringify(updatedConsent));
    
    // Apply consent immediately
    this.applyConsent(updatedConsent);
  }

  // Apply consent settings
  static applyConsent(consent: CookieConsent): void {
    // Always enable necessary cookies
    if (consent.necessary) {
      this.enableNecessaryCookies();
    }

    // Enable/disable analytics based on consent
    if (consent.analytics) {
      this.enableAnalytics();
    } else {
      this.disableAnalytics();
    }

    // Enable/disable marketing based on consent
    if (consent.marketing) {
      this.enableMarketing();
    } else {
      this.disableMarketing();
    }

    // Enable/disable preferences based on consent
    if (consent.preferences) {
      this.enablePreferences();
    } else {
      this.disablePreferences();
    }
  }

  // Enable necessary cookies (always enabled)
  private static enableNecessaryCookies(): void {
    // These are essential for the website to function
    // No specific action needed as they're always enabled
  }

  // Enable analytics cookies
  private static enableAnalytics(): void {
    // Enable Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  }

  // Disable analytics cookies
  private static disableAnalytics(): void {
    // Disable Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  }

  // Enable marketing cookies
  private static enableMarketing(): void {
    // Enable Facebook Pixel if available
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('consent', 'grant');
    }
  }

  // Disable marketing cookies
  private static disableMarketing(): void {
    // Disable Facebook Pixel if available
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('consent', 'revoke');
    }
  }

  // Enable preferences cookies
  private static enablePreferences(): void {
    // Enable preference-based cookies
    // These are typically used for user customization
  }

  // Disable preferences cookies
  private static disablePreferences(): void {
    // Disable preference-based cookies
    // Clear any preference cookies
    this.deleteCookie('ciro_cookie_settings');
  }

  // Check if consent is required
  static isConsentRequired(): boolean {
    const consent = this.getConsent();
    return !consent || !consent.timestamp;
  }

  // Get cookie settings
  static getCookieSettings(): CookieSettings {
    return this.COOKIE_SETTINGS;
  }

  // Get cookies by category
  static getCookiesByCategory(category: string): Array<{ key: string; value: any }> {
    const cookies = this.getAllCookies();
    const settings = this.COOKIE_SETTINGS;
    
    return Object.entries(cookies)
      .filter(([key]) => {
        const setting = settings[key];
        return setting && setting.category === category;
      })
      .map(([key, value]) => ({ key, value }));
  }

  // Get all cookies
  static getAllCookies(): { [key: string]: string } {
    const cookies: { [key: string]: string } = {};
    
    if (typeof document !== 'undefined') {
      document.cookie.split(';').forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name && value) {
          cookies[name] = decodeURIComponent(value);
        }
      });
    }
    
    return cookies;
  }

  // Set a cookie
  static setCookie(name: string, value: string, days: number = 365): void {
    if (typeof document === 'undefined') return;
    
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }

  // Get a cookie
  static getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
    
    return null;
  }

  // Delete a cookie
  static deleteCookie(name: string): void {
    if (typeof document === 'undefined') return;
    
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  // Clear all cookies except necessary ones
  static clearNonNecessaryCookies(): void {
    const consent = this.getConsent();
    if (!consent) return;

    const cookies = this.getAllCookies();
    const settings = this.COOKIE_SETTINGS;

    Object.entries(cookies).forEach(([name]) => {
      const setting = settings[name];
      if (setting && setting.category !== 'necessary') {
        this.deleteCookie(name);
      }
    });
  }

  // Accept all cookies
  static acceptAll(): void {
    this.saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
  }

  // Reject all non-necessary cookies
  static rejectAll(): void {
    this.saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
  }

  // Get consent summary for display
  static getConsentSummary(): { accepted: string[]; rejected: string[] } {
    const consent = this.getConsent();
    if (!consent) return { accepted: [], rejected: [] };

    const accepted: string[] = [];
    const rejected: string[] = [];

    if (consent.necessary) accepted.push('Necessary');
    else rejected.push('Necessary');

    if (consent.analytics) accepted.push('Analytics');
    else rejected.push('Analytics');

    if (consent.marketing) accepted.push('Marketing');
    else rejected.push('Marketing');

    if (consent.preferences) accepted.push('Preferences');
    else rejected.push('Preferences');

    return { accepted, rejected };
  }
} 