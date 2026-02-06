import { motion } from "framer-motion";
import { Heart, Feather } from "lucide-react";

const LoveLetterSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sage-light/10 via-background to-rose-light/10 py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <Feather className="w-12 h-12 mx-auto text-rose" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-romantic text-gradient-romantic mb-6"
        >
          A Love Letter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground font-body mb-8 italic"
        >
          "This isn't just a letter…
          <br />
          It's everything my heart wants to say."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          className="relative"
        >
          {/* Letter paper effect */}
          <div className="bg-cream/80 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-lg border border-rose-light/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-rose/20">
              <Heart className="w-20 h-20 fill-current" />
            </div>
            <div className="absolute bottom-4 left-4 text-sage/20">
              <Heart className="w-16 h-16 fill-current" />
            </div>

            {/* Paper lines effect */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="border-b border-rose-light"
                  style={{ marginTop: `${(i + 1) * 32}px` }}
                />
              ))}
            </div>

            {/* Letter content */}
            <div className="relative z-10 text-left font-body text-foreground/90 space-y-4 leading-relaxed">
              <p className="text-xl font-romantic text-rose">Dear Jahnavi,</p>
              
              <p>
                I don't know when it happened exactly — that moment when you went from being someone I knew to someone I couldn't imagine my life without.
              </p>
              
              <p>
                Maybe it was in the way you laugh, or how you say my name, or those little things you do that you probably don't even notice but I can't forget.
              </p>
              
              <p className="text-sage font-medium">
                You make me want to be better. You make every day feel like it matters.
              </p>
              
              <p>
                I'm not perfect, and I know I'll make mistakes. But I promise to choose you, every single day, in every way I can.
              </p>
              
              <p>
                Thank you for being you. Thank you for existing. Thank you for letting me love you.
              </p>
              
              <p className="text-right mt-8">
                <span className="text-2xl font-romantic text-rose">Forever yours,</span>
                <br />
                <span className="text-xl font-romantic text-foreground">Your Valentine 💚</span>
              </p>
            </div>
          </div>

          {/* Floating petals */}
          {["🌸", "🌹", "💕"].map((petal, i) => (
            <motion.span
              key={i}
              className="absolute text-2xl"
              style={{
                top: `${20 + i * 30}%`,
                right: `${-10 + i * 5}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
              }}
            >
              {petal}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LoveLetterSection;
