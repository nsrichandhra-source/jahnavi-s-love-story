import { motion } from "framer-motion";
import ValentineDaySection from "../ValentineDaySection";
import { Heart, Sparkles } from "lucide-react";

const Confetti = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 40 }).map((_, i) => (
      <motion.div
        key={i}
        className={`absolute ${i % 2 === 0 ? "text-rose" : "text-sage"}`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `-50px`,
        }}
        animate={{
          y: ["0vh", "110vh"],
          x: [0, Math.sin(i) * 100],
          rotate: [0, 720],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 6 + Math.random() * 4,
          delay: Math.random() * 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {i % 4 === 0 ? (
          <Heart size={16} fill="currentColor" />
        ) : i % 4 === 1 ? (
          <Sparkles size={16} />
        ) : (
          <span className="text-2xl">{i % 3 === 0 ? "❤️" : i % 3 === 1 ? "💚" : "✨"}</span>
        )}
      </motion.div>
    ))}
  </div>
);

const ValentinesDay = () => {
  return (
    <div className="relative">
      <Confetti />
      <ValentineDaySection
        title="Valentine's Day"
        emoji="❤️"
        message={
          <>
            <p className="text-xl">Out of all the people in the world…</p>
            <motion.p
              className="text-3xl font-romantic text-rose my-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              My heart chose you.
            </motion.p>
            <p>Not once — but every single day.</p>
            <p className="mt-4 text-sage font-medium">
              You're my peace, my chaos, my happiness —
            </p>
            <p className="text-2xl font-romantic text-rose mt-4">
              My forever story, Jahnavi. 💕
            </p>
          </>
        }
        bgGradient="from-rose-light/30 via-background to-sage-light/20"
      >
        <motion.div
          className="mt-6"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Heart className="w-24 h-24 mx-auto text-rose fill-rose glow-rose" />
        </motion.div>
        
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: 7 }).map((_, i) => (
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
                className={`w-6 h-6 ${i % 2 === 0 ? "text-rose fill-rose" : "text-sage fill-sage"}`}
              />
            </motion.div>
          ))}
        </div>
      </ValentineDaySection>
    </div>
  );
};

export default ValentinesDay;
