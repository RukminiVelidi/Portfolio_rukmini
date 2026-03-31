import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Brain, Microphone, Users, BookOpen, Coffee } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const interests = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern technologies like React, Spring Boot, and cloud platforms."
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description: "Exploring NLP, computer vision, and building intelligent systems. Amazon ML Summer School participant."
  },
  {
    icon: Microphone,
    title: "Public Speaking & Broadcasting",
    description: "Radio Jockey at Radio Vishnu 90.4 FM and Co-Host of TEDxSVECW, sharing stories and ideas."
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Active member of GDSC and IET, organizing events and mentoring peers in tech communities."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies, attending bootcamps, and participating in competitive programming."
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Passionate about algorithms, data structures, and tackling challenging coding problems."
  }
];

const Interests = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );
  }, []);

  return (
    <section id="interests" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-background/50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Interests
          </h2>
          <p className="text-muted-foreground text-lg">What I'm Passionate About</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative backdrop-blur-xl bg-card/40 border border-white/10 rounded-2xl p-6 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.2)] transition-all duration-500"
              >
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <div className="w-full h-full bg-background/90 backdrop-blur-xl rounded-xl flex items-center justify-center">
                    <Icon size={28} weight="light" className="text-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {interest.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
