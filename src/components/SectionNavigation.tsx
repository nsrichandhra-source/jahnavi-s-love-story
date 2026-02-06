import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface SectionNavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
  previousLabel?: string;
  nextLabel?: string;
}

const SectionNavigation = ({
  onPrevious,
  onNext,
  showPrevious = true,
  showNext = true,
  previousLabel = "Previous",
  nextLabel = "Next",
}: SectionNavigationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="flex items-center justify-center gap-6 mt-12"
    >
      {showPrevious && onPrevious && (
        <motion.button
          onClick={onPrevious}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-sage/10 hover:bg-sage/20 text-sage font-body font-semibold text-lg rounded-full border border-sage/30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          {previousLabel}
        </motion.button>
      )}

      <Heart className="w-5 h-5 text-rose fill-rose animate-pulse" />

      {showNext && onNext && (
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose to-rose-light text-white font-body font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          {nextLabel}
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default SectionNavigation;
