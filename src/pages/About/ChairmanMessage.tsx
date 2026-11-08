import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, Award, ShieldCheck, Mail, Phone } from 'lucide-react';
import { chairman } from '@/data/management';

const ChairmanMessagePage: React.FC = () => {
  useEffect(() => {
    document.title = "Chairman's Message | Sri B. Srinivasa Rao | KITS Divili";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Leadership Perspective
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              President &amp; Chairman&rsquo;s Address
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Sri Betineedi Srinivasa Rao, President of Kakinada Institute of Technology &amp; Science.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-4xl">
          <div className="bg-white border-2 border-slate-200/90 shadow-premium-lg rounded-sm p-8 lg:p-12">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-200 mb-8">
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-navy to-royal text-gold rounded-full border-4 border-gold flex items-center justify-center text-2xl lg:text-3xl font-heading font-bold flex-shrink-0 shadow-md">
                {chairman.initials}
              </div>
              <div className="text-center sm:text-left">
                <span className="text-xs font-nav font-bold text-gold tracking-widest uppercase block mb-1">
                  PRESIDENT &amp; CHAIRMAN
                </span>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-navy">
                  SRI BETINEEDI SRINIVASA RAO
                </h2>
                <p className="text-xs sm:text-sm text-secondary-text font-nav mt-1">
                  Kakinada Institute of Technology and Science, Divili
                </p>
              </div>
            </div>

            {/* Address body */}
            <div className="prose max-w-none text-primary-text space-y-5 text-sm sm:text-base leading-relaxed font-body">
              <div className="flex items-start gap-3">
                <Quote size={28} className="text-gold flex-shrink-0 mt-1" />
                <p className="font-heading italic text-lg sm:text-xl text-navy font-semibold">
                  &ldquo;It gives me immense pleasure to welcome you to Kakinada Institute of Technology and Science, Divili.&rdquo;
                </p>
              </div>

              <p>
                Our institution was founded with a singular vision — to provide quality technical education that empowers young minds to meet the challenges of the rapidly evolving world. KITS stands as a testament to our commitment to academic excellence, innovation, and character development.
              </p>

              <p>
                We believe that true education encompasses not just technical knowledge but also ethical values, leadership qualities, and a spirit of service to society. Since our inception in 2008, our objective has been to build high-standard engineering talent capable of driving industry advancement while contributing positively to regional and national growth.
              </p>

              <p>
                With modern laboratories, highly qualified and dedicated faculty members, and progressive autonomous academic curricula, we ensure that every student receives holistic engineering exposure. I invite you to explore KITS and join our growing family of achievers.
              </p>
            </div>

            {/* Signature Block */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-heading font-bold text-navy text-lg">Sri Betineedi Srinivasa Rao</p>
                <p className="text-xs text-gold font-nav font-bold tracking-wider uppercase">President, KITS Divili</p>
              </div>

              <Link
                to="/about/secretary-message"
                className="inline-flex items-center gap-1.5 text-xs font-nav font-bold text-royal hover:text-gold transition-colors"
              >
                <span>Read Secretary&rsquo;s Address</span>
                <ArrowRight size={13} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ChairmanMessagePage;
