import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Cpu, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  PlayCircle,
  Sparkles,
  Brain,
  Cog,
  Heart
} from 'lucide-react';
import HeroSection from './HeroSectionSimple';
import EcosystemSection from './EcosystemSection';
import UseCasesSection from './UseCasesSection';
import ContactSection from './ContactSection';
import Navigation from './Navigation';
import Footer from './Footer';
import EasyImplementationSection from './EasyImplementation';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-secondary-900 font-medium">Loading Reksai Robotics...</span>
        </div>
      </div>
    );
  }
    
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      <HeroSection />
      <EcosystemSection />
      <EasyImplementationSection />
      <UseCasesSection />      
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
