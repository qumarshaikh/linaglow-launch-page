import { motion } from "framer-motion";

const BrandStory = () => (
  <section className="py-20 md:py-28 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="font-display text-3xl md:text-5xl text-foreground font-light mb-6">
        Our Story
      </h2>
      <p className="font-body text-muted-foreground leading-relaxed mb-6">
        LinaGlow is born from a vision to bring gentle, nature-inspired care into everyday life.
        Crafted with purity and elegance, our products are designed to nurture delicate skin with softness and trust.
      </p>
      <p className="font-display text-lg text-primary/80 italic">
        Pure care for your baby. Pure love for every moment.
      </p>
    </motion.div>
  </section>
);

export default BrandStory;
