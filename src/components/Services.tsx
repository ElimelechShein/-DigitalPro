import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { 
  GlobeAltIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: GlobeAltIcon,
      title: 'אתרי תדמית',
      description: 'אתרים מקצועיים ומעוצבים שמציגים את העסק שלכם בצורה הטובה ביותר',
      features: ['עיצוב מותאם אישית', 'אופטימיזציה לטלפון נייד', 'ממשק ניהול פשוט'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ShoppingCartIcon,
      title: 'אתרי מסחר',
      description: 'חנויות אונליין מלאות עם מערכות תשלום ומלאי מתקדמות',
      features: ['מערכת הזמנות', 'ממשק תשלומים מאובטח', 'ניהול מלאי אוטומטי'],
      color: 'from-emerald-500 to-emerald-600'
    },
    // {
    //   icon: MagnifyingGlassIcon,
    //   title: 'קידום אורגני SEO',
    //   description: 'שיפור דירוג האתר בגוגל והגדלת התנועה האורגנית',
    //   features: ['אופטימיזציה טכנית', 'תוכן מקצועי', 'דוחות ביצועים'],
    //   color: 'from-purple-500 to-purple-600'
    // },
    {
      icon: PaintBrushIcon,
      title: 'עיצוב UI/UX',
      description: 'עיצוב חוויות משתמש מעולות וממשקים אינטואיטיביים',
      features: ['מחקר משתמשים', 'עיצוב אינטראקטיבי', 'בדיקות שימושיות'],
      color: 'from-pink-500 to-pink-600'
    },
    // {
    //   icon: DevicePhoneMobileIcon,
    //   title: 'אפליקציות מובייל',
    //   description: 'פיתוח אפליקציות מובייל מתקדמות לאנדרואיד ו-iOS',
    //   features: ['פיתוח חוצה פלטפורמות', 'עיצוב אטרקטיבי', 'ביצועים מהירים'],
    //   color: 'from-orange-500 to-orange-600'
    // },
    // {
    //   icon: CogIcon,
    //   title: 'תחזוקה ותמיכה',
    //   description: 'שירותי תחזוקה שוטפים ותמיכה טכנית מקצועית',
    //   features: ['עדכונים אבטחה', 'גיבויים אוטומטיים', 'תמיכה 24/7'],
    //   color: 'from-gray-500 to-gray-600'
    // }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            השירותים שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מגוון רחב של פתרונות דיגיטליים מותאמים לכל סוג עסק
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-right group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-end text-sm text-gray-500">
                    <span>{feature}</span>
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-6 bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
              >
                בקש פרטים נוספים
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;