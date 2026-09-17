import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";
import Container from "../style.module.css";
import TextAnimation from "./TextAnimation";

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
          <h1 className="text-6xl">Hi, I'm Amir Korouni</h1>
          <div>
            <h3 className="text-2xl">
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
              <Button className="w-[200px] h-[4rem] bg-[#610094] hover:bg-[#150050] flex justify-center items-center gap-2 cursor-pointer float-right ">
                Projects
              </Button>
            </Link>
            <Link href="https://github.com">
              <Button className="w-[200px] h-[4rem] bg-[#610094] hover:bg-[#150050] flex justify-center items-center gap-2 cursor-pointer float-right ">
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
                left-[12%]
                w-[600px]
                h-[400px]
                rounded-full
                bg-purple-600/15
                blur-[120px]
              "
        />
        <div
          className="
                absolute
                z-[-1]
                bottom-[10%]
                right-[12%]
                w-[600px]
                h-[400px]
                rounded-full
                bg-blue-600/15
                blur-[120px]
              "
        />
      </section>
    </>
  );
};

export default Hero;
