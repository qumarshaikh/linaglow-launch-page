import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";
import heroImage from "@/assets/hero-image.jpg";

const LAUNCH_DATE = new Date("2026-04-10T00:00:00+05:30").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, LAUNCH_DATE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <motion.span
      key={value}
      initial={{ scale: 1.1, opacity: 0.7 }}
      animate={{ scale: 1, opacity: 1 }}
      className="font-display text-4xl md:text-6xl font-semibold text-primary"
    >
      {String(value).padStart(2, "0")}
    </motion.span>
    <span className="text-xs md:text-sm font-body uppercase tracking-widest text-muted-foreground mt-1">
      {label}
    </span>
  </div>
);

const scrollToForm = () => {
  document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  const timeLeft = useCountdown();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="LinaGlow baby wipes with coconut, lotus and aloe vera" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-soft" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"
      >
        {/* Logo */}
        <img src={logo} alt="LinaGlow" className="h-16 md:h-20 mb-8" />

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-4">
          Where Elegance Begins
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-2">
          India's First Coconut & Indian Lotus Baby Wipes
        </p>

        {/* Supporting line */}
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary/70 mb-12">
          Nourish &bull; Soothe &bull; Hydrate
        </p>

        {/* Countdown */}
        <div className="flex items-center gap-6 md:gap-10 mb-10">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <span className="text-2xl text-primary/40 font-display">:</span>
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <span className="text-2xl text-primary/40 font-display">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <span className="text-2xl text-primary/40 font-display">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* CTA */}
        <button
          onClick={scrollToForm}
          className="bg-gradient-brand text-primary-foreground font-body font-medium px-10 py-4 rounded-full text-base tracking-wide shadow-brand hover:opacity-90 transition-opacity"
        >
          Get Early Access
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
