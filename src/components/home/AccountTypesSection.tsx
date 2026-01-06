import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpLeft, Check } from "lucide-react";

const plans = [
  {
    name: "السنت",
    badge: "ECN",
    icon: "¢",
    minDeposit: "$10",
    description: "مصمم للمتداولين المبتدئين، يبدأ بإيداع $10 فقط ويوفر بيئة تداول مرنة.",
  },
  {
    name: "ستاندرد",
    badge: "ECN",
    icon: "⇆",
    minDeposit: "$10",
    description: "الاختيار الأفضل بين المتداولين بسبب عدم وجود عمولات التبييت.",
  },
  {
    name: "نارو",
    badge: "PRO",
    icon: "N",
    minDeposit: "$1000",
    description: "للمتداولين المحترفين مع سبريد منخفض جداً وتنفيذ سريع.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AccountTypesSection = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-white">اختر نوع</span>
            <br />
            <span className="gold-text">حسابك</span>
          </h2>
          <p className="text-gray-400 text-sm">
            استكشف خيارات الحسابات لدينا واختر الخطة المثالية لك.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Plans */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-4 min-w-max px-4"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="card-elevated rounded-xl p-5 w-[280px] flex-shrink-0"
              >
                <div className="flex items-start justify-between mb-3">
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-medium"
                  >
                    {plan.badge}
                  </motion.span>
                  <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center text-lg font-bold text-black">
                    {plan.icon}
                  </div>
                </div>

                <div className="text-right mb-3">
                  <h3 className="text-base font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-xs">
                    الحد الأدنى: <span className="gold-text font-bold">{plan.minDeposit}</span>
                  </p>
                </div>

                <p className="text-gray-400 text-xs mb-4 text-right leading-relaxed">
                  {plan.description}
                </p>

                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors"
                >
                  <ArrowUpLeft className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
