import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon, Filter } from 'lucide-react';
import { kitsImages, KitsImage as KitsImageType } from '@/data/images';
import KitsImage from '@/components/common/KitsImage';

// Additional curated items with verified categories
const allGalleryItems = [
  { id: 'g1', src: 'https://www.kitsdivili.ac.in/images/infra1.jpg', alt: 'Main Academic Block & Campus Grounds', category: 'Infrastructure', caption: 'KITS Main Campus & Academic Blocks' },
  { id: 'g2', src: 'https://www.kitsdivili.ac.in/images/banner-nacc-home.png', alt: 'NAAC Accreditation Recognition Banner', category: 'Events', caption: 'Institutional NAAC Accreditation Milestone' },
  { id: 'g3', src: 'https://www.kitsdivili.ac.in/images/home-banner-05.png', alt: 'Central Library & Reading Hall', category: 'Library', caption: 'KITS Central Library & Study Reading Hall' },
  { id: 'g4', src: 'https://www.kitsdivili.ac.in/images/hostel-1.jpeg', alt: 'Student Hostel Facilities', category: 'Hostel', caption: 'Secure Residential Student Hostel' },
  { id: 'g5', src: 'https://www.kitsdivili.ac.in/images/gallery/tra-03.JPG', alt: 'Campus Transport Fleet Bus', category: 'Transport', caption: 'Institutional Transport Fleet at Divili' },
  { id: 'g6', src: 'https://www.kitsdivili.ac.in/images/nss1.jpg', alt: 'NSS Village Camp & Community Outreach', category: 'NSS', caption: 'NSS Student Community Outreach Initiative' },
  { id: 'g7', src: 'https://www.kitsdivili.ac.in/images/nss2.jpg', alt: 'Tree Plantation & Environmental Drive', category: 'NSS', caption: 'NSS Green Campus Tree Plantation Drive' },
  { id: 'g8', src: 'https://www.kitsdivili.ac.in/images/home-banner-08.png', alt: 'Sports Complex & Athletic Activities', category: 'Sports', caption: 'Annual Athletic Meets & Sports Complex' },
  { id: 'g9', src: 'https://www.kitsdivili.ac.in/images/home-banner-01.png', alt: 'Campus College Fest & Cultural Events', category: 'Events', caption: 'Annual College Cultural & Technical Symposium' },
  { id: 'g10', src: 'https://www.kitsdivili.ac.in/images/home-banner-11.jpg', alt: 'Student Technical Presentations', category: 'Campus Activities', caption: 'Student Technical Presentations & Workshops' },
  { id: 'g11', src: 'https://www.kitsdivili.ac.in/images/home-banner-12.jpg', alt: 'Faculty Academic Seminar', category: 'Events', caption: 'National Engineering Seminars at KITS' },
  { id: 'g12', src: 'https://www.kitsdivili.ac.in/images/depart/civil-01.JPG', alt: 'Civil Engineering Testing Facility', category: 'Departments', caption: 'Civil Engineering Advanced Testing Facility' },
  { id: 'g13', src: 'https://www.kitsdivili.ac.in/images/depart/mech-01.JPG', alt: 'Mechanical Engineering Workshop', category: 'Departments', caption: 'Mechanical Engineering Machine Tools Workshop' },
  { id: 'g14', src: 'https://www.kitsdivili.ac.in/images/depart/ece-01.JPG', alt: 'ECE Circuits & VLSI Lab', category: 'Departments', caption: 'Electronics & Communication Circuits Lab' },
  { id: 'g15', src: 'https://www.kitsdivili.ac.in/images/depart/cse-01.JPG', alt: 'CSE Advanced Computing Center', category: 'Departments', caption: 'Computer Science & Engineering Computer Center' },
  { id: 'g16', src: 'https://www.kitsdivili.ac.in/images/depart/hs-01.JPG', alt: 'Humanities & Sciences Physics/Chemistry Lab', category: 'Departments', caption: 'Humanities & Sciences Fundamental Science Lab' },
];

const categories = [
  'All',
  'Infrastructure',
  'Departments',
  'Library',
  'Hostel',
  'Transport',
  'NSS',
  'Sports',
  'Events',
  'Campus Activities',
];

const GalleryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Campus Photo Gallery | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<typeof allGalleryItems[0] | null>(null);

  const filtered = allGalleryItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Visual Archives
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Campus Photo Gallery
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Experience the vibrant life, modern infrastructure, academic workshops, and student achievements at KITS Divili.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Category Tabs */}
      <section className="bg-white border-b border-slate-200 py-3 sticky top-16 z-20 shadow-xs">
        <div className="container-kits flex items-center gap-1.5 overflow-x-auto py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-nav rounded whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-navy text-gold font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid - Strict 4:3 Aspect Ratio */}
      <section className="section-padding">
        <div className="container-kits">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="group relative cursor-pointer bg-navy-900 overflow-hidden rounded-sm shadow-premium hover:shadow-card-hover transition-all duration-300 aspect-[4/3]"
              >
                <KitsImage
                  src={item.src}
                  alt={item.alt}
                  aspectRatio="4:3"
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] bg-gold text-navy font-nav font-bold px-2 py-0.5 rounded uppercase">
                      {item.category}
                    </span>
                    <ZoomIn size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-xs leading-snug line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            <div
              className="max-w-4xl w-full bg-navy-900 border-2 border-gold/60 rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] bg-black">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 bg-navy text-white flex items-center justify-between border-t border-gold/30">
                <div>
                  <span className="text-[10px] text-gold font-nav uppercase font-bold tracking-widest block mb-0.5">
                    {lightboxImage.category}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                    {lightboxImage.caption}
                  </h3>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="btn-outline text-xs py-1 px-3 text-gold border-gold"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
