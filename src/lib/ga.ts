/**
 * Google Analytics 4 tracking helper
 * Tracks page views, custom events, and user interactions
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: Function;
  }
}

export function initGA(measurementId: string) {
  if (!measurementId || typeof window === 'undefined') return;

  // Initialize Google Tag Manager data layer
  window.dataLayer = window.dataLayer || [];

  function gtag(command: string, ...rest: any[]) {
    window.dataLayer.push([command, ...rest]);
  }

  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId, {
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, eventParams);
}

export function trackFormSubmission() {
  trackEvent('form_submission', {
    event_category: 'engagement',
    event_label: 'contact_form',
  });
}

export function trackCTA(ctaText: string) {
  trackEvent('cta_click', {
    event_category: 'engagement',
    cta_text: ctaText,
  });
}

export function trackSectionView(sectionId: string) {
  trackEvent('section_view', {
    event_category: 'navigation',
    section_id: sectionId,
  });
}
