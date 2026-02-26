import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scrollToForm = () => {
  document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" });
};

const StickyNotify = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToForm}
          className="fixed bottom-6 right-6 z-50 bg-gradient-brand text-primary-foreground font-body font-medium px-6 py-3 rounded-full text-sm shadow-brand hover:opacity-90 transition-opacity"
        >
          Notify Me
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default StickyNotify;
