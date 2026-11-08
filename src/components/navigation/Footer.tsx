import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Gold top border */}
      <div className="h-1 bg-gradient-to-r from-gold via-gold/80 to-gold/40" />

      {/* Main footer content */}
      <div className="container-kits py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://www.kitsdivili.ac.in/images/logo-removebg%20png-01.png"
                alt="KITS Logo"
                className="h-14 w-auto object-contain brightness-0 invert"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div>
                <p className="font-heading font-bold text-sm leading-tight">KAKINADA INSTITUTE OF</p>
                <p className="font-heading font-bold text-sm leading-tight">TECHNOLOGY & SCIENCE</p>
                <p className="text-gold text-xs font-nav tracking-widest mt-0.5">DIVILI — AUTONOMOUS</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Empowering the next generation through quality technical education, innovation, and excellence since 2008.
            </p>
            <div className="flex flex-col gap-2 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-gold rounded-full" />
                Autonomous Institution
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-gold rounded-full" />
                Affiliated to JNTUK
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-gold rounded-full" />
                Approved by AICTE
              </span>
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-gold mb-4 pb-3 border-b border-white/10">
              About
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'About KITS', href: '/about' },
                { label: 'Vision & Mission', href: '/about/vision-mission' },
                { label: 'Management', href: '/about/management' },
                { label: "Chairman's Message", href: '/about/chairman-message' },
                { label: "Secretary's Message", href: '/about/secretary-message' },
                { label: 'Achievements & Honors', href: '/achievements' },
                { label: 'History', href: '/about/history' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-gold mb-4 pb-3 border-b border-white/10">
              Academics
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Departments', href: '/departments' },
                { label: 'Diploma Programmes', href: '/academics/diploma' },
                { label: 'Undergraduate (B.Tech)', href: '/academics/undergraduate' },
                { label: 'Postgraduate (M.Tech)', href: '/academics/postgraduate' },
                { label: 'Syllabus', href: '/academics/syllabus' },
                { label: 'Academic Calendar', href: '/academics/calendar' },
                { label: 'Notifications', href: '/academics/exam-notifications' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Campus Life */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-gold mb-4 pb-3 border-b border-white/10">
              Campus Life
            </h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'Library', href: '/campus-life/library' },
                { label: 'Hostel', href: '/campus-life/hostel' },
                { label: 'Transport', href: '/campus-life/transport' },
                { label: 'Research & Development', href: '/research' },
                { label: 'NSS', href: '/nss' },
                { label: 'Placements', href: '/placements' },
                { label: 'Gallery', href: '/gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick contact */}
            <div className="border-t border-white/10 pt-4 space-y-2">
              <a
                href="tel:+919010695695"
                className="flex items-center gap-2 text-white/60 hover:text-gold text-xs transition-colors"
              >
                <Phone size={12} />
                +91 9010695695
              </a>
              <a
                href="mailto:kitsenggcollege@gmail.com"
                className="flex items-center gap-2 text-white/60 hover:text-gold text-xs transition-colors"
              >
                <Mail size={12} />
                kitsenggcollege@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-kits py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            {/* Address */}
            <div className="flex items-start gap-2 text-white/50 text-xs">
              <MapPin size={12} className="mt-0.5 flex-shrink-0 text-gold" />
              <span>
                Tirupati Village, Divili, Peddapuram Mandal, East Godavari District,
                Andhra Pradesh — 533433
              </span>
            </div>

            {/* Copyright + links */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="flex items-center gap-4 text-xs text-white/40">
                <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
                <Link to="/admissions/enquiry" className="hover:text-gold transition-colors">Admissions</Link>
                <a
                  href="https://www.kitsdivili.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-gold transition-colors"
                >
                  Official Site
                  <ExternalLink size={10} />
                </a>
              </div>
              <p className="text-xs text-white/30">
                © {currentYear} KITS Divili. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
