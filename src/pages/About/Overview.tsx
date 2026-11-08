import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Award, Users, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const AboutOverviewPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | KITS Divili — Autonomous Institution';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold relative overflow-hidden">
        <div className="container-kits relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-gold/60 text-gold text-xs font-nav tracking-widest uppercase px-3 py-1 mb-4 bg-navy/40 backdrop-blur-sm">
              <Building2 size={13} />
              About Institution
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Institutional Heritage &amp; Excellence
            </h1>
            <p className="text-white/80 text-base sm:text-lg font-body leading-relaxed">
              Kakinada Institute of Technology and Science (KITS), Divili — an autonomous engineering institution shaping skilled engineers and ethical technologists since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="section-padding">
        <div className="container-kits">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
                Foundational Identity
              </span>
              <h2 className="section-title mb-5">
                Empowering Minds, Transforming Futures
              </h2>
              <div className="gold-divider mb-6" />

              <blockquote className="quote-block text-primary-text font-body text-base lg:text-lg italic leading-relaxed mb-6 bg-light-blue/50 p-6 border-l-4 border-gold">
                &ldquo;The primary focus of the Institution is to expose the young minds to the world of technology, instilling in them confidence and fortitude to face new challenges enabling them to shine in their chosen fields.&rdquo;
              </blockquote>

              <p className="text-secondary-text text-sm sm:text-base leading-relaxed mb-4">
                KITS was started with a cluster of technical courses in the year <strong>2008</strong> in Tirupati Village, Divili, Peddapuram Mandal, East Godavari District. The institution took a visionary step by introducing <strong>Agricultural Engineering</strong> among its pioneering programmes, addressing critical regional and agricultural modernization imperatives.
              </p>

              <p className="text-secondary-text text-sm sm:text-base leading-relaxed mb-6">
                Over the past 15+ years, the institution has grown into an autonomous technical powerhouse, permanently affiliated to <strong>JNTUK Kakinada</strong>, approved by <strong>AICTE New Delhi</strong>, and accredited with <strong>NAAC &lsquo;A&rsquo; Grade</strong> distinction.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                <div className="bg-white p-4 shadow-sm border border-slate-100 text-center">
                  <p className="font-heading font-bold text-2xl text-navy">2008</p>
                  <p className="text-xs text-secondary-text font-nav">Established</p>
                </div>
                <div className="bg-white p-4 shadow-sm border border-slate-100 text-center">
                  <p className="font-heading font-bold text-2xl text-gold">UGC</p>
                  <p className="text-xs text-secondary-text font-nav">Autonomous</p>
                </div>
                <div className="bg-white p-4 shadow-sm border border-slate-100 text-center">
                  <p className="font-heading font-bold text-2xl text-royal">JNTUK</p>
                  <p className="text-xs text-secondary-text font-nav">Affiliated</p>
                </div>
                <div className="bg-white p-4 shadow-sm border border-slate-100 text-center">
                  <p className="font-heading font-bold text-2xl text-amber-600">NAAC A</p>
                  <p className="text-xs text-secondary-text font-nav">Accredited</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <KitsImage
                  src="https://www.kitsdivili.ac.in/images/infra1.jpg"
                  alt="KITS Divili Campus Building"
                  category="campus"
                  aspectRatio="4:3"
                  className="rounded-sm shadow-premium-lg border-2 border-slate-200"
                />
                <div className="mt-4 bg-navy text-white p-5 rounded-sm border-l-4 border-gold">
                  <p className="text-xs font-nav font-bold uppercase tracking-wider text-gold mb-1">
                    Statutory Affiliations
                  </p>
                  <p className="text-xs text-white/80 leading-relaxed">
                    College Code: <strong>JQ</strong> &bull; JNTUK Affiliated &bull; AICTE Approved &bull; Divili, Peddapuram Mandal, E.G. Dist, AP.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Sub-navigation cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link to="/about/vision-mission" className="card-premium p-6 group">
              <Award className="text-gold mb-3" size={24} />
              <h3 className="font-heading font-bold text-navy text-base mb-1 group-hover:text-royal transition-colors">
                Vision &amp; Mission
              </h3>
              <p className="text-secondary-text text-xs leading-relaxed mb-3">
                Core philosophical framework and manpower commitments.
              </p>
              <span className="text-xs font-nav font-semibold text-royal flex items-center gap-1">
                Read Vision <ArrowRight size={12} />
              </span>
            </Link>

            <Link to="/about/management" className="card-premium p-6 group">
              <Users className="text-royal mb-3" size={24} />
              <h3 className="font-heading font-bold text-navy text-base mb-1 group-hover:text-royal transition-colors">
                Management Council
              </h3>
              <p className="text-secondary-text text-xs leading-relaxed mb-3">
                All 10 governing management members and executive profiles.
              </p>
              <span className="text-xs font-nav font-semibold text-royal flex items-center gap-1">
                Meet Leaders <ArrowRight size={12} />
              </span>
            </Link>

            <Link to="/about/chairman-message" className="card-premium p-6 group">
              <ShieldCheck className="text-navy mb-3" size={24} />
              <h3 className="font-heading font-bold text-navy text-base mb-1 group-hover:text-royal transition-colors">
                Chairman&rsquo;s Address
              </h3>
              <p className="text-secondary-text text-xs leading-relaxed mb-3">
                Sri Betineedi Srinivasa Rao, President of KITS Divili.
              </p>
              <span className="text-xs font-nav font-semibold text-royal flex items-center gap-1">
                View Address <ArrowRight size={12} />
              </span>
            </Link>

            <Link to="/about/history" className="card-premium p-6 group">
              <Building2 className="text-amber-600 mb-3" size={24} />
              <h3 className="font-heading font-bold text-navy text-base mb-1 group-hover:text-royal transition-colors">
                Institutional History
              </h3>
              <p className="text-secondary-text text-xs leading-relaxed mb-3">
                Tracing milestones from 2008 to autonomous status.
              </p>
              <span className="text-xs font-nav font-semibold text-royal flex items-center gap-1">
                Explore Journey <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutOverviewPage;
