import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { managementMembers } from '@/data/management';

// Initials avatar for management
const InitialsAvatar: React.FC<{
  initials: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}> = ({ initials, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-14 h-14 text-base',
    md: 'w-20 h-20 text-xl',
    lg: 'w-28 h-28 text-2xl',
    xl: 'w-36 h-36 text-3xl',
  };

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-navy to-royal text-white font-heading font-bold border-4 border-gold ${sizeClasses[size]} ${className}`}
    >
      {initials}
    </div>
  );
};

const LeadershipSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const president = managementMembers.find((m) => m.role === 'president')!;
  const vicePresident = managementMembers.find((m) => m.role === 'vice-president')!;
  const secretary = managementMembers.find((m) => m.role === 'secretary')!;
  const otherMembers = managementMembers.filter(
    (m) => !['president', 'vice-president', 'secretary'].includes(m.role)
  );

  return (
    <section className="section-padding bg-light-blue" ref={ref}>
      <div className="container-kits">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-secondary-text text-xs font-nav tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-gold" />
            Institutional Leadership & Management Members
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="section-title mb-4">The People Behind KITS</h2>
          <div className="gold-divider-center mb-5" />
          <p className="section-subtitle max-w-xl mx-auto">
            Leadership, vision and commitment that shape the institution.
          </p>
        </motion.div>

        {/* President — Featured */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white border border-gray-100 shadow-premium-lg mb-8 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            {/* Portrait area */}
            <div className="bg-gradient-to-br from-navy to-royal flex flex-col items-center justify-center py-12 px-8 relative">
              <div className="absolute top-4 left-4 w-8 h-8 border border-gold/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border border-gold/40" />
              <InitialsAvatar initials={president.initials} size="xl" className="mb-5" />
              <div className="text-center">
                <p className="text-gold font-nav font-semibold text-xs tracking-widest uppercase mb-1">
                  {president.designation}
                </p>
                <h3 className="font-heading font-bold text-white text-xl">
                  {president.name}
                </h3>
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2 p-8 lg:p-10">
              <div className="flex items-start gap-3 mb-5">
                <Quote className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-secondary-text text-sm leading-relaxed">
                    {president.message || 'The institution is committed to providing quality technical education that empowers young minds to meet the challenges of the rapidly evolving world.'}
                  </p>
                </div>
              </div>
              <Link
                to="/about/chairman-message"
                className="inline-flex items-center gap-2 text-royal font-nav font-medium text-sm hover:text-gold transition-colors hover-underline"
              >
                Read Full Message <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* VP and Secretary — Secondary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[vicePresident, secretary].map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="bg-white border border-gray-100 shadow-premium overflow-hidden flex"
            >
              <div className="bg-navy flex items-center justify-center p-6 flex-shrink-0 w-28">
                <InitialsAvatar initials={member.initials} size="md" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-gold font-nav text-xs font-semibold tracking-widest uppercase mb-1">
                  {member.designation}
                </span>
                <h3 className="font-heading font-semibold text-navy text-lg leading-tight">
                  {member.name}
                </h3>
                {member.message && (
                  <p className="text-secondary-text text-xs mt-2 leading-relaxed line-clamp-2">
                    {member.message}
                  </p>
                )}
                {member.role === 'secretary' && (
                  <Link
                    to="/about/secretary-message"
                    className="inline-flex items-center gap-1 text-royal font-nav text-xs hover:text-gold transition-colors mt-2"
                  >
                    Read Message <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other members — Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {otherMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              className="bg-white border border-gray-100 shadow-premium p-5 text-center group hover:border-gold/40 hover:shadow-card-hover transition-all duration-300"
            >
              <InitialsAvatar initials={member.initials} size="sm" className="mx-auto mb-3" />
              <p className="font-heading font-semibold text-navy text-xs leading-tight mb-1">
                {member.name}
              </p>
              <p className="text-gold text-xs font-nav tracking-wide">{member.designation}</p>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10"
        >
          <Link to="/about/management" className="btn-primary">
            View Full Management
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
