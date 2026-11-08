import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, Clock, Award } from 'lucide-react';
import { undergradProgrammes, diplomaProgrammes, postgradProgrammes } from '@/data/courses';

const CoursesOfferedPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Courses Offered | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Curriculum Catalog
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Approved Courses Offered
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Full overview of all approved Undergraduate, Postgraduate, and Diploma engineering programmes at KITS Divili.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-12">
          
          {/* Undergraduate B.Tech */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-royal">
              <h2 className="font-heading font-bold text-2xl text-navy">
                Undergraduate &ndash; B.Tech Programmes (4 Years)
              </h2>
              <span className="text-xs font-nav font-bold text-royal bg-light-blue px-2.5 py-1 rounded">
                7 Branches
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {undergradProgrammes.map((p) => (
                <div key={p.id} className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-nav font-bold text-gold uppercase">B.Tech Autonomous</span>
                    <h3 className="font-heading font-bold text-navy text-base">{p.name}</h3>
                    <p className="text-xs text-secondary-text font-nav mt-0.5">Duration: {p.duration}</p>
                  </div>
                  <Link to="/admissions/enquiry" className="btn-gold py-1.5 px-3 text-xs font-bold">
                    Apply
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Diploma */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-amber-500">
              <h2 className="font-heading font-bold text-2xl text-navy">
                Polytechnic &ndash; Diploma Programmes (3 Years)
              </h2>
              <span className="text-xs font-nav font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded">
                4 Branches
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {diplomaProgrammes.map((p) => (
                <div key={p.id} className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-nav font-bold text-amber-600 uppercase">Diploma Polytechnic</span>
                    <h3 className="font-heading font-bold text-navy text-base">{p.name}</h3>
                    <p className="text-xs text-secondary-text font-nav mt-0.5">Duration: {p.duration}</p>
                  </div>
                  <Link to="/admissions/enquiry" className="btn-gold py-1.5 px-3 text-xs font-bold">
                    Apply
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Postgraduate M.Tech */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-navy">
              <h2 className="font-heading font-bold text-2xl text-navy">
                Postgraduate &ndash; M.Tech Programmes (2 Years)
              </h2>
              <span className="text-xs font-nav font-bold text-navy bg-slate-100 px-2.5 py-1 rounded">
                6 Specializations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {postgradProgrammes.map((p) => (
                <div key={p.id} className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-nav font-bold text-navy uppercase">M.Tech Specialization</span>
                    <h3 className="font-heading font-bold text-navy text-base">{p.name}</h3>
                    <p className="text-xs text-secondary-text font-nav mt-0.5">Duration: {p.duration}</p>
                  </div>
                  <Link to="/admissions/enquiry" className="btn-gold py-1.5 px-3 text-xs font-bold">
                    Apply
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CoursesOfferedPage;
