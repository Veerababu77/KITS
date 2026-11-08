import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, Shield, Award, Users } from 'lucide-react';
import { managementMembers } from '@/data/management';

const ManagementPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Institutional Leadership & Management | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const president = managementMembers.find((m) => m.role === 'president')!;
  const vicePresident = managementMembers.find((m) => m.role === 'vice-president')!;
  const secretary = managementMembers.find((m) => m.role === 'secretary')!;
  const jointSecretary = managementMembers.find((m) => m.role === 'joint-secretary')!;
  const treasurer = managementMembers.find((m) => m.role === 'treasurer')!;
  const members = managementMembers.filter((m) => m.role === 'member');

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Governance &amp; Administration
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Institutional Leadership &amp; Management Members
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              The ten governing council members whose vision, dedication, and steadfast commitment steer KITS Divili towards technical excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits">
          
          {/* President - Featured Profile */}
          <div className="mb-14">
            <div className="text-center mb-8">
              <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase">Executive Head</span>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-navy">Office of the President</h2>
              <div className="gold-divider-center mt-3" />
            </div>

            <div className="bg-white border-2 border-slate-200/90 shadow-premium-lg rounded-sm overflow-hidden max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                <div className="md:col-span-5 bg-gradient-to-br from-navy to-royal text-white p-8 lg:p-10 text-center flex flex-col items-center justify-center">
                  <div className="w-28 h-28 lg:w-32 lg:h-32 bg-white/10 rounded-full border-4 border-gold flex items-center justify-center text-3xl font-heading font-bold text-gold mb-4 shadow-lg">
                    {president.initials}
                  </div>
                  <span className="text-xs font-nav font-bold text-gold tracking-widest uppercase mb-1">
                    {president.designation}
                  </span>
                  <h3 className="font-heading font-bold text-xl lg:text-2xl text-white">
                    {president.name}
                  </h3>
                  <p className="text-white/60 text-xs font-nav mt-1">
                    Kakinada Institute of Technology &amp; Science
                  </p>
                </div>

                <div className="md:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-gold mb-3">
                      <Quote size={20} />
                      <span className="text-xs font-nav font-bold uppercase tracking-wider text-navy">
                        Presidential Address
                      </span>
                    </div>
                    <p className="text-secondary-text font-body text-sm sm:text-base leading-relaxed italic mb-6">
                      &ldquo;{president.message}&rdquo;
                    </p>
                  </div>
                  <div>
                    <Link
                      to="/about/chairman-message"
                      className="inline-flex items-center gap-1.5 text-xs font-nav font-bold text-royal hover:text-gold transition-colors"
                    >
                      <span>Read Complete Presidential Address</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vice President & Secretary - Key Executive Officers */}
          <div className="mb-14">
            <div className="text-center mb-8">
              <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase">Executive Officers</span>
              <h2 className="font-heading font-bold text-2xl text-navy">Vice President &amp; Secretary</h2>
              <div className="gold-divider-center mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Vice President */}
              <div className="bg-white border border-slate-200 shadow-premium rounded-sm p-6 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-navy text-gold rounded-full border-2 border-gold flex items-center justify-center text-xl font-heading font-bold flex-shrink-0">
                    {vicePresident.initials}
                  </div>
                  <div>
                    <span className="text-xs font-nav font-bold text-gold tracking-widest uppercase block mb-0.5">
                      {vicePresident.designation}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-navy">
                      {vicePresident.name}
                    </h3>
                    <p className="text-xs text-secondary-text font-nav mt-0.5">
                      Governing Council Officer
                    </p>
                  </div>
                </div>
                <p className="text-xs text-secondary-text leading-relaxed font-body">
                  Providing strategic oversight, resource mobilization, and academic infrastructure enhancement for KITS Divili.
                </p>
              </div>

              {/* Secretary */}
              <div className="bg-white border border-slate-200 shadow-premium rounded-sm p-6 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-royal text-white rounded-full border-2 border-gold flex items-center justify-center text-xl font-heading font-bold flex-shrink-0">
                    {secretary.initials}
                  </div>
                  <div>
                    <span className="text-xs font-nav font-bold text-gold tracking-widest uppercase block mb-0.5">
                      {secretary.designation}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-navy">
                      {secretary.name}
                    </h3>
                    <p className="text-xs text-secondary-text font-nav mt-0.5">
                      Executive Institutional Administration
                    </p>
                  </div>
                </div>
                <p className="text-xs text-secondary-text leading-relaxed font-body mb-3">
                  Overseeing institutional governance, student welfare, faculty recruitment, and community partnerships since 2008.
                </p>
                <Link
                  to="/about/secretary-message"
                  className="inline-flex items-center gap-1.5 text-xs font-nav font-bold text-royal hover:text-gold transition-colors"
                >
                  <span>Read Secretary&rsquo;s Address</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Joint Secretary & Treasurer */}
          <div className="mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white border border-slate-200 shadow-sm rounded-sm p-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-800 text-white rounded-full border border-gold flex items-center justify-center text-lg font-heading font-bold flex-shrink-0">
                  {jointSecretary.initials}
                </div>
                <div>
                  <span className="text-xs font-nav font-bold text-gold tracking-widest uppercase block mb-0.5">
                    {jointSecretary.designation}
                  </span>
                  <h3 className="font-heading font-bold text-base text-navy">
                    {jointSecretary.name}
                  </h3>
                  <p className="text-xs text-secondary-text font-nav">Governing Management Council</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-sm p-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-800 text-white rounded-full border border-gold flex items-center justify-center text-lg font-heading font-bold flex-shrink-0">
                  {treasurer.initials}
                </div>
                <div>
                  <span className="text-xs font-nav font-bold text-gold tracking-widest uppercase block mb-0.5">
                    {treasurer.designation}
                  </span>
                  <h3 className="font-heading font-bold text-base text-navy">
                    {treasurer.name}
                  </h3>
                  <p className="text-xs text-secondary-text font-nav">Governing Management Council</p>
                </div>
              </div>
            </div>
          </div>

          {/* Members of the Governing Body - 5 Members Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase">Governing Body</span>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-navy">Management Committee Members</h2>
              <div className="gold-divider-center mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-5 text-center rounded-sm"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-navy to-royal text-white rounded-full mx-auto mb-3 flex items-center justify-center font-heading font-bold text-sm border-2 border-gold/60">
                    {member.initials}
                  </div>
                  <h4 className="font-heading font-bold text-navy text-xs leading-snug mb-1">
                    {member.name}
                  </h4>
                  <span className="text-[10px] font-nav font-bold text-gold tracking-widest uppercase block">
                    {member.designation}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ManagementPage;
