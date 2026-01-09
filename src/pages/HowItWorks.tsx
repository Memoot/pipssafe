import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UserPlus, Bell, LineChart, Shield, Smartphone, Clock, Target, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: 1,
    title: "أنشئ حسابك",
    description: "سجل في أقل من دقيقتين. اختر خطة الاشتراك التي تناسب أهدافك وميزانيتك. لا يوجد إعداد معقد.",
    details: [
      "عملية تسجيل سريعة",
      "خيارات خطط مرنة",
      "معالجة دفع آمنة",
      "تفعيل فوري للحساب",
    ],
  },
  {
    icon: Bell,
    step: 2,
    title: "استلم الإشارات الفورية",
    description: "احصل على إشارات تداول احترافية مباشرة على جهازك. كل إشارة تتضمن تفاصيل الصفقة الكاملة.",
    details: [
      "سعر الدخول بالمستوى الدقيق",
      "وقف الخسارة للحماية",
      "أهداف جني الأرباح (TP1, TP2, TP3)",
      "إشعارات فورية",
    ],
  },
  {
    icon: LineChart,
    step: 3,
    title: "نفذ صفقاتك",
    description: "افتح منصة الوسيط المفضلة لديك وضع الصفقة حسب إشارتنا. ندعم جميع وسطاء الفوركس والكريبتو.",
    details: [
      "يعمل مع أي وسيط MT4/MT5",
      "متوافق مع منصات الكريبتو",
      "تنفيذ بسيط بالنسخ واللصق",
      "حاسبة حجم الصفقة مضمنة",
    ],
  },
  {
    icon: Shield,
    step: 4,
    title: "أدر المخاطر وانمو",
    description: "اتبع إرشادات إدارة المخاطر لحماية رأس مالك مع تنمية حسابك باستمرار.",
    details: [
      "خاطر بـ 1-2% كحد أقصى لكل صفقة",
      "استخدم حاسبة حجم الصفقة",
      "تتبع تقدمك في لوحة التحكم",
      "تعلم من دورات الأكاديمية",
    ],
  },
];

const features = [
  {
    icon: Smartphone,
    title: "توصيل متعدد المنصات",
    description: "استلم الإشارات عبر البريد والتطبيق وتليجرام والإشعارات.",
  },
  {
    icon: Clock,
    title: "تغطية السوق 24/7",
    description: "نراقب الأسواق على مدار الساعة لعدم تفويت أي فرصة.",
  },
  {
    icon: Target,
    title: "مستويات تداول واضحة",
    description: "كل إشارة تتضمن الدخول ووقف الخسارة وأهداف متعددة.",
  },
  {
    icon: CheckCircle,
    title: "نتائج موثقة",
    description: "سجل شفاف بنسبة نجاح +87% وتاريخ مفصل.",
  },
];

const HowItWorks = () => {
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
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">كيف </span>
              <span className="gold-text">نعمل</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              ابدأ التداول مثل المحترفين في أربع خطوات بسيطة. منصتنا مصممة 
              لجعل إشارات التداول متاحة للجميع.
            </p>
          </motion.div>

          {/* Steps Timeline */}
          <div className="max-w-4xl mx-auto mb-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute right-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-border hidden md:block" />
                )}

                <div className="flex gap-6 md:gap-8">
                  {/* Step Number */}
                  <div className="relative">
                    <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-background" />
                    </div>
                    <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card-elevated rounded-2xl p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              <span className="text-foreground">ما الذي يميز </span>
              <span className="gold-text">إشاراتنا</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-elevated rounded-xl p-6 text-center hover-lift"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Example Signal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="text-foreground">مثال على </span>
              <span className="gold-text">صيغة الإشارة</span>
            </h2>
            <div className="card-elevated rounded-2xl p-6 md:p-8 font-mono text-sm">
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <span className="px-2 py-1 gold-gradient text-background rounded text-xs">شراء</span>
                <span className="text-lg">EUR/USD</span>
              </div>
              <div className="space-y-2 text-foreground">
                <p>📍 الدخول: <span className="text-primary">1.0850</span></p>
                <p>🛑 وقف الخسارة: <span className="text-red-500">1.0810</span></p>
                <p>✅ الهدف الأول: <span className="text-green-500">1.0890</span></p>
                <p>✅ الهدف الثاني: <span className="text-green-500">1.0920</span></p>
                <p>✅ الهدف الثالث: <span className="text-green-500">1.0950</span></p>
              </div>
              <div className="mt-4 pt-4 border-t border-border text-muted-foreground">
                💡 التحليل: ارتداد قوي من الدعم مع تباين صعودي على H4
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center card-elevated rounded-2xl p-12 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="text-foreground">هل أنت مستعد لبدء </span>
              <span className="gold-text">التداول؟</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              انضم لآلاف المتداولين الذين يحققون أرباحاً من إشاراتنا.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="btn-gold px-8 py-4 rounded-xl font-semibold"
              >
                ابدأ تجربة مجانية
              </Link>
              <Link
                to="/results"
                className="btn-outline-gold px-8 py-4 rounded-xl font-semibold"
              >
                عرض نتائجنا
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
