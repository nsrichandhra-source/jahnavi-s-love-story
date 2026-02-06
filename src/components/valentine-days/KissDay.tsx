import { motion } from "framer-motion";
import ValentineDaySection from "../ValentineDaySection";

interface KissDayProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const KissDay = ({ onPrevious, onNext }: KissDayProps) => {
  return (
    <ValentineDaySection
      title="Kiss Day"
      emoji="💋"
      message={
        <>
          <p>A kiss from you feels like time pauses…</p>
          <p className="text-rose font-medium text-xl mt-4">Like the world stops just for us.</p>
        </>
      }
      bgGradient="from-rose-light/30 via-background to-rose-light/10"
      onPrevious={onPrevious}
      onNext={onNext}
    >
      <motion.div
        className="relative mt-8"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-9xl">💋</span>
        
        {/* Sparkle trail */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gold rounded-full"
            style={{
              left: `${50 + Math.cos((i / 8) * Math.PI * 2) * 60}%`,
              top: `${50 + Math.sin((i / 8) * Math.PI * 2) * 60}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.15,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
      
      <div className="flex justify-center gap-4 mt-8 text-5xl">
        {["💋", "💕", "✨", "💋", "💕"].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -15, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </ValentineDaySection>
  );
};

export default KissDay;
