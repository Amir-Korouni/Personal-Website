import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import Container from "../../style.module.css";
import TextAnimation from "../ui/TextAnimation";
import { getTranslations } from "next-intl/server";

const Hero = async () => {
  const t = await getTranslations("Hero");

  return (
    <>
      <section
        className={Container.container}
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <section className={Container.subContainer}>
          <div className="w-[50%] h-[4rem] border-4 border-[#150050] px-5 flex justify-center items-center rounded text-4xl">
            <TextAnimation message={t("Title")} speed={60} />
          </div>
          <h1 className="text-6xl text-[clamp(2.5rem,7vw,4rem)] font-bold leading-[1.05]">
            {t("Name")}
          </h1>
          <div>
            <h3 className="text-2xl text-[clamp(0.9rem,1.5vw,1.8rem)] leading-relaxed">
              {t("Stack")}
            </h3>
            <TextAnimation message={t("Description")} speed={10} />
          </div>
          <div className="w-full flex justify-between">
            <Link href="#projects">
              <Button className="max-w-[200px] h-[3rem] bg-[#610094] hover:bg-[#7e00c3] flex justify-center items-center gap-2 cursor-pointer float-right ">
                {t("ProjectsButton")}
              </Button>
            </Link>
            <Link href="https://github.com">
              <Button className="max-w-[200px] h-[3rem] bg-[#610094] hover:bg-[#7e00c3] flex justify-center items-center gap-2 cursor-pointer float-right ">
                {t("GithubButton")}
                <ArrowBigRight />
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
