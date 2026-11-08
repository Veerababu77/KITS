import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { diplomaProgrammes } from '@/data/courses';

const DiplomaPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Diploma Programmes | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              State Board of Technical Education (SBTET)
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Diploma Polytechnic Programmes
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              3-Year Full-Time Polytechnic Engineering Diploma programmes offering practical, workshop-intensive training.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {diplomaProgrammes.map((prog) => (
              <div
                key={prog.id}
                className="bg-white border-t-4 border-t-amber-500 border border-slate-200/90 rounded-sm p-6 shadow-premium hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-nav font-bold px-2 py-0.5 rounded uppercase">
                      Polytechnic Diploma
                    </span>
                    <span className="text-xs text-secondary-text font-nav flex items-center gap-1">
                      <Clock size={12} /> {prog.duration}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-2">
                    {prog.name}
                  </h3>
                  <p className="text-secondary-text text-xs sm:text-sm font-body leading-relaxed mb-4">
                    Hands-on practical training in specialized engineering labs, computer suites, and mechanical fabrication workshops.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-secondary-text font-nav">Dept: {prog.department}</span>
                  <Link
                    to="/admissions/enquiry"
                    className="btn-gold py-1.5 px-3 text-xs font-bold inline-flex items-center gap-1"
                  >
                    <span>Apply</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiplomaPage;
