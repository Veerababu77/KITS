import React, { useEffect, useState } from 'react';
import { Award, Calendar, HeartHandshake, ShieldCheck } from 'lucide-react';
import KitsImage from '@/components/common/KitsImage';

interface NssEvent {
  date: string;
  event: string;
  organizer: string;
  venue: string;
  year: '2016' | '2015' | '2014';
}

const nssEvents: NssEvent[] = [
  // 2016 Historical Records
  { date: '24-09-2016', event: 'NSS Foundation Day Celebrations', organizer: 'NSS Unit, KITS', venue: 'College Auditorium', year: '2016' },
  { date: '15-08-2016', event: '70th Independence Day & Plantation Drive', organizer: 'KITS NSS Wing', venue: 'Campus Grounds', year: '2016' },
  { date: '01-07-2016', event: 'Vanam Manam — Mega Tree Plantation', organizer: 'NSS Cell in assoc. with Forest Dept.', venue: 'Divili Village & Campus', year: '2016' },
  { date: '26-01-2016', event: 'Republic Day & Blood Donation Camp', organizer: 'KITS NSS & Red Cross Society', venue: 'Central Seminar Hall', year: '2016' },
  
  // 2015 Historical Records
  { date: '02-10-2015', event: 'Swachh Bharat Cleanliness Drive', organizer: 'NSS Volunteers', venue: 'Peddapuram Mandal Road', year: '2015' },
  { date: '15-08-2015', event: 'Independence Day & Free Health Camp', organizer: 'NSS Unit & Local Primary Health Center', venue: 'Tirupati Village Community Hall', year: '2015' },
  { date: '07-04-2015', event: 'World Health Day Awareness Rally', organizer: 'NSS Unit, KITS', venue: 'Divili Town', year: '2015' },
  { date: '26-01-2015', event: 'Republic Day National Integration Camp', organizer: 'KITS NSS Unit', venue: 'Main Campus', year: '2015' },
  
  // 2014 Historical Records
  { date: '02-10-2014', event: 'Swachh Bharat Abhiyan Launch Drive', organizer: 'NSS Volunteer Cadre', venue: 'KITS Campus & Surrounding Villages', year: '2014' },
  { date: '24-09-2014', event: 'NSS Day Blood Donation Mega Camp', organizer: 'NSS Cell & Govt. Hospital Blood Bank', venue: 'Central Library Hall', year: '2014' },
  { date: '15-08-2014', event: 'Independence Day & Green Campus Initiative', organizer: 'NSS Unit', venue: 'Campus Avenue', year: '2014' },
];

const NssPage: React.FC = () => {
  useEffect(() => {
    document.title = 'NSS & Student Activities | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const [selectedYear, setSelectedYear] = useState<'all' | '2016' | '2015' | '2014'>('all');

  const filtered = nssEvents.filter((e) => selectedYear === 'all' || e.year === selectedYear);

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              National Service Scheme
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              NSS &amp; Community Activities
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Instilling leadership, civic responsibility, and selfless community service among engineering students under the National Service Scheme (NSS).
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-5xl space-y-12">
          
          {/* Authentic College Photographs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-3 border border-slate-200 shadow-sm rounded-sm">
              <KitsImage
                src="https://www.kitsdivili.ac.in/images/nss1.jpg"
                alt="KITS NSS Activities"
                category="nss"
                aspectRatio="4:3"
                className="rounded-sm"
              />
              <p className="text-xs text-secondary-text font-nav text-center mt-2 italic">
                NSS Volunteer Community Outreach &amp; Rural Camp
              </p>
            </div>

            <div className="bg-white p-3 border border-slate-200 shadow-sm rounded-sm">
              <KitsImage
                src="https://www.kitsdivili.ac.in/images/nss2.jpg"
                alt="KITS NSS Programme"
                category="nss"
                aspectRatio="4:3"
                className="rounded-sm"
              />
              <p className="text-xs text-secondary-text font-nav text-center mt-2 italic">
                Tree Plantation &amp; Swachh Bharat Initiative
              </p>
            </div>
          </div>

          {/* Historical Records Table (2014, 2015, 2016) */}
          <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm shadow-premium">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-heading font-bold text-xl text-navy">
                  Preserved Institutional NSS Records
                </h3>
                <p className="text-xs text-secondary-text font-nav">
                  Historical activity log for 2014, 2015 and 2016
                </p>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {['all', '2016', '2015', '2014'].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr as any)}
                    className={`px-3 py-1 text-xs font-nav rounded transition-colors ${
                      selectedYear === yr
                        ? 'bg-navy text-gold font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {yr === 'all' ? 'All Years' : `Year ${yr}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-y border-slate-200 text-navy font-nav font-bold">
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3">Event Description</th>
                    <th className="py-2.5 px-3">Organizer</th>
                    <th className="py-2.5 px-3">Venue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-body">
                  {filtered.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? '' : 'bg-slate-50/50'}>
                      <td className="py-2.5 px-3 font-semibold text-navy whitespace-nowrap">
                        {item.date}
                      </td>
                      <td className="py-2.5 px-3 font-medium text-slate-800">
                        {item.event}
                      </td>
                      <td className="py-2.5 px-3 text-secondary-text">
                        {item.organizer}
                      </td>
                      <td className="py-2.5 px-3 text-secondary-text">
                        {item.venue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default NssPage;
