import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t } = useTranslation();
  
  const footerLinks = {
    'Solutions': [
      'Agriculture Robotics',
      'Manufacturing Automation',
      'Healthcare Innovation',
      'Custom Solutions'
    ],
    'Company': [
      'About Us',
      'Our Team',
      'Careers',
      'Press & Media'
    ],
    'Resources': [
      'Documentation',
      'Case Studies',
      'Blog',
      'Support Center'
    ],
    'Legal': [
      'Privacy Policy',
      'Terms of Service',
      'Security',
      'Compliance'
    ]
  };

  return (
   <footer className="bg-secondary-900 relative overflow-hidden">
  {/* Background Pattern */}

  {/* Bottom Bar */}
  <div className="border-t border-secondary-700 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        
        {/* Left: Links */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <motion.a
            href="/privacy.html"
            className="text-secondary-400 text-sm hover:underline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('footer.dataPrivacy')}
          </motion.a>

          <motion.a
            href="/security.html"
            className="text-secondary-400 text-sm hover:underline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('footer.security')}
          </motion.a>
        </div>

        {/* Center: Language Switcher */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <LanguageSwitcher variant="buttons" />
        </motion.div>

        {/* Right: Copyright */}
        <motion.p
          className="text-secondary-400 text-sm text-center lg:text-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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