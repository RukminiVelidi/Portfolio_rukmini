import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Star, Medal, Target } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Medal,
    title: "Amazon SDE Intern Return Offer",
    description: "Return offer for Summer 2026 based on exceptional performance",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Trophy,
    title: "Amazon ML Summer School 2025",
    description: "Top 3,000 from 60,000+ applicants for ML training program",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Star,
    title: "NASA Space Apps Challenge",
    description: "Top 10 finalist nationwide from 70+ local competitors",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Target,
    title: "Amazon Future Engineer Bootcamp",
    description: "Top 0.2% of 50,000+ applicants with full scholarship",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Medal,
    title: "Algo University Top 60",
    description: "National Top 60 through rigorous screening",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Star,
    title: "Google Intern Connect 2025",
    description: "Selected for Google's mentorship program",
    color: "from-indigo-500 to-blue-500"
  }
];

const Achievements = () => {
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
    <section id="achievements" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-muted-foreground text-lg">Milestones & Recognition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative backdrop-blur-xl bg-card/40 border border-white/10 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)] transition-all duration-500 cursor-pointer"
              >
                <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${achievement.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-background/90 backdrop-blur-xl rounded-xl flex items-center justify-center">
                    <Icon size={32} weight="light" className="text-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
