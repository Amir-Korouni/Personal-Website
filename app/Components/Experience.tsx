import Container from "../style.module.css";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section
      className={Container.container}
      id="experience"
      data-aos="fade-left"
    >
      <section className={Container.subContainer}>
        <div>
          <p className="text-zinc-100 mb-5">04 / Experience</p>
          <h2 className="text-6xl">Experience</h2>
          <p className="mt-4">Let's see my timeline experience.</p>
        </div>

        <div className="relative mt-20 w-full">
          <div className="absolute top-3 left-0 w-full h-px bg-zinc-700" />

          <div className="flex justify-between gap-5">
            <div className="relative flex flex-col items-center w-full">
              <div className="z-10 w-6 h-6 rounded-full bg-purple-600 border-4 border-black" />
              <p className="mt-4 mb-5 text-purple-400 text-xl">2024</p>
              <ExperienceCard title="Started Programming" stack={["C#"]} />
            </div>

            <div className="relative flex flex-col items-center w-full">
              <div className="z-10 w-6 h-6 rounded-full bg-purple-600 border-4 border-black" />

              <p className="mt-4 mb-5 text-purple-400 text-xl">2025</p>

              <ExperienceCard
                title="Web Fundamentals"
                stack={["HTML", "CSS", "JavaScript"]}
              />
            </div>

            <div className="relative flex flex-col items-center w-full">
              <div className="z-10 w-6 h-6 rounded-full bg-purple-600 border-4 border-black" />

              <p className="mt-4 mb-5 text-purple-400 text-xl">2026</p>

              <ExperienceCard
                title="Modern Web Development"
                stack={["TypeScript", "React", "Next.js", "Tailwind"]}
              />
            </div>
          </div>
        </div>
      </section>

      <div
        className="
                absolute
                z-[-1]
                top-[20%]
                left-[12%]
                w-[600px]
                h-[400px]
                rounded-full
                bg-blue-600/15
                blur-[120px]
              "
      />
    </section>
  );
};

export default Experience;
