// Departments data - sourced from official KITS Divili website with verified distinct images
export interface Department {
  id: string;
  name: string;
  shortName: string;
  established?: string;
  hod?: string;
  vision?: string;
  mission?: string;
  imageUrl: string;
  galleryImages: string[];
  programmes: string[];
  laboratories: string[];
  intake?: string;
  color: string;
  description: string;
}

export const departments: Department[] = [
  {
    id: 'humanities',
    name: 'Humanities and Sciences',
    shortName: 'H&S',
    established: '2008',
    hod: 'Head of Department - H&S',
    description: 'Provides solid foundational knowledge in Mathematics, Physics, Chemistry, and English Communication, fostering analytical thinking and interpersonal competence.',
    vision: 'To build a robust foundational bridge connecting basic sciences with emerging engineering applications while developing ethical, well-rounded professionals.',
    mission: 'To impart quality education in basic sciences and humanities through practical experiments, language laboratory sessions, and interdisciplinary foundational courses.',
    imageUrl: 'https://www.kitsdivili.ac.in/images/depart/hs-01.JPG',
    galleryImages: [
      'https://www.kitsdivili.ac.in/images/depart/hs-01.JPG',
      'https://www.kitsdivili.ac.in/images/depart/hs-02.JPG',
      'https://www.kitsdivili.ac.in/images/depart10.jpg',
    ],
    programmes: ['Foundation Mathematics', 'Applied Physics', 'Applied Chemistry', 'English Communication Practice'],
    laboratories: ['Engineering Physics Lab', 'Engineering Chemistry Lab', 'English Language Communication Skills Lab', 'Environmental Science Lab'],
    color: '#475569',
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    shortName: 'CIVIL',
    established: '2008',
    hod: 'Head of Department - Civil Engineering',
    description: 'Equipped with modern surveying equipment, geotechnical testing units, concrete technology apparatus, and structural engineering computer labs.',
    vision: 'To develop competent civil engineers capable of designing sustainable infrastructure that addresses local and national societal needs.',
    mission: 'To provide rigorous theoretical and practical training in structural design, environmental engineering, geotechnical analysis, and modern surveying.',
    imageUrl: 'https://www.kitsdivili.ac.in/images/depart/civil-01.JPG',
    galleryImages: [
      'https://www.kitsdivili.ac.in/images/depart/civil-01.JPG',
      'https://www.kitsdivili.ac.in/images/depart/civil-02.JPG',
      'https://www.kitsdivili.ac.in/images/depart11.jpg',
    ],
    programmes: ['B.Tech Civil Engineering', 'M.Tech Structural Engineering', 'Diploma Civil Engineering'],
    laboratories: ['Strength of Materials Lab', 'Surveying Field Lab', 'Fluid Mechanics & Hydraulic Machinery Lab', 'Geotechnical Engineering Lab', 'Concrete Technology Lab', 'Transportation Engineering Lab', 'Computer Aided Drafting (CAD) Lab'],
    color: '#D97706',
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    established: '2008',
    hod: 'Head of Department - Mechanical Engineering',
    description: 'State-of-the-art workshops, CNC machines, thermal engineering test rigs, robotics, and advanced CAD/CAM software suites.',
    vision: 'To nurture world-class mechanical engineers proficient in design, manufacturing, thermal systems, and automation.',
    mission: 'To provide state-of-the-art laboratory exposure, fostering innovation in computer-aided manufacturing, renewable energy, and robotics.',
    imageUrl: 'https://www.kitsdivili.ac.in/images/depart/mech-01.JPG',
    galleryImages: [
      'https://www.kitsdivili.ac.in/images/depart/mech-01.JPG',
      'https://www.kitsdivili.ac.in/images/depart/mech-02.JPG',
      'https://www.kitsdivili.ac.in/images/depart12.jpg',
    ],
    programmes: ['B.Tech Mechanical Engineering', 'M.Tech CAD/CAM', 'Diploma Mechanical Engineering'],
    laboratories: ['Thermal Engineering Lab', 'Manufacturing Technology & Machine Tools Lab', 'CAD/CAM Lab', 'Heat Transfer Lab', 'Metrology & Instrumentation Lab', 'Mechanics of Solids & Metallurgy Lab'],
    color: '#DC2626',
  },
  {
    id: 'ece',
    name: 'Electronics and Communication Engineering',
    shortName: 'ECE',
    established: '2008',
    hod: 'Head of Department - ECE',
    description: 'Advanced laboratories for VLSI design, Digital Signal Processing, Embedded Systems, Microwave and Optical Communications, and IoT prototyping.',
    vision: 'To produce globally competitive electronics and communication engineers with deep research mindset and technological competence.',
    mission: 'To empower students with in-depth knowledge of hardware architecture, digital signal processing, modern communication networks, and embedded systems.',
    imageUrl: 'https://www.kitsdivili.ac.in/images/depart/ece-01.JPG',
    galleryImages: [
      'https://www.kitsdivili.ac.in/images/depart/ece-01.JPG',
      'https://www.kitsdivili.ac.in/images/depart/ece-02.JPG',
      'https://www.kitsdivili.ac.in/images/depart/ece-06.JPG',
      'https://www.kitsdivili.ac.in/images/depart13.jpg',
    ],
    programmes: ['B.Tech Electronics and Communication Engineering', 'M.Tech Communication Systems'],
    laboratories: ['Electronic Devices & Circuits Lab', 'Analog & Digital Communications Lab', 'Microprocessors & Microcontrollers Lab', 'VLSI & Embedded Systems Design Lab', 'Digital Signal Processing (DSP) Lab', 'Microwave & Optical Engineering Lab'],
    color: '#7C3AED',
  },
  {
    id: 'cse',
    name: 'Computer Science and Engineering',
    shortName: 'CSE',
    established: '2008',
    hod: 'Head of Department - CSE',
    description: 'High-speed networked computer centers equipped with latest developer tools, cloud infrastructure, algorithm design, and software engineering suites.',
    vision: 'To be a premier center of excellence in computer science education, innovation, and technological research.',
    mission: 'To impart cutting-edge technical education in computer science, software engineering, cloud computing, and intelligent systems.',
    imageUrl: 'https://www.kitsdivili.ac.in/images/depart/cse-01.JPG',
    galleryImages: [
      'https://www.kitsdivili.ac.in/images/depart/cse-01.JPG',
      'https://www.kitsdivili.ac.in/images/depart/cse-02.JPG',
      'https://www.kitsdivili.ac.in/images/depart14.jpg',
    ],
    programmes: ['B.Tech Computer Science and Engineering', 'M.Tech Computer Science and Technology', 'Diploma Computer Science and Engineering'],
    laboratories: ['Advanced Programming Lab', 'Data Structures & Algorithms Lab', 'Database Management Systems Lab', 'Computer Networks & Operating Systems Lab', 'Web Technologies & Cloud Computing Lab', 'Software Engineering & Testing Lab'],
    color: '#0284C7',
  },
  {
    id: 'eee',
    name: 'Electrical and Electronics Engineering',
    shortName: 'EEE',
    established: '2008',
    hod: 'Head of Department - EEE',
    description: 'Comprehensive facilities for electrical machinery, high-voltage testing, power electronics, power systems simulation, and industrial automation.',
    vision: 'To foster technical excellence in electrical energy systems, power electronics, and sustainable green energy solutions.',
    mission: 'To prepare students for leadership in electrical systems design, renewable energy generation, smart grids, and industrial control systems.',
    imageUrl: 'https://www.kitsdivili.ac.in/images/depart15.jpg',
    galleryImages: [
      'https://www.kitsdivili.ac.in/images/depart15.jpg',
      'https://www.kitsdivili.ac.in/images/depart16.jpg',
      'https://www.kitsdivili.ac.in/images/depart21.jpg',
    ],
    programmes: ['B.Tech Electrical and Electronics Engineering', 'M.Tech Power Systems and Automation'],
    laboratories: ['Electrical Machines Lab', 'Power Electronics & Drives Lab', 'Control Systems Lab', 'Power Systems Simulation Lab', 'Electrical Measurements & Testing Lab', 'Circuits & Networks Lab'],
    color: '#059669',
  },
  {
    id: 'agri',
    name: 'Agricultural Engineering',
    shortName: 'AGRI',
    established: '2008',
    hod: 'Head of Department - Agricultural Engineering',
    description: 'A pioneering program at KITS since inception in 2008, combining agricultural sciences, farm machinery, soil & water conservation, and smart irrigation.',
    vision: 'To pioneer technological transformation in agriculture through modern farm mechanization, precision farming, and sustainable resource conservation.',
    mission: 'To educate engineers in modern agricultural machinery, food processing, soil & water conservation engineering, and farm automation.',
    imageUrl: 'https://www.kitsdivili.ac.in/images/depart17.jpg',
    galleryImages: [
      'https://www.kitsdivili.ac.in/images/depart17.jpg',
      'https://www.kitsdivili.ac.in/images/depart18.jpg',
      'https://www.kitsdivili.ac.in/images/infra1.jpg',
    ],
    programmes: ['B.Tech Agricultural Engineering'],
    laboratories: ['Farm Machinery & Power Engineering Lab', 'Soil & Water Conservation Engineering Lab', 'Agricultural Process Engineering Lab', 'Irrigation & Drainage Engineering Lab', 'Agricultural Renewable Energy Lab'],
    color: '#16A34A',
  },
  {
    id: 'aids',
    name: 'Artificial Intelligence and Data Science',
    shortName: 'AI&DS',
    established: '2020',
    hod: 'Head of Department - AI & Data Science',
    description: 'High-performance computing workstations with GPU acceleration, deep learning frameworks, neural network simulation, and big data processing clusters.',
    vision: 'To be a center of excellence in generative artificial intelligence, machine intelligence, and advanced data analytics.',
    mission: 'To equip students with mastery over deep learning, natural language processing, computer vision, and cognitive computing systems.',
    imageUrl: 'https://www.kitsdivili.ac.in/images/depart19.jpg',
    galleryImages: [
      'https://www.kitsdivili.ac.in/images/depart19.jpg',
      'https://www.kitsdivili.ac.in/images/depart20.jpg',
      'https://www.kitsdivili.ac.in/images/depart24.jpg',
    ],
    programmes: ['B.Tech Artificial Intelligence and Data Science', 'Diploma Artificial Intelligence and Machine Learning'],
    laboratories: ['Machine Learning & Deep Learning Lab', 'Artificial Intelligence Systems Lab', 'Big Data Analytics Lab', 'Computer Vision & Natural Language Processing Lab', 'High Performance GPU Computing Lab'],
    color: '#174EA6',
  },
  {
    id: 'csd',
    name: 'Computer Science and Engineering (Data Science)',
    shortName: 'CSD',
    established: '2021',
    hod: 'Head of Department - CSE (Data Science)',
    description: 'Focused on big data architectures, statistical modeling, distributed data processing, predictive analytics, and enterprise data visualization.',
    vision: 'To cultivate elite data scientists and analytics architects who turn complex datasets into actionable societal and industrial solutions.',
    mission: 'To provide industry-oriented training in data mining, predictive modeling, statistical computing, and enterprise cloud data pipelines.',
    imageUrl: 'https://www.kitsdivili.ac.in/images/depart22.jpg',
    galleryImages: [
      'https://www.kitsdivili.ac.in/images/depart22.jpg',
      'https://www.kitsdivili.ac.in/images/depart23.jpg',
      'https://www.kitsdivili.ac.in/images/depart24.jpg',
    ],
    programmes: ['B.Tech Computer Science and Engineering (Data Science)'],
    laboratories: ['Data Analytics & R/Python Statistical Lab', 'Data Warehousing & Mining Lab', 'Cloud Computing & Distributed Systems Lab', 'Predictive Modeling & Business Intelligence Lab'],
    color: '#0B1F3A',
  },
];
