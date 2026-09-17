import Image from "next/image";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ProjectCart from "./Components/ProjcectCart";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import About from "./Components/About";

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
      </main>
    </>
  );
}
