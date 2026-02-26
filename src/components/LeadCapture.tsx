import { useState } from "react";
import { motion } from "framer-motion";

const LeadCapture = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="lead-capture" className="py-20 md:py-28 px-4 bg-accent/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground font-light mb-3">
          Be the First to Know
        </h2>
        <p className="font-body text-muted-foreground mb-10">
          Be the first to experience gentle elegance.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-card-brand"
          >
            <p className="font-display text-2xl text-foreground mb-2">Thank You ✨</p>
            <p className="font-body text-muted-foreground text-sm">
              We'll notify you the moment LinaGlow launches.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="w-full px-5 py-3.5 rounded-full bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              className="w-full px-5 py-3.5 rounded-full bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className="w-full px-5 py-3.5 rounded-full bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <button
              type="submit"
              className="w-full bg-gradient-brand text-primary-foreground font-body font-medium py-3.5 rounded-full text-base tracking-wide shadow-brand hover:opacity-90 transition-opacity mt-2"
            >
              Notify Me at Launch
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default LeadCapture;
