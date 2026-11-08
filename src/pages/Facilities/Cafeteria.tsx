import React, { useEffect } from 'react';
import { Coffee, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

const CafeteriaPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Campus Cafeteria & Canteen | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Campus Dining
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Cafeteria &amp; Refreshments
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Serving nutritious, wholesome meals, beverages, and healthy snacks in a spacious, hygienic dining hall.
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
                alt="KITS Divili Dining & Campus Facilities"
                category="campus"
                aspectRatio="4:3"
                className="rounded-sm shadow-premium border-2 border-slate-200"
              />
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-slate-200 shadow-sm rounded-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-navy">
                Hygienic Dining
              </h3>
              <p className="text-secondary-text text-xs sm:text-sm font-body leading-relaxed">
                The college cafeteria caters to the diverse culinary tastes of students and faculty members, offering nutritious South and North Indian meals at affordable subsidized prices.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-body">
                {[
                  'Strict Food Safety & Regular Hygiene Inspections',
                  'Continuous RO Purified Drinking Water',
                  'Separate Dining Areas for Staff & Students',
                  'Healthy Snacks, Hot Beverages & Fresh Juices',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-primary-text font-nav">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CafeteriaPage;
