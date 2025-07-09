
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Technologies } from "@/components/Technologies";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
