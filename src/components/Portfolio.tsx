import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'אתר תדמית לחברת ייעוץ',
      category: 'אתר תדמית',
      description: 'אתר מקצועי ומעוצב לחברת ייעוץ עסקי עם מערכת קביעת פגישות ומערכת ניהול לקוחות.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      details: 'פרויקט מקיף שכלל עיצוב UI/UX מקצועי, פיתוח frontend ו-backend, אינטגרציה עם מערכת CRM ואופטימיזציה לקידום אורגני. האתר כולל ממשק ניהול מתקדם וחוויית משתמש מעולה.'
    },
    {
      id: 2,
      title: 'חנות אונליין לאופנה',
      category: 'אתר מסחר',
      description: 'חנות אונליין מלאה עם מערכת תשלומים, ניהול מלאי ופאנל ניהול מתקדם.',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      details: 'פלטפורמת מסחר אלקטרוני מתקדמת עם מערכת ניהול מלאי אוטומטית, אינטגרציה עם שירותי תשלום מובילים, ומערכת ניהול הזמנות מקצועית. האתר כולל גם מערכת המלצות אישיות וחוויית קנייה מותאמת.'
    },
    {
      id: 3,
      title: 'אפליקציית מובייל לשירותים',
      category: 'אפליקציה',
      description: 'אפליקציה מתקדמת להזמנת שירותים עם מערכת הזמנות ותשלומים מובנית.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps'],
      liveUrl: '#',
      details: 'אפליקציה חוצה פלטפורמות המאפשרת להזמין שירותים בקלות, עם מעקב בזמן אמת, מערכת דירוגים וביקורות, ואינטגרציה עם מפות גוגל למיקום מדויק. האפליקציה כוללת גם מערכת התראות חכמות.'
    },
    {
      id: 4,
      title: 'פלטפורמת למידה דיגיטלית',
      category: 'פלטפורמה',
      description: 'מערכת למידה מקוונת עם וידאו שיעורים, בחנים ומעקב התקדמות.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      liveUrl: '#',
      details: 'פלטפורמה חינוכית מקיפה הכוללת מערכת ניהול תוכן לימודי, כלי אינטראקציה בין תלמידים ומורים, מערכת בחנים ומטלות, ודוחות התקדמות מפורטים. הפלטפורמה תומכת בשיעורים חיים ושיעורים מוקלטים.'
    },
    {
      id: 5,
      title: 'דשבורד ניתוח נתונים',
      category: 'מערכת ניהול',
      description: 'מערכת דוחות וניתוח נתונים מתקדמת עם ויזואליזציות אינטראקטיביות.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      liveUrl: '#',
      details: 'דשבורד מתקדם לניתוח נתונים עסקיים עם גרפים ותרשימים אינטראקטיביים, מערכת התראות חכמות, ויכולות ניתוח מתקדמות. המערכת כוללת ממשקי API לחיבור למקורות נתונים שונים ויצוא דוחות.'
    },
    {
      id: 6,
      title: 'אתר קהילתי וחברתי',
      category: 'פלטפורמה',
      description: 'רשת חברתית מתמחה עם פורומים, מערכת הודעות וכלי שיתוף תוכן.',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Express.js', 'Socket.io', 'Redis'],
      liveUrl: '#',
      details: 'פלטפורמה חברתית מתקדמת עם מערכת הודעות בזמן אמת, פורומים מקצועיים, מערכת חברויות וכלי שיתוף תוכן מולטימדיה. הפלטפורמה כוללת מערכת מודרציה אוטומטית ויכולות התאמה אישית רחבות.'
    }
  ];

  const categories = ['הכל', 'אתר תדמית', 'אתר מסחר', 'אפליקציה', 'פלטפורמה', 'מערכת ניהול'];
  const [activeCategory, setActiveCategory] = useState('הכל');

  const filteredProjects = activeCategory === 'הכל' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            הפרויקטים שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            מבחר מפרויקטים מוצלחים שביצענו עבור לקוחותינו
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 justify-end">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center justify-end gap-1 group">
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  צפה בפרויקט
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                      >
                        <XMarkIcon className="w-6 h-6" />
                      </button>
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-primary-600 text-white text-sm px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 text-right">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h2>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {project.details}
                      </p>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          טכנולוגיות בשימוש:
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4 justify-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-l from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                          צפה באתר החי
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setSelectedProject(null);
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-all duration-300"
                        >
                          בקש פרויקט דומה
                        </motion.button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;