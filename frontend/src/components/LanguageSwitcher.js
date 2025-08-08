import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ variant = 'dropdown', className = '' }) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      code: 'en',
      name: t('language.english'),
      flag: '🇺🇸',
      nativeName: 'English'
    },
    {
      code: 'de', 
      name: t('language.german'),
      flag: '🇩🇪',
      nativeName: 'Deutsch'
    },
    {
      code: 'ja',
      name: t('language.japanese'), 
      flag: '🇯🇵',
      nativeName: '日本語'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  if (variant === 'buttons') {
    // Footer style - horizontal buttons
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <span className="text-secondary-400 text-sm font-medium mr-2">
          {t('footer.language')}:
        </span>
        <div className="flex items-center space-x-1">
          {languages.map((language) => (
            <motion.button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                i18n.language === language.code
                  ? 'bg-primary-600 text-white'
                  : 'text-secondary-400 hover:text-white hover:bg-secondary-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-1">{language.flag}</span>
              <span className="hidden sm:inline">{language.nativeName}</span>
              <span className="sm:hidden">{language.code.toUpperCase()}</span>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Default dropdown style for navigation
  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden md:inline font-medium">{currentLanguage.nativeName}</span>
        <span className="md:hidden font-medium">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-primary-100 py-2 z-50"
            >
              {languages.map((language, index) => (
                <motion.button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-primary-50 transition-all duration-200 ${
                    i18n.language === language.code 
                      ? 'bg-primary-50 text-primary-600 font-medium' 
                      : 'text-secondary-600'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-xl">{language.flag}</span>
                  <div>
                    <div className="font-medium">{language.nativeName}</div>
                    <div className="text-xs text-secondary-400">{language.name}</div>
                  </div>
                  {i18n.language === language.code && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;