import React, { useEffect, useState } from 'react';
import { Bell, Calendar, Download, Search, Filter, AlertCircle } from 'lucide-react';
import { notifications, Notification } from '@/data/notifications';

const ExamNotificationsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Examination Notifications | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = notifications.filter((n) => {
    const matchesCat = selectedCategory === 'all' || n.category === selectedCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Official Institutional Circulars
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Examination &amp; Academic Notifications
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Official exam schedules, timetable releases, revaluation notifications, and academic circulars preserved as published.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-4xl">
          
          {/* Historical Notification Notice as per guidelines */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-sm mb-6 flex items-start gap-3 text-xs text-amber-800 font-body">
            <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold font-nav uppercase tracking-wider text-amber-900 mb-0.5">
                Archival Record Notice
              </p>
              <p>
                All 2024 academic circulars and notifications below are historical official records preserved from the original college website without fabricated announcements.
              </p>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="bg-white p-4 border border-slate-200 rounded-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 border border-slate-200 rounded text-xs font-body outline-none"
              />
            </div>

            <div className="flex items-center gap-1.5 flex-wrap w-full sm:w-auto">
              {['all', 'examination', 'academic', 'general', 'admission'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs font-nav rounded capitalize transition-colors ${
                    selectedCategory === cat
                      ? 'bg-navy text-gold font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          <div className="space-y-3">
            {filtered.map((n) => (
              <div
                key={n.id}
                className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3.5 flex-1">
                  <div className="w-9 h-9 rounded bg-light-blue text-royal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bell size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="bg-navy/10 text-navy text-[10px] font-nav font-bold px-2 py-0.5 rounded capitalize">
                        {n.category}
                      </span>
                      {n.isArchived && (
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-nav font-semibold px-2 py-0.5 rounded">
                          Historical 2024
                        </span>
                      )}
                      <span className="text-xs text-secondary-text font-nav flex items-center gap-1">
                        <Calendar size={11} /> {n.date}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-sm sm:text-base leading-snug">
                      {n.title}
                    </h3>
                    {n.description && (
                      <p className="text-secondary-text text-xs font-body mt-1 leading-relaxed">
                        {n.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.kitsdivili.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline py-1.5 px-3 text-xs font-semibold inline-flex items-center gap-1"
                  >
                    <Download size={12} />
                    <span>Notification</span>
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

export default ExamNotificationsPage;
