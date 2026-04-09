

import AppRouter from './router';
import { ThemeProvider } from './theme-context.jsx';
import { LanguageProvider } from './localization.jsx';
import { useEffect } from 'react';


export default function App() {
  useEffect(() => {
    // Kontrollo nëse ka ?redirect= në URL (nga 404.html)
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      console.log('Redirect detected:', redirect);
      // Navigo te rruga e kërkuar pa rifreskuar faqen
      window.history.replaceState(null, '', '/FurraPizzeriaEuropa' + redirect);
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
