import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/Home';
import NotFoundPage from '@/pages/NotFound';
import LoginPreviewPage from '@/pages/LoginPreview';

// About Suite
import AboutOverviewPage from '@/pages/About/Overview';
import VisionMissionPage from '@/pages/About/VisionMission';
import ManagementPage from '@/pages/About/Management';
import ChairmanMessagePage from '@/pages/About/ChairmanMessage';
import SecretaryMessagePage from '@/pages/About/SecretaryMessage';
import HistoryPage from '@/pages/About/History';

// Departments Suite
import DepartmentsIndexPage from '@/pages/Departments/index';
import DepartmentDetailPage from '@/pages/Departments/DepartmentDetail';

// Academics Suite
import UndergraduatePage from '@/pages/Academics/Undergraduate';
import DiplomaPage from '@/pages/Academics/Diploma';
import PostgraduatePage from '@/pages/Academics/Postgraduate';
import SyllabusPage from '@/pages/Academics/Syllabus';
import RegulationsPage from '@/pages/Academics/Regulations';
import CalendarPage from '@/pages/Academics/Calendar';
import ExamNotificationsPage from '@/pages/Academics/ExamNotifications';

// Admissions Suite
import AdmissionsIndexPage from '@/pages/Admissions/index';
import CoursesOfferedPage from '@/pages/Admissions/CoursesOffered';

// Facilities & Campus Life Suite
import LibraryPage from '@/pages/Facilities/Library';
import HostelPage from '@/pages/Facilities/Hostel';
import TransportPage from '@/pages/Facilities/Transport';
import CafeteriaPage from '@/pages/Facilities/Cafeteria';
import InfrastructurePage from '@/pages/Facilities/Infrastructure';
import ResearchPage from '@/pages/Facilities/Research';
import NssPage from '@/pages/Facilities/Nss';
import CommitteesPage from '@/pages/Facilities/Committees';
import SportsPage from '@/pages/Facilities/Sports';

// Placements, Gallery, Contact, Achievements
import PlacementsPage from '@/pages/Placements/index';
import GalleryPage from '@/pages/Gallery/index';
import ContactPage from '@/pages/Contact/index';
import AchievementsPage from '@/pages/Achievements/index';

// Loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-2 border-navy border-t-gold rounded-full animate-spin" />
      <p className="text-secondary-text text-xs font-nav">Loading KITS Digital Campus...</p>
    </div>
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* Login Preview */}
          <Route path="/login" element={<LoginPreviewPage />} />

          {/* About Us Suite */}
          <Route path="/about" element={<AboutOverviewPage />} />
          <Route path="/about/overview" element={<AboutOverviewPage />} />
          <Route path="/about/vision-mission" element={<VisionMissionPage />} />
          <Route path="/about/management" element={<ManagementPage />} />
          <Route path="/about/chairman-message" element={<ChairmanMessagePage />} />
          <Route path="/about/secretary-message" element={<SecretaryMessagePage />} />
          <Route path="/about/principal-message" element={<ChairmanMessagePage />} />
          <Route path="/about/history" element={<HistoryPage />} />

          {/* Departments Suite (All 9 Departments) */}
          <Route path="/departments" element={<DepartmentsIndexPage />} />
          <Route path="/departments/:deptId" element={<DepartmentDetailPage />} />

          {/* Academics Suite */}
          <Route path="/academics" element={<UndergraduatePage />} />
          <Route path="/academics/undergraduate" element={<UndergraduatePage />} />
          <Route path="/academics/diploma" element={<DiplomaPage />} />
          <Route path="/academics/postgraduate" element={<PostgraduatePage />} />
          <Route path="/academics/syllabus" element={<SyllabusPage />} />
          <Route path="/academics/regulations" element={<RegulationsPage />} />
          <Route path="/academics/calendar" element={<CalendarPage />} />
          <Route path="/academics/model-papers" element={<SyllabusPage />} />
          <Route path="/academics/timetables" element={<CalendarPage />} />
          <Route path="/academics/exam-notifications" element={<ExamNotificationsPage />} />
          <Route path="/academics/audit" element={<RegulationsPage />} />
          <Route path="/academics/details" element={<UndergraduatePage />} />

          {/* Admissions Suite */}
          <Route path="/admissions" element={<AdmissionsIndexPage />} />
          <Route path="/admissions/undergraduate" element={<UndergraduatePage />} />
          <Route path="/admissions/diploma" element={<DiplomaPage />} />
          <Route path="/admissions/postgraduate" element={<PostgraduatePage />} />
          <Route path="/admissions/courses" element={<CoursesOfferedPage />} />
          <Route path="/admissions/enquiry" element={<AdmissionsIndexPage />} />

          {/* Campus Life & Facilities Suite */}
          <Route path="/campus-life" element={<InfrastructurePage />} />
          <Route path="/campus-life/library" element={<LibraryPage />} />
          <Route path="/campus-life/hostel" element={<HostelPage />} />
          <Route path="/campus-life/transport" element={<TransportPage />} />
          <Route path="/campus-life/cafeteria" element={<CafeteriaPage />} />
          <Route path="/campus-life/infrastructure" element={<InfrastructurePage />} />
          <Route path="/campus-life/activities" element={<NssPage />} />

          {/* Research */}
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/facilities" element={<ResearchPage />} />
          <Route path="/research/publications" element={<ResearchPage />} />

          {/* Statutory Committees & Grievance */}
          <Route path="/committees" element={<CommitteesPage />} />

          {/* NSS */}
          <Route path="/nss" element={<NssPage />} />

          {/* Placements */}
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/placements/activities" element={<PlacementsPage />} />
          <Route path="/placements/gallery" element={<PlacementsPage />} />

          {/* Achievements */}
          <Route path="/achievements" element={<AchievementsPage />} />

          {/* Gallery */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:category" element={<GalleryPage />} />

          {/* Sports */}
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/sports/facilities" element={<SportsPage />} />
          <Route path="/sports/activities" element={<SportsPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
