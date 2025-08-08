import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BookCheck, Hammer, Wrench } from 'lucide-react'; // Only import used icons
import { useTranslation } from 'react-i18next';

const EasyImplementationSection = () => {
  const { t, i18n } = useTranslation();
  const isGerman = i18n.language === 'de';

  // Get phases text only (no icons in JSON)
  const phases = t('easyImplementation.phases', { returnObjects: true });

  // Define icons & gradients in code (map by index)
  const icons = [BookCheck, Hammer, Wrench];
  const iconGradients = [
    ['from-blue-500', 'to-purple-500'],
    ['from-green-500', 'to-teal-500'],
    ['from-pink-500', 'to-red-500'],
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="easy-implementation" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Cpu className="h-4 w-4" />
            <span>{t('easyImplementation.badge')}</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            {t('easyImplementation.title')}
            <span className="block gradient-text">{t('easyImplementation.highlight')}</span>
          </h2>

          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            {t('easyImplementation.description')}
          </p>
        </motion.div>

        {/* Main Ecosystem Visual */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div
            className="relative arrow-path flex flex-col justify-between items-center"
            style={{
              backgroundImage: 'url("arrow-path.svg")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              height: '800px',
              backgroundColor: 'transparent',
            }}
          >
            <div className="space-y-4 max-w-2xl w-full">
              {phases.map((phase, index) => {
                const IconComponent = icons[index];
                const [fromColor, toColor] = iconGradients[index];

                return (
                  <motion.div
                    key={index}
                    className="h-100 p-8 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl hover-lift hover:bg-white/90 transition-all duration-300 hover:shadow-xl"
                    variants={itemVariants}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${fromColor} ${toColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 leading-none group-hover:text-blue-600 transition-colors duration-300">
                        {phase.title}
                      </h3>
                    </div>
                    <p
                      className={`text-secondary-600 ${
                        isGerman ? 'leading-snug text-sm' : 'leading-relaxed'
                      }`}
                      dangerouslySetInnerHTML={{ __html: phase.description }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-0 -mt-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-secondary-600 text-lg mb-8">{t('easyImplementation.cta.subtext')}</p>

          <motion.button
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const target = t('easyImplementation.cta.scrollTarget');
              document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>{t('easyImplementation.cta.text')}</span>
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EasyImplementationSection;

