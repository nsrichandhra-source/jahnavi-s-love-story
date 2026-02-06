import { motion } from "framer-motion";
import { Camera, X } from "lucide-react";
import { useState } from "react";
import SectionNavigation from "../SectionNavigation";

interface MemoryLaneSectionProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const memories = [
  { caption: "The day we first talked", image: "/first msg.jpeg", rotate: -3 },
  { caption: "When i realised i like you", image: "/WhatsApp Image 2026-02-06 at 11.38.13 AM.jpeg", rotate: 2 },
  { caption: "Dumb - our fav chat", image: "/dumb.jpeg", rotate: -2 },
  { caption: "This selfie = my weakness", image: "/selfie.jpeg", rotate: 3 },
  { caption: "One moment, infinite feelings", image: "/milkshake.jpeg", rotate: -1 },
  { caption: "My favorite us", image: "/freshers.jpeg", rotate: 2 },
];

const MemoryLaneSection = ({ onPrevious, onNext }: MemoryLaneSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Image Popup Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh]"
          >
            <img
              src={selectedImage}
              alt="Memory view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}

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
          className="text-5xl md:text-7xl font-romantic text-gradient-romantic mb-6"
        >
          Memory Lane
        </motion.h2>

        <div className="section-divider mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-body mb-12"
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
              <div className="bg-card p-3 rounded-lg shadow-lg border-2 border-sage/20 cursor-pointer" onClick={() => setSelectedImage(memory.image)}>
                {/* Memory photo */}
                <div className="aspect-square bg-gradient-to-br from-rose-light/30 to-sage-light/30 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-sm font-body text-foreground">Click to view full size</span>
                  </div>
                </div>
                
                {/* Caption */}
                <p className="font-body text-lg text-foreground/80 text-center">{memory.caption}</p>
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
          className="mt-12 text-xl text-muted-foreground font-body italic"
        >
          ✨ Favorite Memories ✨
        </motion.p>

        <SectionNavigation
          onPrevious={onPrevious}
          onNext={onNext}
          showPrevious={!!onPrevious}
          showNext={!!onNext}
        />
      </div>
    </motion.section>
    </>
  );
};

export default MemoryLaneSection;
