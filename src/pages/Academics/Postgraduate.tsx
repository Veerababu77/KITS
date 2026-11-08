import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight, AlertCircle } from 'lucide-react';
import { postgradProgrammes } from '@/data/courses';

const PostgraduatePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Postgraduate (M.Tech) Programmes | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Master of Technology (M.Tech)
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Postgraduate Engineering Specializations
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              2-Year Advanced M.Tech degree programmes with research thesis and advanced laboratory investigations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl">
          
          {/* Institutional note preserving source variations */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-sm mb-8 flex items-start gap-3 text-xs text-amber-800 font-body">
            <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold font-nav uppercase tracking-wider text-amber-900 mb-0.5">
                Institutional Academic Record Notice
              </p>
              <p>
                The programmes listed below reflect the specializations published in the official KITS departments records (CAD/CAM, Structural Engineering, Communication Systems, CST, IT, Power Systems). Variations with historical navigation archives are flagged for administrative verification.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {postgradProgrammes.map((prog) => (
              <div
                key={prog.id}
                className="bg-white border-t-4 border-t-navy border border-slate-200/90 rounded-sm p-6 shadow-premium hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-navy text-gold text-[10px] font-nav font-bold px-2 py-0.5 rounded uppercase">
                      M.Tech Specialization
                    </span>
                    <span className="text-xs text-secondary-text font-nav flex items-center gap-1">
                      <Clock size={12} /> {prog.duration}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-2">
                    {prog.name}
                  </h3>
                  <p className="text-secondary-text text-xs sm:text-sm font-body leading-relaxed mb-4">
                    Advanced research coursework, simulation modeling, thesis publication, and specialized computing.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-secondary-text font-nav">Dept: {prog.department}</span>
                  <Link
                    to="/admissions/enquiry"
                    className="btn-gold py-1.5 px-3 text-xs font-bold inline-flex items-center gap-1"
                  >
                    <span>Enquire</span>
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

export default PostgraduatePage;
