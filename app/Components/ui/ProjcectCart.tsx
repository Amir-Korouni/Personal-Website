import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

import { FaGithub } from "react-icons/fa6";

type CardProp = {
  name: string;
  description: string;
  stack: string[];
};

const ProjectCart = ({ name, description, stack }: CardProp) => {
  return (
    <>
      <Card className="w-[225px] h-[15rem] flex justify-center items-center text-zinc-100 bg-[#150050] duration-800 hover:scale-105 cursor-pointerw-[28%] h-[15rem] basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]">
        <CardHeader className="size-full flex justify-between">
          <h2>{name}</h2>
          <Link
            href="https://github.com"
            className="w-[40px] h-[40px] flex justify-center items-center bg-zinc-800 rounded"
          >
            <FaGithub size={30} />
          </Link>
        </CardHeader>
        <CardContent>
          <p className=" text-[clamp(0.5rem,1.5vw,0.8rem)] leading-7">
            {description}
          </p>
        </CardContent>
        <CardFooter className="w-full h-[4rem] flex gap-4 bg-[#150050]">
          {stack.map((item) => (
            <p
              key={item}
              className="bg-zinc-900 p-1 border  text-[clamp(0.5rem,1vw,0.8rem)] leading-7"
            >
              {item}
            </p>
          ))}
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCart;
