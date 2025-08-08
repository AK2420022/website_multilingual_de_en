import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Factory, Heart, ArrowRight, PlayCircle, TrendingUp, Clock, Users, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UseCasesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const useCases = [
    {
      id: 'agriculture',
      icon: Sprout,
      title: 'Agriculture Transformation',
      subtitle: 'Agriculture',
      image: 'agri.png',
      description: 'Transform farming with AI-powered robots that monitor crops, optimize irrigation, and automate harvesting for maximum yield and sustainability.',
      benefits: [
        { icon: TrendingUp, text: '40% increase in crop yield', color: 'success' },
        { icon: Clock, text: '24/7 autonomous monitoring', color: 'primary' },
        { icon: Users, text: 'Reduced labor costs by 60%', color: 'purple' }
      ],
      features: [
        'Precision planting and seeding',
        'Real-time soil analysis',
        'Automated pest detection',
        'Weather-adaptive irrigation',
        'Crop health monitoring',
        'Predictive harvest timing'
      ],
      gradient: 'from-success-500 to-success-600',
      bgColor: 'from-success-50 to-success-100'
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Logistics Excellence',
      subtitle: 'Logistics',
      image: 'logistics.png',
      description: 'Revolutionize warehouse and logistics operations with intelligent robots that improve accuracy, minimize delays, and streamline material handling and fulfillment workflows.',
      benefits: [
        { icon: TrendingUp, text: '95% production efficiency', color: 'success' },
        { icon: Clock, text: 'Zero unplanned downtime', color: 'primary' },
        { icon: Users, text: 'Enhanced worker safety', color: 'purple' }
      ],
      features: [
        'Quality control automation',
        'Predictive maintenance',
        'Assembly line optimization',
        'Inventory management',
        'Safety protocol enforcement',
        'Real-time production analytics'
      ],
      gradient: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100'
    },
    {
      id: 'healthcare',
      icon: Compass,
      title: 'REks-I for Every Sector',
      subtitle: 'Discover More',
      image: 'more.png',
      description: 'From smart dispensing and packaging in pharmaceutical factories to intelligent inspection in construction — REks-I adapts seamlessly to complex, high-impact use cases across industries.',
      benefits: [
        { icon: TrendingUp, text: '99.7% surgical precision', color: 'success' },
        { icon: Clock, text: 'Continuous patient monitoring', color: 'primary' },
        { icon: Users, text: 'Improved patient outcomes', color: 'purple' }
      ],
      features: [
        'Minimally invasive surgery',
        'Patient rehabilitation support',
        'Medication delivery systems',
        'Vital signs monitoring',
        'Infection control protocols',
        'Telemedicine integration'
      ],
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
    <section id="use-cases" className="py-24 bg-gradient-to-br from-white to-blue-50">
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
            <PlayCircle className="h-4 w-4" />
            <span>Real-World Applications</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            Transforming
            <span className="block gradient-text">Every Industry</span>
          </h2>
                    
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            From agriculture and logistics to a wide range of other sectors, our robotics solutions help industries evolve — enabling smarter decisions and driving sustainable progress.
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
              <span>Learn More About {useCases[activeCase].title.split(' ')[0]}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
