import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Cog, Building2, Zap, Globe, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const styles = `
  @keyframes pulseGlow {
    0%, 100% {
      box-shadow: 0 0 15px 3px rgba(59, 130, 246, 0.5);
    }
    50% {
      box-shadow: 0 0 25px 8px rgba(59, 130, 246, 0.8);
    }
  }
`;

const EcosystemSection = () => {
  const { t } = useTranslation();

  const ecosystemFeatures = [
    {
      icon: Brain,
      title: t('ecosystem.features.productivity.title'),
      description: t('ecosystem.features.productivity.description'),
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: Cog,
      title: t('ecosystem.features.enterprise.title'),
      description: t('ecosystem.features.enterprise.description'),
      gradient: "from-success-500 to-success-600"
    },
    {
      icon: Building2,
      title: t('ecosystem.features.modular.title'),
      description: t('ecosystem.features.modular.description'),
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: t('ecosystem.features.analytics.title'),
      description: t('ecosystem.features.analytics.description'),
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: t('ecosystem.features.cloud.title'),
      description: t('ecosystem.features.cloud.description'),
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Factory,
      title: t('ecosystem.features.agnostic.title'),
      description: t('ecosystem.features.agnostic.description'),
      gradient: "from-purple-500 to-pink-500"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <>
      <style>{styles}</style>

      <section id="ecosystem" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
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
              <Cpu className="h-4 w-4" />
              <span>{t('ecosystem.badge')}</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
              {t('ecosystem.title')}
              <span className="block gradient-text">{t('ecosystem.subtitle')}</span>
            </h2>

            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed mb-12">
              {t('ecosystem.description')}
            </p>
          </motion.div>

          {/* Sleek highlighted foreground image BELOW the intro */}
          <motion.img
            src="/bg_ecosystem.jpg"
            alt="Ecosystem visual"
            className="mx-auto mb-16 w-4/5 max-h-[40rem] object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
            transition={{ duration: 1.5, ease: "easeOut", type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              filter: 'brightness(1) contrast(1.05) saturate(1.1)',
              boxShadow: '0 0 25px 8px rgba(59, 130, 246, 0.6)',
              borderRadius: '1rem',
              border: '3px solid',
              borderImageSlice: 1,
              borderImageSource: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              animation: 'pulseGlow 3s ease-in-out infinite',
            }}
          />

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ecosystemFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                >
                  <div className="h-full p-8 bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl hover-lift hover:bg-white/90 transition-all duration-300 hover:shadow-xl">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default EcosystemSection;

