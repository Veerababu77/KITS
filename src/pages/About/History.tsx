import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const HistoryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Institutional History | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: '2008',
      title: 'Inception & Cluster of Technical Courses',
      description: 'KITS was started with a cluster of technical courses in the year 2008 in Tirupati Village, Divili, Peddapuram Mandal, East Godavari District. Agricultural Engineering was introduced among the pioneering programmes, fulfilling a unique technical requirement in the agricultural hub of Andhra Pradesh.',
    },
    {
      year: '2010',
      title: 'Infrastructure Expansion & Advanced Laboratories',
      description: 'Establishment of specialized engineering workshops, Central Library reading halls, and high-speed networked computing laboratories.',
    },
    {
      year: '2014',
      title: 'Active NSS Unit & Societal Outreaches',
      description: 'Strengthened NSS volunteer activities including regional health camps, Swachh Bharat drives, blood donation initiatives, and national integration conventions.',
    },
    {
      year: '2018',
      title: 'Postgraduate & Research Intensification',
      description: 'Expansion of M.Tech programmes in CAD/CAM, Structural Engineering, Communication Systems, and Power Systems, alongside funded faculty research.',
    },
    {
      year: '2020',
      title: 'Emerging Technologies & Artificial Intelligence',
      description: 'Introduction of cutting-edge programmes in Artificial Intelligence and Data Science (AI&DS) and Computer Science and Engineering (Data Science - CSD).',
    },
    {
      year: 'Present',
      title: 'UGC Autonomous Status & NAAC Grade A Recognition',
      description: 'Attainment of prestigious Autonomous institution status and NAAC Grade A accreditation, empowering autonomous curriculum design and examination autonomy under JNTUK.',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              15+ Years of Excellence
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Institutional History &amp; Milestones
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              From our foundational batch in 2008 to our current stature as a NAAC &lsquo;A&rsquo; accredited autonomous digital campus.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-4xl">
          
          {/* Timeline */}
          <div className="relative border-l-2 border-gold/40 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-10 mb-16">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-navy border-2 border-gold flex items-center justify-center text-gold group-hover:scale-125 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                </div>

                <div className="bg-white border border-slate-200/90 shadow-sm p-6 rounded-sm group-hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-navy text-gold text-xs font-nav font-bold px-2.5 py-0.5 rounded">
                      {m.year}
                    </span>
                    <h3 className="font-heading font-bold text-navy text-base lg:text-lg">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-secondary-text text-xs sm:text-sm leading-relaxed font-body">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about/overview" className="btn-primary inline-flex items-center gap-2">
              <span>Return to Institutional Overview</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
