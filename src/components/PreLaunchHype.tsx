import { motion } from "framer-motion";

const scrollToForm = () => {
  document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" });
};

const PreLaunchHype = () => (
  <section className="py-20 md:py-28 px-4 bg-accent/50">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto text-center"
    >
      <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Launching Soon</p>
      <h2 className="font-display text-3xl md:text-4xl text-foreground font-light mb-4">
        Be Among the First
      </h2>
      <p className="font-body text-muted-foreground mb-8">
        Be among the first parents to experience LinaGlow. Limited early access available.
      </p>
      <button
        onClick={scrollToForm}
        className="bg-gradient-brand text-primary-foreground font-body font-medium px-10 py-4 rounded-full text-base tracking-wide shadow-brand hover:opacity-90 transition-opacity"
      >
        Get Early Access
      </button>
    </motion.div>
  </section>
);

export default PreLaunchHype;
