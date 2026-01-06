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
    <section className="relative py-12 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-background" />
              </div>
              <div className="text-right">
                <div className="text-xl md:text-2xl font-bold">
                  <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
