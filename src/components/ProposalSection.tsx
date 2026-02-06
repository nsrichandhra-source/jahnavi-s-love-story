import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import SparkleEffect from "./SparkleEffect";

interface ProposalSectionProps {
  onAccept: () => void;
}

const funnyDialogues = [
  "Ayy! That's illegal 😤",
  "Wrong answer, try again 😌",
  "System doesn't accept 'No' ❌",
  "Nice try, Jahnavi 😂",
  "Only 'Yes' works here 💚",
  "Error 404: No not found 💻",
  "You really thought you could press that? 👀",
  "Be honest… you want to press Yes 😏",
  "Don't break my heart like that 💔👉👈",
  "I'll keep running but I'll never leave you 🏃‍♂️❤️",
  "Okay fine, I give up... just kidding! Still no 'No' allowed! 💚",
];

const ProposalSection = ({ onAccept }: ProposalSectionProps) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [showDialogue, setShowDialogue] = useState(false);
  const [currentDialogue, setCurrentDialogue] = useState("");
  const [isExploding, setIsExploding] = useState(false);
  const [allMessagesShown, setAllMessagesShown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      
      // Constrain button movement to keep it visible on screen
      // Button width ~150px, height ~60px
      const maxXDisplacement = (container.width - 200) / 2;
      const maxYDisplacement = (container.height - 150) / 2;
      
      // Generate random position within bounds
      const newX = (Math.random() - 0.5) * maxXDisplacement;
      const newY = (Math.random() - 0.5) * maxYDisplacement;
      
      setNoButtonPos({ x: newX, y: newY });
      
      // Show current dialogue
      setCurrentDialogue(funnyDialogues[dialogueIndex]);
      setShowDialogue(true);
      
      // Move to next dialogue
      if (dialogueIndex < funnyDialogues.length - 1) {
        setDialogueIndex(prev => prev + 1);
      } else {
        // All messages shown - button will disappear on next render
        setAllMessagesShown(true);
      }
      
      setTimeout(() => setShowDialogue(false), 5000);
    }
  };

  const handleYesClick = () => {
    setIsExploding(true);
    setTimeout(() => {
      onAccept();
    }, 1500);
  };

  return (
    <motion.section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-hero-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FloatingHearts count={25} />
      <SparkleEffect count={40} />

      {/* Heart Explosion Effect */}
      <AnimatePresence>
        {isExploding && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 800,
                  rotate: Math.random() * 720,
                }}
                transition={{
                  duration: 1.5,
                  delay: Math.random() * 0.3,
                  ease: "easeOut",
                }}
              >
                <Heart
                  size={20 + Math.random() * 30}
                  className={i % 2 === 0 ? "text-rose fill-rose" : "text-sage fill-sage"}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8"
        >
          <Heart className="w-28 h-28 mx-auto text-rose fill-rose animate-heart-beat" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-romantic text-rose mb-6 text-shadow-glow"
        >
          Jahnavi…
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-5xl font-romantic text-foreground mb-4"
        >
          Will You Be My Valentine? ❤️
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-muted-foreground font-body mb-12 italic"
        >
          "I made this little world just to ask you this…"
        </motion.p>

        {/* Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 relative"
        >
          {/* YES Button */}
          <motion.button
            onClick={handleYesClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-5 bg-gradient-to-r from-rose to-rose-light text-white font-body font-bold text-2xl rounded-full shadow-lg animate-pulse-glow relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Heart className="w-6 h-6 fill-white" />
              Yes!
              <Sparkles className="w-6 h-6" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-glow to-rose opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </motion.button>

          {/* NO Button (Runaway) - Only show before all messages */}
          <AnimatePresence>
            {!allMessagesShown && (
              <motion.button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                exit={{ opacity: 0, scale: 0 }}
                className="px-14 py-5 bg-transparent border-2 border-sage text-sage font-body font-bold text-2xl rounded-full hover:border-sage-glow transition-colors"
              >
                No
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Funny Dialogue Tooltip */}
        <AnimatePresence>
          {showDialogue && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              className="absolute left-1/2 -translate-x-1/2 mt-8 px-8 py-4 bg-card rounded-2xl shadow-lg border border-sage/30"
            >
              <p className="text-foreground font-body font-semibold text-lg">{currentDialogue}</p>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-sage/30 rotate-45" />
              <p className="text-muted-foreground text-sm mt-1">
                {dialogueIndex + 1} of {funnyDialogues.length}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground"
      >
        <Heart className="w-5 h-5 text-rose fill-rose animate-pulse" />
        <span className="font-body text-lg">Made with love, only for you</span>
        <Heart className="w-5 h-5 text-sage fill-sage animate-pulse" />
      </motion.div>
    </motion.section>
  );
};

export default ProposalSection;
