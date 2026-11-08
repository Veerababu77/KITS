import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Trophy, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const AchievementsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Institutional Achievements & Honors | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const institutionalAwards = [
    {
      title: "NAAC 'A' Grade Accreditation",
      metric: '3.03 CGPA Score',
      desc: 'National Assessment and Accreditation Council recognized KITS Divili with an exceptional 3.03 CGPA score for high standards in outcome-based education, laboratory equipment, faculty publications, and student services.',
    },
    {
      title: 'UGC Autonomy Milestone',
      metric: 'Conferred by UGC & JNTUK',
      desc: 'Granted autonomous status by the University Grants Commission, empowering KITS to design industry-centric engineering curricula, modern evaluation methodologies, and academic innovation.',
    },
    {
      title: 'Permanent JNTUK Affiliation',
      metric: 'College Code: JQ',
      desc: 'Permanently affiliated to Jawaharlal Nehru Technological University Kakinada (JNTUK), one of the foremost technical universities in South India.',
    },
    {
      title: 'Counseling & Admission Ranks',
      metric: 'KTSP & KTSP1',
      desc: 'EAPCET, ECET, and POLYCET Code: KTSP | PGCET Code: KTSP1 — trusted by thousands of engineering aspirants and parents across Andhra Pradesh.',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Institutional Honors &amp; Milestones
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              KITS Achievements &amp; Accolades
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Official institutional recognition, academic awards, accreditation milestones, and student triumphs preserved from the official college records.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-12">
          
          {/* Official NAAC A Achievement Banner Card */}
          <div className="bg-white border-2 border-gold/60 p-6 sm:p-8 rounded-sm shadow-premium flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src="https://www.kitsdivili.ac.in/images/nacc-new-logo.jpeg"
                alt="NAAC Logo"
                className="h-16 w-auto object-contain rounded border border-slate-200 p-1 flex-shrink-0"
              />
              <div>
                <span className="bg-gold/20 text-navy text-xs font-nav font-bold px-2.5 py-0.5 rounded uppercase">
                  Apex National Accreditation
                </span>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy mt-1">
                  Accredited by NAAC &lsquo;A&rsquo; Grade with 3.03 CGPA Score
                </h2>
                <p className="text-xs sm:text-sm text-secondary-text font-body mt-1">
                  Kakinada Institute of Technology and Science, Divili (Autonomous) &bull; JNTUK Affiliated &bull; AICTE Approved
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="font-heading font-bold text-3xl text-gold">3.03</span>
              <span className="text-xs text-secondary-text font-nav block">CGPA Score</span>
            </div>
          </div>

          {/* Mandatory Achievement Photographs from achievement.html */}
          <div>
            <div className="text-center mb-8">
              <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase">
                Official College Archives
              </span>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-navy">
                Institutional Achievement Gallery
              </h2>
              <div className="gold-divider-center mt-3" />
              <p className="text-xs sm:text-sm text-secondary-text font-body max-w-xl mx-auto mt-2">
                Published photographs from the official KITS Divili achievement archives celebrating institutional and student milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image 1: achievement1.jpg */}
              <div className="bg-white p-4 border border-slate-200/90 rounded-sm shadow-premium hover:shadow-card-hover transition-all">
                <div className="relative aspect-[4/3] bg-navy-900 rounded-sm overflow-hidden mb-4">
                  <KitsImage
                    src="https://www.kitsdivili.ac.in/images/achievement1.jpg"
                    alt="KITS College Achievement Event 1"
                    category="events"
                    aspectRatio="4:3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-navy/90 text-gold text-[10px] font-nav font-bold px-2 py-0.5 rounded">
                    Official Archive #1
                  </div>
                </div>
                <h3 className="font-heading font-bold text-navy text-base mb-1">
                  Institutional Accolade &amp; Recognition Ceremony
                </h3>
                <p className="text-xs text-secondary-text font-body leading-relaxed">
                  Management, faculty members, and students being felicitated for meritorious academic performance and institutional honors at KITS Divili.
                </p>
              </div>

              {/* Image 2: achievement2.jpg */}
              <div className="bg-white p-4 border border-slate-200/90 rounded-sm shadow-premium hover:shadow-card-hover transition-all">
                <div className="relative aspect-[4/3] bg-navy-900 rounded-sm overflow-hidden mb-4">
                  <KitsImage
                    src="https://www.kitsdivili.ac.in/images/achievement2.jpg"
                    alt="KITS College Achievement Event 2"
                    category="events"
                    aspectRatio="4:3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-navy/90 text-gold text-[10px] font-nav font-bold px-2 py-0.5 rounded">
                    Official Archive #2
                  </div>
                </div>
                <h3 className="font-heading font-bold text-navy text-base mb-1">
                  Excellence in Technical Education &amp; Student Laurels
                </h3>
                <p className="text-xs text-secondary-text font-body leading-relaxed">
                  Commemorating outstanding engineering projects, inter-collegiate championship wins, and college faculty achievements.
                </p>
              </div>
            </div>
          </div>

          {/* Key Milestones Grid */}
          <div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy mb-6">
              Major Institutional Accolades
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {institutionalAwards.map((a) => (
                <div key={a.title} className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-nav font-bold text-royal bg-light-blue px-2.5 py-0.5 rounded">
                        {a.metric}
                      </span>
                      <Trophy size={16} className="text-gold" />
                    </div>
                    <h4 className="font-heading font-bold text-navy text-base mb-2">
                      {a.title}
                    </h4>
                    <p className="text-xs text-secondary-text font-body leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-4">
            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              <span>Explore About KITS</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
