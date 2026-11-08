import React, { useEffect } from 'react';
import { Microscope, Award, FileText, BookOpen, Users, Lightbulb } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const ResearchPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Research and Development (R&D) | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Innovation &amp; Discovery
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Research &amp; Development (R&amp;D)
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Fostering faculty investigations, student innovation projects, doctoral research, and high-impact international journal publications.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-12">
          
          {/* Director R&D - Preserved as published */}
          <div className="bg-white border-2 border-slate-200/90 shadow-premium p-6 sm:p-8 rounded-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-nav font-bold text-gold tracking-widest uppercase block mb-1">
                  Directorate of Research &amp; Development
                </span>
                <h2 className="font-heading font-bold text-2xl text-navy">
                  DR. D. SRINIVAS
                </h2>
                <p className="text-xs sm:text-sm text-secondary-text font-nav mt-0.5">
                  Director &ndash; Research and Development Cell
                </p>
              </div>
              <div className="bg-navy text-gold text-xs font-nav font-bold px-3 py-1 rounded border border-gold/40">
                KITS R&amp;D Directorate
              </div>
            </div>

            <p className="text-secondary-text text-sm font-body leading-relaxed mt-6">
              Under the R&amp;D Directorate, KITS actively promotes cutting-edge technological inquiry across agricultural engineering, civil structures, advanced manufacturing, computer science, and power electronics. Faculty members and postgraduate scholars are encouraged to undertake research projects, patent filings, and peer-reviewed journal papers.
            </p>
          </div>

          {/* Research Thrust Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-l-4 border-gold p-6 shadow-sm border border-slate-200 rounded-sm">
              <Microscope className="text-gold mb-3" size={24} />
              <h3 className="font-heading font-bold text-navy text-base mb-1">Faculty Research</h3>
              <p className="text-xs text-secondary-text font-body leading-relaxed">
                Ongoing investigations into renewable energy, smart agricultural robotics, lightweight structural concrete, and machine learning models.
              </p>
            </div>

            <div className="bg-white border-l-4 border-royal p-6 shadow-sm border border-slate-200 rounded-sm">
              <BookOpen className="text-royal mb-3" size={24} />
              <h3 className="font-heading font-bold text-navy text-base mb-1">Publications &amp; Papers</h3>
              <p className="text-xs text-secondary-text font-body leading-relaxed">
                Faculty research papers presented in IEEE, Springer, Elsevier, and Scopus-indexed national and international conferences.
              </p>
            </div>

            <div className="bg-white border-l-4 border-navy p-6 shadow-sm border border-slate-200 rounded-sm">
              <Users className="text-navy mb-3" size={24} />
              <h3 className="font-heading font-bold text-navy text-base mb-1">Ph.D. Enrolment</h3>
              <p className="text-xs text-secondary-text font-body leading-relaxed">
                Guidance and laboratory facilities extended to faculty members pursuing doctoral research in premier universities.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
