import Container from "../style.module.css";
import ProjectCart from "./ProjcectCart";

const Projects = () => {
  return (
    <>
      <section className={Container.container} id="project">
        <section className={Container.subContainer}>
          <div>
            <p className="text-zinc-100 mb-5">03 / About</p>
            <h2 className="text-6xl">Projects</h2>
            <p className="mt-4">
              Let's see projects that i developed and work on it.
            </p>
          </div>
          <div className="w-full flex gap-5 justify-center items-center flex-wrap ">
            <ProjectCart
              name="Headphone Market"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              stack={["React", "Typescript", "Tailwindcss"]}
            />
            <ProjectCart
              name="User Profile"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              stack={["React", "Typescript", "Tailwindcss"]}
            />
            <ProjectCart
              name="Headphone Market"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              stack={["React", "Typescript", "Tailwindcss"]}
            />
            <ProjectCart
              name="Headphone Market"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              stack={["React", "Typescript", "Tailwindcss"]}
            />
            <ProjectCart
              name="Headphone Market"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              stack={["React", "Typescript", "Tailwindcss"]}
            />
            <ProjectCart
              name="Headphone Market"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae, quas ipsam deserunt est voluptatum..."
              stack={["React", "Typescript", "Tailwindcss"]}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
