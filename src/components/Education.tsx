import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, CalendarBlank, MapPin } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    institution: "Shri Vishnu Engineering College for Women",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "September 2023 – May 2027",
    location: "Bhimavaram, India",
    description: "Pursuing B.Tech with focus on full-stack development, machine learning, and data structures. Active member of technical communities.",
    highlights: ["CGPA: 8.70/10.00", "GDSC Member", "TEDx Co-Organizer"]
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.3,
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
    <section id="education" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-float pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[140px] animate-float pointer-events-none" style={{ animationDelay: "1.5s" }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">Academic Background</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative backdrop-blur-xl bg-card/40 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] transition-all duration-500"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-background/90 backdrop-blur-xl rounded-xl flex items-center justify-center">
                        <GraduationCap size={28} weight="light" className="text-foreground" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-accent font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                        <div className="flex items-center gap-1">
                          <CalendarBlank size={16} weight="light" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} weight="light" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 text-sm font-medium bg-primary/10 border border-primary/20 rounded-lg text-primary backdrop-blur-xl"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
