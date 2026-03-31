import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "@/assets/profile.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "React", icon: "⚛️" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Machine Learning", icon: "🤖" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, filter: "blur(10px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      )
        .fromTo(
          contentRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          skillsRef.current?.children || [],
          { opacity: 0, y: 30, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div
            ref={imageRef}
            className="flex justify-center opacity-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/50 glow group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                <img
                  src={profileImg}
                  alt="Rukmini Velidi - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bio & Skills */}
          <div ref={contentRef} className="opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm a Computer Science student at Shri Vishnu Engineering College for Women with a passion for full-stack development and machine learning. 
              As an SDE Intern at Amazon, I've architected scalable web applications and improved system performance by 40%. 
              I love building impactful solutions that solve real-world problems, from sentiment analysis tools to campus food ordering systems.
            </p>

            {/* Skills Grid */}
            <div ref={skillsRef} className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-xl hover:glow hover:scale-105 transition-all duration-300 cursor-pointer opacity-0"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className="text-sm font-medium text-foreground/90">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
