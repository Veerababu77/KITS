import React, { useEffect } from 'react';
import { Calendar, Download, AlertCircle, Clock } from 'lucide-react';

const CalendarPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Academic Calendar | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Schedule &amp; Timelines
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Academic Calendar 2024-25
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Official institutional calendars specifying instructional working days, mid-term examinations, preparation breaks, and semester-end schedules.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-4xl space-y-8">
          
          {/* Odd Semester Calendar Card */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 shadow-premium">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-2 text-royal font-nav font-bold text-sm">
                <Calendar size={18} />
                <span>Odd Semester (I, III, V, VII Semesters) 2024-25</span>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-nav font-semibold px-2 py-0.5 rounded">
                Official JNTUK &amp; Autonomous
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-y border-slate-200 text-navy font-nav font-bold">
                    <th className="py-2.5 px-3">Academic Event / Phase</th>
                    <th className="py-2.5 px-3">Commencement Date</th>
                    <th className="py-2.5 px-3">Concluding Date</th>
                    <th className="py-2.5 px-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-body">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-navy">I Spell of Instructions</td>
                    <td className="py-2.5 px-3">July 2024</td>
                    <td className="py-2.5 px-3">September 2024</td>
                    <td className="py-2.5 px-3 text-secondary-text">8 Weeks</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-3 font-semibold text-navy">I Mid Examinations</td>
                    <td className="py-2.5 px-3">September 2024</td>
                    <td className="py-2.5 px-3">September 2024</td>
                    <td className="py-2.5 px-3 text-secondary-text">1 Week</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-navy">II Spell of Instructions</td>
                    <td className="py-2.5 px-3">October 2024</td>
                    <td className="py-2.5 px-3">November 2024</td>
                    <td className="py-2.5 px-3 text-secondary-text">8 Weeks</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-3 font-semibold text-navy">II Mid Examinations</td>
                    <td className="py-2.5 px-3">November 2024</td>
                    <td className="py-2.5 px-3">November 2024</td>
                    <td className="py-2.5 px-3 text-secondary-text">1 Week</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-navy">Semester End Lab &amp; Theory Exams</td>
                    <td className="py-2.5 px-3">December 2024</td>
                    <td className="py-2.5 px-3">December 2024</td>
                    <td className="py-2.5 px-3 text-secondary-text">2 Weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <a
                href="https://www.kitsdivili.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold py-2 px-3 text-xs font-semibold inline-flex items-center gap-1.5"
              >
                <Download size={13} />
                <span>Download Official Calendar Notification</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CalendarPage;
