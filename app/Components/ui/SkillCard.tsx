import { Card, CardContent } from "@/components/ui/card";
import React from "react";

type SkillCardProps = {
  skill: string;
  icone: React.ReactNode;
  desc: string;
};

const SkillCard = ({ skill, icone, desc }: SkillCardProps) => {
  return (
    <>
      <Card className="w-[220px] h-[15rem] flex justify-center flex-wrap items-center rounded-xl text-zinc-100 bg-[#150050] duration-800 cursor-pointer hover:-translate-x-1 hover:-translate-y-2 basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]">
        <CardContent className="flex flex-col items-center justify-center gap-3 p-6 ">
          {icone}
          <h3 className="text-2xl text-left text-[clamp(0.9rem,1.5vw,1.125rem)] leading-7">{skill}</h3>
          <p>{desc}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default SkillCard;
