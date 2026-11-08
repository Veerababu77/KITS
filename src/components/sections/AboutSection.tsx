import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-kits">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative">
              <KitsImage
                src="https://www.kitsdivili.ac.in/images/infra1.jpg"
                alt="KITS Divili Campus Infrastructure"
                category="campus"
                aspectRatio="4:3"
                priority
                className="shadow-premium-lg"
              />
              {/* Gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-navy/10 -z-10" />

              {/* Floating badge */}
              <div className="absolute top-6 -right-5 bg-gold text-navy px-4 py-2 shadow-gold">
                <p className="font-heading font-bold text-lg leading-none">2008</p>
                <p className="text-xs font-nav font-semibold tracking-widest uppercase">Founded</p>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-secondary-text text-xs font-nav tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-gold" />
              About KITS
            </div>

            <h2 className="section-title mb-5">
              A Legacy of Technical
              <br />
              <span className="text-royal">Excellence</span>
            </h2>

            <div className="gold-divider mb-6" />

            <p className="text-secondary-text text-base leading-relaxed mb-5">
              The primary focus of the Institution is to expose the young minds to the world of technology, instilling in them confidence and fortitude to face new challenges enabling them to shine in their chosen fields.
            </p>

            <p className="text-secondary-text text-base leading-relaxed mb-6">
              KITS was started with a cluster of technical courses in the year 2008. The institution introduced Agricultural Engineering among its pioneering programmes, reflecting a deep commitment to applied technology that serves the needs of Andhra Pradesh and the nation.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Autonomous Institution',
                'JNTUK Affiliated',
                'AICTE Approved',
                '9 Departments',
                'Modern Laboratories',
                'Experienced Faculty',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-primary-text">
                  <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                Learn More
                <ArrowRight size={15} />
              </Link>
              <Link to="/about/history" className="btn-ghost hover:underline">
                Our History
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
