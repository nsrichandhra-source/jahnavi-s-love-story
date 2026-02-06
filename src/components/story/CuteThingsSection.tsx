import { motion } from "framer-motion";
import { Moon, Heart, CloudRain, Smile, MessageSquare } from "lucide-react";
import SectionNavigation from "../SectionNavigation";

interface CuteThingsSectionProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const cuteThings = [
  { icon: Moon, text: "Your sleepy voice", emoji: "😴" },
  { icon: Heart, text: "Your cute anger", emoji: "😤" },
  { icon: CloudRain, text: "Your mood swings", emoji: "🌦️" },
  { icon: Smile, text: "Your caring scoldings", emoji: "🥺" },
  { icon: MessageSquare, text: "Your late night talks", emoji: "🌙" },
];

const CuteThingsSection = ({ onPrevious, onNext }: CuteThingsSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-light/10 via-background to-sage-light/10 py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-romantic text-gradient-romantic mb-6"
        >
          Cute Things About You
        </motion.h2>

        <div className="section-divider mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-body mb-12"
        >
          Little things about you that I absolutely adore 💕
        </motion.p>

        <div className="space-y-4">
          {cuteThings.map((thing, i) => {
            const Icon = thing.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring" }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-5 bg-card/60 backdrop-blur-sm rounded-2xl border border-sage/20 group cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                  className={`p-3 rounded-full ${i % 2 === 0 ? "bg-rose/10" : "bg-sage/10"}`}
                >
                  <Icon className={`w-8 h-8 ${i % 2 === 0 ? "text-rose" : "text-sage"}`} />
                </motion.div>
                
                <p className="font-body text-xl text-foreground/90 flex-grow text-left">
                  {thing.text}
                </p>
                
                <motion.span
                  className="text-4xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                >
                  {thing.emoji}
                </motion.span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-2xl font-romantic text-sage"
        >
          Every little thing about you is my favorite thing 💚
        </motion.p>

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

export default CuteThingsSection;
