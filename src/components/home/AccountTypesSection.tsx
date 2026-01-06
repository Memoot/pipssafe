import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpLeft, Check } from "lucide-react";

const plans = [
  {
    name: "السنت",
    badge: "ECN",
    icon: "¢",
    minDeposit: "$10",
    description: "مصمم للمتداولين المبتدئين، يبدأ بإيداع $10 فقط ويوفر بيئة تداول مرنة بدون رسوم خفية.",
  },
  {
    name: "حساب ستاندرد",
    badge: "ECN",
    icon: "⇆",
    minDeposit: "$10",
    description: "حساب ستاندرد هو الاختيار الأفضل بين المتداولين بسبب عدم وجود عمولات التبييت، مما يوفر الكفاءة في التكلفة.",
  },
  {
    name: "حساب نارو",
    badge: "PRO",
    icon: "N",
    minDeposit: "$1000",
    description: "للمتداولين المحترفين مع سبريد منخفض جداً وتنفيذ سريع للصفقات.",
  },
];

export const AccountTypesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">اختر نوع</span>
            <br />
            <span className="gold-text">حسابك</span>
          </h2>
          <p className="text-muted-foreground">
            استكشف خيارات الحسابات لدينا وابحث عن ما يناسب احتياجاتك. اختر الخطة المثالية لك.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated rounded-2xl p-6 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-lg bg-primary/20 text-primary text-sm font-medium">
                  {plan.badge}
                </span>
                <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center text-2xl font-bold text-background">
                  {plan.icon}
                </div>
              </div>

              <div className="text-right mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">
                  الحد الأدنى للإيداع: <span className="text-primary font-bold">{plan.minDeposit}</span>
                </p>
              </div>

              <p className="text-muted-foreground text-sm mb-6 text-right leading-relaxed">
                {plan.description}
              </p>

              <button className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-background transition-colors">
                <ArrowUpLeft className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
