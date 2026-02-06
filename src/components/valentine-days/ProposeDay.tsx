import { motion } from "framer-motion";
import ValentineDaySection from "../ValentineDaySection";
import { Heart } from "lucide-react";

const ProposeDay = () => {
  return (
    <ValentineDaySection
      title="Propose Day"
      emoji="💍"
      message={
        <>
          <p>Today isn't the first time I chose you…</p>
          <p className="text-sage font-medium text-2xl my-4">I choose you every day —</p>
          <p>In every smile, every thought, every heartbeat.</p>
        </>
      }
      bgGradient="from-sage-light/20 via-background to-rose-light/10"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative inline-block"
      >
        <span className="text-8xl">💍</span>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -inset-4 bg-gold/20 rounded-full blur-xl"
        />
      </motion.div>
      
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 text-rose fill-rose" />
          </motion.div>
        ))}
      </div>
    </ValentineDaySection>
  );
};

export default ProposeDay;
