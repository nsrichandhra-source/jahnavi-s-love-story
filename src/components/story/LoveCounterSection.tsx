import { motion } from "framer-motion";
import { Heart, Clock, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import SectionNavigation from "../SectionNavigation";

interface LoveCounterSectionProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const LoveCounterSection = ({ onPrevious, onNext }: LoveCounterSectionProps) => {
  const [counters, setCounters] = useState({
    days: 0,
    hours: 0,
    heartbeats: 0,
  });

  // Start date: October 12, 2025
  const startDate = new Date("2025-10-12");

  useEffect(() => {
    const updateCounters = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      // If the start date is in the future, show 0
      if (diff < 0) {
        setCounters({ days: 0, hours: 0, heartbeats: 0 });
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const heartbeats = Math.floor(hours * 60 * 80); // ~80 beats per minute

      setCounters({ days, hours, heartbeats });
    };

    updateCounters();
    const interval = setInterval(updateCounters, 1000);
    return () => clearInterval(interval);
  }, []);

  const counterItems = [
    {
      icon: Heart,
      value: counters.days,
      label: "Days Loving You",
      color: "text-rose",
      bgColor: "bg-rose/10",
    },
    {
      icon: Clock,
      value: counters.hours,
      label: "Hours Missing You",
      color: "text-sage",
      bgColor: "bg-sage/10",
    },
    {
      icon: Zap,
      value: counters.heartbeats.toLocaleString(),
      label: "Heartbeats For You",
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sage-light/10 via-background to-rose-light/10 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-romantic text-gradient-romantic mb-6"
        >
          Love Counter
        </motion.h2>

        <div className="section-divider mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-body mb-12"
        >
          Counting every moment with you since October 12, 2025 💕
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counterItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring" }}
                className="card-romantic p-10"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-full ${item.bgColor} flex items-center justify-center`}
                >
                  <Icon className={`w-10 h-10 ${item.color}`} />
                </motion.div>

                <motion.p
                  key={item.value}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className={`text-5xl md:text-6xl font-bold ${item.color} mb-3`}
                >
                  {item.value}
                </motion.p>

                <p className="font-body text-lg text-muted-foreground">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Heartbeat line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-2"
        >
          <div className="w-24 h-0.5 bg-sage/30" />
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <Heart className="w-10 h-10 text-sage fill-sage" />
          </motion.div>
          <svg className="w-40 h-10 text-sage" viewBox="0 0 100 30">
            <motion.path
              d="M0,15 L20,15 L25,5 L30,25 L35,10 L40,20 L45,15 L100,15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
          >
            <Heart className="w-10 h-10 text-sage fill-sage" />
          </motion.div>
          <div className="w-24 h-0.5 bg-sage/30" />
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

export default LoveCounterSection;
