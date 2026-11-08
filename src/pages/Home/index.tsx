import React, { useEffect } from 'react';
import CinematicHero from '@/components/sections/CinematicHero';
import NaacPrestigeBanner from '@/components/sections/NaacPrestigeBanner';
import RecognitionSection from '@/components/sections/RecognitionSection';
import AboutSection from '@/components/sections/AboutSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import ProgrammesSection from '@/components/sections/ProgrammesSection';
import DepartmentsSection from '@/components/sections/DepartmentsSection';
import FacilitiesSection from '@/components/sections/FacilitiesSection';
import NotificationsSection from '@/components/sections/NotificationsSection';
import GalleryPreviewSection from '@/components/sections/GalleryPreviewSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AdmissionEnquirySection from '@/components/sections/AdmissionEnquirySection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'KITS Divili | Kakinada Institute of Technology & Science — Autonomous';
  }, []);

  return (
    <>
      {/* Cinematic Scroll Hero (Scene 1 & Scene 2) */}
      <CinematicHero />

      {/* Official NAAC 'A' Grade Distinction Spotlight */}
      <NaacPrestigeBanner />

      {/* Statutory Recognition & Key Metrics */}
      <RecognitionSection />

      {/* Institutional Overview & Heritage */}
      <AboutSection />

      {/* Institutional Leadership — 10 Governing Management Members */}
      <LeadershipSection />

      {/* Academic Programmes (Diploma, B.Tech, M.Tech) */}
      <ProgrammesSection />

      {/* 9 Specialized Engineering Departments with Authentic Labs */}
      <DepartmentsSection />

      {/* Campus Facilities & Infrastructure */}
      <FacilitiesSection />

      {/* Official Notification Center & Academic Downloads */}
      <NotificationsSection />

      {/* Campus Life & Activity Gallery */}
      <GalleryPreviewSection />

      {/* Verified Student & Alumni Testimonials */}
      <TestimonialsSection />

      {/* Admission Enquiry & Direct Consultation Form */}
      <AdmissionEnquirySection />
    </>
  );
};

export default HomePage;
