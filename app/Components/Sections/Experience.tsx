import { experiences } from "@/app/Types/Portfolio";
import Container from "../../style.module.css";
import ExperienceCard from "../ui/ExperienceCard";

const Experience = () => {
  return (
    <section
      className={Container.container}
      id="experience"
      data-aos="fade-down"
    >
      <section className={Container.subContainer}>
        <div>
          <p className="text-foreground mb-5">04 / Experience</p>
          <h2 className="text-6xl text-[clamp(2rem,5vw,4rem)] font-bold">
            Experience
          </h2>
          <p className="mt-4">Let's see my timeline experience.</p>
        </div>

        <div className="relative mt-20 w-full ">
          <div className="absolute top-3 left-0 w-full h-px bg-zinc-700" />

          <div className="flex justify-between gap-5 ">
            {experiences.map((exp) => (
              <div
                className="relative flex flex-col items-center w-full"
                key={exp.title}
              >
                <div className="z-10 w-6 h-6 rounded-full bg-purple-600 border-4 border-black" />
                <p className="mt-4 mb-5 text-purple-400 text-xl">{exp.year}</p>
                <ExperienceCard title={exp.title} stack={exp.stack} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div
        className="
            absolute
            z-[-1]
            bottom-[10%]
            right-[5%]
            w-[300px]
            h-[220px]
            rounded-full
            bg-blue-600/15
            blur-[80px]

            sm:w-[400px]
            sm:h-[280px]

            md:right-[8%]
            md:w-[500px]
            md:h-[350px]
            md:blur-[100px]

            lg:right-[12%]
            lg:w-[600px]
            lg:h-[400px]
            lg:blur-[120px]
          "
      />
    </section>
  );
};

export default Experience;
