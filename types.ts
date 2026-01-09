export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  stars: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}