import { getTranslations } from "next-intl/server";
import Container from "../../style.module.css";
import SkillCard from "../ui/SkillCard";
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

const Skills = async () => {
  const t = await getTranslations("Skills");

  const skillColors = {
    csharp: "#239120",
    javascript: "#F7DF1E",
    react: "#61DAFB",
    typescript: "#3178C6",
    tailwind: "#06B6D4",
    linux: "#ffff",
    git: "#F05032",
    docker: "#2496ED",
    n8n: "#EA4B71",
  };

  const skillIcons = {
    csharp: SiC,
    javascript: SiJavascript,
    react: SiReact,
    typescript: SiTypescript,
    tailwind: SiTailwindcss,
    linux: SiLinux,
    git: SiGit,
    docker: SiDocker,
    n8n: SiN8N,
  };

  type SkillCardTypes = {
    skill: string;
    desc: string;
    icon: React.ReactNode;
  };

  const skills: SkillCardTypes[] = t.raw("Items");
  return (
    <>
      <section className={Container.container} id="skills" data-aos="fade-down">
        <section className={Container.subContainer}>
          <div>
            <p className="text-foreground mb-5">02 / {t("secInfo")}</p>
            <h2 className="text-6xl text-[clamp(2rem,5vw,4rem)] font-bold">
              {t("Title")}
            </h2>
            <p className="mt-4 text-[clamp(0.9rem,1.5vw,1.8rem)] leading-relaxed">
              {t("Description")}
            </p>
          </div>
          <div className="w-full flex gap-5 justify-center items-center flex-wrap">
            {skills.map((item) => {
              const Icon = skillIcons[item.icon as keyof typeof skillIcons];
              const color = skillColors[item.icon as keyof typeof skillColors];

              return (
                <SkillCard
                  key={item.skill}
                  skill={item.skill}
                  desc={item.desc}
                  icone={<Icon size={40} color={color} />}
                />
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
