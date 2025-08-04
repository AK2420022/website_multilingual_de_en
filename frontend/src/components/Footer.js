import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    [t('footer.solutions.title')]: t('footer.solutions.links'),
    [t('footer.company.title')]: t('footer.company.links'),
    [t('footer.resources.title')]: t('footer.resources.links'),
    [t('footer.legal.title')]: t('footer.legal.links')
  };

  return (
    <footer className="bg-secondary-900 relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
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

                <p className="text-secondary-300 leading-relaxed max-w-md">
                  {t('hero.subtitle')}
                </p>

                {/* Social Links placeholder - could be added later */}
                <div className="flex space-x-4">
                  {/* Social media icons would go here */}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-white font-semibold text-lg">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
                        onClick={(e) => e.preventDefault()}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-secondary-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('footer.copyright')}
            </motion.p>

            <div className="flex items-center space-x-6 text-secondary-400 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                {t('footer.legal.links.0')}
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                {t('footer.legal.links.1')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;