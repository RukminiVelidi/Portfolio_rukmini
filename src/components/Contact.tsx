import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Envelope, Phone, MapPin } from "phosphor-react";
import { useToast } from "@/hooks/use-toast";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const inputs = formRef.current?.querySelectorAll("input, textarea") || [];

      gsap.fromTo(
        inputs,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate button on submit
    const submitBtn = e.currentTarget.querySelector("button[type='submit']");
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient">
          Get In Touch
        </h2>
        
        <div className="glass p-6 rounded-2xl mb-8 space-y-4">
          <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Envelope size={20} weight="light" className="text-primary" />
            <a href="mailto:rukminivelidi5758@gmail.com" className="hover:text-primary transition-colors">
              rukminivelidi5758@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone size={20} weight="light" className="text-primary" />
            <span>+91-XXXXXXXXXX</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin size={20} weight="light" className="text-primary" />
            <span>Bhimavaram, India</span>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glass p-8 rounded-2xl space-y-6"
        >
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="glass border-border/50 focus:border-primary focus:glow transition-all"
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="glass border-border/50 focus:border-primary focus:glow transition-all"
            />
          </div>

          <div>
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="glass border-border/50 focus:border-primary focus:glow transition-all resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-accent hover:glow-lg transition-all duration-300"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
