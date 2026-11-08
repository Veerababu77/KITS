import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Clock, Award, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { undergradProgrammes } from '@/data/courses';

const UndergraduatePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Undergraduate (B.Tech) Programmes | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Bachelor of Technology (B.Tech)
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Undergraduate Engineering Programmes
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              4-Year Full-Time Autonomous B.Tech degree programmes affiliated to JNTUK Kakinada and approved by AICTE New Delhi.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl">
          <div className="space-y-6 mb-12">
            {undergradProgrammes.map((prog) => (
              <div
                key={prog.id}
                className="bg-white border border-slate-200/90 rounded-sm p-6 sm:p-8 shadow-premium hover:shadow-card-hover transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                    <span className="bg-royal text-white text-[10px] font-nav font-bold px-2 py-0.5 rounded uppercase">
                      B.Tech
                    </span>
                    <span className="bg-light-blue text-navy text-[10px] font-nav font-semibold px-2 py-0.5 rounded">
                      Autonomous
                    </span>
                    <span className="text-xs text-secondary-text font-nav flex items-center gap-1">
                      <Clock size={12} /> {prog.duration} Full-Time
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-navy text-xl sm:text-2xl mb-2">
                    {prog.name}
                  </h3>

                  <p className="text-secondary-text text-xs sm:text-sm font-body leading-relaxed mb-3">
                    {prog.description || `Comprehensive 4-year undergraduate degree offering extensive laboratory exposure, semester internships, and autonomous industry curriculum.`}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-nav text-slate-500">
                    <span className="font-semibold text-navy">Department:</span> {prog.department}
                  </div>
                </div>

                <div className="flex flex-row md:flex-col gap-2.5 w-full md:w-auto flex-shrink-0">
                  <Link
                    to="/admissions/enquiry"
                    className="btn-gold py-2.5 px-4 text-xs font-bold justify-center flex-1 md:flex-initial"
                  >
                    <span>Apply Online</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    to="/academics/syllabus"
                    className="btn-outline py-2.5 px-4 text-xs font-semibold justify-center flex-1 md:flex-initial"
                  >
                    <BookOpen size={13} />
                    <span>View Syllabus</span>
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

export default UndergraduatePage;
