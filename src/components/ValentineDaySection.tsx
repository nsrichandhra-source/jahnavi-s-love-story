import { motion } from "framer-motion";
import { ReactNode } from "react";
import SectionNavigation from "./SectionNavigation";

interface ValentineDaySectionProps {
  title: string;
  emoji: string;
  message: ReactNode;
  bgGradient?: string;
  accentColor?: string;
  children?: ReactNode;
  onPrevious?: () => void;
  onNext?: () => void;
}

const ValentineDaySection = ({
  title,
  emoji,
  message,
  bgGradient = "from-blush via-background to-sage-light/20",
  children,
  onPrevious,
  onNext,
}: ValentineDaySectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b ${bgGradient} py-20 px-6`}
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8 }}
          className="text-8xl md:text-9xl mb-8"
        >
          {emoji}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-romantic text-gradient-romantic mb-8 text-shadow-soft"
        >
          {title}
        </motion.h2>

        <div className="section-divider mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-body text-foreground/90 leading-relaxed space-y-4"
        >
          {message}
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            {children}
          </motion.div>
        )}

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

export default ValentineDaySection;
