import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BookCheck, Hammer, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const styles = `
  .arrow-path {
    position: relative;
    background-image: url("arrow-path.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 800px;
    background-color: transparent;
    overflow: visible;
    border-radius: inherit;
  }

  /* Shine stripe flowing left to right */
  .arrow-path::before {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: -50%;  /* start left outside */
    width: 50%;   /* narrow vertical stripe */
    pointer-events: none;
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.4) 50%,
      rgba(255,255,255,0.7) 60%,
      rgba(255,255,255,0.4) 70%,
      rgba(255,255,255,0) 100%
    );
    transform: skewX(-20deg);
    animation: shineMove 3s linear infinite;
    border-radius: inherit;
  }

  @keyframes shineMove {
    0% {
      transform: translateX(0) skewX(-20deg);
    }
    100% {
      transform: translateX(200%) skewX(-20deg);
    }
  }

  /* Icon pulse on hover */
  .phase-icon-wrapper {
    display: inline-block;
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  .phase-icon-wrapper:hover {
    transform: scale(1.15);
    filter: brightness(1.3);
  }

  /* CTA arrow pulse */
  .cta-arrow {
    display: inline-block;
    animation: pulseArrow 1.5s infinite ease-in-out;
  }
  @keyframes pulseArrow {
    0%, 100% { transform: translateX(0); opacity: 1; }
    50% { transform: translateX(6px); opacity: 0.7; }
  }
`;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// New pulse animation for the boxes
const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const EasyImplementationSection = () => {
  const { t, i18n } = useTranslation();
  const isGerman = i18n.language === 'de';

  const phases = t('easyImplementation.phases', { returnObjects: true });
  const icons = [BookCheck, Hammer, Wrench];
  const iconGradients = [
    ['from-blue-500', 'to-purple-500'],
    ['from-green-500', 'to-teal-500'],
    ['from-pink-500', 'to-red-500'],
  ];

  return (
    <>
      <style>{styles}</style>

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
            className="relative mb-20 arrow-path flex flex-col justify-between items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
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
                    animate={pulseAnimation}
                    whileHover={{ scale: 1.07 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`phase-icon-wrapper p-4 rounded-2xl bg-gradient-to-br ${fromColor} ${toColor} group-hover:scale-110 transition-transform duration-300`}
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
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center -mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-secondary-600 text-lg mb-4">{t('easyImplementation.cta.subtext')}</p>

            <motion.button
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 group cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const target = t('easyImplementation.cta.scrollTarget');
                document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>{t('easyImplementation.cta.text')}</span>
              <motion.span className="ml-2 cta-arrow" aria-hidden="true">
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EasyImplementationSection;

