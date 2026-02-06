import { motion } from "framer-motion";
import ValentineDaySection from "../ValentineDaySection";
import { Infinity as InfinityIcon } from "lucide-react";

const promises = [
  "To stand beside you in every storm",
  "To protect your smile always",
  "To love you more every single day",
  "To be your safe place forever",
];

const PromiseDay = () => {
  return (
    <ValentineDaySection
      title="Promise Day"
      emoji="🤝"
      message={
        <>
          <p className="text-xl">I promise to stand beside you in every storm…</p>
          <p>To protect your smile…</p>
          <p className="text-sage font-medium text-xl mt-2">And to love you more every single day.</p>
        </>
      }
      bgGradient="from-sage-light/30 via-background to-rose-light/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
        {promises.map((promise, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-sage/20 flex items-center gap-3"
          >
            <InfinityIcon className="w-6 h-6 text-sage flex-shrink-0" />
            <p className="font-body text-foreground/80">{promise}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-10"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <InfinityIcon className="w-20 h-20 mx-auto text-rose glow-rose" />
      </motion.div>
    </ValentineDaySection>
  );
};

export default PromiseDay;
