import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
}