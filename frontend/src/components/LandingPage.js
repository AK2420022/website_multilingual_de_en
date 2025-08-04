import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import HeroSection from './HeroSectionSimple';
import EcosystemSection from './EcosystemSection';
import UseCasesSection from './UseCasesSection';
import ContactSection from './ContactSection';
import Navigation from './Navigation';
import Footer from './Footer';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-secondary-900 font-medium">{t('loading')}</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      <HeroSection />
      <EcosystemSection />
      <UseCasesSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;