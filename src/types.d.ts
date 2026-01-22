declare module '*.module.css';
declare module '*.css';

declare global {
  interface Window {
    AOS?: { init: (options?: Record<string, unknown>) => void };
    setLanguage?: (lang: string) => void;
    downloadPDF?: () => void;
  }
}

export {};
