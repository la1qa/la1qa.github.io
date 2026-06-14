// src/utils/analytics.ts

export const pageview = (path: string) => {
  window.gtag?.("event", "page_view", {
    page_path: path,
  });
};

export const trackEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  window.gtag?.("event", eventName, params);
};