import { Languages, Sun } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav
        id="navbar"
        className="w-full h-[5rem] flex justify-center fixed z-[21]"
      >
        <section className="w-[50%] h-full flex justify-between items-center mt-2 px-5 bg-[#000000c8] border rounded-[20px]">
          <div className="flex justify-center items-center gap-2">
            <div className="w-[40px] h-[40px] bg-[#610094] flex justify-center items-center border rounded">
              AK
            </div>
            <h2>Amir Korouni</h2>
          </div>
          <div className="w-[50%] h-full flex justify-between items-center">
            <ul className="size-fill flex justify-around items-center gap-5">
              <li className="duration-200 hover:text-[#610094]">
                <Link href="#about">About</Link>
              </li>
              <li className="duration-200 hover:text-[#610094]">
                <Link href="#skills">Skills</Link>
              </li>
              <li className="duration-200 hover:text-[#610094]">
                <Link href="#project">Projects</Link>
              </li>
              <li className="duration-200 hover:text-[#610094]">
                <Link href="#experience">Experience</Link>
              </li>
              <li className="duration-200 hover:text-[#610094]">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <div>
                <Languages className="cursor-pointer" />
              </div>
              <div>
                <Sun className="cursor-pointer" />
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
