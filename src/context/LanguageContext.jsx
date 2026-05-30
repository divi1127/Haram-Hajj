import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
    // Handle RTL for Urdu
    if (language === 'ur') {
      document.body.dir = 'rtl';
      document.body.classList.add('rtl-ur');
    } else {
      document.body.dir = 'ltr';
      document.body.classList.remove('rtl-ur');
    }
  }, [language]);

  const t = (path) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        // Fallback to English if key missing
        let fallback = translations['en'];
        for (const fKey of keys) {
           if (fallback && fallback[fKey]) {
             fallback = fallback[fKey];
           } else {
             return path; 
           }
        }
        return fallback;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ur' ? 'urdu-theme' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
