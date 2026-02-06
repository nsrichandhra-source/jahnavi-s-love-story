import { motion } from "framer-motion";
import ValentineDaySection from "../ValentineDaySection";

const FallingRoses = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-4xl"
        style={{ left: `${Math.random() * 100}%` }}
        initial={{ y: -100, rotate: 0, opacity: 0 }}
        animate={{
          y: ["0vh", "100vh"],
          rotate: [0, 360],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          delay: Math.random() * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {i % 3 === 0 ? "🌹" : i % 3 === 1 ? "🌸" : "🍃"}
      </motion.div>
    ))}
  </div>
);

const RoseDay = () => {
  return (
    <div className="relative">
      <FallingRoses />
      <ValentineDaySection
        title="Rose Day"
        emoji="🌹"
        message={
          <>
            <p>Every rose reminds me of you…</p>
            <p>Soft, beautiful, and full of life.</p>
            <p>If I could, I'd fill your world with roses —</p>
            <p className="text-rose font-medium">Just the way you fill my life with happiness.</p>
          </>
        }
        bgGradient="from-rose-light/20 via-background to-sage-light/10"
      >
        <div className="flex justify-center gap-4 text-5xl">
          {["🌹", "🥀", "🌷", "🌺", "🌸"].map((rose, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
              {rose}
            </motion.span>
          ))}
        </div>
      </ValentineDaySection>
    </div>
  );
};

export default RoseDay;
