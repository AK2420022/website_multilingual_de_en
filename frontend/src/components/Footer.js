import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary-900 relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Company Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="p-1 rounded-xl flex-shrink-0">
                  <img
                    src="logo.png"
                    alt="Reksai Robotics logo"
                    className="h-16 w-32 object-contain brightness-0 invert"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">
                    Reksai <span className="gradient-text">Robotics</span>
                  </h1>
                  <p className="text-xs text-secondary-400">{t('hero.companyTagline')}</p>
                </div>
              </div>

              <p className="text-secondary-300 leading-relaxed max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p
              className="text-secondary-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('footer.copyright')}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;