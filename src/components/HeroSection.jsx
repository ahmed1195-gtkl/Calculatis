import { ArrowRight, TrendingUp, Brain, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

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

  const dashboardVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  variants={itemVariants}
                >
                  <Brain className="w-4 h-4 mr-2" />
                  {t('hero.subtitle')}
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  variants={itemVariants}
                >
                  {t('title')}
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                  variants={itemVariants}
                >
                  {t('description')}
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-500 leading-relaxed max-w-2xl"
                  variants={itemVariants}
                >
                  {t('hero.description')}
                </motion.p>
              </div>

              {/* CTA Button */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t('cta')}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
                variants={itemVariants}
              >
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-500">Students</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div 
              className="relative"
              variants={dashboardVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="relative z-10 bg-white rounded-2xl shadow-2xl p-8"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Trading Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <motion.div 
                        className="w-3 h-3 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      ></motion.div>
                      <span className="text-sm text-green-600">Live</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="bg-green-50 p-4 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-green-800">Profit</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600 mt-2">+$2,450</div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-blue-50 p-4 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center space-x-2">
                        <Brain className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">AI Score</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mt-2">92%</div>
                    </motion.div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Portfolio Performance</span>
                      <span className="text-sm text-green-600">+15.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 1 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Background decorations */}
              <motion.div 
                className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 20,
                  ease: "linear"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 25,
                  ease: "linear"
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

