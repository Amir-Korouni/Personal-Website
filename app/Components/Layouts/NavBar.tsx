import { Languages, Menu } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <>
      <nav
        id="navbar"
        className="w-full h-[5rem] flex justify-center items-center fixed z-[21]"
      >
        <section className="w-[94%] md:w-[80%] lg:w-[70%] xl:w[60%] h-[80%] flex justify-between items-center mt-2 px-5 bg-[#000000c8] border border-zinc-100 rounded-[20px] text-zinc-100">
          <div className="flex justify-center items-center gap-2">
            <div className="w-[40px] h-[40px] bg-[#610094] flex justify-center items-center border rounded">
              AK
            </div>
            <h2>Amir Korouni</h2>
          </div>
          <div className="hidden md:flex w-[55%] h-full justify-between items-center">
            <ul className="size-full flex justify-around items-center gap-5">
              <li className="duration-200 hover:text-[#610094] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed">
                <Link href="#about">About</Link>
              </li>
              <li className="duration-200 hover:text-[#610094] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed">
                <Link href="#skills">Skills</Link>
              </li>
              <li className="duration-200 hover:text-[#610094] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed">
                <Link href="#project">Projects</Link>
              </li>
              <li className="duration-200 hover:text-[#610094] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed">
                <Link href="#experience">Experience</Link>
              </li>
              <li className="duration-200 hover:text-[#610094] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <div>
                <Languages className="cursor-pointer" />
              </div>
              <div>
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="w-[45%] h-full flex md:hidden justify-end">
            <Sheet>
              <SheetTrigger>
                tems-center
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent className="w-[10px]">
                <nav className="flex flex-col gap-6 mt-10 px-5">
                  <Link href="#about">About</Link>
                  <Link href="#skills">Skills</Link>
                  <Link href="#project">Projects</Link>
                  <Link href="#experience">Experience</Link>
                  <Link href="#contact">Contact</Link>
                  <div className="flex gap-4">
                    <div>
                      <Languages className="cursor-pointer" />
                    </div>
                    <div>
                      <ThemeToggle />
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
