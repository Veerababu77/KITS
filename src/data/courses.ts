// Courses and academic programmes - sourced from official KITS Divili website
export interface Programme {
  id: string;
  name: string;
  level: 'diploma' | 'ug' | 'pg';
  degree: string;
  duration: string;
  department: string;
  intake?: number;
  description?: string;
}

export const diplomaProgrammes: Programme[] = [
  {
    id: 'diploma-aiml',
    name: 'Artificial Intelligence and Machine Learning',
    level: 'diploma',
    degree: 'Diploma',
    duration: '3 Years',
    department: 'AI & ML',
  },
  {
    id: 'diploma-civil',
    name: 'Civil Engineering',
    level: 'diploma',
    degree: 'Diploma',
    duration: '3 Years',
    department: 'Civil Engineering',
  },
  {
    id: 'diploma-cse',
    name: 'Computer Science and Engineering',
    level: 'diploma',
    degree: 'Diploma',
    duration: '3 Years',
    department: 'Computer Science',
  },
  {
    id: 'diploma-mech',
    name: 'Mechanical Engineering',
    level: 'diploma',
    degree: 'Diploma',
    duration: '3 Years',
    department: 'Mechanical Engineering',
  },
];

export const undergradProgrammes: Programme[] = [
  {
    id: 'btech-agri',
    name: 'Agricultural Engineering',
    level: 'ug',
    degree: 'B.Tech',
    duration: '4 Years',
    department: 'Agricultural Engineering',
    description: 'One of the pioneering programmes at KITS, combining agricultural sciences with engineering principles.',
  },
  {
    id: 'btech-civil',
    name: 'Civil Engineering',
    level: 'ug',
    degree: 'B.Tech',
    duration: '4 Years',
    department: 'Civil Engineering',
  },
  {
    id: 'btech-cse',
    name: 'Computer Science and Engineering',
    level: 'ug',
    degree: 'B.Tech',
    duration: '4 Years',
    department: 'Computer Science Engineering',
  },
  {
    id: 'btech-csd',
    name: 'Computer Science and Engineering (Data Science)',
    level: 'ug',
    degree: 'B.Tech',
    duration: '4 Years',
    department: 'CSD',
  },
  {
    id: 'btech-eee',
    name: 'Electrical and Electronics Engineering',
    level: 'ug',
    degree: 'B.Tech',
    duration: '4 Years',
    department: 'Electrical Engineering',
  },
  {
    id: 'btech-ece',
    name: 'Electronics and Communication Engineering',
    level: 'ug',
    degree: 'B.Tech',
    duration: '4 Years',
    department: 'Electronics Engineering',
  },
  {
    id: 'btech-mech',
    name: 'Mechanical Engineering',
    level: 'ug',
    degree: 'B.Tech',
    duration: '4 Years',
    department: 'Mechanical Engineering',
  },
];

export const postgradProgrammes: Programme[] = [
  // From departments page (primary source)
  {
    id: 'mtech-cadcam',
    name: 'CAD/CAM',
    level: 'pg',
    degree: 'M.Tech',
    duration: '2 Years',
    department: 'Mechanical Engineering',
  },
  {
    id: 'mtech-structural',
    name: 'Structural Engineering',
    level: 'pg',
    degree: 'M.Tech',
    duration: '2 Years',
    department: 'Civil Engineering',
  },
  {
    id: 'mtech-commsys',
    name: 'Communication Systems',
    level: 'pg',
    degree: 'M.Tech',
    duration: '2 Years',
    department: 'Electronics Engineering',
  },
  {
    id: 'mtech-cst',
    name: 'Computer Science and Technology',
    level: 'pg',
    degree: 'M.Tech',
    duration: '2 Years',
    department: 'Computer Science',
  },
  {
    id: 'mtech-it',
    name: 'Information Technology',
    level: 'pg',
    degree: 'M.Tech',
    duration: '2 Years',
    department: 'Information Technology',
    // Note: This M.Tech list is from the departments page. The main navigation lists a different set — to be verified with institution.
  },
  {
    id: 'mtech-power',
    name: 'Power Systems and Automation',
    level: 'pg',
    degree: 'M.Tech',
    duration: '2 Years',
    department: 'Electrical Engineering',
  },
];

export const allProgrammes = [...diplomaProgrammes, ...undergradProgrammes, ...postgradProgrammes];
