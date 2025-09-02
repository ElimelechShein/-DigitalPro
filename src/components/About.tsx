import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  RocketLaunchIcon,
  HeartIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const features = [
    {
      icon: CodeBracketIcon,
      title: 'פיתוח מתקדם',
      description: 'טכנולוגיות חדישות ומתקדמות לביצועים מיטביים'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'עיצוב רספונסיבי',
      description: 'מותאם לכל המכשירים - מובייל, טאבלט ושולחן עבודה'
    },
    {
      icon: RocketLaunchIcon,
      title: 'ביצועים גבוהים',
      description: 'אתרים מהירים עם אופטימיזציה מושלמת למנועי חיפוש'
    },
    {
      icon: HeartIcon,
      title: 'שירות אישי',
      description: 'ליווי צמוד לאורך כל הפרויקט עם תמיכה מתמשכת'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            מי אנחנו?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">אני מפתח אתרים בוגר יחידה טכנולוגית בצה"ל, עם תשוקה גדולה לחדשנות וליצירת פתרונות דיגיטליים. את הידע והניסיון שרכשתי אני מביא לעולם העסקי, כדי לעזור לעסקים קטנים ובינוניים להקים נוכחות אונליין שמביאה תוצאות.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="צוות מקצועי"
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>

        

     





          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-right"
          >

             <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
            {" "}
              <span className="bg-gradient-to-l from-primary-600 to-accent-500 bg-clip-text text-transparent">
                
UpSites-Digital
              </span>{' '}
           
            </motion.h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              יוצרים פתרונות דיגיטליים מותאמים אישית
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">אני מאמין שאתר טוב לא חייב להיות מסובך – אלא פשוט, ברור ומותאם בדיוק לצרכים של העסק שלך.
בכל פרויקט אני משקיע מחשבה אמיתית בעיצוב, בביצועים ובחוויה של המשתמשים, כדי להבטיח אתר שנראה טוב וגם עובד בשבילך. </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 text-right"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;