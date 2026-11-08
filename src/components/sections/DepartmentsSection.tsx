import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, Award, BookOpen } from 'lucide-react';
import { departments } from '@/data/departments';
import KitsImage from '@/components/common/KitsImage';

const DepartmentsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-light-blue/70" ref={ref}>
      <div className="container-kits">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-secondary-text text-xs font-nav tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-gold" />
            Specialized Engineering Schools
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="section-title mb-4">
            9 Departments of <span className="text-royal">Academic Excellence</span>
          </h2>
          <div className="gold-divider-center mb-5" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Each department is powered by dedicated faculty, accredited laboratories, specialized software, and outcome-oriented curricula aligned with autonomous JNTUK guidelines.
          </p>
        </motion.div>

        {/* 9 Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-white border border-slate-200/80 rounded-sm shadow-premium hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Department Image - Authentic distinctive photo */}
              <div className="relative overflow-hidden aspect-[4/3] bg-navy-900">
                <KitsImage
                  src={dept.imageUrl}
                  alt={`${dept.name} laboratory and faculty at KITS Divili`}
                  category="laboratory"
                  aspectRatio="4:3"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top left: Department Short Code Badge */}
                <div
                  className="absolute top-3.5 left-3.5 text-white text-[11px] font-nav font-bold tracking-widest uppercase px-3 py-1 rounded shadow-md border border-white/20"
                  style={{ backgroundColor: dept.color }}
                >
                  {dept.shortName}
                </div>

                {/* Top right: Established year */}
                {dept.established && (
                  <div className="absolute top-3.5 right-3.5 bg-navy/85 backdrop-blur-sm text-gold text-[10px] font-nav font-semibold px-2 py-0.5 rounded border border-gold/30">
                    Est. {dept.established}
                  </div>
                )}

                {/* Bottom overlay: Primary Programme preview */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-nav text-[11px] font-medium text-amber-200 truncate max-w-[80%]">
                    {dept.programmes[0]}
                  </span>
                  <span className="text-[10px] bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded">
                    {dept.laboratories.length} Labs
                  </span>
                </div>
              </div>

              {/* Department Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-navy text-base lg:text-lg leading-snug mb-2 group-hover:text-royal transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-secondary-text text-xs leading-relaxed mb-4 line-clamp-2 font-body">
                    {dept.description}
                  </p>

                  {/* Laboratory highlight tags */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                    <p className="text-[10px] font-nav font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <FlaskConical size={12} className="text-gold" />
                      Featured Laboratories:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {dept.laboratories.slice(0, 2).map((lab) => (
                        <span
                          key={lab}
                          className="text-[11px] font-nav bg-slate-50 text-navy-700 px-2 py-0.5 rounded border border-slate-200/60"
                        >
                          {lab}
                        </span>
                      ))}
                      {dept.laboratories.length > 2 && (
                        <span className="text-[11px] font-nav text-secondary-text px-1 py-0.5">
                          +{dept.laboratories.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Department Action Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-secondary-text font-nav">
                    {dept.programmes.length} Programme{dept.programmes.length !== 1 ? 's' : ''}
                  </span>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-nav font-bold text-royal group-hover:text-gold transition-colors"
                  >
                    <span>View Department</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all departments button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/departments"
            className="btn-primary px-8 py-3.5 shadow-premium text-sm font-semibold inline-flex items-center gap-2"
          >
            <BookOpen size={16} />
            <span>Explore All 9 Departments &amp; Curricula</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
