import { Mail } from "lucide-react";
import Container from "../../style.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <section
        className={Container.container}
        id="contact"
        data-aos="fade-out"
        data-aos-delay="100"
      >
        <section className={Container.subContainer}>
          <div>
            <p className="text-foreground mb-5">05 / Contact</p>
            <h2 className="text-6xl">Contact</h2>
            <p className="mt-4">Let's Build Something</p>
          </div>
          <div className="w-full h-[50vh] flex flex-col justify-center items-center gap-5 bg-[#101010] border border-[#610094] rounded duration-600 drop-shadow-[0_0_40px_#150050] hover:drop-shadow-[0_0_100px_#610094] text-foreground">
            <Mail size={120} color="#610094" />
            <h2 className="text-zinc-100 text-5xl">Get in touch</h2>
            <h3 className="text-zinc-100">Remote / Worldwide</h3>
            <Link href="https://email.com" className="text-zinc-100">
              www.darkghost87@gmail.com
            </Link>
            <div className="flex gap-5">
              <Link
                href="https://github.com"
                className="w-[120px] h-[2.5rem] duration-400 cursor-pointer hover:-translate-x-1 hover:-translate-y-2 "
              >
                <Button className="size-full text-zinc-100 bg-[#150050] hover:bg-[#220080]">
                  GitHub
                </Button>
              </Link>
              <Link
                href="https://telegram.com"
                className="w-[120px] h-[2.5rem] duration-400 cursor-pointer hover:-translate-x-1 hover:-translate-y-2 "
              >
                <Button className="size-full text-zinc-100 bg-[#150050] hover:bg-[#220080]">
                  Telegram
                </Button>
              </Link>
              <Link
                href="https://instagram.com"
                className="w-[120px] h-[2.5rem] duration-400 cursor-pointer hover:-translate-x-1 hover:-translate-y-2 "
              >
                <Button className="size-full text-zinc-100 bg-[#150050] hover:bg-[#220080]">
                  Instagram
                </Button>
              </Link>
              <Link
                href="https://email.com"
                className="w-[120px] h-[2.5rem] duration-400 cursor-pointer hover:-translate-x-1 hover:-translate-y-2 "
              >
                <Button className="size-full text-zinc-100 bg-[#150050] hover:bg-[#220080]">
                  Email
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
