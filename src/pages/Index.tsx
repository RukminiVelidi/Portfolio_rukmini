import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Responsibilities from "@/components/Responsibilities";
import Interests from "@/components/Interests";
import Profiles from "@/components/Profiles";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add Inter font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Navigation />
          <main className="relative">
            <Hero />
            <About />
            <Experience />
            <Achievements />
            <Projects />
      <Education />
      <Interests />
      <Profiles />
            <Resume />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
