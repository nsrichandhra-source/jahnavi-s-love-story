import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Proposal
import ProposalSection from "@/components/ProposalSection";

// Valentine Week
import RoseDay from "@/components/valentine-days/RoseDay";
import ProposeDay from "@/components/valentine-days/ProposeDay";
import ChocolateDay from "@/components/valentine-days/ChocolateDay";
import TeddyDay from "@/components/valentine-days/TeddyDay";
import PromiseDay from "@/components/valentine-days/PromiseDay";
import HugDay from "@/components/valentine-days/HugDay";
import KissDay from "@/components/valentine-days/KissDay";
import ValentinesDay from "@/components/valentine-days/ValentinesDay";

// Story Sections
import LoveIntroSection from "@/components/story/LoveIntroSection";
import ReasonsSection from "@/components/story/ReasonsSection";
import MemoryLaneSection from "@/components/story/MemoryLaneSection";
import LoveLetterSection from "@/components/story/LoveLetterSection";
import CuteThingsSection from "@/components/story/CuteThingsSection";
import LoveCounterSection from "@/components/story/LoveCounterSection";
import QuoteSliderSection from "@/components/story/QuoteSliderSection";
import FinaleSection from "@/components/story/FinaleSection";

const Index = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleAccept = () => {
    setHasAccepted(true);
    // Scroll to top after a short delay
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleReplay = () => {
    setHasAccepted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!hasAccepted ? (
          <motion.div
            key="proposal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProposalSection onAccept={handleAccept} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            ref={contentRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hide-scrollbar"
          >
            {/* Valentine Week */}
            <RoseDay />
            <ProposeDay />
            <ChocolateDay />
            <TeddyDay />
            <PromiseDay />
            <HugDay />
            <KissDay />
            <ValentinesDay />

            {/* Story Sections */}
            <LoveIntroSection />
            <ReasonsSection />
            <MemoryLaneSection />
            <LoveLetterSection />
            <CuteThingsSection />
            <LoveCounterSection />
            <QuoteSliderSection />

            {/* Finale */}
            <FinaleSection onReplay={handleReplay} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
