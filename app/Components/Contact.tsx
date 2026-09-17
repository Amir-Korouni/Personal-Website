import { Mail } from "lucide-react";
import Container from "../style.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <section className={Container.container}>
        <section className={Container.subContainer}>
          <div>
            <p className="text-zinc-100 mb-5">05 / Contact</p>
            <h2 className="text-6xl">Contact</h2>
            <p className="mt-4">Let's Build Something</p>
          </div>
          <div className="w-full h-[50vh] flex flex-col justify-center items-center gap-5 bg-[#101010] border border-[#610094] rounded drop-shadow-[0_0_40px_#150050]">
            <Mail size={120} color="#610094" />
            <h2 className="text-5xl">Get in touch</h2>
            <h3>Remote / Worldwide</h3>
            <Link href="https://email.com">www.darkghost87@gmail.com</Link>
            <div className="flex gap-5">
              <Link href="https://github.com" className="w-[120px] h-[2.5rem]">
                <Button className="size-full">GitHub</Button>
              </Link>
              <Link
                href="https://telegram.com"
                className="w-[120px] h-[2.5rem]"
              >
                <Button className="size-full">Telegram</Button>
              </Link>
              <Link
                href="https://instagram.com"
                className="w-[120px] h-[2.5rem]"
              >
                <Button className="size-full">Instagram</Button>
              </Link>
              <Link href="https://email.com" className="w-[120px] h-[2.5rem]">
                <Button className="size-full">Email</Button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
