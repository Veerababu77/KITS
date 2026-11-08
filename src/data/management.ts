// Management members data - sourced from official KITS Divili website
export interface ManagementMember {
  id: string;
  name: string;
  designation: string;
  role: 'president' | 'vice-president' | 'secretary' | 'joint-secretary' | 'treasurer' | 'member';
  imageUrl?: string;
  initials: string;
  message?: string;
}

export const managementMembers: ManagementMember[] = [
  {
    id: 'president',
    name: 'Betineedi Srinivasa Rao',
    designation: 'President',
    role: 'president',
    initials: 'BSR',
    message: `It gives me immense pleasure to welcome you to Kakinada Institute of Technology and Science, Divili. 
    Our institution was founded with a singular vision — to provide quality technical education that empowers young minds 
    to meet the challenges of the rapidly evolving world. KITS stands as a testament to our commitment to academic excellence, 
    innovation, and character development. We believe that true education encompasses not just technical knowledge but also 
    ethical values, leadership qualities, and a spirit of service to society. I invite you to explore KITS and join our 
    growing family of achievers.`,
  },
  {
    id: 'vice-president',
    name: 'Betineedi Venkata Kamaraju',
    designation: 'Vice President',
    role: 'vice-president',
    initials: 'BVK',
  },
  {
    id: 'secretary',
    name: 'Betineedi Sireesha',
    designation: 'Secretary',
    role: 'secretary',
    initials: 'BS',
    message: `Welcome to Kakinada Institute of Technology and Science. As Secretary of this institution, 
    I am proud to be part of an organization that has been shaping the future of thousands of students 
    since its establishment in 2008. Our commitment to quality education, state-of-the-art infrastructure, 
    and experienced faculty ensures that every student who walks through our gates receives the best possible 
    foundation for their professional journey. We continue to evolve with the changing demands of the industry 
    while maintaining our core values of integrity, excellence, and service.`,
  },
  {
    id: 'joint-secretary',
    name: 'Kodavati Krishna Veni',
    designation: 'Joint Secretary',
    role: 'joint-secretary',
    initials: 'KKV',
  },
  {
    id: 'treasurer',
    name: 'Betineedi Srujan',
    designation: 'Treasurer',
    role: 'treasurer',
    initials: 'BSJ',
  },
  {
    id: 'member-1',
    name: 'Koduri Satyanarayana',
    designation: 'Member',
    role: 'member',
    initials: 'KS',
  },
  {
    id: 'member-2',
    name: 'Mundru Vara Prasada Rao',
    designation: 'Member',
    role: 'member',
    initials: 'MVP',
  },
  {
    id: 'member-3',
    name: 'Sunkara Srinivasa Rao',
    designation: 'Member',
    role: 'member',
    initials: 'SSR',
  },
  {
    id: 'member-4',
    name: 'Kodavati Rama Sandeep',
    designation: 'Member',
    role: 'member',
    initials: 'KRS',
  },
  {
    id: 'member-5',
    name: 'Kodavati Sahitya',
    designation: 'Member',
    role: 'member',
    initials: 'KSA',
  },
];

export const chairman = managementMembers.find((m) => m.role === 'president')!;
export const secretary = managementMembers.find((m) => m.role === 'secretary')!;
