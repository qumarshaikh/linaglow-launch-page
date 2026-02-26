import { motion } from "framer-motion";
import { Droplets, Shield, Leaf, FlaskConical, Baby, HeartPulse, Sparkles, Scale, CheckCircle2, ShieldCheck, Recycle } from "lucide-react";

const badges = [
  { icon: Droplets, label: "99% Water", desc: "Ultra-pure hydration" },
  { icon: FlaskConical, label: "7-Step Purification", desc: "Medical-grade clean" },
  { icon: Shield, label: "60 GSM Fabric", desc: "2X Thicker & softer" },
  { icon: Leaf, label: "Plant-Based", desc: "Naturally gentle fibers" },
  { icon: Recycle, label: "Biodegradable", desc: "100% earth-friendly" },
  { icon: ShieldCheck, label: "Alcohol-Free", desc: "Zero skin irritation" },
  { icon: Sparkles, label: "Paraben-Free", desc: "No harsh chemicals" },
  { icon: Scale, label: "pH Balanced", desc: "Matches natural skin" },
  { icon: CheckCircle2, label: "Dermatologically Tested", desc: "Expert approved" },
  { icon: HeartPulse, label: "Hypoallergenic", desc: "For sensitive skin" },
  { icon: Baby, label: "Newborn Safe", desc: "Perfect from day one" },
];

const TrustSection = () => (
  <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 mix-blend-multiply pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20 relative"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
          <Sparkles className="w-4 h-4" />
          <span>Premium Quality</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-foreground font-light mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent font-medium">Trusted.</span> Tested. Safe.
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Every detail thoughtfully crafted to ensure the highest standard of safety, purity, and gentleness for your baby's delicate skin.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8 justify-center">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`group relative flex flex-col items-center text-center p-8 bg-card/80 backdrop-blur-md border border-border/50 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
              i === badges.length - 1 ? "sm:col-span-2 md:col-span-1 lg:col-span-1 lg:col-start-4 lg:row-start-3 lg:-mt-0" : ""
            }`}
          >
            {/* Subtle hover gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
              <badge.icon className="w-8 h-8 text-primary drop-shadow-sm" strokeWidth={1.5} />
            </div>
            
            <h3 className="relative font-display text-xl text-foreground font-medium mb-2 tracking-wide">{badge.label}</h3>
            <p className="relative font-body text-sm text-muted-foreground leading-relaxed">{badge.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
