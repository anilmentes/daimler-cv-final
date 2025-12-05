export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  details: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export enum Section {
  HOME = 'HOME',
  PROJECTS = 'PROJECTS',
  VISION = 'VISION',
  CHAT = 'CHAT'
}