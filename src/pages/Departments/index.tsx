import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FlaskConical, ArrowRight, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { departments } from '@/data/departments';
import KitsImage from '@/components/common/KitsImage';

const DepartmentsIndexPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Departments | KITS Divili — Autonomous';
    window.scrollTo(0, 0);
  }, []);

  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ug' | 'pg' | 'diploma'>('all');

  const filteredDepts = departments.filter((d) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'diploma') return d.programmes.some((p) => p.includes('Diploma'));
    if (selectedFilter === 'pg') return d.programmes.some((p) => p.includes('M.Tech'));
    if (selectedFilter === 'ug') return d.programmes.some((p) => p.includes('B.Tech'));
    return true;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Academic Schools &amp; Disciplines
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Academic Departments
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Explore the 9 specialized engineering and foundational departments at KITS Divili, each featuring modern laboratory equipment, seasoned faculty, and outcome-based curricula.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-slate-200 py-4 sticky top-16 z-20 shadow-xs">
        <div className="container-kits flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-nav font-bold text-navy uppercase tracking-wider">
              Filter by Level:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'all', label: 'All Departments' },
                { id: 'ug', label: 'B.Tech Offered' },
                { id: 'diploma', label: 'Diploma Offered' },
                { id: 'pg', label: 'M.Tech Offered' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedFilter(btn.id as any)}
                  className={`px-3 py-1.5 text-xs font-nav rounded transition-all ${
                    selectedFilter === btn.id
                      ? 'bg-navy text-gold font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs text-secondary-text font-nav">
            Showing {filteredDepts.length} of {departments.length} Departments
          </span>
        </div>
      </section>

      {/* 9 Departments Catalog */}
      <section className="section-padding">
        <div className="container-kits">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepts.map((dept) => (
              <div
                key={dept.id}
                className="group bg-white border border-slate-200 shadow-premium hover:shadow-card-hover rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-navy-900 overflow-hidden">
                    <KitsImage
                      src={dept.imageUrl}
                      alt={dept.name}
                      category="laboratory"
                      aspectRatio="4:3"
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
                    
                    <span
                      className="absolute top-3 left-3 text-white text-[11px] font-nav font-bold tracking-widest px-2.5 py-1 rounded shadow-sm border border-white/20 uppercase"
                      style={{ backgroundColor: dept.color }}
                    >
                      {dept.shortName}
                    </span>

                    {dept.established && (
                      <span className="absolute top-3 right-3 bg-navy/90 text-gold text-[10px] font-nav font-bold px-2 py-0.5 rounded border border-gold/30">
                        Est. {dept.established}
                      </span>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                      <p className="font-nav text-[11px] text-amber-200 font-semibold truncate">
                        {dept.hod}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h2 className="font-heading font-bold text-navy text-lg mb-2 group-hover:text-royal transition-colors">
                      {dept.name}
                    </h2>
                    <p className="text-secondary-text text-xs leading-relaxed mb-4 line-clamp-3 font-body">
                      {dept.description}
                    </p>

                    {/* Programmes Pills */}
                    <div className="mb-4 pt-3 border-t border-slate-100">
                      <p className="text-[10px] font-nav font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <GraduationCap size={12} className="text-gold" />
                        Programmes:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {dept.programmes.map((p) => (
                          <span
                            key={p}
                            className="text-[11px] font-nav bg-light-blue text-navy px-2 py-0.5 rounded"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Labs preview */}
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-[10px] font-nav font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <FlaskConical size={12} className="text-gold" />
                        Laboratories ({dept.laboratories.length}):
                      </p>
                      <ul className="text-xs text-secondary-text space-y-1 font-body">
                        {dept.laboratories.slice(0, 3).map((lab) => (
                          <li key={lab} className="flex items-center gap-1.5 truncate">
                            <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                            <span className="truncate">{lab}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/departments/${dept.id}`}
                    className="w-full btn-primary py-2.5 justify-center text-xs font-semibold"
                  >
                    <span>Explore Department Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentsIndexPage;
