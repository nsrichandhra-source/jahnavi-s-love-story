import { motion } from "framer-motion";
import { Heart, Sparkles, RotateCcw } from "lucide-react";

interface FinaleSectionProps {
  onReplay: () => void;
}

const Confetti = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 60 }).map((_, i) => (
      <motion.div
        key={i}
        className={`absolute ${i % 3 === 0 ? "text-rose" : i % 3 === 1 ? "text-sage" : "text-gold"}`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `-50px`,
        }}
        animate={{
          y: ["0vh", "110vh"],
          x: [0, Math.sin(i) * 150],
          rotate: [0, 1080],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          delay: Math.random() * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {i % 5 === 0 ? (
          <Heart size={12 + Math.random() * 12} fill="currentColor" />
        ) : i % 5 === 1 ? (
          <Sparkles size={10 + Math.random() * 10} />
        ) : (
          <span className="text-lg">{["❤️", "💚", "✨", "💕", "🌹"][i % 5]}</span>
        )}
      </motion.div>
    ))}
  </div>
);

const FinaleSection = ({ onReplay }: FinaleSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-rose-light/20 via-background to-sage-light/20"
    >
      <Confetti />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="mb-8"
        >
          <Heart className="w-32 h-32 mx-auto text-rose fill-rose animate-heart-beat glow-rose" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-romantic text-gradient-romantic mb-6 text-shadow-glow"
        >
          I Love You, Jahnavi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-romantic text-sage mb-4"
        >
          ❤️
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl font-body text-foreground/80 mb-12"
        >
          "Forever isn't enough with you."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            >
              <Heart
                className={`w-6 h-6 ${
                  i % 2 === 0 ? "text-rose fill-rose" : "text-sage fill-sage"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          onClick={onReplay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-sage to-sage-light text-white font-body font-bold rounded-full shadow-lg glow-sage flex items-center gap-2 mx-auto"
        >
          <RotateCcw className="w-5 h-5" />
          Relive Our Story
        </motion.button>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="font-body text-muted-foreground flex items-center justify-center gap-2">
          Made with all my love
          <Heart className="w-4 h-4 text-rose fill-rose" />
          only for Jahnavi
          <Heart className="w-4 h-4 text-sage fill-sage" />
        </p>
      </motion.footer>
    </motion.section>
  );
};

export default FinaleSection;
