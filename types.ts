export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
  type: 'Certificação' | 'Diploma' | 'Graduação';
}

export interface UserProfile {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram?: string;
  }
}