import { motion } from "framer-motion";

interface SparkleEffectProps {
  count?: number;
}

const SparkleEffect = ({ count = 30 }: SparkleEffectProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: count }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 3;
        const randomDuration = 1 + Math.random() * 2;
        const randomSize = 2 + Math.random() * 4;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              width: randomSize,
              height: randomSize,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default SparkleEffect;
