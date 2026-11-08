// Testimonials - sourced from official KITS Divili website
export interface Testimonial {
  id: string;
  name: string;
  batch?: string;
  programme?: string;
  quote: string;
  imageUrl?: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Pathivada Sridhar Babu',
    initials: 'PSB',
    quote:
      'KITS provided me with an excellent foundation in engineering. The faculty are highly dedicated and the infrastructure supports practical learning. The campus environment motivated me to push my boundaries and achieve my goals.',
  },
  {
    id: 'testimonial-2',
    name: 'Pydikondala Ganga Bhavani',
    initials: 'PGB',
    quote:
      'Studying at KITS was a transformative experience. The college not only enhanced my technical knowledge but also helped me develop leadership and communication skills through various extracurricular activities.',
  },
  {
    id: 'testimonial-3',
    name: 'Marrapu Sravani',
    initials: 'MS',
    quote:
      'The supportive environment at KITS helped me grow both academically and personally. The workshops, seminars, and industry interactions provided great exposure to the real world of engineering.',
  },
  {
    id: 'testimonial-4',
    name: 'Paturi Hem Surendra Kumar',
    initials: 'PHK',
    quote:
      'KITS gave me the technical skills and confidence I needed to succeed in my career. The hands-on training in well-equipped laboratories and the guidance from experienced faculty was invaluable.',
  },
  {
    id: 'testimonial-5',
    name: 'Reddy Sravani',
    initials: 'RS',
    quote:
      'The academic culture at KITS is truly inspiring. I am grateful for the opportunities and the platform the college provided me to showcase my talents and prepare for a bright professional future.',
  },
];
