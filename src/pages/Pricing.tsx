import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check, Zap, Star, Crown, Shield, Clock, Headphones, Award } from "lucide-react";

const plans = [
  {
    name: "المبتدئ",
    icon: Zap,
    price: { monthly: 49, quarterly: 129, yearly: 399 },
    description: "مثالي للمبتدئين في رحلة التداول",
    features: [
      "حتى 10 إشارات أسبوعياً",
      "إشارات الفوركس فقط",
      "إشعارات البريد الإلكتروني",
      "دعم أساسي (رد خلال 24 ساعة)",
      "دليل إدارة المخاطر",
      "الوصول للدروس الأساسية",
    ],
    popular: false,
  },
  {
    name: "الاحترافي",
    icon: Star,
    price: { monthly: 99, quarterly: 249, yearly: 799 },
    description: "الخيار الأكثر شعبية للمتداولين الجادين",
    features: [
      "إشارات غير محدودة",
      "فوركس، كريبتو ومؤشرات",
      "إشعارات فورية",
      "دعم أولوية (رد خلال ساعة)",
      "وصول كامل للأكاديمية",
      "تحليل أسبوعي للسوق",
      "مجموعة تيليجرام خاصة",
      "قالب يوميات التداول",
      "ندوات شهرية",
    ],
    popular: true,
  },
  {
    name: "النخبة",
    icon: Crown,
    price: { monthly: 199, quarterly: 499, yearly: 1599 },
    description: "للمتداولين الذين يريدون التميز",
    features: [
      "كل مميزات الاحترافي",
      "جلسات إرشاد فردية",
      "استراتيجيات تداول مخصصة",
      "مراجعة المحفظة",
      "وصول VIP للديسكورد",
      "الوصول المبكر للميزات",
      "مدير حساب شخصي",
      "تحليلات مستوى المؤسسات",
    ],
    popular: false,
  },
];

const features = [
  { icon: Shield, title: "ضمان 7 أيام", description: "استرداد كامل إذا لم تكن راضياً" },
  { icon: Clock, title: "إشارات 24/7", description: "تغطية على مدار الساعة" },
  { icon: Headphones, title: "دعم الخبراء", description: "مساعدة احترافية" },
  { icon: Award, title: "نتائج مثبتة", description: "نسبة نجاح +87%" },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">أسعار </span>
              <span className="gold-text">بسيطة وشفافة</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              اختر الخطة التي تناسب أهدافك التداولية. بدون رسوم خفية، إلغاء في أي وقت.
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden hover-lift ${
                  plan.popular
                    ? "border-2 border-primary shadow-xl shadow-primary/10"
                    : "border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 gold-gradient py-2 text-center">
                    <span className="text-sm font-bold text-background">
                      الأكثر شعبية
                    </span>
                  </div>
                )}

                <div className={`p-8 bg-card ${plan.popular ? "pt-14" : ""}`}>
                  <div
                    className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                      plan.popular
                        ? "gold-gradient"
                        : "bg-primary/10 border border-primary/20"
                    }`}
                  >
                    <plan.icon
                      className={`w-7 h-7 ${
                        plan.popular ? "text-background" : "text-primary"
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-foreground">
                      ${plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground">/شهرياً</span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-6">
                    <p>ربع سنوي: <span className="text-foreground">${plan.price.quarterly}</span> (وفر 15%)</p>
                    <p>سنوياً: <span className="text-foreground">${plan.price.yearly}</span> (وفر 33%)</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/register"
                    className={`block text-center py-4 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? "btn-gold"
                        : "btn-outline-gold"
                    }`}
                  >
                    ابدأ الآن
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 gold-gradient rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-background" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
