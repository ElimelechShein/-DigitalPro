import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // {
    //   name: 'פייסבוק',
    //   href: '#',
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    //     </svg>
    //   )
    // },
    // {
    //   name: 'אינסטגרם',
    //   href: '#',
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.182 18.635L1.238 16.69l2.944-1.944A4.95 4.95 0 016.479 11.423c0-2.739 2.211-4.95 4.95-4.95s4.95 2.211 4.95 4.95-2.211 4.95-4.95 4.95c-.68 0-1.33-.138-1.921-.387l-1.059 1.002zm7.83-5.565c0-1.297-.49-2.448-1.297-3.323L16.926 6.156L18.87 8.1l-1.944 2.944A4.95 4.95 0 0114.603 13.367c-2.739 0-4.95-2.211-4.95-4.95s2.211-4.95 4.95-4.95 4.95 2.211 4.95 4.95c0 .68-.138 1.33-.387 1.921l1.002 1.059z"/>
    //     </svg>
    //   )
    // },
    {
      name: 'לינקדאין',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: 'בית', href: '#hero' },
    { name: 'אודות', href: '#about' },
    { name: 'שירותים', href: '#services' },
    // { name: 'פרויקטים', href: '#portfolio' },
    // { name: 'לקוחות', href: '#testimonials' },
    { name: 'יצירת קשר', href: '#contact' }
  ];

  const services = [
    'אתרי תדמית',
    'אתרי מסחר',
    // 'אפליקציות מובייל',
    // 'קידום אורגני SEO',
    'עיצוב UI/UX',
    'תחזוקה ותמיכה'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-right">
            <div className="flex items-center justify-end mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold">DigitalPro</span>
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center ml-3">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              אנחנו צוות מקצועי המתמחה בפיתוח פתרונות דיגיטליים מתקדמים. 
              המטרה שלנו היא להפוך את הרעיון שלכם למציאות מרשימה.
            </p>
            <div className="flex space-x-4 space-x-reverse justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-6">קישורים מהירים</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-6">השירותים שלנו</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-white transition-colors duration-300 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-6">פרטי התקשרות</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-end gap-3">
                <span className="text-gray-300">054-764-8848</span>
                <div className="w-5 h-5 text-primary-400">📞</div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-gray-300">E0527102442@Gmail.com</span>
                <div className="w-5 h-5 text-primary-400">✉️</div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-gray-300">רחוב חלקיה 7,  בית שמש</span>
                <div className="w-5 h-5 text-primary-400">📍</div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            {/* <div className="mt-8">
              <h4 className="text-md font-semibold mb-4">הירשם לעדכונים</h4>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                >
                  הרשמה
                </motion.button>
                <input
                  type="email"
                  placeholder="הכנס אימייל"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-right focus:outline-none focus:border-primary-500 transition-colors duration-300"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-right">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 order-2 md:order-1">
              <button
                onClick={() => scrollToSection('#hero')}
                className="hover:text-white transition-colors duration-300 ml-6"
              >
                מדיניות פרטיות
              </button>
              <button
                onClick={() => scrollToSection('#hero')}
                className="hover:text-white transition-colors duration-300"
              >
                תנאי שימוש
              </button>
            </div>
            <div className="text-gray-400 text-sm order-1 md:order-2">
              © {currentYear} DigitalPro. כל הזכויות שמורות.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;