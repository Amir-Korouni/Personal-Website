import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="w-full h-[100vh] flex justify-center items-center relative z-[10]">
        <section className="w-[50%] flex flex-col gap-10 justify-center">
          <h1 className="w-[50%] h-[4rem] border-4 border-[#150050] px-5 flex justify-center items-center rounded text-4xl">
            Web Developer
          </h1>
          <h1 className="text-6xl">Hi, I'm Amir Korouni</h1>
          <div>
            <h3 className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              cum! Vel laboriosam nostrum laudantium dolorum molestias id
              praesentium consectetur esse eius quae ullam deleniti non, sint in
              cum totam quo? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ullam tempore nobis dolores nesciunt nihil atque consequatur
              minus eius animi ad totam enim illo obcaecati harum recusandae
              nulla, illum error aspernatur.
            </h3>
          </div>
          <div>
            <Link href="https://github.com">
              <Button className="w-[20%] h-[4rem] bg-[#610094] hover:bg-[#150050] flex justify-center items-center gap-2 cursor-pointer float-right ">
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
