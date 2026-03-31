import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.inOut",
          onComplete,
        });
      },
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(progressBarRef.current, {
        width: "100%",
        duration: 2.5,
        ease: "power2.out",
      })
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
      }, "-=0.5");
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div
        ref={textRef}
        className="mb-12 opacity-0 translate-y-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-gradient">
          Rukmini
        </h1>
      </div>

      <div className="w-80 max-w-md px-4">
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full w-0 bg-gradient-to-r from-primary via-accent to-secondary glow"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
