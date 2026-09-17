import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ExCard = {
  title: string;
  stack: string[];
};

const ExperienceCard = ({ title, stack }: ExCard) => {
  return (
    <>
      <Card className="w-full min-h-[220px] border-zinc-800 bg-zinc-950 flex justify-center items-center text-zinc-100 bg-[#150050] duration-800 hover:scale-105  h-[15rem] ">
        <CardHeader className="size-full flex justify-center items-center">
          <Badge
            key={title}
            variant="secondary"
            className="w-[110%] h-[4rem] bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
          >
            <p className="text-base">{title}</p>
          </Badge>
        </CardHeader>
        <CardContent>
          {stack.map((item) => (
            <h2 className="text-base" key={item}>
              {item}
            </h2>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default ExperienceCard;
