import React, { useEffect } from 'react';
import { BookOpen, Clock, Users, Database, ShieldCheck, ArrowRight, Laptop } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const LibraryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Central Library | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Knowledge Resource Center
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Central Library
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              A comprehensive physical and digital learning sanctuary stocked with authoritative engineering textbooks, national and international journals, DELNET e-resources, and Web SOUL automation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-12">
          
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <KitsImage
                src="https://www.kitsdivili.ac.in/images/home-banner-05.png"
                alt="KITS Divili Central Library"
                category="library"
                aspectRatio="4:3"
                className="rounded-sm shadow-premium border-2 border-slate-200"
              />
            </div>
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-slate-200 shadow-sm rounded-sm space-y-4">
              <div className="flex items-center gap-2 text-gold">
                <Clock size={18} />
                <span className="text-xs font-nav font-bold uppercase tracking-wider text-navy">
                  Operating Timings
                </span>
              </div>
              <div className="space-y-2 text-xs font-body text-secondary-text border-b border-slate-100 pb-4">
                <p className="flex justify-between">
                  <span>Monday &ndash; Saturday:</span>
                  <strong className="text-navy">8:00 AM &ndash; 6:00 PM</strong>
                </p>
                <p className="flex justify-between">
                  <span>Circulation Counter:</span>
                  <strong className="text-navy">9:00 AM &ndash; 5:00 PM</strong>
                </p>
                <p className="flex justify-between">
                  <span>Digital Library &amp; E-Journals:</span>
                  <strong className="text-royal">8:00 AM &ndash; 6:00 PM</strong>
                </p>
              </div>

              <div className="space-y-2 text-xs font-nav text-secondary-text">
                <p className="flex justify-between">
                  <span>Automation Software:</span>
                  <strong className="text-navy">SOUL (INFLIBNET)</strong>
                </p>
                <p className="flex justify-between">
                  <span>Online Catalog:</span>
                  <strong className="text-navy">Web OPAC Available</strong>
                </p>
                <p className="flex justify-between">
                  <span>Reprographic Services:</span>
                  <strong className="text-navy">In-house Photocopier &amp; Print</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Library Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border-l-4 border-gold p-6 shadow-sm border border-slate-200 rounded-sm">
              <BookOpen className="text-gold mb-3" size={24} />
              <h3 className="font-heading font-bold text-navy text-base mb-1">Print Collection</h3>
              <p className="text-xs text-secondary-text font-body leading-relaxed">
                Extensive collection of volumes spanning basic sciences, computing, electronics, mechanical, civil, and agricultural engineering.
              </p>
            </div>

            <div className="bg-white border-l-4 border-royal p-6 shadow-sm border border-slate-200 rounded-sm">
              <Laptop className="text-royal mb-3" size={24} />
              <h3 className="font-heading font-bold text-navy text-base mb-1">Digital E-Resources</h3>
              <p className="text-xs text-secondary-text font-body leading-relaxed">
                High-speed internet workstations providing access to online e-journals, NPTEL video lectures, and digital research papers.
              </p>
            </div>

            <div className="bg-white border-l-4 border-amber-600 p-6 shadow-sm border border-slate-200 rounded-sm">
              <Database className="text-amber-600 mb-3" size={24} />
              <h3 className="font-heading font-bold text-navy text-base mb-1">Web PAC / SOUL</h3>
              <p className="text-xs text-secondary-text font-body leading-relaxed">
                Automated cataloging system enabling instant book searches, renewal tracking, and circulation management for students and staff.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default LibraryPage;
