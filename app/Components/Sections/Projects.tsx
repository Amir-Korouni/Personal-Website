import { projectsCard } from "@/app/Types/Portfolio";
import Container from "../../style.module.css";
import ProjectCart from "../ui/ProjcectCart";

const Projects = () => {
  return (
    <>
      <section className={Container.container} id="project">
        <section className={Container.subContainer}>
          <div>
            <p className="text-foreground mb-5 mt-5">03 / About</p>
            <h2 className="text-6xl text-[clamp(2rem,5vw,3rem)] font-bold">
              Projects
            </h2>
            <p className="mt-4 text-[clamp(0.9rem,1.5vw,1.8rem)] leading-relaxed">
              Let's see projects that i developed and work on it.
            </p>
          </div>
          <div
            className="w-full flex gap-5 justify-center items-center flex-wrap "
            data-aos="fade-up"
          >
            {projectsCard.map((card) => (
              <ProjectCart
                key={card.name}
                name={card.name}
                stack={card.stack}
                description={card.description}
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
