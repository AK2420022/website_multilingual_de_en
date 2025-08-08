import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Sparkles, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f"
          alt="Advanced Robotics Technology"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-blue-100/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-sm font-medium text-primary-600"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4" />
                <span>{t('hero.badge')}</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-secondary-900 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {t('hero.title')}
                <span className="block gradient-text"> {t('hero.subtitle1')}</span>
                <span className="block text-primary-600"> {t('hero.subtitle2')}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl text-secondary-600 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t('hero.description')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.button
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('ecosystem').scrollIntoView({ behavior: 'smooth' })}                                    
                >
                  <span>{t('hero.exploreEcosystem')}</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <motion.button
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border border-primary-200 hover:bg-primary-50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('use-cases').scrollIntoView({ behavior: 'smooth' })}                  
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  <span>{t('hero.viewUseCases')}</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Visual Elements */}
<div className="relative h-full flex items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {/* Main Image */}
                  <img
                    src="website_image_1_trans.png"
                    alt="Advanced Robotics Facility"
                    className="w-full object-contain rounded-2xl"
                  />
                  
                  {/* Floating Badge */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
