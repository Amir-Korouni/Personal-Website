import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";
import Container from "../../style.module.css";
import TextAnimation from "../ui/TextAnimation";

const Hero = () => {
  return (
    <>
      <section
        className={Container.container}
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <section className={Container.subContainer}>
          <div className="w-[50%] h-[4rem] border-4 border-[#150050] px-5 flex justify-center items-center rounded text-4xl">
            <TextAnimation message="  Web Developer" speed={60} />
          </div>
          <h1 className="text-6xl text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05]">
            Hi, I'm Amir Korouni
          </h1>
          <div>
            <h3 className="text-2xl text-[clamp(0.9rem,1.5vw,1.8rem)] leading-relaxed">
              Frontend Developer React • TypeScript • Next.js
            </h3>
            <TextAnimation
              message="  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              reprehenderit? Id modi porro tempora vitae corrupti ipsum culpa
              numquam ad exercitationem sint, aspernatur quidem asperiores magni
              ullam dicta fugiat perspiciatis."
              speed={10}
            />
          </div>
          <div className="w-full flex justify-between">
            <Link href="#projects">
              <Button className="max-w-[200px] h-[3rem] bg-[#610094] hover:bg-[#7e00c3] flex justify-center items-center gap-2 cursor-pointer float-right ">
                Projects
              </Button>
            </Link>
            <Link href="https://github.com">
              <Button className="max-w-[200px] h-[3rem] bg-[#610094] hover:bg-[#7e00c3] flex justify-center items-center gap-2 cursor-pointer float-right ">
                Git hub <ArrowBigRight />
              </Button>
            </Link>
          </div>
        </section>
        <div
          className="
              absolute
              z-[-1]
              bottom-[30%]
              left-[5%]
              w-[300px]
              h-[220px]
              rounded-full
              bg-purple-600/15
              blur-[80px]

              sm:w-[400px]
              sm:h-[280px]

              md:left-[8%]
              md:w-[500px]
              md:h-[350px]
              md:blur-[100px]

              lg:left-[12%]
              lg:w-[600px]
              lg:h-[400px]
              lg:blur-[120px]
            "
        />
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
        />{" "}
      </section>
    </>
  );
};

export default Hero;
