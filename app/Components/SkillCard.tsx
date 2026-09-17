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
      <Card className="w-[28%] h-[15rem] flex justify-center items-center rounded-xl text-zinc-100 bg-[#150050] duration-800 hover:scale-105 cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center gap-3 p-6">
          {icone}
          <h3 className="text-2xl text-left">{skill}</h3>
          <p>{desc}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default SkillCard;
