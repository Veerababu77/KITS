import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, GraduationCap, Users, Shield, ArrowLeft, AlertCircle, Lock, ExternalLink } from 'lucide-react';

const LoginPreviewPage: React.FC = () => {
  useEffect(() => {
    // Explicitly reset scroll position to 0,0 upon entering the login page
    window.scrollTo(0, 0);
    document.title = 'Institutional Portal Login | KITS Divili';
  }, []);

  const [selectedRole, setSelectedRole] = useState<'student' | 'faculty' | 'admin'>('student');

  const portals = [
    {
      id: 'student',
      icon: GraduationCap,
      label: 'Student Portal',
      description: 'Access attendance, semester grades, hall tickets, internal marks, and academic timetables.',
      color: 'from-royal to-navy',
      badge: 'B.Tech / Diploma / M.Tech',
    },
    {
      id: 'faculty',
      icon: Users,
      label: 'Faculty Portal',
      description: 'Manage class attendance registers, internal assessment uploads, student mentoring, and syllabus logs.',
      color: 'from-navy to-navy-800',
      badge: 'Academic & Lab Faculty',
    },
    {
      id: 'admin',
      icon: Shield,
      label: 'Administration',
      description: 'Executive management portal for fee accounting, statutory compliance, examination cell, and AICTE reports.',
      color: 'from-gold to-gold-700',
      badge: 'Administrative Staff',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#061220] via-navy to-[#0F294D] text-white flex flex-col justify-between py-10 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-royal blur-3xl" />
      </div>

      {/* Top back navigation */}
      <div className="container-kits relative z-10 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-nav text-gold/80 hover:text-gold transition-colors py-1.5 px-3 rounded bg-white/5 border border-white/10 hover:bg-white/10"
        >
          <ArrowLeft size={14} />
          <span>Return to KITS Main Website</span>
        </Link>
      </div>

      {/* Center Login Box */}
      <div className="container-kits max-w-4xl relative z-10 my-auto">
        
        {/* College Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block group">
            <img
              src="https://www.kitsdivili.ac.in/images/logo-removebg%20png-01.png"
              alt="KITS Logo"
              className="h-16 sm:h-20 w-auto mx-auto mb-3 brightness-0 invert group-hover:scale-105 transition-transform"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </Link>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-1">
            KITS Digital Campus Portal
          </h1>
          <p className="text-gold text-xs sm:text-sm font-nav uppercase tracking-widest font-semibold">
            Kakinada Institute of Technology &amp; Science &bull; Autonomous
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-3" />
        </div>

        {/* Official Portal Notice */}
        <div className="bg-white/10 backdrop-blur-md border border-gold/40 p-4 rounded-sm mb-8 text-center max-w-2xl mx-auto shadow-lg">
          <div className="flex items-center justify-center gap-2 text-gold font-nav font-bold text-xs sm:text-sm mb-1 uppercase tracking-wider">
            <Lock size={15} />
            <span>Digital Authentication Gateway</span>
          </div>
          <p className="text-white/80 text-xs sm:text-sm font-body leading-relaxed">
            Portal access will be available soon. Single Sign-On (SSO) authentication for students, faculty, and administration is currently in deployment.
          </p>
        </div>

        {/* 3 Portal Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {portals.map((portal) => (
            <div
              key={portal.id}
              onClick={() => setSelectedRole(portal.id as any)}
              className={`p-6 rounded-sm border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                selectedRole === portal.id
                  ? 'bg-white/15 border-gold shadow-lg shadow-gold/20 scale-[1.02]'
                  : 'bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded bg-gradient-to-br ${portal.color} border border-gold/40 flex items-center justify-center mb-4 text-gold`}>
                  <portal.icon size={22} className="text-white" />
                </div>
                <span className="text-[10px] text-amber-200 font-nav font-bold tracking-wider uppercase block mb-1">
                  {portal.badge}
                </span>
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  {portal.label}
                </h3>
                <p className="text-white/70 text-xs font-body leading-relaxed">
                  {portal.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-nav">
                <span className="text-gold font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  Coming Soon
                </span>
                <span className="text-white/40">v2.0 Gateway</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mock Login Shell for selected role */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-sm max-w-xl mx-auto shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
            <div>
              <h4 className="font-heading font-bold text-white text-base">
                {portals.find((p) => p.id === selectedRole)?.label} Sign-in
              </h4>
              <p className="text-xs text-white/60 font-nav">Enter your institutional credentials</p>
            </div>
            <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded font-nav uppercase font-bold">
              Demo Preview
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-nav font-bold text-white/80 uppercase tracking-wider mb-1">
                Institutional ID / Roll Number
              </label>
              <input
                type="text"
                disabled
                placeholder="e.g. 21JQ1A0501 or FACULTY_ID"
                className="w-full px-3 py-2.5 rounded bg-white/5 border border-white/20 text-xs text-white/50 cursor-not-allowed outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-nav font-bold text-white/80 uppercase tracking-wider mb-1">
                Password
              </label>
              <input
                type="password"
                disabled
                placeholder="••••••••••••"
                className="w-full px-3 py-2.5 rounded bg-white/5 border border-white/20 text-xs text-white/50 cursor-not-allowed outline-none"
              />
            </div>

            <button
              disabled
              className="w-full btn-gold py-3 text-xs font-bold justify-center cursor-not-allowed opacity-75 shadow-md flex items-center gap-2"
            >
              <LogIn size={15} />
              <span>Portal Access Will Be Available Soon</span>
            </button>
          </div>
        </div>

      </div>

      {/* Footer info */}
      <div className="container-kits text-center relative z-10 mt-8 text-xs text-white/50 font-nav">
        <p>&copy; {new Date().getFullYear()} Kakinada Institute of Technology &amp; Science (KITS), Divili &bull; Autonomous</p>
      </div>

    </div>
  );
};

export default LoginPreviewPage;
