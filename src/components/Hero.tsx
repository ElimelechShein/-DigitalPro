import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, PlayIcon } from '@heroicons/react/24/outline';
import img from '../../pablic/images/אניבשחור.jpg'
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              בונים נוכחות{' '}
              <span className="bg-gradient-to-l from-primary-600 to-accent-500 bg-clip-text text-transparent">
                דיגיטלית
              </span>{' '}
              שמביאה תוצאות
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              אתרי תדמית ומסחר מעוצבים ומותאמים למובייל — מהיר, מקצועי וממוקד מטרה. 
              אנחנו כאן כדי להפוך את החזון הדיגיטלי שלך למציאות.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-gradient-to-l from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                קבל הצעת מחיר
                <ArrowLeftIcon className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-primary-500 hover:text-primary-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PlayIcon className="w-5 h-5" />
                למידע נוסף
              </motion.button>
            </motion.div>
            
      
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              {[
                { number: '100+', label: 'פרויקטים' },
                { number: '98%', label: 'שביעות רצון' },
                { number: '5+', label: 'שנות ניסיון' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>
          
          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* <div className="relative w-full">
 <img
                src="../../pablic/images/בשירות.jpg"
                alt="פיתוח אתרים מקצועי"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded-lg">
      פיתוח אתרים מקצועי
    </p>
  </div>
</div> */}

            <div className="relative z-10">
              <img
                src="../../pablic/images/בשירות.jpg"
                alt="פיתוח אתרים מקצועי"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />

              <div className="absolute inset-20   flex items-end justify-items-start">
    <p className="text-white text-1xl font-bold bg-black/50 px-4 py-2 rounded-lg">
     אני בהצגת מוצר טכנולוגי במהלך השירות
    </p>
  </div>
             
              {/* Floating cards */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-4 max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">אתר חדש עלה לאוויר!</span>
                </div>
              </motion.div> */}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl shadow-xl p-4 max-w-xs"
              >
                <div className="text-2xl font-bold mb-1">24 ש'</div>
                <div className="text-sm opacity-90">תמיכה טכנית</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;