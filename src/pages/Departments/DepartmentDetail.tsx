import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  FlaskConical, BookOpen, Target, Compass, Award, ArrowLeft, ArrowRight,
  GraduationCap, CheckCircle2, Image as ImageIcon, Users
} from 'lucide-react';
import { departments } from '@/data/departments';
import KitsImage from '@/components/common/KitsImage';

const DepartmentDetailPage: React.FC = () => {
  const { deptId } = useParams<{ deptId: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'laboratories' | 'programmes' | 'gallery'>('overview');

  const dept = departments.find((d) => d.id === deptId);

  useEffect(() => {
    if (dept) {
      document.title = `${dept.name} | KITS Divili`;
      window.scrollTo(0, 0);
    }
  }, [dept]);

  if (!dept) {
    return <Navigate to="/departments" replace />;
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Department Hero */}
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold relative overflow-hidden">
        <div className="container-kits relative z-10">
          <div className="max-w-4xl">
            <Link
              to="/departments"
              className="inline-flex items-center gap-1.5 text-xs font-nav text-gold/80 hover:text-gold mb-4 transition-colors"
            >
              <ArrowLeft size={13} />
              <span>Back to All 9 Departments</span>
            </Link>

            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span
                className="text-white text-xs font-nav font-bold tracking-widest px-3 py-1 rounded uppercase shadow-sm border border-white/20"
                style={{ backgroundColor: dept.color }}
              >
                {dept.shortName}
              </span>
              {dept.established && (
                <span className="bg-white/10 text-gold text-xs font-nav font-semibold px-2.5 py-0.5 rounded border border-gold/40">
                  Established in {dept.established}
                </span>
              )}
              <span className="text-white/60 text-xs font-nav">
                Autonomous &bull; JNTUK Affiliated
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {dept.name}
            </h1>
            <p className="text-white/80 text-base sm:text-lg font-body leading-relaxed max-w-3xl">
              {dept.description}
            </p>
          </div>
        </div>
      </section>

      {/* Department Sub-navigation Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-20 shadow-xs">
        <div className="container-kits flex items-center gap-2 sm:gap-6 overflow-x-auto py-2">
          {[
            { id: 'overview', label: 'Overview & Vision', icon: Target },
            { id: 'laboratories', label: `Laboratories (${dept.laboratories.length})`, icon: FlaskConical },
            { id: 'programmes', label: `Programmes (${dept.programmes.length})`, icon: GraduationCap },
            { id: 'gallery', label: 'Department Gallery', icon: ImageIcon },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-nav whitespace-nowrap rounded transition-all ${
                activeTab === tab.id
                  ? 'bg-navy text-gold font-bold shadow-xs'
                  : 'text-slate-600 hover:text-royal hover:bg-slate-100'
              }`}
            >
              <tab.icon size={14} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Tab Content */}
      <section className="section-padding">
        <div className="container-kits max-w-5xl">
          
          {/* TAB 1: OVERVIEW & VISION */}
          {activeTab === 'overview' && (
            <div className="space-y-10">
              {/* Image & Quick Specs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <KitsImage
                    src={dept.imageUrl}
                    alt={`${dept.name} Laboratory at KITS`}
                    category="laboratory"
                    aspectRatio="4:3"
                    className="rounded-sm shadow-premium border-2 border-slate-200"
                  />
                </div>
                <div className="lg:col-span-5 bg-white p-6 border border-slate-200 shadow-sm rounded-sm space-y-4">
                  <h3 className="font-heading font-bold text-lg text-navy border-b border-slate-100 pb-2">
                    Department Profile
                  </h3>
                  <div className="text-xs space-y-2 font-nav">
                    <p className="flex justify-between">
                      <span className="text-secondary-text">Department Code:</span>
                      <strong className="text-navy">{dept.shortName}</strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-secondary-text">Established:</span>
                      <strong className="text-navy">{dept.established || '2008'}</strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-secondary-text">Head of Department:</span>
                      <strong className="text-navy">{dept.hod}</strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-secondary-text">Laboratories:</span>
                      <strong className="text-royal">{dept.laboratories.length} Active Labs</strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-secondary-text">Curriculum Regulations:</span>
                      <strong className="text-gold">R20 / R19 / R17</strong>
                    </p>
                  </div>

                  <Link
                    to="/admissions/enquiry"
                    className="w-full btn-gold justify-center text-xs py-2.5 mt-3 shadow-sm inline-flex items-center gap-1.5"
                  >
                    <GraduationCap size={14} />
                    <span>Enquire for {dept.shortName} Admission</span>
                  </Link>
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-l-4 border-gold p-6 shadow-sm border border-slate-200 rounded-sm">
                  <div className="flex items-center gap-2 text-gold mb-3">
                    <Target size={18} />
                    <h4 className="font-heading font-bold text-navy text-base">Department Vision</h4>
                  </div>
                  <p className="text-secondary-text text-xs sm:text-sm leading-relaxed font-body italic">
                    &ldquo;{dept.vision}&rdquo;
                  </p>
                </div>

                <div className="bg-white border-l-4 border-royal p-6 shadow-sm border border-slate-200 rounded-sm">
                  <div className="flex items-center gap-2 text-royal mb-3">
                    <Compass size={18} />
                    <h4 className="font-heading font-bold text-navy text-base">Department Mission</h4>
                  </div>
                  <p className="text-secondary-text text-xs sm:text-sm leading-relaxed font-body italic">
                    &ldquo;{dept.mission}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LABORATORIES */}
          {activeTab === 'laboratories' && (
            <div>
              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-navy">
                  Specialized Laboratories &amp; Technical Facilities
                </h3>
                <p className="text-secondary-text text-xs sm:text-sm font-body mt-1">
                  Fully equipped with modern instrumentation, computers, and testing rigs conforming to AICTE and JNTUK standards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dept.laboratories.map((lab, index) => (
                  <div
                    key={lab}
                    className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm flex items-start gap-3.5 hover:border-gold/60 transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-light-blue text-royal flex items-center justify-center font-nav font-bold text-xs flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-navy text-sm mb-1">
                        {lab}
                      </h4>
                      <p className="text-[11px] text-secondary-text font-body leading-relaxed">
                        Features verified experimental apparatus, calibration rigs, and safety protocols for hands-on student coursework.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PROGRAMMES */}
          {activeTab === 'programmes' && (
            <div>
              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-navy">
                  Academic Programmes Offered
                </h3>
                <p className="text-secondary-text text-xs sm:text-sm font-body mt-1">
                  Autonomous degree programmes designed for industry readiness and research foundations.
                </p>
              </div>

              <div className="space-y-4">
                {dept.programmes.map((p) => (
                  <div
                    key={p}
                    className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-navy text-gold text-[10px] font-nav font-bold px-2 py-0.5 rounded uppercase">
                          Autonomous
                        </span>
                        <span className="text-xs text-secondary-text font-nav">JNTUK Approved</span>
                      </div>
                      <h4 className="font-heading font-bold text-navy text-base sm:text-lg">
                        {p}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        to="/academics/syllabus"
                        className="btn-outline text-xs py-2 px-3 inline-flex items-center gap-1"
                      >
                        <BookOpen size={13} />
                        <span>Syllabus</span>
                      </Link>
                      <Link
                        to="/admissions/enquiry"
                        className="btn-gold text-xs py-2 px-3 inline-flex items-center gap-1"
                      >
                        <GraduationCap size={13} />
                        <span>Apply</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: GALLERY */}
          {activeTab === 'gallery' && (
            <div>
              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-navy">
                  Department Laboratory &amp; Academic Gallery
                </h3>
                <p className="text-secondary-text text-xs sm:text-sm font-body mt-1">
                  Authentic campus photographs depicting {dept.name} facilities at KITS Divili.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dept.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="bg-navy-900 border border-slate-200 rounded-sm overflow-hidden aspect-[4/3] group relative"
                  >
                    <KitsImage
                      src={img}
                      alt={`${dept.name} photo ${i + 1}`}
                      category="laboratory"
                      aspectRatio="4:3"
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
                    <div className="absolute bottom-3 left-3 text-white text-xs font-nav font-medium">
                      {dept.shortName} Facility #{i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default DepartmentDetailPage;
