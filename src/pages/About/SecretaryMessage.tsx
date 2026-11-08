import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, ShieldCheck } from 'lucide-react';
import { secretary } from '@/data/management';

const SecretaryMessagePage: React.FC = () => {
  useEffect(() => {
    document.title = "Secretary's Message | Smt B. Sireesha | KITS Divili";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Administrative Leadership
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Secretary&rsquo;s Message
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Smt Betineedi Sireesha, Secretary of Kakinada Institute of Technology &amp; Science.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-4xl">
          <div className="bg-white border-2 border-slate-200/90 shadow-premium-lg rounded-sm p-8 lg:p-12">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-200 mb-8">
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-royal to-navy text-gold rounded-full border-4 border-gold flex items-center justify-center text-2xl lg:text-3xl font-heading font-bold flex-shrink-0 shadow-md">
                {secretary.initials}
              </div>
              <div className="text-center sm:text-left">
                <span className="text-xs font-nav font-bold text-gold tracking-widest uppercase block mb-1">
                  SECRETARY
                </span>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-navy">
                  SMT. BETINEEDI SIREESHA
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
                  &ldquo;Welcome to Kakinada Institute of Technology and Science.&rdquo;
                </p>
              </div>

              <p>
                As Secretary of this institution, I am proud to be part of an organization that has been shaping the future of thousands of students since its establishment in 2008. Our commitment to quality education, state-of-the-art infrastructure, and experienced faculty ensures that every student who walks through our gates receives the best possible foundation for their professional journey.
              </p>

              <p>
                We continue to evolve with the changing demands of the industry while maintaining our core values of integrity, excellence, and service. Through dedicated student mentoring, active training &amp; placement wings, modern hostels, and expansive transport connectivity across the Godavari region, we provide an ecosystem where students can thrive academically and personally.
              </p>

              <p>
                I warmly welcome prospective engineers, researchers, and their parents to experience the transformative academic atmosphere at KITS Divili.
              </p>
            </div>

            {/* Signature Block */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-heading font-bold text-navy text-lg">Smt. Betineedi Sireesha</p>
                <p className="text-xs text-gold font-nav font-bold tracking-wider uppercase">Secretary, KITS Divili</p>
              </div>

              <Link
                to="/about/chairman-message"
                className="inline-flex items-center gap-1.5 text-xs font-nav font-bold text-royal hover:text-gold transition-colors"
              >
                <span>Read President&rsquo;s Address</span>
                <ArrowRight size={13} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SecretaryMessagePage;
