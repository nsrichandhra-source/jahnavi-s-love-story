import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import SectionNavigation from "../SectionNavigation";

interface LoveIntroSectionProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const LoveIntroSection = ({ onPrevious, onNext }: LoveIntroSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-light/10 via-background to-sage-light/10 py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Heart className="w-20 h-20 mx-auto text-rose fill-rose animate-heart-beat" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-romantic text-gradient-romantic mb-8"
        >
          Our Love Story
        </motion.h2>

        <div className="section-divider mb-12" />

        <div className="space-y-6 text-xl md:text-2xl font-body text-foreground/90 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Before you came into my life, everything felt ordinary…
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground"
          >
            Days passed, conversations faded,
            <br />
            And nothing really stayed.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-sage font-medium"
          >
            But then you walked in
            <br />
            And suddenly even silence felt special.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="py-6"
          >
            <Sparkles className="w-10 h-10 mx-auto text-gold animate-sparkle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            You changed the way I smile…
            <br />
            The way I dream…
            <br />
            The way I see love itself.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="text-2xl md:text-3xl text-rose font-medium pt-4"
          >
            You didn't just enter my life
            <br />
            You became the most beautiful part of it.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
          className="flex justify-center gap-2 mt-12"
        >
          {["💕", "✨", "💚", "✨", "💕"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-4xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        <SectionNavigation
          onPrevious={onPrevious}
          onNext={onNext}
          showPrevious={!!onPrevious}
          showNext={!!onNext}
        />
      </div>
    </motion.section>
  );
};

export default LoveIntroSection;
