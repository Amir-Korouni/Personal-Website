import Container from "../style.module.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SkillCard from "./SkillCard";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <section className={Container.container} id="skills">
        <section className={Container.subContainer}>
          <div>
            <p className="text-zinc-100 mb-5">02 / SKILLS</p>
            <h2 className="text-6xl">My Skills</h2>
          </div>
          <div className="w-full flex gap-5 justify-center items-center flex-wrap ">
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
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quae, quas ipsam deserunt est voluptatum consequuntur nisi magni
            blanditiis iusto odit a dolorem facilis et sint possimus unde, quam
            impedit.
          </p>
        </section>
      </section>
    </>
  );
};

export default Skills;
