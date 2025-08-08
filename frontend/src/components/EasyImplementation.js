import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Cog, Shield, Zap, Globe, Users, CheckCircle, Building2, Factory, BookCheck, Hammer, Wrench} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EasyImplementationSection = () => {
  const { t } = useTranslation();

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
            <span>{t('implementation.badge')}</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            {t('implementation.title')}
            <span className="block gradient-text">{t('implementation.titlePowerful')}</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            {t('implementation.subtitle')}
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
                 
<div className="relative arrow-path flex flex-col justify-between items-center"
style={{
    backgroundImage: 'url("arrow-path.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    height: '800px',
    backgroundColor: 'transparent', // Optional: ensure transparency    
  }}> 
<div className="space-y-4">
  
  
  <div className="h-100 p-8 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl hover-lift hover:bg-white/90 transition-all duration-300 hover:shadow-xl">
<div className="flex items-center gap-4 mb-6">
  {/* Icon with gradient background */}
  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
    <BookCheck className="h-8 w-8 text-white" />
  </div>

  {/* Text on white background */}
  <h3 className="text-2xl font-bold text-gray-800 leading-none group-hover:text-blue-600 transition-colors duration-300">
    {t('implementation.step1.title')}
  </h3>
</div>
 <p className="text-secondary-600 leading-relaxed">
        {t('implementation.step1.description')}
    </p>
  </div>

  <div className="h-100 p-8 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl hover-lift hover:bg-white/90 transition-all duration-300 hover:shadow-xl">
<div className="flex items-center gap-4 mb-6">
  {/* Icon with gradient background */}
  <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 group-hover:scale-110 transition-transform duration-300">
    <Hammer className="h-8 w-8 text-white" />
  </div>

  {/* Text on white background */}
  <h3 className="text-2xl font-bold text-gray-800 leading-none group-hover:text-blue-600 transition-colors duration-300">
    {t('implementation.step2.title')}
  </h3>
</div>
 <p className="text-secondary-600 leading-relaxed">
        {t('implementation.step2.description')}
    </p>
  </div>  

  <div className="h-100 p-8 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl hover-lift hover:bg-white/90 transition-all duration-300 hover:shadow-xl">
<div className="flex items-center gap-4 mb-6">
  {/* Icon with gradient background */}
  <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 group-hover:scale-110 transition-transform duration-300">
    <Wrench className="h-8 w-8 text-white" />
  </div>

  {/* Text on white background */ 
  <h3 className="text-2xl font-bold text-gray-800 leading-none group-hover:text-blue-600 transition-colors duration-300">
    {t('implementation.step3.title')}
  </h3>
</div>                   
    <p className="text-secondary-600 leading-relaxed">
        {t('implementation.step3.description')}
    </p>
  </div>    
</div> 
 
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-secondary-600 text-lg mb-8">
            To know more about REks-I
          </p>
          
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <span>{t('implementation.getStarted')}</span>
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