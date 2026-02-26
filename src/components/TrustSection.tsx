import { motion } from "framer-motion";
import { Droplets, Shield, Leaf, FlaskConical, Baby, HeartPulse, Sparkles, Scale, CheckCircle2, ShieldCheck, Recycle } from "lucide-react";

const badges = [
  { icon: Droplets, label: "99% Water" },
  { icon: FlaskConical, label: "7-Step Purification" },
  { icon: Shield, label: "2X Thicker (60 GSM)" },
  { icon: Leaf, label: "Plant-Based Fabric" },
  { icon: Recycle, label: "100% Biodegradable" },
  { icon: ShieldCheck, label: "Alcohol-Free" },
  { icon: Sparkles, label: "Paraben-Free" },
  { icon: Scale, label: "pH Balanced" },
  { icon: CheckCircle2, label: "Dermatologically Tested" },
  { icon: HeartPulse, label: "Hypoallergenic" },
  { icon: Baby, label: "Safe for Newborns" },
];

const TrustSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-5xl text-foreground font-light mb-3">
          Trusted. Tested. Safe.
        </h2>
        <p className="font-body text-muted-foreground">Every detail crafted with your baby's safety in mind</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-2.5 bg-card border border-border rounded-full px-5 py-3 shadow-card-brand hover:shadow-brand transition-shadow duration-300"
          >
            <badge.icon className="w-4 h-4 text-primary" strokeWidth={1.8} />
            <span className="font-body text-sm text-foreground whitespace-nowrap">{badge.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
