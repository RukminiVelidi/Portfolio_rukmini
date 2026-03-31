import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      image: project1,
      title: "Sentiment Analyzer",
      description: "AI-powered web app with custom NLP model achieving 88.6% accuracy on 50K entries",
      tech: ["Python", "Flask", "Scikit-learn", "JavaScript", "Tailwind"],
      link: "https://github.com/RukminiVelidi/sentiment-analyzer",
    },
    {
      image: project2,
      title: "SMART SWIPE",
      description: "ML fraud detection improving recall by 35% with 0.97 ROC-AUC score",
      tech: ["Python", "Scikit-learn", "SMOTE", "ADASYN"],
      link: "https://fraud-detection-app-lhkquidwwcuwupbz2ewpqr.streamlit.app/",
    },
    {
      image: project3,
      title: "College Food Ordering System",
      description: "Full-stack platform for 5000+ students, reducing manual effort by 85%",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
      link: "https://github.com/RukminiVelidi/College-Food-Ordering-System---TASTE-GO",
    },
    {
      image: project4,
      title: "Sleep Disorder Prediction App",
      description: "ML-powered Streamlit app for predicting sleep disorders with interactive visualizations",
      tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
      link: "http://sleepdisorder-27.streamlit.app/",
    },
    {
      image: project5,
      title: "Orrrery Model of Plates",
      description: "Interactive orrery model of planets - Top 10 finalist from 70+ teams",
      tech: ["Python", "Three.js", "JavaScript", "NASA APIs"],
      link: "https://anjaniballaa.github.io/dynamic-orrery/",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children || [];

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Featured Projects
        </h2>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden group hover:glow hover:scale-105 transition-all duration-500 cursor-pointer opacity-0"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/50 hover:bg-primary/10 hover:glow"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
