import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bell, FileText, Download, ArrowRight, Calendar } from 'lucide-react';
import { getRecentNotifications } from '@/data/notifications';

const categoryColors: Record<string, string> = {
  general: 'bg-gray-100 text-gray-700',
  examination: 'bg-red-100 text-red-700',
  academic: 'bg-blue-100 text-blue-700',
  admission: 'bg-green-100 text-green-700',
  event: 'bg-purple-100 text-purple-700',
};

const NotificationsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const recentNotifications = getRecentNotifications(5);

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-kits">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Notifications list */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-between mb-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 text-secondary-text text-xs font-nav tracking-widest uppercase mb-2">
                  <span className="w-6 h-px bg-gold" />
                  Notifications
                </div>
                <h2 className="section-title text-2xl">Notification Center</h2>
              </div>
              <Link
                to="/academics/exam-notifications"
                className="hidden sm:flex items-center gap-1 text-sm text-royal hover:text-gold transition-colors font-nav font-medium"
              >
                View All <ArrowRight size={13} />
              </Link>
            </motion.div>

            <div className="space-y-3">
              {recentNotifications.map((notif, i) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-gray-100 shadow-premium p-4 hover:border-gold/40 hover:shadow-card-hover transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-light-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bell size={14} className="text-royal" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-nav font-semibold px-2 py-0.5 capitalize ${categoryColors[notif.category]}`}>
                          {notif.category}
                        </span>
                        {notif.isArchived && (
                          <span className="text-xs text-secondary-text bg-gray-100 px-2 py-0.5 font-nav">
                            Historical
                          </span>
                        )}
                      </div>
                      <h3 className="font-nav font-medium text-primary-text text-sm leading-snug mb-1 group-hover:text-royal transition-colors">
                        {notif.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-xs text-secondary-text font-nav">
                          <Calendar size={11} />
                          {new Date(notif.date).toLocaleDateString('en-IN', {
                            day: 'numeric', month: 'long', year: 'numeric'
                          })}
                        </span>
                        {notif.pdfUrl && (
                          <a
                            href={notif.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-royal hover:text-gold transition-colors"
                          >
                            <Download size={11} /> Download
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/academics/exam-notifications"
              className="sm:hidden mt-4 inline-flex items-center gap-1 text-sm text-royal hover:text-gold transition-colors font-nav font-medium"
            >
              View All Notifications <ArrowRight size={13} />
            </Link>
          </div>

          {/* Admission sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-secondary-text text-xs font-nav tracking-widest uppercase mb-2">
                <span className="w-6 h-px bg-gold" />
                Quick Links
              </div>
              <h2 className="section-title text-2xl">Academic Resources</h2>
            </div>

            {/* Quick access cards */}
            <div className="space-y-3">
              {[
                { label: 'Syllabus Download', href: '/academics/syllabus', icon: FileText },
                { label: 'Academic Calendar', href: '/academics/calendar', icon: Calendar },
                { label: 'Model Question Papers', href: '/academics/model-papers', icon: FileText },
                { label: 'Regulations', href: '/academics/regulations', icon: FileText },
                { label: 'Exam Notifications', href: '/academics/exam-notifications', icon: Bell },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-100 shadow-premium hover:border-gold/40 hover:shadow-card-hover transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 bg-light-blue flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <item.icon size={16} className="text-royal group-hover:text-gold transition-colors" />
                    </div>
                    <span className="text-sm font-nav font-medium text-primary-text group-hover:text-royal transition-colors flex-1">
                      {item.label}
                    </span>
                    <ArrowRight size={13} className="text-secondary-text group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Admission CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 bg-gradient-to-br from-navy to-royal p-6 text-white"
            >
              <h3 className="font-heading font-bold text-lg mb-2">Admissions Open</h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Join KITS for a transformative educational experience. Applications for B.Tech, M.Tech, and Diploma programmes are open.
              </p>
              <Link
                to="/admissions/enquiry"
                className="inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 font-nav font-semibold text-sm hover:bg-gold/90 transition-colors w-full justify-center"
              >
                Enquire Now <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
