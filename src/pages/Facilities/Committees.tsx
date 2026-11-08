import React, { useEffect } from 'react';
import { ShieldCheck, Phone, FileText, AlertTriangle, Users, Download } from 'lucide-react';

const CommitteesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Statutory Committees & Grievance Cell | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const committees = [
    {
      name: "Women's Grievance Redressal Committee",
      role: 'Prevention of harassment, women empowerment, and resolution of female student/staff grievances.',
      helpline: '+91 9010695695',
      contact: 'Women Helpline Available 24/7',
    },
    {
      name: 'Internal Complaints Committee (ICC)',
      role: 'Constituted under POSH Act 2013 for gender sensitization, inquiry of complaints, and annual reporting.',
      report: 'ICC Annual Report Available for Download',
    },
    {
      name: 'SC / ST Committee & Cell',
      role: 'Ensuring affirmative action, counseling, scholarship assistance, and grievance redressal for SC/ST students.',
      contact: 'Convenor: Senior Faculty Member',
    },
    {
      name: 'Student Grievance & Counseling Cell',
      role: 'Mental health guidance, academic counseling, anti-stress support, and personal mentoring.',
      contact: 'Student Counselor Available Daily',
    },
    {
      name: 'Anti-Ragging Committee & Flying Squad',
      role: 'Zero tolerance policy towards ragging in compliance with Supreme Court and AICTE regulations.',
      helpline: 'Toll-Free National Helpline: 1800-180-5522',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Governance &amp; Student Safety
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Statutory Committees &amp; Cells
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Mandatory institutional grievance committees, Women Helpline, Anti-Ragging squads, and Internal Complaints Committee.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-6">
          
          {/* Emergency / Women Helpline Callout */}
          <div className="bg-gradient-to-r from-navy to-royal text-white p-6 rounded-sm shadow-premium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-l-4 border-gold">
            <div className="flex items-center gap-3">
              <Phone className="text-gold" size={24} />
              <div>
                <p className="font-heading font-bold text-base text-amber-200">
                  Institutional Women Helpline
                </p>
                <p className="text-xs text-white/80">
                  Direct emergency assistance for female students and staff
                </p>
              </div>
            </div>
            <a
              href="tel:+919010695695"
              className="btn-gold py-2 px-4 text-xs font-bold inline-flex items-center gap-2"
            >
              <Phone size={14} />
              <span>Call Helpline: +91 9010695695</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committees.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck size={18} className="text-gold" />
                    <h3 className="font-heading font-bold text-navy text-base">
                      {c.name}
                    </h3>
                  </div>
                  <p className="text-secondary-text text-xs sm:text-sm font-body leading-relaxed mb-4">
                    {c.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-nav text-royal font-semibold">
                  <span>{c.helpline || c.contact || c.report}</span>
                  <a
                    href="https://www.kitsdivili.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-text hover:text-royal flex items-center gap-1"
                  >
                    <FileText size={12} /> Details
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default CommitteesPage;
