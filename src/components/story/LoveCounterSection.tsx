import { motion } from "framer-motion";
import { Heart, Clock, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const LoveCounterSection = () => {
  const [counters, setCounters] = useState({
    days: 0,
    hours: 0,
    heartbeats: 0,
  });

  // Start date - you can customize this
  const startDate = new Date("2024-01-01");

  useEffect(() => {
    const updateCounters = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
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
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-romantic text-gradient-romantic mb-6"
        >
          Love Counter
        </motion.h2>

        <div className="section-divider mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground font-body mb-12"
        >
          Counting every moment with you 💕
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counterItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring" }}
                className="card-romantic p-8"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-full ${item.bgColor} flex items-center justify-center`}
                >
                  <Icon className={`w-8 h-8 ${item.color}`} />
                </motion.div>

                <motion.p
                  key={item.value}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className={`text-4xl md:text-5xl font-bold ${item.color} mb-2`}
                >
                  {item.value}
                </motion.p>

                <p className="font-body text-muted-foreground">{item.label}</p>
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
          className="mt-12 flex items-center justify-center gap-2"
        >
          <div className="w-20 h-0.5 bg-sage/30" />
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <Heart className="w-8 h-8 text-sage fill-sage" />
          </motion.div>
          <svg className="w-32 h-8 text-sage" viewBox="0 0 100 30">
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
            <Heart className="w-8 h-8 text-sage fill-sage" />
          </motion.div>
          <div className="w-20 h-0.5 bg-sage/30" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LoveCounterSection;
