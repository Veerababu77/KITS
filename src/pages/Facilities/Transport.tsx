import React, { useEffect } from 'react';
import { Bus, MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const TransportPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Campus Transport Fleet | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const routes = [
    { route: 'Route 1', name: 'Kakinada City to Campus', coverage: 'Bhanugudi, Jagannaickpur, Main Road, Samalkota, Divili' },
    { route: 'Route 2', name: 'Rajahmundry to Campus', coverage: 'Kotipalli Bus Stand, Morampudi, Lalacheruvu, Jaggampeta, Divili' },
    { route: 'Route 3', name: 'Peddapuram Local & Suburbs', coverage: 'Peddapuram Town, RTC Complex, Kattamuru, Divili' },
    { route: 'Route 4', name: 'Pithapuram / Yeleswaram', coverage: 'Pithapuram, Gollaprolu, Yeleswaram, Prathipadu, Divili' },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Fleet &amp; Commute Network
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Campus Transport
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Safe, punctual, and comfortable daily college bus transport connecting key hubs across East Godavari district.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <KitsImage
                src="https://www.kitsdivili.ac.in/images/gallery/tra-03.JPG"
                alt="KITS Official Transport Bus Fleet"
                category="transport"
                aspectRatio="4:3"
                className="rounded-sm shadow-premium border-2 border-slate-200"
              />
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-slate-200 shadow-sm rounded-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-navy">
                Dedicated Fleet
              </h3>
              <p className="text-secondary-text text-xs sm:text-sm font-body leading-relaxed">
                KITS operates an extensive fleet of institutional buses catering to day scholars and faculty from Kakinada, Rajahmundry, Peddapuram, and surrounding regional centers.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-body">
                {[
                  'Experienced, Verified Heavy-Vehicle Drivers',
                  'Emergency First-Aid Kits & Speed Governors',
                  'Timely Morning Pickup & Evening Return',
                  'Nominal Subsidized Transport Pass Structure',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-primary-text font-nav">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Route Matrix */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-navy mb-4">
              Key Transport Route Coverage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {routes.map((r) => (
                <div key={r.route} className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-navy text-gold text-[10px] font-nav font-bold px-2 py-0.5 rounded">
                      {r.route}
                    </span>
                    <span className="text-xs font-heading font-bold text-navy">{r.name}</span>
                  </div>
                  <p className="text-xs text-secondary-text font-body leading-relaxed">
                    <strong>Stoppages:</strong> {r.coverage}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TransportPage;
