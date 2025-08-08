import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, User, Building, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    t('contact.industries.manufacturing'),
    t('contact.industries.automotive'),
    t('contact.industries.healthcare'),
    t('contact.industries.agriculture'),
    t('contact.industries.logistics'),
    t('contact.industries.construction'),
    t('contact.industries.other')
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        industry: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: t('contact.info.email'),
      description: 'Get in touch for inquiries'
    },
    {
      icon: MapPin,
      title: 'Our locations',
      info: 'Aachen, Germany',
      info2: 'Bangalore, India',      
      description: 'Innovation headquarters'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          alt="Technology Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <MessageSquare className="h-4 w-4" />
            <span>{t('contact.badge')}</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            {t('contact.title')}
            <span className="block gradient-text">{t('contact.titleYourBusiness')}</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">Let's Connect</h3>
              <p className="text-secondary-600 text-lg leading-relaxed">
                Our team of specialists is ready to help you explore the possibilities 
                of intelligent automation for your specific industry needs.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl hover-lift hover:bg-white/90 transition-all duration-300 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="p-3 bg-primary-600 rounded-xl">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-secondary-900 font-semibold text-lg">{contact.title}</h4>
                      <p className="text-primary-600 font-medium">{contact.info}</p>
                       {index === 1 ? (
            <p className="text-primary-600 font-medium">{contact.info2}</p>
          ) : (
            <p className="text-secondary-500 text-sm">{contact.description}</p>
          )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              className="p-6 bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-secondary-900 font-semibold text-lg mb-3">What to Expect</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                  <span className="text-secondary-700">Personalized consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                  <span className="text-secondary-700">Custom robotics solution assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                  <span className="text-secondary-700">ROI analysis and implementation roadmap</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white/90 backdrop-blur-sm border border-primary-100 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">Send Us a Message</h3>
                
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-secondary-700 text-sm font-medium mb-2">
                      {t('contact.form.fullName')} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-white border border-primary-200 rounded-xl text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder={t('contact.form.fullNamePlaceholder')}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-secondary-700 text-sm font-medium mb-2">
                      {t('contact.form.companyName')} *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-primary-200 rounded-xl text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      placeholder={t('contact.form.companyNamePlaceholder')}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-secondary-700 text-sm font-medium mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-11 pr-4 py-3 bg-white border border-primary-200 rounded-xl text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-secondary-700 text-sm font-medium mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-primary-200 rounded-xl text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-secondary-700 text-sm font-medium mb-2">
                    {t('contact.form.industry')} *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-primary-200 rounded-xl text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  >
                    <option value="">{t('contact.form.industryPlaceholder')}</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry} className="bg-white">
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-secondary-700 text-sm font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-primary-200 rounded-xl text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>{t('contact.form.submitting')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact.form.submit')}</span>
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              // Success Message
              <motion.div
                className="p-8 bg-white/90 backdrop-blur-sm border border-primary-100 rounded-3xl text-center shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-success-400 to-success-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <CheckCircle className="h-10 w-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-secondary-600 mb-8">
                  Thank you for reaching out to Reksai Robotics. We have received your inquiry and our team will be in touch with you soon.
                </p>
                
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-white border border-primary-200 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;