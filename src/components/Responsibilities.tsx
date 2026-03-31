import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Crown, Users, Lightbulb, Microphone } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const responsibilities = [
  {
    icon: Crown,
    title: "TEDx Co-Organizer and Co-Host",
    organization: "TEDxSVECW (Co-Licensee)",
    duration: "July 2024 - Present",
    description: "Leading organization and hosting duties for TEDx events, managing speakers, coordinating teams, and ensuring successful event execution.",
    achievements: ["Organized major TEDx event", "Managed cross-functional teams"]
  },
  {
    icon: Users,
    title: "Member",
    organization: "Google Developer Student Club (GDSC), SVECW",
    duration: "June 2024 - Present",
    description: "Active participation in technical workshops, hackathons, and community building activities. Contributing to tech initiatives.",
    achievements: ["Participated in 10+ workshops", "Mentored peers"]
  },
  {
    icon: Lightbulb,
    title: "Student Volunteer",
    organization: "IET India",
    duration: "January 2024 - Present",
    description: "Volunteering for technical events, workshops, and community outreach programs promoting engineering education.",
    achievements: ["Organized technical events", "Community engagement"]
  },
  {
    icon: Microphone,
    title: "Radio Jockey",
    organization: "Radio Vishnu 90.4 FM",
    duration: "November 2024 - Present",
    description: "Broadcasting engaging content, hosting shows, and connecting with the campus community through radio.",
    achievements: ["Hosted weekly shows", "Built listener base"]
  }
];

const Responsibilities = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        rotateX: 15,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.2,
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
    <section id="responsibilities" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-background/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Positions of Responsibility
          </h2>
          <p className="text-muted-foreground text-lg">Leadership & Impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {responsibilities.map((resp, index) => {
            const Icon = resp.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative backdrop-blur-xl bg-card/40 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(var(--accent-rgb),0.3)] transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary p-0.5 shrink-0 group-hover:rotate-6 transition-transform duration-300">
                    <div className="w-full h-full bg-background/90 backdrop-blur-xl rounded-xl flex items-center justify-center">
                      <Icon size={28} weight="light" className="text-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                      {resp.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">{resp.organization}</p>
                    <p className="text-xs text-muted-foreground mt-1">{resp.duration}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {resp.description}
                </p>

                <div className="space-y-2">
                  {resp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-primary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;
