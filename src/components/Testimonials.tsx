import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronRightIcon, ChevronLeftIcon, StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'משה כהן',
      position: 'מנכ"ל, חברת ייעוץ עסקי',
      content: 'הצוות הקצועי ביותר שעבדתי איתו. האתר החדש הביא לנו 300% יותר פניות מלקוחות פוטנציאליים. השירות מעולה והתוצאות מדברות בעד עצמן.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      company: 'קבוצת כהן'
    },
    {
      id: 2,
      name: 'שרה לוי',
      position: 'בעלת חנות אופנה',
      content: 'החנות האונליין שבנו איתם הגדילה את המכירות שלנו פי 5! המערכת קלה לתפעול והלקוחות אוהבים את חוויית הקנייה. ממליצה בחום!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      company: 'בוטיק שרה'
    },
    {
      id: 3,
      name: 'דוד רוזנברג',
      position: 'מנהל מערכות מידע',
      content: 'המערכת שפיתחו עבורנו חסכה לנו שעות עבודה רבות ושיפרה משמעותית את היעילות. הצוות מקצועי, זמין ותמיד מוכן לעזור.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      company: 'טכנולוגיות רוזנברג'
    },
    {
      id: 4,
      name: 'רחל גולדשטיין',
      position: 'מייסדת סטודיו עיצוב',
      content: 'האתר שקיבלתי הוא בדיוק מה שחלמתי עליו! עיצוב מודרני, מהיר וקל לשימוש. הלקוחות שלי מתרשמים וזה מוסיף ללי המון אמינות.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300',
      company: 'סטודיו גולד'
    },
    {
      id: 5,
      name: 'אבי שמעון',
      position: 'יועץ פיננסי',
      content: 'הפרויקט הושלם במהירות ובמקצועיות מרשימה. האתר עזר לי להגיע ללקוחות חדשים ולהציג את השירותים שלי בצורה מקצועית. תודה רבה!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      company: 'ייעוץ פיננסי שמעון'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו גאים בעבודה שלנו ובשביעות הרצון של הלקוחות
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-100 to-transparent rounded-tr-full"></div>
            
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center relative z-10"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic relative">
                <span className="text-6xl text-primary-200 absolute -top-4 -right-2">"</span>
                {testimonials[currentSlide].content}
                <span className="text-6xl text-primary-200 absolute -bottom-8 -left-2">"</span>
              </blockquote>
              
              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="text-right">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-primary-600 font-medium">
                    {testimonials[currentSlide].position}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group z-20"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group z-20"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          {[
            { number: '100+', label: 'פרויקטים מוצלחים' },
            { number: '98%', label: 'שביעות רצון לקוחות' },
            { number: '24/7', label: 'תמיכה טכנית' },
            { number: '5+', label: 'שנות ניסיון' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;