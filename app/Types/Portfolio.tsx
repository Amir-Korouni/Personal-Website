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
    stack: ["React", "Typescript", "Tailwindcss"],
  },
  {
    name: "User Profile",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    stack: ["React", "Typescript", "Tailwindcss"],
  },
  {
    name: "Admin Panel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    stack: ["Html", "Css", "JavaScript"],
  },
  {
    name: "XO Game in terminal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    stack: ["JavaScript"],
  },
  {
    name: "Game Info",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    name: "Headphone Market",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quas ipsam deserunt est voluptatum...",
    stack: ["React", "Typescript", "Tailwindcss"],
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
