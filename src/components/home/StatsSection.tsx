import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, Globe, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: 250,
    suffix: "k+",
    label: "عميل تم خدمته",
  },
  {
    icon: DollarSign,
    value: 300,
    prefix: "$",
    suffix: " مليون+",
    label: "رأس المال المدفوع",
  },
  {
    icon: TrendingUp,
    value: 7,
    prefix: "$",
    suffix: " مليون+",
    label: "صفقة يومية",
  },
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "وسيطاً معرفاً",
  },
];

const CountUp = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix: string }) => {
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
    <span ref={ref} className="gold-text">
      {suffix}{count.toLocaleString()}{prefix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="relative py-8 overflow-hidden">
      <div className="container-custom">
        {/* Horizontal Scrolling Stats */}
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll-left" style={{ width: 'max-content' }}>
            {/* Duplicate stats for infinite scroll effect */}
            {[...stats, ...stats].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                className="flex items-center gap-3 bg-card/50 rounded-xl px-5 py-3 border border-border/50 min-w-[200px]"
              >
                <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-black" />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">
                    <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
