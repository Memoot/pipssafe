import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 87,
    suffix: "%",
    label: "Win Rate",
    description: "Consistent performance",
  },
  {
    icon: Target,
    value: 2500,
    suffix: "+",
    label: "Total Signals",
    description: "Delivered this year",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Active Members",
    description: "Trusted traders",
  },
  {
    icon: DollarSign,
    value: 5,
    suffix: "M+",
    label: "Pips Generated",
    description: "Verified results",
  },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated rounded-2xl p-6 md:p-8 text-center hover-lift"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 mx-auto mb-4 gold-gradient rounded-xl flex items-center justify-center"
              >
                <stat.icon className="w-7 h-7 text-background" />
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
