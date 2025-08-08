import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Factory, Heart, ArrowRight, PlayCircle, TrendingUp, Clock, Users, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UseCasesSection = () => {
  const [activeCase, setActiveCase] = useState(0);
  const { t } = useTranslation();

  const useCases = [
    {
      id: 'agriculture',
      icon: Sprout,
      title: t('useCases.agriculture.title'),
      subtitle: t('useCases.agriculture.subtitle'),
      image: 'agri.png',
      description: t('useCases.agriculture.description'),
      benefits: [
        { icon: TrendingUp, text: t('useCases.agriculture.benefits.yield'), color: 'success' },
        { icon: Clock, text: t('useCases.agriculture.benefits.monitoring'), color: 'primary' },
        { icon: Users, text: t('useCases.agriculture.benefits.labor'), color: 'purple' }
      ],
      features: t('useCases.agriculture.features', { returnObjects: true }),
      gradient: 'from-success-500 to-success-600',
      bgColor: 'from-success-50 to-success-100'
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: t('useCases.logistics.title'),
      subtitle: t('useCases.logistics.subtitle'),
      image: 'logistics.png',
      description: t('useCases.logistics.description'),
      benefits: [
        { icon: TrendingUp, text: t('useCases.logistics.benefits.efficiency'), color: 'success' },
        { icon: Clock, text: t('useCases.logistics.benefits.downtime'), color: 'primary' },
        { icon: Users, text: t('useCases.logistics.benefits.safety'), color: 'purple' }
      ],
      features: t('useCases.logistics.features', { returnObjects: true }),
      gradient: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100'
    },
    {
      id: 'healthcare',
      icon: Compass,
      title: t('useCases.more.title'),
      subtitle: t('useCases.more.subtitle'),
      image: 'more.png',
      description: t('useCases.more.description'),
      benefits: [
        { icon: TrendingUp, text: t('useCases.more.benefits.precision'), color: 'success' },
        { icon: Clock, text: t('useCases.more.benefits.monitoring'), color: 'primary' },
        { icon: Users, text: t('useCases.more.benefits.outcomes'), color: 'purple' }
      ],
      features: t('useCases.more.features', { returnObjects: true }),
      gradient: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="use-cases" className="min-h-screen py-36 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-sm font-medium text-primary-600 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PlayCircle className="h-4 w-4" />
            <span>{t('useCases.badge')}</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            {t('useCases.title')}
            <span className="block gradient-text">{t('useCases.subtitle')}</span>
          </h2>
                    
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            {t('useCases.description')}
          </p>
        </motion.div>

        {/* Use Case Tabs */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl p-2 shadow-lg">
            <div className="flex space-x-2">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <button
                    key={useCase.id}
                    onClick={() => setActiveCase(index)}
                    className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeCase === index
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'text-secondary-600 hover:text-secondary-900 hover:bg-primary-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="hidden sm:block">{useCase.subtitle}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Active Use Case Content */}
        <motion.div
          key={activeCase}
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-primary-100 shadow-xl">
                <img
                  src={useCases[activeCase].image}
                  alt={useCases[activeCase].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${useCases[activeCase].gradient} rounded-xl text-white font-semibold shadow-lg`}>
                    {React.createElement(useCases[activeCase].icon, { className: "h-5 w-5" })}
                    <span>{useCases[activeCase].subtitle}</span>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${useCases[activeCase].bgColor} rounded-3xl blur-2xl opacity-30 -z-10`} />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                {useCases[activeCase].title}
              </h3>
              <p className="text-xl text-secondary-600 leading-relaxed">
                {useCases[activeCase].description}
              </p>
            </div>

            {/* CTA */}
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <span>{t('useCases.learnMore')} {useCases[activeCase].title.split(' ')[0]}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;

