import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrendingUp, TrendingDown, Filter, Calendar } from "lucide-react";

const categories = ["All", "Forex", "Crypto", "Indices"];

const signals = [
  { id: 1, pair: "EUR/USD", type: "BUY", entry: "1.0850", tp: "1.0920", sl: "1.0810", result: "+70", status: "win", category: "Forex", date: "2024-01-05" },
  { id: 2, pair: "BTC/USD", type: "SELL", entry: "43,500", tp: "42,000", sl: "44,200", result: "+1,500", status: "win", category: "Crypto", date: "2024-01-05" },
  { id: 3, pair: "GBP/JPY", type: "BUY", entry: "187.50", tp: "188.80", sl: "186.90", result: "+130", status: "win", category: "Forex", date: "2024-01-04" },
  { id: 4, pair: "US30", type: "SELL", entry: "37,800", tp: "37,400", sl: "38,000", result: "-200", status: "loss", category: "Indices", date: "2024-01-04" },
  { id: 5, pair: "ETH/USD", type: "BUY", entry: "2,280", tp: "2,400", sl: "2,220", result: "+120", status: "win", category: "Crypto", date: "2024-01-03" },
  { id: 6, pair: "XAU/USD", type: "BUY", entry: "2,045", tp: "2,070", sl: "2,030", result: "+25", status: "win", category: "Forex", date: "2024-01-03" },
  { id: 7, pair: "NAS100", type: "BUY", entry: "16,500", tp: "16,800", sl: "16,350", result: "+300", status: "win", category: "Indices", date: "2024-01-02" },
  { id: 8, pair: "USD/CHF", type: "SELL", entry: "0.8450", tp: "0.8380", sl: "0.8490", result: "+70", status: "win", category: "Forex", date: "2024-01-02" },
];

const monthlyStats = [
  { month: "Jan 2024", trades: 45, winRate: "87%", pips: "+1,250" },
  { month: "Dec 2023", trades: 52, winRate: "85%", pips: "+1,480" },
  { month: "Nov 2023", trades: 48, winRate: "88%", pips: "+1,320" },
  { month: "Oct 2023", trades: 50, winRate: "84%", pips: "+1,180" },
];

const Results = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSignals = signals.filter(
    (signal) => activeCategory === "All" || signal.category === activeCategory
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
              Our Trading <span className="gold-text">Results</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Transparent performance tracking with verified results. See our 
              track record and make informed decisions.
            </p>
          </motion.div>

          {/* Monthly Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {monthlyStats.map((stat, index) => (
              <div key={stat.month} className="card-elevated rounded-xl p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">{stat.month}</div>
                <div className="text-2xl font-bold gold-text mb-1">{stat.pips}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.trades} trades • {stat.winRate} win rate
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
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
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
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Date</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Pair</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Type</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Entry</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">TP</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">SL</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Result</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Status</th>
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
                          signal.type === "BUY" 
                            ? "bg-green-500/10 text-green-500" 
                            : "bg-red-500/10 text-red-500"
                        }`}>
                          {signal.type === "BUY" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          {signal.type}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-foreground">{signal.entry}</td>
                      <td className="p-4 text-sm text-green-500">{signal.tp}</td>
                      <td className="p-4 text-sm text-red-500">{signal.sl}</td>
                      <td className={`p-4 text-sm font-semibold ${
                        signal.status === "win" ? "text-green-500" : "text-red-500"
                      }`}>
                        {signal.result} pips
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          signal.status === "win"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        }`}>
                          {signal.status.toUpperCase()}
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
              <strong className="text-foreground">Risk Disclaimer:</strong> Past performance is not indicative of future results. 
              Trading involves substantial risk of loss and is not suitable for all investors. 
              Please trade responsibly and only with capital you can afford to lose.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
