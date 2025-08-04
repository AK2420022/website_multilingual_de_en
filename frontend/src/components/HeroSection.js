import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f"
          alt="Advanced Robotics Technology"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-blue-100/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
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
                <span>AI-Powered Robotics Revolution</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-secondary-900 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Transforming
                <span className="block gradient-text">Engineering</span>
                Robotics
                <span className="block text-primary-600">Ecosystems</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl text-secondary-600 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Discover the future of automation with our comprehensive robotics ecosystem. 
                We're revolutionizing industries with 
                AI-driven robotic solutions that adapt, learn, and excel.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 py-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-primary-100">
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-sm text-secondary-600">Industries Served</div>
                </div>
                <div className="text-center p-4 bg-success-50 backdrop-blur-sm rounded-xl border border-success-200">
                  <div className="text-3xl font-bold text-success-600">95%</div>
                  <div className="text-sm text-secondary-600">Efficiency Boost</div>
                </div>
                <div className="text-center p-4 bg-purple-50 backdrop-blur-sm rounded-xl border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-secondary-600">Autonomous Operation</div>
                </div>
              </motion.div>

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
                  <span>Explore Ecosystem</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <motion.button
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border border-primary-200 hover:bg-primary-50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('use-cases').scrollIntoView({ behavior: 'smooth' })}
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  <span>View Use Cases</span>
                </motion.button>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm border border-primary-100 p-4 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"
                    alt="Advanced Robotics Facility"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 p-4 bg-primary-100 border border-primary-200 rounded-2xl"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Zap className="h-8 w-8 text-primary-600" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 p-3 bg-primary-600 rounded-xl shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <div className="text-white font-bold text-sm">AI-Powered</div>
                  </motion.div>
                </div>

                {/* Background Decoration */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary-200/30 to-purple-200/30 rounded-3xl -z-10 blur-xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
