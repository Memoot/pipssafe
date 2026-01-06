import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Brain, Scale, Info, Shield } from "lucide-react";

const risks = [
  {
    icon: TrendingDown,
    title: "مخاطر السوق",
    content: "أسعار الأصول المالية يمكن أن تتغير بسرعة وبشكل غير متوقع. قد تخسر جزءاً كبيراً أو كامل رأس مالك المستثمر."
  },
  {
    icon: Scale,
    title: "مخاطر الرافعة المالية",
    content: "التداول بالرافعة المالية يضاعف الأرباح والخسائر. يمكن أن تخسر أكثر من إيداعك الأولي."
  },
  {
    icon: Brain,
    title: "المخاطر النفسية",
    content: "التداول يتطلب انضباطاً عاطفياً. القرارات المتسرعة بسبب الخوف أو الطمع قد تؤدي إلى خسائر كبيرة."
  },
  {
    icon: Info,
    title: "طبيعة التوصيات",
    content: "التوصيات المقدمة هي للأغراض التعليمية والإعلامية فقط. لا تشكل نصيحة استثمارية شخصية ولا ينبغي الاعتماد عليها كضمان للربح."
  },
  {
    icon: Shield,
    title: "الأداء السابق",
    content: "النتائج السابقة لا تضمن الأداء المستقبلي. الأسواق متغيرة وما نجح في الماضي قد لا ينجح في المستقبل."
  }
];

const RiskDisclosure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-card to-background">
          <div className="container-custom">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">إخلاء المسؤولية و</span>
                <span className="gold-text">مخاطر التداول</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                يرجى قراءة هذا الإخلاء بعناية قبل استخدام خدماتنا
              </p>
            </motion.div>
          </div>
        </section>

        {/* Warning Banner */}
        <motion.div 
          className="bg-yellow-500/10 border-y border-yellow-500/20 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="container-custom">
            <p className="text-yellow-500 text-center font-medium">
              ⚠️ تحذير: التداول في الأسواق المالية ينطوي على مخاطر عالية وقد لا يناسب جميع المستثمرين
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <section className="py-12">
          <div className="container-custom max-w-4xl">
            {/* Main Disclosure */}
            <motion.div
              className="bg-card rounded-xl p-8 border border-border text-right mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold gold-text mb-6">إخلاء المسؤولية العام</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Safe Pips هي منصة توفر توصيات تداول ومحتوى تعليمي. جميع المعلومات والتوصيات المقدمة على هذا الموقع هي للأغراض التعليمية والإعلامية فقط ولا تشكل نصيحة استثمارية أو مالية أو قانونية.
                </p>
                <p>
                  لا نضمن دقة أو اكتمال أو ملاءمة أي معلومات مقدمة. أنت تتحمل المسؤولية الكاملة عن أي قرارات تداول تتخذها بناءً على المعلومات المقدمة.
                </p>
                <p>
                  نوصي بشدة بالتشاور مع مستشار مالي مرخص قبل اتخاذ أي قرارات استثمارية.
                </p>
              </div>
            </motion.div>

            {/* Risk Cards */}
            <div className="grid gap-6">
              {risks.map((risk, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border text-right"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4 justify-end">
                    <h3 className="text-lg font-bold text-white">{risk.title}</h3>
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                      <risk.icon className="w-5 h-5 text-yellow-500" />
                    </div>
                  </div>
                  <p className="text-gray-400">
                    {risk.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Acknowledgment */}
            <motion.div
              className="mt-8 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-xl p-6 border border-yellow-500/20 text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-lg font-bold text-white mb-3">إقرار المستخدم</h3>
              <p className="text-gray-400 text-sm">
                باستخدامك لخدمات Safe Pips، فإنك تقر بأنك قرأت وفهمت هذا الإخلاء من المسؤولية وأنك على دراية بالمخاطر المرتبطة بالتداول. أنت توافق على أن Safe Pips ليست مسؤولة عن أي خسائر قد تتكبدها نتيجة التداول.
              </p>
            </motion.div>

            <motion.div 
              className="text-center text-gray-500 text-sm pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              آخر تحديث: يناير 2024
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RiskDisclosure;
