import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DownloadSimple, FilePdf, Eye } from "phosphor-react";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
        filter: "blur(20px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );
  }, []);

  const handleDownload = () => {
    // Simulate download
    console.log("Downloading resume...");
  };

  const handleView = () => {
    // Simulate view
    console.log("Viewing resume...");
  };

  return (
    <section id="resume" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-background/50">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-primary/10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/20 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-muted-foreground text-lg">Download or View My Complete Profile</p>
        </div>

        <div ref={contentRef} className="relative backdrop-blur-xl bg-card/40 border border-white/10 rounded-3xl p-12 hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.3)] transition-all duration-500 group">
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>

          <div className="relative text-center space-y-8">
            {/* PDF Icon */}
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent p-1 group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full bg-background/90 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                  <FilePdf size={64} weight="light" className="text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div>
            <h3 className="text-3xl font-bold text-foreground mb-3">
                Rukmini_Velidi_Resume.pdf
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get a comprehensive overview of my skills, experience, education, and achievements. 
                Available in PDF format for easy viewing and printing.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button
                onClick={handleDownload}
                size="lg"
                className="group/btn relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.5)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <DownloadSimple size={20} weight="bold" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </Button>

              <Button
                onClick={handleView}
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all duration-300"
              >
                <Eye size={20} weight="bold" className="mr-2" />
                View Online
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">8.70</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">6+</div>
                <div className="text-sm text-muted-foreground">Achievements</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Last updated: January 2025 • Always up to date</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
