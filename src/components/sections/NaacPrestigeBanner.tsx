import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

const NaacPrestigeBanner: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const credentials = [
    {
      title: "NAAC 'A' Grade Distinction",
      badge: '3.03 CGPA Score',
      desc: 'Accredited by the National Assessment and Accreditation Council with an outstanding 3.03 CGPA score.',
      icon: Award,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
    {
      title: 'UGC Autonomous Status',
      badge: 'Govt. of India',
      desc: 'Conferred autonomy by UGC, enabling forward-looking curriculum innovation and academic agility.',
      icon: ShieldCheck,
      color: 'text-royal',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      title: 'Permanently Affiliated to JNTUK',
      badge: 'College Code: JQ',
      desc: 'Affiliated to Jawaharlal Nehru Technological University Kakinada for undergraduate and postgraduate degrees.',
      icon: Award,
      color: 'text-navy',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
    },
    {
      title: 'Approved by AICTE New Delhi',
      badge: 'Statutory Body',
      desc: 'All engineering, polytechnic, and technical specializations approved by statutory regulatory bodies.',
      icon: CheckCircle2,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
  ];

  return (
    <section
      id="institutional-prestige-section"
      ref={ref}
      className="py-14 lg:py-20 bg-gradient-to-b from-[#FAFAF7] via-light-blue/40 to-white border-b border-slate-200 relative overflow-hidden"
    >
      <div className="container-kits relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 border border-gold/70 text-navy bg-gold/15 px-3.5 py-1 rounded-full text-xs font-nav font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Award size={14} className="text-gold" />
            <span>National Assessment &amp; Accreditation Council</span>
          </div>

          <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">
            Accredited by <span className="text-royal">NAAC with &lsquo;A&rsquo; Grade</span>
          </h2>
          <div className="gold-divider-center my-3" />
          <p className="section-subtitle text-sm sm:text-base">
            Benchmarked by national apex bodies for pedagogical rigor, accredited laboratories, outcome-based curricula, and placement excellence.
          </p>
        </motion.div>

        {/* Centerpiece Panoramic Showcase of the Official NAAC Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="bg-white rounded-md border-2 border-gold/50 shadow-premium-lg overflow-hidden group hover:border-gold transition-all duration-300">
            {/* Top gold credential highlight strip */}
            <div className="bg-gradient-to-r from-navy via-royal to-navy text-white px-5 py-2.5 flex items-center justify-between flex-wrap gap-2 text-xs font-nav">
              <div className="flex items-center gap-2 font-bold text-amber-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                <span>NAAC &lsquo;A&rsquo; Grade Distinction &bull; 3.03 CGPA Score</span>
              </div>
              <span className="text-white/80 text-[11px]">
                Autonomous &bull; JNTUK Permanent Affiliation &bull; AICTE Approved
              </span>
            </div>

            {/* Official NAAC Banner High-Definition Display */}
            <div className="relative bg-white p-2 sm:p-4">
              <img
                src="https://www.kitsdivili.ac.in/images/banner-nacc-home.png"
                alt="KITS Divili NAAC Accreditation Banner - Official Institutional Recognition"
                className="w-full h-auto object-contain max-h-[360px] mx-auto group-hover:scale-[1.01] transition-transform duration-500"
                loading="eager"
              />
            </div>

            {/* Bottom summary bar with official logo & action */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://www.kitsdivili.ac.in/images/nacc-new-logo.jpeg"
                  alt="Official NAAC Logo"
                  className="h-10 w-auto object-contain rounded"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div>
                  <p className="font-heading font-bold text-navy text-sm">
                    Kakinada Institute of Technology &amp; Science (Autonomous)
                  </p>
                  <p className="text-[11px] text-secondary-text font-nav">
                    Tirupati Village, Divili, Peddapuram Mandal, East Godavari &ndash; 533433
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/achievements"
                  className="btn-gold py-2 px-4 text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Award size={14} />
                  <span>View College Achievements</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/about/vision-mission"
                  className="btn-outline py-2 px-3 text-xs font-semibold text-royal border-royal/40 hover:bg-royal hover:text-white"
                >
                  Credentials
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Harmonious Institutional Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {credentials.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + idx * 0.08 }}
              className={`bg-white border ${item.borderColor} p-5 rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 ${item.bgColor} rounded flex items-center justify-center`}>
                    <item.icon size={18} className={item.color} />
                  </div>
                  <span className={`text-[10px] font-nav font-bold px-2 py-0.5 rounded ${item.bgColor} ${item.color}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-navy text-sm mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-secondary-text text-xs leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NaacPrestigeBanner;
