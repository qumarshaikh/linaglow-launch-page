import { motion } from "framer-motion";

const EmotionalHook = () => (
  <section className="py-20 md:py-28 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto text-center"
    >
      <p className="font-display text-2xl md:text-4xl text-foreground leading-relaxed font-light italic">
        "Because even the smallest touch should be gentle, pure, and full of care."
      </p>
    </motion.div>
  </section>
);

export default EmotionalHook;
