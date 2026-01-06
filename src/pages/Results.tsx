import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrendingUp, TrendingDown, Filter } from "lucide-react";

const categories = ["الكل", "فوركس", "كريبتو", "مؤشرات"];

const signals = [
  { id: 1, pair: "EUR/USD", type: "شراء", entry: "1.0850", tp: "1.0920", sl: "1.0810", result: "+70", status: "win", category: "فوركس", date: "2024-01-05" },
  { id: 2, pair: "BTC/USD", type: "بيع", entry: "43,500", tp: "42,000", sl: "44,200", result: "+1,500", status: "win", category: "كريبتو", date: "2024-01-05" },
  { id: 3, pair: "GBP/JPY", type: "شراء", entry: "187.50", tp: "188.80", sl: "186.90", result: "+130", status: "win", category: "فوركس", date: "2024-01-04" },
  { id: 4, pair: "US30", type: "بيع", entry: "37,800", tp: "37,400", sl: "38,000", result: "-200", status: "loss", category: "مؤشرات", date: "2024-01-04" },
  { id: 5, pair: "ETH/USD", type: "شراء", entry: "2,280", tp: "2,400", sl: "2,220", result: "+120", status: "win", category: "كريبتو", date: "2024-01-03" },
  { id: 6, pair: "XAU/USD", type: "شراء", entry: "2,045", tp: "2,070", sl: "2,030", result: "+25", status: "win", category: "فوركس", date: "2024-01-03" },
];

const monthlyStats = [
  { month: "يناير 2024", trades: 45, winRate: "87%", pips: "+1,250" },
  { month: "ديسمبر 2023", trades: 52, winRate: "85%", pips: "+1,480" },
  { month: "نوفمبر 2023", trades: 48, winRate: "88%", pips: "+1,320" },
  { month: "أكتوبر 2023", trades: 50, winRate: "84%", pips: "+1,180" },
];

const Results = () => {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredSignals = signals.filter(
    (signal) => activeCategory === "الكل" || signal.category === activeCategory
  );

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
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">نتائج </span>
              <span className="gold-text">التداول</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              تتبع أداء شفاف مع نتائج موثقة. اطلع على سجلنا واتخذ قرارات مستنيرة.
            </p>
          </motion.div>

          {/* Monthly Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {monthlyStats.map((stat) => (
              <div key={stat.month} className="card-elevated rounded-xl p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">{stat.month}</div>
                <div className="text-2xl font-bold gold-text mb-1">{stat.pips}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.trades} صفقة • نسبة نجاح {stat.winRate}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm font-medium">تصفية:</span>
              <Filter className="w-4 h-4" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "gold-gradient text-background"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-elevated rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-right p-4 text-sm font-semibold text-muted-foreground">التاريخ</th>
                    <th className="text-right p-4 text-sm font-semibold text-muted-foreground">الزوج</th>
                    <th className="text-right p-4 text-sm font-semibold text-muted-foreground">النوع</th>
                    <th className="text-right p-4 text-sm font-semibold text-muted-foreground">الدخول</th>
                    <th className="text-right p-4 text-sm font-semibold text-muted-foreground">الهدف</th>
                    <th className="text-right p-4 text-sm font-semibold text-muted-foreground">وقف الخسارة</th>
                    <th className="text-right p-4 text-sm font-semibold text-muted-foreground">النتيجة</th>
                    <th className="text-right p-4 text-sm font-semibold text-muted-foreground">الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSignals.map((signal, index) => (
                    <motion.tr
                      key={signal.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 text-sm text-muted-foreground">{signal.date}</td>
                      <td className="p-4 text-sm font-medium text-foreground">{signal.pair}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${
                          signal.type === "شراء" 
                            ? "bg-green-500/10 text-green-500" 
                            : "bg-red-500/10 text-red-500"
                        }`}>
                          {signal.type === "شراء" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          {signal.type}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-foreground">{signal.entry}</td>
                      <td className="p-4 text-sm text-green-500">{signal.tp}</td>
                      <td className="p-4 text-sm text-red-500">{signal.sl}</td>
                      <td className={`p-4 text-sm font-semibold ${
                        signal.status === "win" ? "text-green-500" : "text-red-500"
                      }`}>
                        {signal.result} نقطة
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          signal.status === "win"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        }`}>
                          {signal.status === "win" ? "ربح" : "خسارة"}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-6 bg-muted/30 rounded-xl border border-border"
          >
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">تحذير المخاطر:</strong> الأداء السابق لا يضمن النتائج المستقبلية. 
              التداول ينطوي على مخاطر كبيرة وغير مناسب لجميع المستثمرين. 
              يرجى التداول بمسؤولية وبرأس مال يمكنك تحمل خسارته فقط.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
