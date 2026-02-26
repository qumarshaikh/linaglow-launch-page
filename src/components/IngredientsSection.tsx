import { motion } from "framer-motion";
import coconutImg from "@/assets/coconut.jpg";
import lotusImg from "@/assets/lotus.jpg";
import aloeImg from "@/assets/aloe.jpg";

const ingredients = [
  { image: coconutImg, title: "Coconut Oil", benefit: "Deep Nourishment", desc: "Rich, natural oils that deeply moisturize and protect your baby's delicate skin." },
  { image: lotusImg, title: "Indian Lotus", benefit: "Rash Soothing", desc: "Ancient botanical extract known for calming irritated skin and preventing rashes." },
  { image: aloeImg, title: "Aloe Vera", benefit: "Cooling Hydration", desc: "Nature's moisturizer that cools, soothes, and keeps skin beautifully hydrated." },
];

const IngredientsSection = () => (
  <section className="py-20 md:py-28 px-4 bg-accent/50">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl text-foreground font-light mb-3">
          Nature's Finest Ingredients
        </h2>
        <p className="font-body text-muted-foreground">Carefully chosen for your baby's delicate skin</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {ingredients.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-card-brand group-hover:scale-105 transition-transform duration-300">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-1">{item.title}</h3>
            <p className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3">{item.benefit}</p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IngredientsSection;
