import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, GraduationCap } from 'lucide-react';
import { undergradProgrammes, diplomaProgrammes, postgradProgrammes } from '@/data/courses';

const programmeColors: Record<string, string> = {
  diploma: 'border-t-amber-500',
  ug: 'border-t-royal',
  pg: 'border-t-navy',
};

const programmeLabels: Record<string, string> = {
  diploma: 'Diploma',
  ug: 'B.Tech',
  pg: 'M.Tech',
};

const programmeBadgeColors: Record<string, string> = {
  diploma: 'bg-amber-100 text-amber-700',
  ug: 'bg-blue-100 text-blue-700',
  pg: 'bg-navy/10 text-navy',
};

interface ProgrammeCardProps {
  name: string;
  level: 'diploma' | 'ug' | 'pg';
  degree: string;
  duration: string;
  index: number;
  isInView: boolean;
}

const ProgrammeCard: React.FC<ProgrammeCardProps> = ({ name, level, degree, duration, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    className={`bg-white border border-gray-100 border-t-4 ${programmeColors[level]} shadow-premium hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col`}
  >
    <div className="flex items-start justify-between mb-3">
      <span className={`text-xs font-nav font-semibold px-2 py-0.5 tracking-wide ${programmeBadgeColors[level]}`}>
        {programmeLabels[level]}
      </span>
      <div className="flex items-center gap-1 text-secondary-text text-xs">
        <Clock size={11} />
        {duration}
      </div>
    </div>
    <h3 className="font-heading font-semibold text-navy text-sm leading-snug mb-3 flex-1">
      {name}
    </h3>
    <div className="flex items-center justify-between">
      <span className="text-xs text-secondary-text font-nav">{degree}</span>
      <Link
        to={`/academics/${level === 'diploma' ? 'diploma' : level === 'ug' ? 'undergraduate' : 'postgraduate'}`}
        className="text-xs text-royal hover:text-gold transition-colors font-nav font-medium flex items-center gap-1 group"
      >
        Details <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const ProgrammesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const categories = [
    {
      label: 'Diploma Programmes',
      count: diplomaProgrammes.length,
      color: 'text-amber-600',
      level: 'diploma' as const,
      programmes: diplomaProgrammes,
      href: '/academics/diploma',
    },
    {
      label: 'Undergraduate (B.Tech)',
      count: undergradProgrammes.length,
      color: 'text-royal',
      level: 'ug' as const,
      programmes: undergradProgrammes,
      href: '/academics/undergraduate',
    },
    {
      label: 'Postgraduate (M.Tech)',
      count: postgradProgrammes.length,
      color: 'text-navy',
      level: 'pg' as const,
      programmes: postgradProgrammes,
      href: '/academics/postgraduate',
    },
  ];

  return (
    <section className="section-padding bg-background" ref={ref}>
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
            Academic Programmes
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="section-title mb-4">
            Programmes Designed for
            <br />
            <span className="text-royal">Tomorrow's Leaders</span>
          </h2>
          <div className="gold-divider-center mb-5" />
          <p className="section-subtitle max-w-xl mx-auto">
            {undergradProgrammes.length + diplomaProgrammes.length + postgradProgrammes.length}+ programmes across engineering, technology, and applied sciences.
          </p>
        </motion.div>

        {/* Category tabs summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {categories.map((cat) => (
            <div key={cat.label} className="text-center border-b-2 border-gray-100 pb-4">
              <div className={`font-heading font-bold text-3xl ${cat.color} mb-1`}>
                {cat.count}
              </div>
              <div className="text-secondary-text text-sm font-nav">{cat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Programme cards by category */}
        {categories.map((cat, catIndex) => (
          <div key={cat.label} className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 + 0.2 }}
              className="flex items-center justify-between mb-5"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className={cat.color} size={20} />
                <h3 className="font-heading font-semibold text-navy text-lg">{cat.label}</h3>
                <span className="text-xs text-secondary-text bg-gray-100 px-2 py-0.5 font-nav">
                  {cat.count} programmes
                </span>
              </div>
              <Link
                to={cat.href}
                className="text-sm text-royal hover:text-gold transition-colors font-nav font-medium flex items-center gap-1 group"
              >
                View All <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cat.programmes.map((prog, i) => (
                <ProgrammeCard
                  key={prog.id}
                  name={prog.name}
                  level={prog.level as 'diploma' | 'ug' | 'pg'}
                  degree={prog.degree}
                  duration={prog.duration}
                  index={i}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center pt-4"
        >
          <Link to="/admissions/enquiry" className="btn-gold">
            <GraduationCap size={16} />
            Apply for Admission
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammesSection;
