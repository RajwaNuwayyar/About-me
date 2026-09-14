import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioDataEn } from '../data/portfolioDataEn';
import { portfolioDataId } from '../data/portfolioDataId';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const portfolioData = language === 'id' ? portfolioDataId : portfolioDataEn;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, portfolioData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
