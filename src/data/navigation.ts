// Navigation data for KITS Divili website
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Overview', href: '/about' },
      { label: 'Vision & Mission', href: '/about/vision-mission' },
      { label: 'Management Members', href: '/about/management' },
      { label: "Chairman's Message", href: '/about/chairman-message' },
      { label: "Secretary's Message", href: '/about/secretary-message' },
      { label: "Principal's Message", href: '/about/principal-message' },
      { label: 'Institutional History', href: '/about/history' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Departments', href: '/departments' },
      { label: 'Academic Details', href: '/academics/details' },
      { label: 'Diploma', href: '/academics/diploma' },
      { label: 'Undergraduate (B.Tech)', href: '/academics/undergraduate' },
      { label: 'Postgraduate (M.Tech)', href: '/academics/postgraduate' },
      { label: 'Syllabus', href: '/academics/syllabus' },
      { label: 'Regulations', href: '/academics/regulations' },
      { label: 'Academic Calendar', href: '/academics/calendar' },
      { label: 'Model Papers', href: '/academics/model-papers' },
      { label: 'Timetables', href: '/academics/timetables' },
      { label: 'Examination Notifications', href: '/academics/exam-notifications' },
      { label: 'Audit', href: '/academics/audit' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    children: [
      { label: 'Undergraduate', href: '/admissions/undergraduate' },
      { label: 'Diploma', href: '/admissions/diploma' },
      { label: 'Postgraduate', href: '/admissions/postgraduate' },
      { label: 'Courses Offered', href: '/admissions/courses' },
      { label: 'Admission Enquiry', href: '/admissions/enquiry' },
    ],
  },
  {
    label: 'Campus Life',
    href: '/campus-life',
    children: [
      { label: 'Library', href: '/campus-life/library' },
      { label: 'Hostel', href: '/campus-life/hostel' },
      { label: 'Transport', href: '/campus-life/transport' },
      { label: 'Cafeteria', href: '/campus-life/cafeteria' },
      { label: 'Research', href: '/research' },
      { label: 'Committees', href: '/committees' },
      { label: 'NSS', href: '/nss' },
      { label: 'Infrastructure', href: '/campus-life/infrastructure' },
      { label: 'Student Activities', href: '/campus-life/activities' },
    ],
  },
  {
    label: 'Research',
    href: '/research',
    children: [
      { label: 'Research & Development', href: '/research' },
      { label: 'Research Facilities', href: '/research/facilities' },
      { label: 'Publications & Activities', href: '/research/publications' },
    ],
  },
  {
    label: 'Placements',
    href: '/placements',
    children: [
      { label: 'Placement Overview', href: '/placements' },
      { label: 'Placement Activities', href: '/placements/activities' },
      { label: 'Placement Gallery', href: '/placements/gallery' },
    ],
  },
  {
    label: 'Gallery',
    href: '/gallery',
    children: [
      { label: 'Infrastructure', href: '/gallery/infrastructure' },
      { label: 'Events', href: '/gallery/events' },
      { label: 'Departments', href: '/gallery/departments' },
      { label: 'Placements', href: '/gallery/placements' },
      { label: 'Campus Life', href: '/gallery/campus-life' },
    ],
  },
  {
    label: 'Sports',
    href: '/sports',
    children: [
      { label: 'Sports Facilities', href: '/sports/facilities' },
      { label: 'Sports Activities', href: '/sports/activities' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];
