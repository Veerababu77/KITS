// Notifications - sourced from official KITS Divili website
// All notifications are historical and preserved as published
export interface Notification {
  id: string;
  title: string;
  date: string;
  category: 'general' | 'examination' | 'academic' | 'admission' | 'event';
  isArchived: boolean;
  pdfUrl?: string;
  description?: string;
  year: number;
}

export const notifications: Notification[] = [
  // 2024 Historical Notifications
  {
    id: 'notif-001',
    title: 'JNTUK B.Tech R20 Supplementary Examinations Schedule',
    date: '2024-10-15',
    category: 'examination',
    isArchived: true,
    year: 2024,
    description: 'Schedule for B.Tech R20 supplementary examinations. Students are advised to check the official JNTUK website for detailed timetable.',
  },
  {
    id: 'notif-002',
    title: 'Academic Calendar 2024-25 Released',
    date: '2024-08-01',
    category: 'academic',
    isArchived: true,
    year: 2024,
    description: 'Academic calendar for the year 2024-25 has been released. All students and faculty are requested to follow the schedule.',
  },
  {
    id: 'notif-003',
    title: 'Admissions Open 2024 — B.Tech, M.Tech & Diploma',
    date: '2024-06-01',
    category: 'admission',
    isArchived: true,
    year: 2024,
    description: 'Admissions are now open for B.Tech, M.Tech, and Diploma programmes for the academic year 2024-25.',
  },
  {
    id: 'notif-004',
    title: 'Internal Complaints Committee Annual Report 2024',
    date: '2024-04-10',
    category: 'general',
    isArchived: true,
    year: 2024,
    description: 'ICC Annual Report for the year 2024 is now available.',
  },
  {
    id: 'notif-005',
    title: 'AICTE Approval 2024-25',
    date: '2024-03-15',
    category: 'general',
    isArchived: true,
    year: 2024,
    description: 'AICTE approval for the academic year 2024-25 has been received.',
  },
  {
    id: 'notif-006',
    title: 'Mid Semester Examinations Schedule — Odd Semester 2024',
    date: '2024-09-20',
    category: 'examination',
    isArchived: true,
    year: 2024,
    description: 'Mid semester examination schedule for all branches and years.',
  },
  {
    id: 'notif-007',
    title: 'National Seminar on Emerging Technologies in Engineering',
    date: '2024-02-10',
    category: 'event',
    isArchived: true,
    year: 2024,
    description: 'KITS organized a national-level seminar on emerging technologies.',
  },
  {
    id: 'notif-008',
    title: 'R20 Regulation Syllabus Download',
    date: '2024-01-15',
    category: 'academic',
    isArchived: true,
    year: 2024,
    description: 'R20 Regulation Syllabus for all B.Tech programmes is available for download.',
  },
];

export const getNotificationsByCategory = (category: Notification['category']) =>
  notifications.filter((n) => n.category === category);

export const getRecentNotifications = (count = 5) =>
  [...notifications].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
