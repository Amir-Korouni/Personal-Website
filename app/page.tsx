import Image from "next/image";
import NavBar from "./Components/Layouts/NavBar";
import Hero from "./Components/Sections/Hero";
import Skills from "./Components/Sections/Skills";
import Projects from "./Components/Sections/Projects";
import ProjectCart from "./Components/ui/ProjcectCart";
import Experience from "./Components/Sections/Experience";
import Contact from "./Components/Sections/Contact";
import About from "./Components/Sections/About";
import Footer from "./Components/Sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

        <Footer />
      </main>
    </>
  );
}
