import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useInView } from '../hooks/useInView';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import emailjs from "emailjs-com";
interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  privacy: boolean;
}

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const subjects = [
    'פיתוח אתר תדמית',
    'פיתוח חנות אונליין',
    'אפליקציית מובייל',
    // 'קידום אורגני SEO',
    'עיצוב UI/UX',
    'תחזוקה ותמיכה',
    'אחר'
  ];

  const whatsappNumber = '972547648848'; // Replace with your actual number
  const whatsappMessage = 'שלום! אני מעוניין לקבל מידע על פיתוח אתר';

  // const onSubmit = async (data: FormData) => {
  //   setIsSubmitting(true);
    
  //   try {
  //     // Simulate API call - replace with actual endpoint
  //     await new Promise(resolve => setTimeout(resolve, 2000));
      
  //     // Here you would typically send data to your backend
  //     console.log('Form data:', data);
      
  //     setSubmitStatus('success');
  //     reset();
  //   } catch (error) {
  //     setSubmitStatus('error');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };


   // 👈 תתקין עם: npm install emailjs-com

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  try {
    await emailjs.send(
        "service_1vne0l4"   // מזהה השירות  "YOUR_SERVICE_ID"
     ,
        "template_5urrvko" // מזהה התבנית "YOUR_TEMPLATE_ID" 
      ,
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        privacy: data.privacy ? "מאושר" : "לא מאושר"
      },
       "SvWAaJTqqrv6Le2ZK"    // המפתח הציבורי שלך "YOUR_PUBLIC_KEY"
    );

    setSubmitStatus("success");
    reset();
  } catch (error) {
    console.error("שגיאה בשליחת המייל:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            בואו נתחיל לעבוד יחד
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מוכנים להפוך את הרעיון שלכם למציאות? צרו איתנו קשר ונתחיל לבנות את הפרויקט הבא שלכם
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              פרטי התקשרות
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-end gap-4">
                <div>
                  <div className="font-semibold text-gray-900">טלפון</div>
                  <div className="text-gray-600">054-764-8848</div>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              
              <div className="flex items-center justify-end gap-4">
                <div>
                  <div className="font-semibold text-gray-900">אימייל</div>
                  <div className="text-gray-600">e0527102442@gmail.com</div>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              
              <div className="flex items-center justify-end gap-4">
                <div>
                  <div className="font-semibold text-gray-900">כתובת</div>
                  <div className="text-gray-600"> חלקיה - 7 , בית שמש</div>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-8 w-full flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
              </svg>
              שוחח איתנו בוואטסאפ
            </motion.button>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4">למה לבחור בנו?</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                {/* <li className="flex items-center justify-end gap-2">
                  <span>ניסיון של מעל 5 שנים בתחום</span>
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                </li> */}
                <li className="flex items-center justify-end gap-2">
                  <span>תמיכה וליווי לאורך כל הדרך</span>
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>מחירים הוגנים ושקופות מלאה</span>
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>אחריות מלאה על העבודה</span>
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-right">
                שלחו לנו הודעה
              </h3>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                >
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div className="text-green-700">
                    <strong>ההודעה נשלחה בהצלחה!</strong>
                    <p className="text-sm mt-1">נחזור אליכם תוך 24 שעות</p>
                  </div>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                >
                  <ExclamationTriangleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div className="text-red-700">
                    <strong>אירעה שגיאה</strong>
                    <p className="text-sm mt-1">אנא נסו שוב או צרו קשר בטלפון</p>
                  </div>
                </motion.div>
              )}
              
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'שם מלא הוא שדה חובה' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-right"
                    placeholder="הזן את שמך המלא"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    כתובת אימייל *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'כתובת אימייל היא שדה חובה',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'כתובת אימייל לא תקינה'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-right"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    מספר טלפון
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-right"
                    placeholder="050-123-4567"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    נושא *
                  </label>
                  <select
                    {...register('subject', { required: 'אנא בחר נושא' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-right"
                  >
                    <option value="">בחר נושא</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    הודעה *
                  </label>
                  <textarea
                    {...register('message', { 
                      required: 'הודעה היא שדה חובה',
                      minLength: { value: 10, message: 'ההודעה חייבת להכיל לפחות 10 תווים' }
                    })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-right resize-none"
                    placeholder="ספר לנו על הפרויקט שלך..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.message.message}</p>
                  )}
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-center justify-end gap-3">
                  <label className="text-sm text-gray-600 cursor-pointer">
                    אני מסכים לתנאי הגנת הפרטיות ולקבלת עדכונים *
                  </label>
                  <input
                    type="checkbox"
                    {...register('privacy', { required: 'יש לאשר את תנאי הגנת הפרטיות' })}
                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                </div>
                {errors.privacy && (
                  <p className="text-red-500 text-sm text-right">{errors.privacy.message}</p>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-l from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;