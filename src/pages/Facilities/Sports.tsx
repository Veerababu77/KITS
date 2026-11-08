import React, { useEffect } from 'react';
import { Award, Trophy, Users, Shield, ArrowRight } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const SportsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sports Facilities & Athletic Complex | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const sports = [
    { name: 'Cricket Field', type: 'Outdoor', desc: 'Standard turf ground with practice batting cages and tournament pitch.' },
    { name: 'Volleyball Courts', type: 'Outdoor', desc: 'Regulation sand and clay courts with floodlight illumination.' },
    { name: 'Basketball Court', type: 'Outdoor', desc: 'Concrete surfaced court with official backboards and markings.' },
    { name: 'Badminton Courts', type: 'Indoor', desc: 'Indoor wooden courts for inter-departmental tournaments.' },
    { name: 'Table Tennis & Chess', type: 'Indoor', desc: 'Dedicated recreational indoor sports arena in the student complex.' },
    { name: 'Athletic Track', type: 'Outdoor', desc: 'Multi-lane running track for annual sports meets and fitness sprints.' },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Physical Fitness &amp; Games
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sports Complex &amp; Athletics
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Encouraging holistic student health, sportsmanship, and inter-collegiate athletic triumphs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <KitsImage
                src="https://www.kitsdivili.ac.in/images/home-banner-08.png"
                alt="KITS Sports Activities"
                category="sports"
                aspectRatio="4:3"
                className="rounded-sm shadow-premium border-2 border-slate-200"
              />
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-slate-200 shadow-sm rounded-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-navy">
                Physical Education &amp; Tournaments
              </h3>
              <p className="text-secondary-text text-xs sm:text-sm font-body leading-relaxed">
                The Physical Education department regularly organizes annual athletic meets, inter-departmental sports leagues, and participates in JNTUK inter-collegiate zonal tournaments.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-nav space-y-1 text-slate-700">
                <p>&bull; Qualified Physical Directors &amp; Trainers</p>
                <p>&bull; Comprehensive Gymnasium Equipment</p>
                <p>&bull; Annual Sports Day &amp; Trophy Honors</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sports.map((s) => (
              <div key={s.name} className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] bg-navy text-gold font-nav font-bold px-2 py-0.5 rounded uppercase">
                    {s.type}
                  </span>
                  <Trophy size={14} className="text-gold" />
                </div>
                <h4 className="font-heading font-bold text-navy text-base mb-1">{s.name}</h4>
                <p className="text-xs text-secondary-text font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default SportsPage;
