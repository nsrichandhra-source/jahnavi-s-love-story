import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const memories = [
  { caption: "The day we first talked 💬", rotate: -3 },
  { caption: "When I realized I like you 👀", rotate: 2 },
  { caption: "Our favorite chat ❤️", rotate: -2 },
  { caption: "This selfie = my weakness 📸", rotate: 3 },
  { caption: "One moment, infinite feelings ⏳", rotate: -1 },
  { caption: "My favorite us 💞", rotate: 2 },
];

const MemoryLaneSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-light/10 via-background to-sage-light/10 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-romantic text-gradient-romantic mb-6"
        >
          Memory Lane
        </motion.h2>

        <div className="section-divider mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground font-body mb-12"
        >
          📸 Moments I'll treasure forever
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {memories.map((memory, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotate: memory.rotate * 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: memory.rotate }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="relative group"
            >
              <div className="bg-card p-3 rounded-lg shadow-lg border-2 border-sage/20">
                {/* Polaroid style photo placeholder */}
                <div className="aspect-square bg-gradient-to-br from-rose-light/30 to-sage-light/30 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Camera className="w-12 h-12 text-muted-foreground/40" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-sm font-body text-foreground">Add your photo here 📷</span>
                  </div>
                </div>
                
                {/* Caption */}
                <p className="font-body text-sm text-foreground/80 text-center">{memory.caption}</p>
              </div>

              {/* Tape decorations */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-sage/30 rotate-[-2deg]" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-12 text-muted-foreground font-body italic"
        >
          ✨ Add your favorite photos here to make it complete ✨
        </motion.p>
      </div>
    </motion.section>
  );
};

export default MemoryLaneSection;
