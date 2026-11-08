import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, CheckCircle2, Phone, Mail, ArrowRight, FileCheck, BookOpen } from 'lucide-react';
import AdmissionEnquirySection from '@/components/sections/AdmissionEnquirySection';

const AdmissionsIndexPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Admissions 2024-25 | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const criteria = [
    {
      level: 'B.Tech (Undergraduate)',
      intake: 'Through AP EAPCET / Convenor Quota & Management Quota',
      eligibility: 'Passed 10+2 / Intermediate examination with Physics, Chemistry and Mathematics with required aggregate percentage.',
      code: 'AP EAPCET Counseling College Code: JQ',
    },
    {
      level: 'Diploma (Polytechnic)',
      intake: 'Through AP POLYCET / Direct Admission',
      eligibility: 'Passed SSC / 10th standard board examination with minimum passing marks in Mathematics & Science.',
      code: 'AP POLYCET Counseling Code: JQ',
    },
    {
      level: 'M.Tech (Postgraduate)',
      intake: 'Through AP PGECET / GATE Rank Holders',
      eligibility: 'B.E. / B.Tech in relevant branch of engineering with qualifying marks.',
      code: 'AP PGECET Counseling Code: JQ',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Enrollment 2024-25
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Admissions at KITS Divili
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Join an autonomous technical institution benchmarked by NAAC &lsquo;A&rsquo; Grade excellence and affiliated to JNTUK Kakinada.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process Overview */}
      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {criteria.map((c) => (
              <div
                key={c.level}
                className="bg-white border border-slate-200/90 rounded-sm p-6 shadow-premium hover:border-gold/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="bg-navy text-gold text-[10px] font-nav font-bold px-2 py-0.5 rounded uppercase block w-fit mb-3">
                    {c.code}
                  </span>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {c.level}
                  </h3>
                  <p className="text-xs text-secondary-text font-body leading-relaxed mb-4">
                    <strong>Admission Mode:</strong> {c.intake}
                  </p>
                  <p className="text-xs text-slate-700 font-body leading-relaxed">
                    <strong>Eligibility:</strong> {c.eligibility}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100">
                  <Link
                    to="/admissions/enquiry"
                    className="btn-gold py-2 w-full text-xs font-bold justify-center inline-flex items-center gap-1.5"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Helplines */}
          <div className="bg-gradient-to-r from-navy to-royal text-white p-8 rounded-sm shadow-premium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-nav font-bold text-gold uppercase tracking-wider block mb-1">
                Admissions Cell Direct Contact
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">
                Have questions about courses or counseling codes?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-body mt-1">
                Our counselors are available Monday &ndash; Saturday, 9:00 AM &ndash; 5:00 PM.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+919010344441"
                className="btn-gold py-2.5 px-5 text-xs font-bold whitespace-nowrap inline-flex items-center gap-2"
              >
                <Phone size={14} />
                <span>Call Admissions: +91 9010344441</span>
              </a>
              <a
                href="mailto:kitsenggcollege@gmail.com"
                className="btn-outline border-white/60 text-white hover:text-navy hover:bg-white py-2 px-5 text-xs font-medium justify-center inline-flex items-center gap-2"
              >
                <Mail size={14} />
                <span>Email Admissions Cell</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Enquiry Form */}
      <AdmissionEnquirySection />
    </div>
  );
};

export default AdmissionsIndexPage;
