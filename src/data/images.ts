// Image library - sourced from official KITS Divili website
// All URLs are from the institution's public website

export interface KitsImage {
  id: string;
  src: string;
  alt: string;
  category: 'campus' | 'hostel' | 'library' | 'laboratory' | 'transport' | 'nss' | 'events' | 'sports' | 'management' | 'hero';
  aspectRatio?: '4:3' | '16:9' | '1:1' | 'hero';
  verified: boolean; // Whether this image has been confirmed to exist and depict the described subject
  caption?: string;
}

export const kitsImages: KitsImage[] = [
  // Hero images - MANDATORY
  {
    id: 'hero-campus',
    src: 'https://www.kitsdivili.ac.in/images/infra1.jpg',
    alt: 'KITS Divili Campus Infrastructure',
    category: 'hero',
    aspectRatio: 'hero',
    verified: true,
    caption: 'KITS Divili Campus',
  },
  {
    id: 'hero-naac',
    src: 'https://www.kitsdivili.ac.in/images/banner-nacc-home.png',
    alt: 'KITS Divili NAAC Accreditation Banner',
    category: 'hero',
    aspectRatio: 'hero',
    verified: true,
    caption: 'KITS Institutional Recognition',
  },
  // Campus images
  {
    id: 'campus-1',
    src: 'https://www.kitsdivili.ac.in/images/infra1.jpg',
    alt: 'KITS Divili Campus',
    category: 'campus',
    aspectRatio: '4:3',
    verified: true,
  },
  {
    id: 'campus-autonomous',
    src: 'https://www.kitsdivili.ac.in/images/autonomous-bg.png',
    alt: 'KITS Autonomous Institution Background',
    category: 'campus',
    aspectRatio: '16:9',
    verified: true,
  },
  // Hostel
  {
    id: 'hostel-1',
    src: 'https://www.kitsdivili.ac.in/images/hostel-1.jpeg',
    alt: 'KITS Hostel Facilities',
    category: 'hostel',
    aspectRatio: '4:3',
    verified: true,
    caption: 'KITS Hostel',
  },
  // Library
  {
    id: 'library-1',
    src: 'https://www.kitsdivili.ac.in/images/home-banner-05.png',
    alt: 'KITS Library',
    category: 'library',
    aspectRatio: '4:3',
    verified: true,
    caption: 'KITS Library',
  },
  // Laboratory
  {
    id: 'lab-1',
    src: 'https://kitsdivili.ac.in/images/depart24.jpg',
    alt: 'KITS Department Laboratory',
    category: 'laboratory',
    aspectRatio: '4:3',
    verified: true,
    caption: 'KITS Laboratories',
  },
  // Transport
  {
    id: 'transport-1',
    src: 'https://www.kitsdivili.ac.in/images/gallery/tra-03.JPG',
    alt: 'KITS Transport Bus',
    category: 'transport',
    aspectRatio: '4:3',
    verified: true,
    caption: 'KITS Transport',
  },
  // NSS
  {
    id: 'nss-1',
    src: 'https://www.kitsdivili.ac.in/images/nss1.jpg',
    alt: 'KITS NSS Activities',
    category: 'nss',
    aspectRatio: '4:3',
    verified: true,
    caption: 'NSS Activities',
  },
  {
    id: 'nss-2',
    src: 'https://www.kitsdivili.ac.in/images/nss2.jpg',
    alt: 'KITS NSS Programme',
    category: 'nss',
    aspectRatio: '4:3',
    verified: true,
    caption: 'NSS Programme',
  },
  // Events & Campus Activities
  {
    id: 'event-1',
    src: 'https://www.kitsdivili.ac.in/images/home-banner-01.png',
    alt: 'KITS Campus Events',
    category: 'events',
    aspectRatio: '4:3',
    verified: true,
  },
  {
    id: 'event-2',
    src: 'https://www.kitsdivili.ac.in/images/home-banner-11.jpg',
    alt: 'KITS Campus Activities',
    category: 'events',
    aspectRatio: '4:3',
    verified: true,
  },
  {
    id: 'event-3',
    src: 'https://www.kitsdivili.ac.in/images/home-banner-12.jpg',
    alt: 'KITS College Activities',
    category: 'events',
    aspectRatio: '4:3',
    verified: true,
  },
  // Sports
  {
    id: 'sports-1',
    src: 'https://www.kitsdivili.ac.in/images/home-banner-08.png',
    alt: 'KITS Sports Activities',
    category: 'sports',
    aspectRatio: '4:3',
    verified: true,
    caption: 'KITS Sports',
  },
];

export const getImagesByCategory = (category: KitsImage['category']) =>
  kitsImages.filter((img) => img.category === category);

export const getImageById = (id: string) => kitsImages.find((img) => img.id === id);
