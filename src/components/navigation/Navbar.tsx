import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Menu, X, Phone, Mail, GraduationCap, LogIn,
  Award, BookOpen, Building2, Users, FileText, Compass, Sparkles, Trophy
} from 'lucide-react';
import { cn } from '@/utils/cn';

interface NavSubItem {
  label: string;
  href: string;
  desc?: string;
}

interface NavSection {
  label: string;
  href: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  badge?: string;
  desc?: string;
  children?: NavSubItem[];
}

const navSections: NavSection[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About KITS',
    href: '/about',
    icon: Building2,
    children: [
      { label: 'Institutional Overview', href: '/about', desc: 'Excellence in engineering since 2008' },
      { label: 'Vision & Mission', href: '/about/vision-mission', desc: 'Core values & educational philosophy' },
      { label: 'Management Council', href: '/about/management', desc: '10 governing management members' },
      { label: "Chairman's Address", href: '/about/chairman-message', desc: 'Sri Betineedi Srinivasa Rao' },
      { label: "Secretary's Message", href: '/about/secretary-message', desc: 'Smt Betineedi Sireesha' },
      { label: 'Institutional History', href: '/about/history', desc: 'Milestones & autonomous journey' },
    ],
  },
  {
    label: 'Academics',
    href: '/departments',
    icon: BookOpen,
    children: [
      { label: 'All 9 Departments', href: '/departments', desc: 'H&S, Civil, Mech, ECE, CSE, EEE, Agri, AI&DS, CSD' },
      { label: 'Undergraduate (B.Tech)', href: '/academics/undergraduate', desc: '7 industry-oriented engineering branches' },
      { label: 'Diploma Engineering', href: '/academics/diploma', desc: 'Practical 3-year technical polytechnic' },
      { label: 'Postgraduate (M.Tech)', href: '/academics/postgraduate', desc: 'Advanced specialization programmes' },
      { label: 'Curriculum & Syllabus', href: '/academics/syllabus', desc: 'R20, R19, R17 & R16 regulations' },
      { label: 'Academic Calendar', href: '/academics/calendar', desc: 'Schedules, working days & exams' },
      { label: 'Examination Notifications', href: '/academics/exam-notifications', desc: 'Official schedules & results' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    icon: GraduationCap,
    badge: 'Open',
    children: [
      { label: 'Admission Overview', href: '/admissions', desc: 'Criteria, eligibility & seat intake' },
      { label: 'Courses Offered', href: '/admissions/courses', desc: 'Explore all approved programmes' },
      { label: 'Admission Enquiry', href: '/admissions/enquiry', desc: 'Direct online enquiry form' },
    ],
  },
  {
    label: 'Campus Life',
    href: '/campus-life',
    icon: Compass,
    children: [
      { label: 'Central Library', href: '/campus-life/library', desc: 'Thousands of volumes & e-journals' },
      { label: 'Student Hostels', href: '/campus-life/hostel', desc: 'Separate secure boys & girls hostels' },
      { label: 'Campus Transport', href: '/campus-life/transport', desc: 'Buses covering major East Godavari routes' },
      { label: 'Cafeteria & Dining', href: '/campus-life/cafeteria', desc: 'Nutritious & hygienic food services' },
      { label: 'Campus Infrastructure', href: '/campus-life/infrastructure', desc: 'Seminar halls, smart classrooms & labs' },
      { label: 'NSS Cell', href: '/nss', desc: 'Community service & national activities' },
      { label: 'Sports Complex', href: '/sports', desc: 'Indoor & outdoor athletic facilities' },
    ],
  },
  {
    label: 'Achievements',
    href: '/achievements',
    icon: Trophy,
    desc: 'Official college milestones, NAAC honors & gallery',
  },
  {
    label: 'Research',
    href: '/research',
    desc: 'R&D Cell, PhD enrolment & publications',
  },
  {
    label: 'Placements',
    href: '/placements',
    desc: 'Training, recruitment & placement cell',
  },
  {
    label: 'Gallery',
    href: '/gallery',
    desc: 'Campus, laboratory & event archives',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

// Top information bar
const TopBar: React.FC = () => (
  <div className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-1.5 border-b border-gold/30">
    <div className="container-kits flex items-center justify-between text-xs">
      <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
        <span className="flex items-center gap-1.5 font-semibold text-gold">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Autonomous Institution
        </span>
        <span className="text-white/40 hidden sm:inline">|</span>
        <span className="text-white/80 hidden sm:inline font-nav">Affiliated to JNTUK</span>
        <span className="text-white/40 hidden sm:inline">|</span>
        <span className="text-white/80 hidden md:inline font-nav">Approved by AICTE</span>
      </div>

      <div className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 border border-gold/60 px-3 py-0.5 rounded shadow-sm">
        <Award size={13} className="text-gold" />
        <span className="text-xs font-nav font-bold tracking-wider text-amber-200 uppercase">
          NAAC &lsquo;A&rsquo; Grade &bull; 3.03 CGPA Score
        </span>
        <span className="text-[10px] bg-gold text-navy font-bold px-1.5 py-0.2 rounded uppercase">
          Autonomous
        </span>
      </div>

      <div className="flex items-center gap-5">
        <a
          href="tel:+919010344441"
          className="flex items-center gap-1.5 text-white/90 hover:text-gold transition-colors font-medium font-nav"
        >
          <Phone size={11} className="text-gold" />
          <span>+91 9010344441</span>
        </a>
        <a
          href="mailto:kitsenggcollege@gmail.com"
          className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-gold transition-colors font-nav"
        >
          <Mail size={11} className="text-gold" />
          <span>kitsenggcollege@gmail.com</span>
        </a>
      </div>
    </div>
  </div>
);

// 3D tactile button style dropdown item — NOW DIRECTLY CLICKABLE
interface NavButtonProps {
  section: NavSection;
  isActive: boolean;
}

const Nav3DButton: React.FC<NavButtonProps> = ({ section, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const hasChildren = Boolean(section.children && section.children.length > 0);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hasChildren) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  // Clicking navigates directly to the page
  const handleClick = (e: React.MouseEvent) => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink
        to={section.href}
        onClick={handleClick}
        className={({ isActive: linkActive }) =>
          cn(
            'group flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-nav font-medium transition-all duration-200 select-none rounded',
            'border border-transparent hover:border-slate-200 hover:bg-white',
            'hover:shadow-[0_4px_12px_rgba(11,31,58,0.08),0_1px_2px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-inner cursor-pointer',
            isOpen || linkActive || isActive
              ? 'bg-white text-royal border-slate-200 shadow-[0_3px_8px_rgba(23,78,166,0.12)] font-semibold'
              : 'text-primary-text hover:text-royal'
          )
        }
      >
        <span>{section.label}</span>
        {section.badge && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded uppercase leading-tight animate-pulse">
            {section.badge}
          </span>
        )}
        {hasChildren && (
          <ChevronDown
            size={13}
            className={cn(
              'transition-transform duration-200 text-slate-400 group-hover:text-royal',
              isOpen && 'rotate-180 text-royal'
            )}
          />
        )}
      </NavLink>

      {/* 3D Elevated Flyout Dropdown */}
      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'absolute top-full left-0 mt-1.5 z-50 bg-white rounded-md',
              'border border-slate-200/90 shadow-[0_16px_36px_rgba(11,31,58,0.18),0_4px_12px_rgba(11,31,58,0.08)]',
              'overflow-hidden min-w-[280px] max-w-[340px]'
            )}
          >
            <div className="h-1 bg-gradient-to-r from-gold via-royal to-gold" />

            <div className="bg-slate-50/90 px-4 py-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-nav font-bold tracking-wider text-navy uppercase flex items-center gap-1.5">
                {section.icon && <section.icon size={12} className="text-gold" />}
                {section.label} Explorer
              </span>
              <span className="text-[10px] text-secondary-text font-nav">KITS Divili</span>
            </div>

            <div className="p-2 space-y-0.5">
              {section.children?.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive: itemActive }) =>
                    cn(
                      'group/item flex flex-col px-3 py-2 rounded transition-all duration-150',
                      itemActive
                        ? 'bg-light-blue text-royal font-semibold'
                        : 'text-primary-text hover:bg-slate-50 hover:text-royal'
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-nav font-medium group-hover/item:text-royal transition-colors">
                      {item.label}
                    </span>
                    <span className="text-slate-300 group-hover/item:text-gold group-hover/item:translate-x-0.5 transition-all text-xs">
                      →
                    </span>
                  </div>
                  {item.desc && (
                    <span className="text-[11px] text-secondary-text leading-tight mt-0.5 font-body line-clamp-1">
                      {item.desc}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile Drawer Navigation
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white z-50 overflow-y-auto shadow-2xl flex flex-col"
          >
            <div className="p-4 bg-navy text-white flex items-center justify-between border-b border-gold/30">
              <div className="flex items-center gap-3">
                <img
                  src="https://www.kitsdivili.ac.in/images/logo-removebg%20png-01.png"
                  alt="KITS Crest"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
                <div>
                  <h3 className="font-heading font-bold text-sm leading-tight text-white">KITS DIVILI</h3>
                  <p className="text-[10px] text-gold font-nav uppercase tracking-widest">Autonomous Institution</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-white/80 hover:text-white rounded hover:bg-white/10"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100/70 border-b border-amber-200 p-3 flex items-center gap-2.5">
              <Award className="text-amber-600 flex-shrink-0" size={18} />
              <div>
                <p className="text-xs font-heading font-bold text-navy">NAAC &lsquo;A&rsquo; Grade (3.03 CGPA)</p>
                <p className="text-[10px] text-slate-600">Autonomous &bull; JNTUK &bull; AICTE</p>
              </div>
            </div>

            <nav className="p-4 flex-1">
              <div className="space-y-1">
                {navSections.map((section) => (
                  <div key={section.label} className="border-b border-slate-100 last:border-0 pb-1">
                    {section.children ? (
                      <div>
                        <div className="flex items-center justify-between py-2 px-2 hover:bg-slate-50 rounded">
                          <NavLink
                            to={section.href}
                            onClick={onClose}
                            className="flex items-center gap-2 text-sm font-nav font-medium text-primary-text hover:text-royal flex-1"
                          >
                            {section.icon && <section.icon size={15} className="text-slate-400" />}
                            <span>{section.label}</span>
                          </NavLink>
                          <button
                            onClick={() => setOpenSection(openSection === section.label ? null : section.label)}
                            className="p-1 text-slate-400 hover:text-royal"
                            aria-label={`Toggle ${section.label} submenu`}
                          >
                            <ChevronDown
                              size={15}
                              className={cn(
                                'transition-transform duration-200',
                                openSection === section.label && 'rotate-180 text-royal'
                              )}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {openSection === section.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 pr-1 py-1 space-y-1 bg-slate-50/70 rounded mb-1"
                            >
                              {section.children.map((child) => (
                                <NavLink
                                  key={child.href}
                                  to={child.href}
                                  onClick={onClose}
                                  className={({ isActive }) =>
                                    cn(
                                      'block py-1.5 px-2 text-xs font-nav rounded transition-colors',
                                      isActive
                                        ? 'text-royal font-semibold bg-white shadow-sm'
                                        : 'text-secondary-text hover:text-royal'
                                    )
                                  }
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={section.href}
                        onClick={onClose}
                        className={({ isActive }) =>
                          cn(
                            'block py-2.5 px-2 text-sm font-nav font-medium rounded transition-colors',
                            isActive
                              ? 'text-royal font-semibold bg-light-blue'
                              : 'text-primary-text hover:text-royal hover:bg-slate-50'
                          )
                        }
                      >
                        {section.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 space-y-2.5">
                <Link
                  to="/admissions/enquiry"
                  onClick={onClose}
                  className="w-full btn-gold py-2.5 justify-center text-xs shadow-md"
                >
                  <GraduationCap size={15} />
                  Admission Enquiry 2024-25
                </Link>
                <Link
                  to="/login"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-nav font-medium text-navy border border-navy/30 rounded hover:bg-navy hover:text-white transition-colors"
                >
                  <LogIn size={14} />
                  Login Portal
                </Link>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Main Navbar Component
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="sticky top-0 z-40 w-full">
        <TopBar />

        <header
          className={cn(
            'w-full transition-all duration-300',
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(11,31,58,0.08)] border-b border-slate-200/80 py-2'
              : 'bg-white shadow-sm border-b border-slate-100 py-2.5'
          )}
        >
          <div className="container-kits">
            <div className="flex items-center justify-between gap-2 xl:gap-4">
              
              {/* Left: Official Logo + Institutional Branding */}
              <Link to="/" className="flex items-center gap-2.5 xl:gap-3 group flex-shrink-0">
                <img
                  src="https://www.kitsdivili.ac.in/images/logo-removebg%20png-01.png"
                  alt="Kakinada Institute of Technology and Science Crest"
                  className={cn(
                    'w-auto object-contain transition-all duration-300 group-hover:scale-105',
                    isScrolled ? 'h-10 lg:h-11' : 'h-11 lg:h-13'
                  )}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="flex flex-col">
                  <p className="font-heading font-bold text-navy text-xs sm:text-sm lg:text-base leading-tight tracking-tight">
                    KAKINADA INSTITUTE OF
                  </p>
                  <p className="font-heading font-bold text-navy text-xs sm:text-sm lg:text-base leading-tight tracking-tight">
                    TECHNOLOGY &amp; SCIENCE
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-royal font-nav font-bold tracking-widest uppercase">
                      DIVILI &bull; AUTONOMOUS
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded shadow-xs uppercase">
                      <Award size={10} /> NAAC &lsquo;A&rsquo;
                    </span>
                  </div>
                </div>
              </Link>

              {/* Center: Desktop 3D Tactile Navigation Bar (Directly Clickable) */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-wrap justify-center">
                {navSections.map((section) => (
                  <Nav3DButton
                    key={section.label}
                    section={section}
                    isActive={
                      section.href === '/'
                        ? location.pathname === '/'
                        : location.pathname.startsWith(section.href)
                    }
                  />
                ))}
              </nav>

              {/* Right: Action Buttons (Apply Now & Login) */}
              <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                <Link
                  to="/admissions/enquiry"
                  className={cn(
                    'relative group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-nav font-semibold text-navy rounded',
                    'bg-gradient-to-b from-amber-300 via-gold to-amber-500',
                    'border border-amber-400 shadow-[0_2px_6px_rgba(214,168,79,0.4)]',
                    'hover:shadow-[0_4px_14px_rgba(214,168,79,0.6)]',
                    'hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200'
                  )}
                >
                  <GraduationCap size={14} className="text-navy" />
                  <span>Apply Now</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-navy/60 animate-ping ml-0.5" />
                </Link>

                <Link
                  to="/login"
                  className={cn(
                    'inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-nav font-medium text-navy rounded',
                    'border border-slate-300 bg-white shadow-xs',
                    'hover:border-navy hover:bg-navy hover:text-white',
                    'hover:shadow-[0_4px_10px_rgba(11,31,58,0.18)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200'
                  )}
                >
                  <LogIn size={13} />
                  <span>Login</span>
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-2 rounded text-navy hover:bg-slate-100 hover:text-royal transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </header>
      </div>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
};

export default Navbar;
