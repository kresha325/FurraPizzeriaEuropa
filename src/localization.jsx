import { createContext, useContext, useState } from 'react';

const translations = {
  sq: {
    home: 'Kryefaqja',
    menu: 'Menu',
    cart: 'Shporta',
    viewMenu: 'Shiko Menunë',
    welcome: 'Mirë se vini në faqen tonë zyrtare! Shijoni bukën dhe picat më të mira në qytet.',
    bakery: 'Furra & Piceria Europa',
  },
  en: {
    home: 'Home',
    menu: 'Menu',
    cart: 'Cart',
    viewMenu: 'View Menu',
    welcome: 'Welcome to our official page! Enjoy the best bread and pizza in town.',
    bakery: 'Europa Bakery & Pizzeria',
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('sq');
  const t = (key) => translations[lang][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
