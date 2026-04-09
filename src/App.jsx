

import AppRouter from './router';
import { ThemeProvider } from './theme-context.jsx';
import { LanguageProvider } from './localization.jsx';
import { useEffect } from 'react';
import { getBasePath } from './utils/publicAssetPath.js';


export default function App() {
  useEffect(() => {
    const basePath = getBasePath();

    // Kontrollo nëse ka ?redirect= në URL (nga 404.html)
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      console.log('Redirect detected:', redirect);
      // Navigo te rruga e kërkuar pa rifreskuar faqen
      window.history.replaceState(null, '', `${basePath}${redirect}`);
      // Forco rifreskimin e router-it duke përdorur event
      window.dispatchEvent(new Event('popstate'));
    }
  }, []);
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </LanguageProvider>
  );
}
