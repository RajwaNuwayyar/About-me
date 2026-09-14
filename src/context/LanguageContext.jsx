import React, { createContext, useContext, useState, useEffect } from 'react';
<<<<<<< HEAD
import { portfolioData as portfolioDataEn } from '../data/portfolioDataEn';
=======
import { portfolioDataEn } from '../data/portfolioDataEn';
>>>>>>> 77123f097644f3bc6e3fa08a36c0fe5679582c73
import { portfolioDataId } from '../data/portfolioDataId';

const LanguageContext = createContext();

<<<<<<< HEAD
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app_language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('app_language', language);
=======
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
>>>>>>> 77123f097644f3bc6e3fa08a36c0fe5679582c73
  }, [language]);

  const portfolioData = language === 'id' ? portfolioDataId : portfolioDataEn;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, portfolioData }}>
      {children}
    </LanguageContext.Provider>
  );
<<<<<<< HEAD
};

export const useLanguage = () => useContext(LanguageContext);
=======
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
>>>>>>> 77123f097644f3bc6e3fa08a36c0fe5679582c73
