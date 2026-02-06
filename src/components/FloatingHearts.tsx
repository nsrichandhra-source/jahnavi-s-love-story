import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface FloatingHeartsProps {
  count?: number;
  colors?: string[];
}

const FloatingHearts = ({ count = 20, colors = ["text-rose", "text-rose-light", "text-sage", "text-sage-light"] }: FloatingHeartsProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: count }).map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomDelay = Math.random() * 10;
        const randomDuration = 8 + Math.random() * 8;
        const randomX = Math.random() * 100;
        const randomSize = 12 + Math.random() * 24;
        
        return (
          <motion.div
            key={i}
            className={`absolute ${randomColor} opacity-40`}
            style={{
              left: `${randomX}%`,
              top: "-50px",
            }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, Math.sin(i) * 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Heart size={randomSize} fill="currentColor" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
