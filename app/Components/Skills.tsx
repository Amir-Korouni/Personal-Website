import Container from "../style.module.css";
import SkillCard from "./SkillCard";
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

const Skills = () => {
  return (
    <>
      <section className={Container.container} id="skills">
        <section className={Container.subContainer}>
          <div>
            <p className="text-zinc-100 mb-5">02 / SKILLS</p>
            <h2 className="text-6xl">My Skills</h2>
            <p className="mt-4">
              The tools and technologies I learn and use it.
            </p>
          </div>
          <div className="w-full flex gap-5 justify-center items-center flex-wrap ">
            <SkillCard
              skill="C#"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              icone={<FaC size={40} color="white" />}
            />
            <SkillCard
              skill="JavaScript"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              icone={<SiJavascript size={40} color="yellow" />}
            />
            <SkillCard
              skill="React"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              icone={<FaReact size={40} color="blue" />}
            />
            <SkillCard
              skill="TypeScript"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              icone={<SiTypescript size={40} color="blue" />}
            />
            <SkillCard
              skill="TailwindCSS"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              icone={<SiTailwindcss size={40} color="purple" />}
            />
            <SkillCard
              skill="Linux"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              icone={<SiLinux size={40} />}
            />
            <SkillCard
              skill="Git"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              icone={<SiGit size={40} color="Orange" />}
            />
            <SkillCard
              skill="Docker"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              icone={<SiDocker size={40} color="blue" />}
            />
            <SkillCard
              skill="N8N"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              icone={<SiN8N size={40} color="red" />}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
