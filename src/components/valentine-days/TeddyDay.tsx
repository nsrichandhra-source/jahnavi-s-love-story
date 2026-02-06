import { motion } from "framer-motion";
import ValentineDaySection from "../ValentineDaySection";

const TeddyDay = () => {
  return (
    <ValentineDaySection
      title="Teddy Day"
      emoji="🧸"
      message={
        <>
          <p>I wish you had a teddy right now…</p>
          <p>So when you hug it, it could hug you back like I would.</p>
          <p className="mt-4 text-sage font-medium text-xl">Until then…</p>
          <p className="text-rose">Every teddy here is me — holding you close 💞</p>
        </>
      }
      bgGradient="from-amber-50/50 via-background to-sage-light/10"
    >
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {["🧸", "🐻", "🧸", "🐻‍❄️", "🧸"].map((teddy, i) => (
          <motion.div
            key={i}
            className="text-6xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {teddy}
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-8 p-6 bg-card/50 backdrop-blur-sm rounded-3xl border border-sage/20 inline-block"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <p className="text-lg font-body text-muted-foreground italic">
          *Sending you the biggest virtual teddy hug* 🤗
        </p>
      </motion.div>
    </ValentineDaySection>
  );
};

export default TeddyDay;
