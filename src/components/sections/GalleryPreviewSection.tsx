import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const galleryImages = [
  { src: 'https://www.kitsdivili.ac.in/images/infra1.jpg', alt: 'KITS Campus', category: 'Infrastructure' },
  { src: 'https://www.kitsdivili.ac.in/images/hostel-1.jpeg', alt: 'Hostel Facilities', category: 'Hostel' },
  { src: 'https://www.kitsdivili.ac.in/images/home-banner-05.png', alt: 'Library', category: 'Library' },
  { src: 'https://kitsdivili.ac.in/images/depart24.jpg', alt: 'Departments', category: 'Academics' },
  { src: 'https://www.kitsdivili.ac.in/images/nss1.jpg', alt: 'NSS Activities', category: 'NSS' },
  { src: 'https://www.kitsdivili.ac.in/images/home-banner-08.png', alt: 'Sports', category: 'Sports' },
  { src: 'https://www.kitsdivili.ac.in/images/home-banner-11.jpg', alt: 'Events', category: 'Events' },
  { src: 'https://www.kitsdivili.ac.in/images/gallery/tra-03.JPG', alt: 'Transport', category: 'Transport' },
];

const GalleryPreviewSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-light-blue" ref={ref}>
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
            Campus Gallery
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="section-title mb-4">
            Life at <span className="text-royal">KITS Divili</span>
          </h2>
          <div className="gold-divider-center" />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="gallery-item group cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <KitsImage
                  src={img.src}
                  alt={img.alt}
                  category="campus"
                  aspectRatio="4:3"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="gallery-overlay">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-nav font-medium bg-gold/90 px-3 py-1">
                      {img.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link to="/gallery" className="btn-primary">
            View Full Gallery
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
