import { Languages, Menu } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../ui/LanguageSwitcher";

const NavBar = () => {
  const t = useTranslations("Navbar");
  return (
    <>
      <nav
        id="navbar"
        className="fixed left-0 top-0 z-[21] flex w-[100vw] justify-center"
      >
        <section
          className=" mt-2
          flex
          h-[4rem]
          w-[90%]
          items-center
          justify-between
          rounded-[20px]
          border
          border-zinc-100
          bg-[#000000c8]
          px-4
          text-zinc-100
          sm:w-[85%]
          md:w-[75%]
          lg:w-[65%]
          xl:w-[60%]
    "
        >
          <div className="flex justify-center items-center gap-2">
            <div className="w-[40px] h-[40px] bg-[#610094] flex justify-center items-center border rounded">
              AK
            </div>
            <h2>Amir Korouni</h2>
          </div>
          <div className="hidden md:flex w-[55%] h-full justify-between items-center">
            <ul className="size-full flex justify-around items-center gap-5">
              <li className="duration-200 hover:text-[#610094] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed">
                <Link href="#about">{t("About")}</Link>
              </li>
              <li className="duration-200 hover:text-[#610094] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed">
                <Link href="#skills">{t("Skills")}</Link>
              </li>
              <li className="duration-200 hover:text-[#610094] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed">
                <Link href="#project">{t("Projects")}</Link>
              </li>
              <li className="duration-200 hover:text-[#610094] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed">
                <Link href="#experience">{t("Experience")}</Link>
              </li>
              <li className="duration-200 hover:text-[#610094] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed">
                <Link href="#contact">{t("Contact")}</Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <div>
                <LanguageSwitcher />
              </div>
              <div>
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="flex shrink-0 md:hidden">
            <Sheet>
              <SheetTrigger className="inline-flex size-10 items-center justify-center rounded-md border">
                <Menu size={20} />
              </SheetTrigger>

              <SheetContent className="w-[80vw] sm:w-[350px]">
                <nav className="flex flex-col gap-6 mt-10 px-5">
                  <Link href="#about">{t("About")}</Link>
                  <Link href="#skills">{t("Skills")}</Link>
                  <Link href="#project">{t("Projects")}</Link>
                  <Link href="#experience">{t("Experience")}</Link>
                  <Link href="#contact">{t("Contact")}</Link>
                  <div className="flex gap-4">
                    <div>
                      <LanguageSwitcher />
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
