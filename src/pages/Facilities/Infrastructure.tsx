import React, { useEffect } from 'react';
import { Building, Laptop, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const InfrastructurePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Campus Infrastructure & Grounds | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Smart Classrooms', desc: 'Acoustically treated lecture halls with digital projectors, audio-visual aids, and ergonomic seating.' },
    { title: 'Air-Conditioned Seminar Halls', desc: 'Central air-conditioned auditoriums for technical symposiums, guest lectures, and student assemblies.' },
    { title: 'Advanced Computing Center', desc: 'High-speed networked labs with fiber-optic connectivity and uninterrupted power backup (UPS/Generators).' },
    { title: 'Green & Eco-Friendly Campus', desc: 'Sprawling campus grounds surrounded by agricultural greenery, solar lighting, and tree avenues.' },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Physical Campus
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Campus Infrastructure
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Purpose-built academic infrastructure designed to foster interactive teaching, technical experimentation, and collaborative learning.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <KitsImage
                src="https://www.kitsdivili.ac.in/images/infra1.jpg"
                alt="KITS Main Academic Block"
                category="campus"
                aspectRatio="4:3"
                className="rounded-sm shadow-premium border-2 border-slate-200"
              />
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-slate-200 shadow-sm rounded-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-navy">
                Built for Engineering Rigor
              </h3>
              <p className="text-secondary-text text-xs sm:text-sm font-body leading-relaxed">
                Situated in Tirupati Village, Divili, Peddapuram Mandal, the KITS campus encompasses multi-story academic wings, administrative blocks, departmental laboratories, and central workshops.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-body">
                {[
                  'Permanent Institutional Campus Buildings',
                  'High Capacity Captive Power Generators',
                  'Fire Safety Systems Conforming to Norms',
                  'Expansive Parking for Two & Four Wheelers',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-primary-text font-nav">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm">
                <Building className="text-royal mb-2" size={22} />
                <h4 className="font-heading font-bold text-navy text-base mb-1">{f.title}</h4>
                <p className="text-xs text-secondary-text font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default InfrastructurePage;
