import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const quotes = [
  "Every love story is beautiful, but ours is my favorite.",
  "In a sea of people, my eyes will always search for you.",
  "I fell in love the way you fall asleep: slowly, then all at once.",
  "You're the first thing I think of when I wake up and the last thing before I sleep.",
  "With you, I found something I wasn't even looking for.",
  "You're my today and all of my tomorrows.",
  "If I had a flower for every time you made me smile, I'd have an endless garden.",
];

const QuoteSliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-rose-light/10 via-background to-sage-light/10 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-romantic text-gradient-romantic mb-8"
        >
          Love Quotes
        </motion.h2>

        <div className="relative py-12">
          <Quote className="w-12 h-12 mx-auto text-sage/30 mb-6" />

          <div className="min-h-[100px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-body text-foreground/90 italic px-8"
              >
                "{quotes[currentIndex]}"
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrev}
              className="p-2 rounded-full bg-sage/10 text-sage hover:bg-sage/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-rose w-6"
                      : "bg-sage/30 hover:bg-sage/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="p-2 rounded-full bg-sage/10 text-sage hover:bg-sage/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default QuoteSliderSection;
