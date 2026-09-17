import React from "react";
import { FaC } from "react-icons/fa6";

type SkillType = {
  skill: string;
  desc: string;
  icon: React.ReactNode;
};

type ExperienceType = {
  year: string;
  title: string;
  description: string;
  stack: string[];
};

export const experiences = [
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
