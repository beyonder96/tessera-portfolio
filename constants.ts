import { Project, UserProfile, Certification } from './types';

export const USER_PROFILE: UserProfile = {
  name: "Kenned Ferreira",
  role: "Engenheiro de Software Full Stack",
  bio: "Especialista em criar experiências digitais imersivas e performáticas. Apaixonado por React, Inteligência Artificial e UI Design moderno.",
  skills: ["React", "TypeScript", "Python", "C#", ".NET", "SQL", "Node.js", "Tailwind CSS", "Gemini API", "Three.js"],
  socials: {
    github: "https://github.com/beyonder96",
    linkedin: "https://www.linkedin.com/in/umkennedferreira",
    twitter: "https://x.com/Kenned_be_",
    instagram: "https://www.instagram.com/umkenned/"
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "GLASS-ASSISTANT",
    description: "Assistente inteligente para análise e gerenciamento de dados fiscais e financeiros",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/beyonder96/GLASS-ASSISTANT",
    stars: 12,
    imageUrl: "https://picsum.photos/600/400?random=5"
  },
  {
    id: 2,
    title: "Jogo da Forca Premium",
    description: "Jogo interativo rodando no navegador com lógica de back-end em C# e armazenamento flexível de dados.",
    tags: ["C#", ".NET 10", "Blazor WebAssembly", "Vanilla CSS", "JSON"],
    githubUrl: "#",
    stars: 8,
    imageUrl: "https://picsum.photos/600/400?random=6"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Engenharia de Software",
    issuer: "Universidade Exemplo",
    date: "2018 - 2022",
    type: "Graduação",
    description: "Bacharelado em Engenharia de Software com foco em desenvolvimento web e inteligência artificial."
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    type: "Certificação",
    link: "#"
  },
  {
    id: 3,
    title: "Desenvolvimento Web Full Stack",
    issuer: "Bootcamp Exemplo",
    date: "2021",
    type: "Diploma",
    description: "Formação intensiva em tecnologias web modernas incluindo React, Node.js e bancos de dados."
  }
];