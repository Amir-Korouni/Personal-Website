import Container from "../../style.module.css";
import SkillCard from "../ui/SkillCard";
import { FaReact } from "react-icons/fa";
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiLinux,
  SiN8N,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { skills } from "@/app/Types/Portfolio";

const Skills = () => {
  return (
    <>
      <section className={Container.container} id="skills" data-aos="fade-down">
        <section className={Container.subContainer}>
          <div>
            <p className="text-foreground mb-5">02 / SKILLS</p>
            <h2 className="text-6xl">My Skills</h2>
            <p className="mt-4">
              The tools and technologies I learn and use it.
            </p>
          </div>
          <div className="w-full flex gap-5 justify-center items-center flex-wrap ">
            {skills.map((item) => (
              <SkillCard
                key={item.skill}
                skill={item.skill}
                desc={item.desc}
                icone={item.icon}
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
