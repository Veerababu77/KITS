import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Award, ArrowRight, ShieldCheck } from 'lucide-react';

const VisionMissionPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Vision & Mission | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  // Exact verbatim institutional text from official KITS Divili portal
  const authenticSourceText =
    'World class quality technical education with strong ethical values and carving effective and competent source of technical manpower for the current and future societal requirements.';

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Core Institutional Philosophy
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Vision &amp; Mission
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Guiding our pedagogical standards, technical ethics, and societal manpower contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="section-padding">
        <div className="container-kits max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Vision */}
            <div className="bg-white border-2 border-slate-200/90 rounded-sm p-8 shadow-premium relative overflow-hidden">
              <div className="h-2 w-full bg-gold absolute top-0 left-0" />
              <div className="w-14 h-14 bg-gold/15 rounded-full flex items-center justify-center mb-6">
                <Target size={28} className="text-gold" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-4">
                Our Vision
              </h2>
              <blockquote className="text-primary-text font-body text-base lg:text-lg leading-relaxed italic bg-light-blue/40 p-5 border-l-4 border-gold rounded">
                &ldquo;{authenticSourceText}&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-secondary-text font-nav">
                <ShieldCheck size={14} className="text-gold" />
                <span>Published Official Institutional Vision</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white border-2 border-slate-200/90 rounded-sm p-8 shadow-premium relative overflow-hidden">
              <div className="h-2 w-full bg-royal absolute top-0 left-0" />
              <div className="w-14 h-14 bg-royal/15 rounded-full flex items-center justify-center mb-6">
                <Compass size={28} className="text-royal" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-4">
                Our Mission
              </h2>
              <blockquote className="text-primary-text font-body text-base lg:text-lg leading-relaxed italic bg-light-blue/40 p-5 border-l-4 border-royal rounded">
                &ldquo;{authenticSourceText}&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-secondary-text font-nav">
                <ShieldCheck size={14} className="text-royal" />
                <span>Published Official Institutional Mission</span>
              </div>
            </div>

          </div>

          {/* Quality Objectives */}
          <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm mb-10">
            <h3 className="font-heading font-bold text-xl text-navy mb-4 flex items-center gap-2">
              <Award className="text-gold" size={20} />
              Educational Goals &amp; Manpower Objectives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-l-2 border-gold pl-4">
                <h4 className="font-heading font-semibold text-navy text-sm mb-1">Technical Excellence</h4>
                <p className="text-xs text-secondary-text leading-relaxed">
                  Rigorous engineering training across undergraduate, postgraduate, and polytechnic programmes.
                </p>
              </div>
              <div className="border-l-2 border-royal pl-4">
                <h4 className="font-heading font-semibold text-navy text-sm mb-1">Ethical Integrity</h4>
                <p className="text-xs text-secondary-text leading-relaxed">
                  Instilling fortitude, professional ethics, and social responsibility in every graduate.
                </p>
              </div>
              <div className="border-l-2 border-amber-600 pl-4">
                <h4 className="font-heading font-semibold text-navy text-sm mb-1">Societal Readiness</h4>
                <p className="text-xs text-secondary-text leading-relaxed">
                  Equipping students to solve rural, regional, and global technological challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/about/management" className="btn-primary inline-flex items-center gap-2">
              <span>Meet Institutional Leadership</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMissionPage;
