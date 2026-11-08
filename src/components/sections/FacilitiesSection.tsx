import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Home, Bus, Coffee, Microscope, Shield } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const facilities = [
  {
    id: 'library',
    title: 'Central Library',
    description: 'A comprehensive digital and physical library with thousands of volumes, e-journals, and online databases.',
    icon: BookOpen,
    href: '/campus-life/library',
    image: 'https://www.kitsdivili.ac.in/images/home-banner-05.png',
    category: 'library' as const,
    color: 'from-amber-700 to-amber-500',
  },
  {
    id: 'hostel',
    title: 'Hostel',
    description: 'Separate hostel facilities for boys and girls with modern amenities and a safe, comfortable environment.',
    icon: Home,
    href: '/campus-life/hostel',
    image: 'https://www.kitsdivili.ac.in/images/hostel-1.jpeg',
    category: 'hostel' as const,
    color: 'from-blue-700 to-blue-500',
  },
  {
    id: 'transport',
    title: 'Transport',
    description: 'Extensive bus network covering major routes across East Godavari and surrounding districts.',
    icon: Bus,
    href: '/campus-life/transport',
    image: 'https://www.kitsdivili.ac.in/images/gallery/tra-03.JPG',
    category: 'transport' as const,
    color: 'from-green-700 to-green-500',
  },
  {
    id: 'cafeteria',
    title: 'Cafeteria',
    description: 'On-campus dining facility offering nutritious and affordable meals to students and staff.',
    icon: Coffee,
    href: '/campus-life/cafeteria',
    image: 'https://www.kitsdivili.ac.in/images/infra1.jpg',
    category: 'campus' as const,
    color: 'from-orange-700 to-orange-500',
  },
  {
    id: 'research',
    title: 'Research Facilities',
    description: 'Dedicated R&D infrastructure supporting faculty research, student projects, and PhD programmes.',
    icon: Microscope,
    href: '/research',
    image: 'https://kitsdivili.ac.in/images/depart24.jpg',
    category: 'laboratory' as const,
    color: 'from-purple-700 to-purple-500',
  },
  {
    id: 'sports',
    title: 'Sports Complex',
    description: 'Multi-sport facilities encouraging physical fitness, team spirit, and athletic achievement.',
    icon: Shield,
    href: '/sports',
    image: 'https://www.kitsdivili.ac.in/images/home-banner-08.png',
    category: 'sports' as const,
    color: 'from-red-700 to-red-500',
  },
];

const FacilitiesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

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
            Campus Facilities
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="section-title mb-4">
            A Campus Built for
            <span className="text-royal"> Excellence</span>
          </h2>
          <div className="gold-divider-center mb-5" />
          <p className="section-subtitle max-w-xl mx-auto">
            Modern infrastructure and comprehensive facilities designed to support learning, research, and student well-being.
          </p>
        </motion.div>

        {/* Featured — Library + Hostel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {facilities.slice(0, 2).map((facility, i) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative overflow-hidden group bg-white border border-gray-100 shadow-premium hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <KitsImage
                  src={facility.image}
                  alt={facility.title}
                  category={facility.category}
                  aspectRatio="16:9"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-8 h-8 bg-gradient-to-br ${facility.color} flex items-center justify-center`}>
                      <facility.icon size={16} className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg">{facility.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-secondary-text text-sm leading-relaxed mb-4">{facility.description}</p>
                <Link
                  to={facility.href}
                  className="inline-flex items-center gap-1 text-sm text-royal hover:text-gold transition-colors font-nav font-medium group"
                >
                  Explore {facility.title}
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remaining facilities — smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.slice(2).map((facility, i) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-white border border-gray-100 shadow-premium hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <KitsImage
                  src={facility.image}
                  alt={facility.title}
                  category={facility.category}
                  aspectRatio="4:3"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <div className={`w-9 h-9 bg-gradient-to-br ${facility.color} flex items-center justify-center shadow-md`}>
                    <facility.icon size={16} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-navy text-sm mb-1">{facility.title}</h3>
                <p className="text-secondary-text text-xs leading-relaxed mb-3 line-clamp-2">{facility.description}</p>
                <Link
                  to={facility.href}
                  className="text-xs text-royal hover:text-gold transition-colors font-nav font-medium flex items-center gap-1 group"
                >
                  Learn More <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
