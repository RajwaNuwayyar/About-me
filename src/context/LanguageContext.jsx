import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData as portfolioDataEn } from '../data/portfolioDataEn';
import { portfolioDataId } from '../data/portfolioDataId';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app_language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('app_language', language);
  }, [language]);

  const portfolioData = language === 'id' ? portfolioDataId : portfolioDataEn;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, portfolioData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
