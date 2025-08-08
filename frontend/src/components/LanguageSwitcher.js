import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t } = useTranslation();

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = async (languageCode) => {
    await changeLanguage(languageCode);
    setIsOpen(false);
  };

  // Determine styling based on variant
  const getButtonStyles = () => {
    if (variant === 'footer') {
      return {
        button: "flex items-center space-x-2 px-3 py-2 bg-secondary-800/50 border border-secondary-600 text-secondary-300 hover:text-white hover:bg-secondary-700/50 rounded-lg transition-all duration-300 text-sm",
        dropdown: "absolute bottom-full left-0 mb-2 min-w-48 bg-secondary-800 border border-secondary-600 rounded-xl shadow-xl py-2 z-50",
        option: "flex items-center space-x-3 px-4 py-3 text-secondary-300 hover:text-white hover:bg-secondary-700 transition-all duration-200 cursor-pointer"
      };
    }
    
    return {
      button: "flex items-center space-x-2 px-4 py-2 bg-white/90 border border-primary-200 text-secondary-700 hover:bg-white rounded-xl transition-all duration-300 shadow-sm hover:shadow-md",
      dropdown: "absolute top-full right-0 mt-2 min-w-48 bg-white border border-primary-100 rounded-xl shadow-xl py-2 z-50",
      option: "flex items-center space-x-3 px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 cursor-pointer"
    };
  };

  const styles = getButtonStyles();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.button}
        aria-label="Select Language"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="font-medium">
          {t(`language.${currentLang.code === 'en' ? 'english' : currentLang.code === 'de' ? 'german' : 'japanese'}`)}
        </span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              className={styles.dropdown}
              initial={{ opacity: 0, y: variant === 'footer' ? 10 : -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: variant === 'footer' ? 10 : -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((language) => (
                <div
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`${styles.option} ${
                    currentLanguage === language.code 
                      ? variant === 'footer' 
                        ? 'bg-secondary-700 text-white' 
                        : 'bg-primary-50 text-primary-600'
                      : ''
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">
                    {t(`language.${language.code === 'en' ? 'english' : language.code === 'de' ? 'german' : 'japanese'}`)}
                  </span>
                  {currentLanguage === language.code && (
                    <div className={`ml-auto w-2 h-2 rounded-full ${
                      variant === 'footer' ? 'bg-primary-400' : 'bg-primary-500'
                    }`} />
                  )}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;