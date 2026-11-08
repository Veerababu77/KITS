import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Award, Download, ArrowRight, CheckCircle2 } from 'lucide-react';

const RegulationsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Academic Regulations | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const regulations = [
    {
      code: 'R20',
      title: 'Autonomous Academic Regulations R20',
      status: 'Current Applicable Regulation',
      description: 'Outcome-based education framework featuring credit structure, continuous internal evaluation (CIE), semester-end examinations (SEE), mandatory industrial internships, and honors/minor degree provisions.',
      credits: '160 Credits for B.Tech',
      url: 'https://www.kitsdivili.ac.in',
    },
    {
      code: 'R19',
      title: 'JNTUK Academic Regulations R19',
      status: 'Senior Batches',
      description: 'Credit-based semester system with practical engineering training, mandatory MOOCs certification, and technical seminars.',
      credits: '160 Credits for B.Tech',
      url: 'https://www.kitsdivili.ac.in',
    },
    {
      code: 'R16',
      title: 'JNTUK Academic Regulations R16',
      status: 'Archived Regulation',
      description: 'Previous regulation governing technical curriculum, lab examination evaluation, and attendance condonation rules.',
      credits: '180 Credits for B.Tech',
      url: 'https://www.kitsdivili.ac.in',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Curricular Framework
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Academic Regulations
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Official academic regulations governing degree completion, evaluation metrics, examination criteria, and grading structures under JNTUK and KITS Autonomous status.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-4xl space-y-6">
          {regulations.map((reg) => (
            <div
              key={reg.code}
              className="bg-white border-2 border-slate-200/90 rounded-sm p-6 sm:p-8 shadow-premium hover:border-gold/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <span className="bg-navy text-gold text-xs font-nav font-bold px-3 py-1 rounded tracking-wider uppercase">
                  Regulation {reg.code}
                </span>
                <span className="text-xs font-nav font-semibold text-royal bg-light-blue px-2.5 py-0.5 rounded">
                  {reg.status}
                </span>
              </div>

              <h2 className="font-heading font-bold text-navy text-xl sm:text-2xl mb-2">
                {reg.title}
              </h2>

              <p className="text-secondary-text text-xs sm:text-sm font-body leading-relaxed mb-4">
                {reg.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 flex-wrap gap-3">
                <span className="text-xs font-nav text-slate-500 font-medium">
                  Degree Requirement: <strong>{reg.credits}</strong>
                </span>
                <a
                  href={reg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold py-2 px-4 text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <Download size={13} />
                  <span>Download {reg.code} Regulations PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RegulationsPage;
