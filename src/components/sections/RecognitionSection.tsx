import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, BookOpen, Users } from 'lucide-react';

const recognitions = [
  {
    icon: Award,
    title: 'Autonomous Institution',
    description: 'Granted autonomous status enabling curriculum innovation and academic flexibility.',
    color: 'text-gold',
    bgColor: 'bg-gold/10',
  },
  {
    icon: Shield,
    title: 'JNTUK Affiliated',
    description: 'Affiliated to Jawaharlal Nehru Technological University Kakinada — a premier technical university.',
    color: 'text-royal',
    bgColor: 'bg-royal/10',
  },
  {
    icon: BookOpen,
    title: 'AICTE Approved',
    description: 'All technical programmes approved by the All India Council for Technical Education.',
    color: 'text-navy',
    bgColor: 'bg-navy/10',
  },
  {
    icon: Users,
    title: 'Est. 2008',
    description: 'Over 15 years of excellence in technical education, shaping thousands of engineering graduates.',
    color: 'text-gold',
    bgColor: 'bg-gold/10',
  },
];

const stats = [
  { value: '15+', label: 'Years of Excellence', suffix: '' },
  { value: '9', label: 'Engineering Departments', suffix: '' },
  { value: '1500+', label: 'Students Enrolled', suffix: '' },
  { value: '3', label: 'Programme Levels', suffix: '' },
];

const RecognitionSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-white section-padding-sm border-b border-gray-100" ref={ref}>
      <div className="container-kits">
        {/* Recognition badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-secondary-text text-xs font-nav tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-gold" />
            Institutional Recognition
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="section-title text-2xl lg:text-3xl">
            Accredited. Affiliated. Approved.
          </h2>
        </motion.div>

        {/* Recognition cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {recognitions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-premium p-6 group"
            >
              <div className={`w-11 h-11 ${item.bgColor} flex items-center justify-center mb-4`}>
                <item.icon size={22} className={item.color} />
              </div>
              <h3 className="font-heading font-semibold text-navy text-base mb-2">{item.title}</h3>
              <p className="text-secondary-text text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-r from-navy to-royal rounded-none p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-4xl text-gold mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/70 text-sm font-nav">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecognitionSection;
