import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-ink"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Work />
        <Services />
        <Packages />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
