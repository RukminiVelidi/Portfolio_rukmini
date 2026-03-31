import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, CalendarBlank } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Amazon India",
    role: "SDE Intern",
    duration: "May 2025 – July 2025",
    description: "Architected and developed a full-stack internal web application using React, TypeScript, and Java/Spring Boot to migrate a legacy e-commerce operations system to a modern, scalable solution. Drove a 40% improvement in application performance by re-engineering core business logic.",
    skills: ["React", "TypeScript", "Java", "Spring Boot", "DynamoDB", "AWS"]
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemsRef.current;
    
    gsap.fromTo(
      items,
      {
        opacity: 0,
        x: -60,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        x: 0,
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
    <section id="experience" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-background/50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">Professional Journey</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_rgba(var(--primary-rgb),0.6)]"></div>

                <div className="backdrop-blur-xl bg-card/40 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.2)] transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <Briefcase size={18} weight="light" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <CalendarBlank size={18} weight="light" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/20 rounded-full text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
