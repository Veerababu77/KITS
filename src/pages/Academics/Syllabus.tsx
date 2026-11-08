import React, { useEffect, useState } from 'react';
import { Search, Filter, Download, FileText, Calendar, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

interface AcademicDoc {
  id: string;
  title: string;
  category: 'Syllabus' | 'Regulations' | 'Model Papers' | 'Calendar' | 'Statutory';
  regulation: 'R20' | 'R19' | 'R17' | 'R16' | 'General';
  department: string;
  programme: 'B.Tech' | 'M.Tech' | 'Diploma' | 'Institutional';
  fileType: 'PDF';
  url: string;
  isVerifiedLink: boolean;
}

const academicDocs: AcademicDoc[] = [
  {
    id: 'doc-r20-cse',
    title: 'B.Tech Computer Science and Engineering R20 Complete Syllabus',
    category: 'Syllabus',
    regulation: 'R20',
    department: 'CSE',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-r20-agri',
    title: 'B.Tech Agricultural Engineering R20 Curriculum & Syllabus',
    category: 'Syllabus',
    regulation: 'R20',
    department: 'AGRI',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-r20-civil',
    title: 'B.Tech Civil Engineering R20 Autonomous Course Structure',
    category: 'Syllabus',
    regulation: 'R20',
    department: 'CIVIL',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-r20-ece',
    title: 'B.Tech Electronics & Communication Engineering R20 Syllabus',
    category: 'Syllabus',
    regulation: 'R20',
    department: 'ECE',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-r20-mech',
    title: 'B.Tech Mechanical Engineering R20 Detailed Syllabus',
    category: 'Syllabus',
    regulation: 'R20',
    department: 'MECH',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-r20-eee',
    title: 'B.Tech Electrical & Electronics Engineering R20 Course Scheme',
    category: 'Syllabus',
    regulation: 'R20',
    department: 'EEE',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-r20-aids',
    title: 'B.Tech Artificial Intelligence and Data Science (AI&DS) R20 Scheme',
    category: 'Syllabus',
    regulation: 'R20',
    department: 'AIDS',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-r20-csd',
    title: 'B.Tech CSE (Data Science) R20 Autonomous Scheme',
    category: 'Syllabus',
    regulation: 'R20',
    department: 'CSD',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-reg-r20',
    title: 'JNTUK / KITS Academic Regulations R20 for B.Tech (Autonomous)',
    category: 'Regulations',
    regulation: 'R20',
    department: 'General',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-reg-r19',
    title: 'Academic Regulations R19 for 4-Year B.Tech Programmes',
    category: 'Regulations',
    regulation: 'R19',
    department: 'General',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-reg-r16',
    title: 'Academic Regulations R16 Archive',
    category: 'Regulations',
    regulation: 'R16',
    department: 'General',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-cal-2024',
    title: 'Institutional Academic Calendar 2024-25 (Odd & Even Semesters)',
    category: 'Calendar',
    regulation: 'General',
    department: 'General',
    programme: 'Institutional',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-aicte-app',
    title: 'AICTE Mandatory Extension of Approval 2024-25',
    category: 'Statutory',
    regulation: 'General',
    department: 'General',
    programme: 'Institutional',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
  {
    id: 'doc-model-cse',
    title: 'Model Question Papers — B.Tech CSE Semester End Examinations',
    category: 'Model Papers',
    regulation: 'R20',
    department: 'CSE',
    programme: 'B.Tech',
    fileType: 'PDF',
    url: 'https://www.kitsdivili.ac.in',
    isVerifiedLink: true,
  },
];

const SyllabusPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Academic Resources & Syllabus Portal | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegulation, setSelectedRegulation] = useState<string>('all');
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredDocs = academicDocs.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesReg = selectedRegulation === 'all' || doc.regulation === selectedRegulation;
    const matchesDept = selectedDept === 'all' || doc.department === selectedDept;
    const matchesCat = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesReg && matchesDept && matchesCat;
  });

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Document &amp; Curriculum Repository
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Academic Resources &amp; Syllabus Portal
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Access official course structures, curriculum syllabi, academic regulations (R20, R19, R16), examination model papers, and statutory approvals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="section-padding">
        <div className="container-kits">
          
          <div className="bg-white p-6 border border-slate-200 shadow-premium rounded-sm mb-8 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-3 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by course title, department (e.g. CSE, Civil, Agriculture), regulation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded text-sm font-body outline-none focus:border-royal focus:ring-1 focus:ring-royal/20"
              />
            </div>

            {/* Dropdown Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-nav font-bold text-navy uppercase tracking-wider mb-1">
                  Regulation:
                </label>
                <select
                  value={selectedRegulation}
                  onChange={(e) => setSelectedRegulation(e.target.value)}
                  className="w-full p-2 border border-slate-200 rounded text-xs font-body outline-none"
                >
                  <option value="all">All Regulations (R20, R19, R17, R16)</option>
                  <option value="R20">R20 Regulation (Autonomous)</option>
                  <option value="R19">R19 Regulation</option>
                  <option value="R17">R17 Regulation</option>
                  <option value="R16">R16 Regulation</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-nav font-bold text-navy uppercase tracking-wider mb-1">
                  Department:
                </label>
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full p-2 border border-slate-200 rounded text-xs font-body outline-none"
                >
                  <option value="all">All Departments</option>
                  <option value="AGRI">Agricultural Engineering (AGRI)</option>
                  <option value="CIVIL">Civil Engineering (CIVIL)</option>
                  <option value="MECH">Mechanical Engineering (MECH)</option>
                  <option value="ECE">Electronics &amp; Communication (ECE)</option>
                  <option value="CSE">Computer Science &amp; Engineering (CSE)</option>
                  <option value="EEE">Electrical &amp; Electronics (EEE)</option>
                  <option value="AIDS">AI &amp; Data Science (AIDS)</option>
                  <option value="CSD">CSE Data Science (CSD)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-nav font-bold text-navy uppercase tracking-wider mb-1">
                  Resource Category:
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-slate-200 rounded text-xs font-body outline-none"
                >
                  <option value="all">All Resource Types</option>
                  <option value="Syllabus">Curriculum &amp; Syllabus</option>
                  <option value="Regulations">Academic Regulations</option>
                  <option value="Model Papers">Model Question Papers</option>
                  <option value="Calendar">Academic Calendar</option>
                  <option value="Statutory">AICTE / Affiliation Approvals</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between mb-4 text-xs text-secondary-text font-nav">
            <span>Showing {filteredDocs.length} academic resources</span>
            <span className="flex items-center gap-1.5 text-navy font-semibold">
              <ShieldCheck size={14} className="text-gold" />
              Verified Official Documents
            </span>
          </div>

          {/* Document List */}
          <div className="space-y-3">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm hover:shadow-md hover:border-gold/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded bg-light-blue text-royal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="bg-navy text-gold text-[10px] font-nav font-bold px-2 py-0.5 rounded">
                        {doc.regulation}
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-[10px] font-nav font-semibold px-2 py-0.5 rounded">
                        {doc.category}
                      </span>
                      <span className="text-[10px] text-royal font-nav font-semibold">
                        {doc.department}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-sm sm:text-base leading-snug">
                      {doc.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold py-2 px-3 text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    <Download size={13} />
                    <span>Download {doc.fileType}</span>
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

export default SyllabusPage;
