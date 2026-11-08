import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Award, GraduationCap, CheckCircle2, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const PlacementsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Training & Placements Cell | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const activities = [
    { title: 'Campus Recruitment Training (CRT)', desc: 'Aptitude tests, logical reasoning drills, verbal communication, and quantitative problem solving sessions.' },
    { title: 'Technical Coding Bootcamps', desc: 'Hands-on programming practice in C, C++, Java, Python, and Full Stack web technologies.' },
    { title: 'Mock Interviews & GDs', desc: 'Simulated technical panels and HR interview practice conducted by senior faculty and industry mentors.' },
    { title: 'Career Guidance & Counseling', desc: 'Expert seminars guiding students on higher education (GATE, GRE), government exams, and corporate careers.' },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Career Development Cell
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Training &amp; Placements
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Bridging academic learning with corporate expectations through continuous aptitude grooming, technical skill building, and placement coordination.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-12">
          
          {/* Overview Card */}
          <div className="bg-white border-2 border-slate-200/90 rounded-sm p-6 sm:p-8 shadow-premium">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-gold" size={24} />
              <h2 className="font-heading font-bold text-2xl text-navy">
                Training &amp; Placement Cell Overview
              </h2>
            </div>
            <p className="text-secondary-text text-sm sm:text-base font-body leading-relaxed mb-6">
              The Training and Placement Cell at KITS Divili operates with a focused mission — to facilitate meaningful corporate connections, prepare graduating students for competitive recruitment processes, and assist students in discovering career paths aligned with their technical interests.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs font-nav text-primary-text">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                <span>Dedicated Training Hall with Audio-Visual Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                <span>Computerized Online Assessment Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                <span>Industry Interaction Seminars &amp; Guest Talks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                <span>Internship Facilitation Across Engineering Branches</span>
              </div>
            </div>
          </div>

          {/* Placement Activities */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-navy mb-6">
              Core Placement Preparation Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((act) => (
                <div key={act.title} className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm">
                  <h4 className="font-heading font-bold text-navy text-base mb-1.5">{act.title}</h4>
                  <p className="text-xs text-secondary-text font-body leading-relaxed">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Data Transparency Note (Strict Compliance with Guideline 18) */}
          <div className="bg-light-blue border border-royal/30 p-6 rounded-sm text-center max-w-2xl mx-auto space-y-2">
            <ShieldCheck size={28} className="text-royal mx-auto" />
            <h4 className="font-heading font-bold text-navy text-base">
              Institutional Placement Records &amp; Transparency
            </h4>
            <p className="text-xs text-secondary-text font-body leading-relaxed">
              Official drive-by-drive placement statistics, individual offer letters, and confirmed recruiter announcements are maintained directly by the college placement office. Contact the cell for verified corporate tie-up rosters.
            </p>
            <div className="pt-2">
              <Link to="/contact" className="btn-primary py-2 px-4 text-xs font-semibold inline-flex items-center gap-1.5">
                <span>Contact Placement Officer</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PlacementsPage;
