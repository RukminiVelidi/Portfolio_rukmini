import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo(
        splineRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
        "-=1.2"
      );

    // Floating orbs animation
    gsap.to(orb1Ref.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(orb2Ref.current, {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 0.5,
    });

    gsap.to(orb3Ref.current, {
      y: -25,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div
        ref={splineRef}
        className="absolute inset-0 opacity-0"
      >
        <iframe
          src="https://my.spline.design/orb-Is7pb3eNXe387a5GamiKatZs/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="pointer-events-none"
        />
      </div>

      {/* Floating Orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        ref={orb3Ref}
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0"
        >
          Hi, I'm <span className="text-gradient">Rukmini Velidi</span>
          <br />
          <span className="text-foreground/90">Software Developer</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0"
        >
          Building scalable full-stack applications with modern technologies. SDE Intern at Amazon | ML Enthusiast | Open Source Contributor
        </p>

        <div ref={ctaRef} className="opacity-0">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:glow-lg transition-all duration-300 text-lg px-8 py-6 rounded-full"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
