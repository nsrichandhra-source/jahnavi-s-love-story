import { motion } from "framer-motion";
import { Heart, Star, Smile, Moon, Coffee, Music, MessageCircle, Sparkles } from "lucide-react";

const reasons = [
  { icon: Smile, text: "Your smile that lights up my world", color: "text-rose" },
  { icon: Heart, text: "The way you care without even trying", color: "text-sage" },
  { icon: Star, text: "How you make ordinary moments magical", color: "text-gold" },
  { icon: Moon, text: "Your late-night voice that calms my soul", color: "text-rose" },
  { icon: Coffee, text: "How you remember the little things", color: "text-sage" },
  { icon: Music, text: "The way you laugh at my silly jokes", color: "text-gold" },
  { icon: MessageCircle, text: "Your messages that make my day better", color: "text-rose" },
  { icon: Sparkles, text: "Simply because you're you", color: "text-sage" },
];

const ReasonsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sage-light/10 via-background to-rose-light/10 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-romantic text-gradient-romantic mb-6"
        >
          Reasons I Love You
        </motion.h2>

        <div className="section-divider mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground font-body mb-12 italic"
        >
          "Loving you isn't one reason…
          <br />
          It's a thousand little things you do without realizing."
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-romantic p-6 group cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
                >
                  <Icon className={`w-10 h-10 mx-auto mb-4 ${reason.color} group-hover:scale-110 transition-transform`} />
                </motion.div>
                <p className="font-body text-foreground/80 text-sm">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-12 text-2xl font-romantic text-rose"
        >
          And a million more reasons I'm still discovering... 💕
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ReasonsSection;
