import { motion } from "framer-motion";
import ValentineDaySection from "../ValentineDaySection";

interface ChocolateDayProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const ChocolateDay = ({ onPrevious, onNext }: ChocolateDayProps) => {
  return (
    <ValentineDaySection
      title="Chocolate Day"
      emoji="🍫"
      message={
        <>
          <p>I bought chocolates for you…</p>
          <p className="text-2xl my-4">But I have a confession 👀</p>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-rose font-bold text-xl bg-rose/10 rounded-2xl p-4 inline-block"
          >
            I ate your chocolate… 😔🍫
          </motion.p>
          <p className="mt-4">Because it reminded me of you</p>
          <p className="text-sage font-medium">Sweet, addictive, and impossible to stop loving.</p>
          <p className="mt-6 italic text-muted-foreground text-lg">
            I'll buy you a lifetime supply if you stay forever 💚
          </p>
        </>
      }
      bgGradient="from-amber-100/30 via-background to-rose-light/10"
      onPrevious={onPrevious}
      onNext={onNext}
    >
      <div className="flex flex-wrap justify-center gap-4 text-6xl">
        {["🍫", "🍬", "🍭", "🧁", "🎂"].map((choco, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          >
            {choco}
          </motion.span>
        ))}
      </div>
      
      <motion.div
        className="mt-8 text-7xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🧸💝
      </motion.div>
    </ValentineDaySection>
  );
};

export default ChocolateDay;
