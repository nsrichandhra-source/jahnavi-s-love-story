import { motion } from "framer-motion";
import ValentineDaySection from "../ValentineDaySection";

interface HugDayProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const HugDay = ({ onPrevious, onNext }: HugDayProps) => {
  return (
    <ValentineDaySection
      title="Hug Day"
      emoji="🤗"
      message={
        <>
          <p>If distance keeps us apart…</p>
          <p className="text-xl my-4 text-sage font-medium">Close your eyes and hug yourself</p>
          <p className="text-rose">Because in that moment, it's me holding you 💚</p>
        </>
      }
      bgGradient="from-rose-light/20 via-background to-sage-light/20"
      onPrevious={onPrevious}
      onNext={onNext}
    >
      <motion.div
        className="relative mt-8"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="text-9xl">🤗</div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-rose/30 to-sage/30 blur-2xl" />
        </motion.div>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-xl font-body italic text-muted-foreground"
      >
        *Wrapping you in the warmest virtual hug* 💕
      </motion.p>
      
      <div className="flex justify-center gap-3 mt-6 text-5xl">
        {["💕", "🫂", "💗", "🤗", "💞"].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </ValentineDaySection>
  );
};

export default HugDay;
