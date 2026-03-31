import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, TwitterLogo, DribbbleLogo, BehanceLogo, StackOverflowLogo, MediumLogo, Code } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const profiles = [
  {
    name: "GitHub",
    icon: GithubLogo,
    username: "@rukminivelidi",
    followers: "Active",
    url: "https://github.com/rukminivelidi",
    color: "from-gray-500 to-gray-700",
    hoverColor: "hover:shadow-[0_0_40px_rgba(100,100,100,0.4)]"
  },
  {
    name: "LinkedIn",
    icon: LinkedinLogo,
    username: "Rukmini Velidi",
    followers: "Connect",
    url: "https://www.linkedin.com/in/rukminichowdary9/",
    color: "from-blue-500 to-blue-700",
    hoverColor: "hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
  },
  {
    name: "Certifications",
    icon: Code,
    username: "View Certificates",
    followers: "Drive",
    url: "https://drive.google.com/drive/folders/1sLlAVydFLPKXgbfBZxTUDOJkIgE_Qo8T",
    color: "from-green-500 to-emerald-600",
    hoverColor: "hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]"
  },
  {
    name: "LeetCode",
    icon: Code,
    username: "@rukminivelidi",
    followers: "Solving",
    url: "https://leetcode.com",
    color: "from-orange-500 to-orange-700",
    hoverColor: "hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
  }
];

const Profiles = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        scale: 0.8,
        rotateY: 20,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.1,
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
    <section id="profiles" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[140px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Profiles
          </h2>
          <p className="text-muted-foreground text-lg">Connect With Me</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <a
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative backdrop-blur-xl bg-card/40 border border-white/10 rounded-2xl p-6 hover:scale-105 ${profile.hoverColor} transition-all duration-500 cursor-pointer`}
              >
                <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${profile.color} p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <div className="w-full h-full bg-background/90 backdrop-blur-xl rounded-xl flex items-center justify-center">
                    <Icon size={32} weight="fill" className="text-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {profile.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {profile.username}
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-accent animate-glow-pulse"></div>
                  <span className="text-xs text-accent font-medium">{profile.followers} followers</span>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
