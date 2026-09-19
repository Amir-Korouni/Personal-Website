import React from "react";
import {
  SiC,
  SiDocker,
  SiGit,
  SiJavascript,
  SiLinux,
  SiN8N,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type ProjectCardTypes = {
  name: string;
  description: string;
  githubLink: string;
  stack: string[];
};

type SkillCardTypes = {
  skill: string;
  desc: string;
  icon: React.ReactNode;
};

type ExperienceType = {
  year: string;
  title: string;
  stack: string[];
};

export const projectsCard: ProjectCardTypes[] = [
  {
    name: "Headphone Market",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    githubLink: "https://github.com/Amir-Korouni/UserProfile.git",
    stack: ["React", "Typescript", "Tailwindcss"],
  },
  {
    name: "User Profile",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    githubLink: "https://github.com/Amir-Korouni/UserProfile.git",
    stack: ["React", "Typescript", "Tailwindcss"],
  },
  {
    name: "Admin Panel",
    description:
      "This is a practical, beautiful, and unique admin panel designed to make store management easier for administrators. With this panel, administrators...",
    githubLink: "https://github.com/Amir-Korouni/Admin-Panel_1.git",
    stack: ["Html", "Css", "JavaScript"],
  },
  {
    name: "XO Game in terminal",
    description:
      "A simple Tic-Tac-Toe (XO) game that runs in the terminal using Node.js. Two players can play against each other by entering...",
    githubLink: "https://github.com/Amir-Korouni/XO-Game.git",
    stack: ["JavaScript"],
  },
  {
    name: "Game Info",
    description:
      "GameInfo is a complete website for discovering and downloading video games, designed to provide a professional and engaging experience for gamers.",
    githubLink: "https://github.com/Amir-Korouni/GameInfo.git",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    name: "Blog System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    githubLink: "https://github.com/Amir-Korouni/BlogSystem.git",
    stack: ["React", "Typescript", "Tailwindcss"],
  },
  {
    name: "Main-BooksStore",
    description:
      "BookStore is a frontend project for an online bookstore, designed to provide a pleasant and engaging experience for book lovers.",
    githubLink: "https://github.com/Amir-Korouni/Main-BookStore.git",
    stack: ["HTML", "CSS", "JS"],
  },
];

export const skills: SkillCardTypes[] = [
  {
    skill: "C#",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    icon: <SiC size={40} color="white" />,
  },
  {
    skill: "JavaScript",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    icon: <SiJavascript size={40} color="yellow" />,
  },

  {
    skill: "React",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    icon: <SiReact size={40} color="blue" />,
  },

  {
    skill: "TavaScript",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    icon: <SiTypescript size={40} color="blue" />,
  },
  {
    skill: "Tailwindcss",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    icon: <SiTailwindcss size={40} color="purple" />,
  },
  {
    skill: "Linux",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    icon: <SiLinux size={40} />,
  },

  {
    skill: "Git",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    icon: <SiGit size={40} color="orange" />,
  },

  {
    skill: "Docker",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    icon: <SiDocker size={40} color="blue" />,
  },

  {
    skill: "N8N",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    icon: <SiN8N size={40} color="red" />,
  },
];

export const experiences: ExperienceType[] = [
  {
    year: "2024",
    title: "Started Programming",
    stack: ["C#"],
  },
  {
    year: "2025",
    title: "Web Fundamentals",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2026",
    title: "Modern Web Development",
    stack: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
];

type SocialKey = "github" | "telegram" | "instagram" | "email";

type SocialLinkStatic = {
  key: SocialKey;
  href: string;
};

export const SocialLinks: SocialLinkStatic[] = [
  {
    key: "github",
    href: "https://github.com/Amir-Korouni/Personal-Website.git",
  },
  {
    key: "email",
    href: "www:darkghost87@gmail.com",
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/amir_programming80",
  },
];
