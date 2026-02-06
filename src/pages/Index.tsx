import { useState, useRef, useCallback } from "react";
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

const SECTIONS = [
  "rose",
  "propose", 
  "chocolate",
  "teddy",
  "promise",
  "hug",
  "kiss",
  "valentines",
  "loveIntro",
  "reasons",
  "memoryLane",
  "loveLetter",
  "cuteThings",
  "loveCounter",
  "quoteSlider",
  "finale",
] as const;

type SectionName = typeof SECTIONS[number];

const Index = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleAccept = () => {
    setHasAccepted(true);
    setCurrentSectionIndex(0);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleReplay = () => {
    setHasAccepted(false);
    setCurrentSectionIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToNextSection = useCallback(() => {
    if (currentSectionIndex < SECTIONS.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentSectionIndex]);

  const goToPreviousSection = useCallback(() => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentSectionIndex]);

  const currentSection = SECTIONS[currentSectionIndex];

  const renderCurrentSection = () => {
    const commonProps = {
      onPrevious: currentSectionIndex > 0 ? goToPreviousSection : undefined,
      onNext: currentSectionIndex < SECTIONS.length - 1 ? goToNextSection : undefined,
    };

    switch (currentSection) {
      case "rose":
        return <RoseDay {...commonProps} />;
      case "propose":
        return <ProposeDay {...commonProps} />;
      case "chocolate":
        return <ChocolateDay {...commonProps} />;
      case "teddy":
        return <TeddyDay {...commonProps} />;
      case "promise":
        return <PromiseDay {...commonProps} />;
      case "hug":
        return <HugDay {...commonProps} />;
      case "kiss":
        return <KissDay {...commonProps} />;
      case "valentines":
        return <ValentinesDay {...commonProps} />;
      case "loveIntro":
        return <LoveIntroSection {...commonProps} />;
      case "reasons":
        return <ReasonsSection {...commonProps} />;
      case "memoryLane":
        return <MemoryLaneSection {...commonProps} />;
      case "loveLetter":
        return <LoveLetterSection {...commonProps} />;
      case "cuteThings":
        return <CuteThingsSection {...commonProps} />;
      case "loveCounter":
        return <LoveCounterSection {...commonProps} />;
      case "quoteSlider":
        return <QuoteSliderSection {...commonProps} />;
      case "finale":
        return <FinaleSection onReplay={handleReplay} onPrevious={goToPreviousSection} />;
      default:
        return null;
    }
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
            key={`content-${currentSection}`}
            ref={contentRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="hide-scrollbar"
          >
            {renderCurrentSection()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
