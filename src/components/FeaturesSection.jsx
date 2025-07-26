import { BookOpen, Brain, Users, TrendingUp, Shield, Clock, DotSquare } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FeaturesSection = () => {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: BookOpen,
      title: t('benefits.0'),
      description: "Master the fundamentals of Forex and Cryptocurrency trading with our simplified approach designed for beginners.",
      color: "blue"
    },
    {
      icon: Brain,
      title: t('benefits.1'),
      description: "Access cutting-edge AI-powered trading strategies that give you a competitive edge in the markets.",
      color: "purple"
    },
    {
      icon: Users,
      title: t('benefits.2'),
      description: "Join our active community of traders and receive continuous updates and support from experts.",
      color: "green"
    }
  ];

  const additionalFeatures = [
    {
      icon: TrendingUp,
      title: "Real-time Market Analysis",
      description: "Get instant market insights powered by AI algorithms",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Learn advanced risk management techniques to protect your capital",
      color: "red"
    },
    {
      icon: Clock,
      title: "24/7 Learning Access",
      description: "Study at your own pace with lifetime access to course materials",
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
      red: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
      indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
    };
    return colors[color] || colors.blue;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={headerVariants}
            >
              {t('features.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={headerVariants}
            >
              {t('features.subtitle')}
            </motion.p>
          </motion.div>

          {/* Main Features */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Features */}
          <motion.div 
            className="bg-gray-50 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                More Reasons to Join
              </h3>
              <p className="text-lg text-gray-600">
                Discover additional benefits that make our course stand out
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {additionalFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <motion.div 
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${getColorClasses(feature.color)}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

