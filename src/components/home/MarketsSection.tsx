import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Bitcoin, BarChart3, Gem, Package, Flame } from "lucide-react";

const categories = [
  { id: "popular", label: "الشائعة", icon: Flame },
  { id: "forex", label: "Forex", icon: DollarSign },
  { id: "crypto", label: "Crypto", icon: Bitcoin },
  { id: "indices", label: "Indices", icon: BarChart3 },
  { id: "metals", label: "Metals", icon: Gem },
  { id: "commodities", label: "Commodities", icon: Package },
];

const instruments = {
  popular: [
    { name: "Bitcoin", symbol: "BTC/USD", price: "93,759.830", spread: "2.500", icon: "₿", flag: "🟠" },
    { name: "EURUSD", symbol: "EUR/USD", price: "1.04250", spread: "0.100", icon: "€", flag: "🇪🇺" },
    { name: "Gold", symbol: "XAU/USD", price: "2,045.50", spread: "0.350", icon: "🥇", flag: "🟡" },
  ],
  forex: [
    { name: "EURUSD", symbol: "EUR/USD", price: "1.04250", spread: "0.100", icon: "€", flag: "🇪🇺" },
    { name: "GBPUSD", symbol: "GBP/USD", price: "1.25680", spread: "0.150", icon: "£", flag: "🇬🇧" },
    { name: "USDJPY", symbol: "USD/JPY", price: "148.250", spread: "0.200", icon: "¥", flag: "🇯🇵" },
  ],
  crypto: [
    { name: "Bitcoin", symbol: "BTC/USD", price: "93,759.830", spread: "2.500", icon: "₿", flag: "🟠" },
    { name: "Ethereum", symbol: "ETH/USD", price: "2,380.50", spread: "1.200", icon: "Ξ", flag: "🔷" },
  ],
  indices: [
    { name: "AUS200.spot", symbol: "Indices", price: "8700.000", spread: "1.000", icon: "📊", flag: "🇦🇺" },
    { name: "EU50.spot", symbol: "Indices", price: "5926.700", spread: "1.500", icon: "📊", flag: "🇪🇺" },
    { name: "FRA40.spot", symbol: "Indices", price: "8214.000", spread: "1.000", icon: "📊", flag: "🇫🇷" },
    { name: "GER30.spot", symbol: "Indices", price: "24848.600", spread: "0.500", icon: "📊", flag: "🇩🇪" },
    { name: "UK100.spot", symbol: "Indices", price: "10038.800", spread: "0.600", icon: "📊", flag: "🇬🇧" },
  ],
  metals: [
    { name: "Gold", symbol: "XAU/USD", price: "2,045.50", spread: "0.350", icon: "🥇", flag: "🟡" },
    { name: "Silver", symbol: "XAG/USD", price: "24.850", spread: "0.050", icon: "🥈", flag: "⚪" },
  ],
  commodities: [
    { name: "Oil", symbol: "WTI", price: "78.450", spread: "0.050", icon: "🛢️", flag: "⚫" },
    { name: "Natural Gas", symbol: "NGAS", price: "2.850", spread: "0.010", icon: "🔥", flag: "🔵" },
  ],
};

export const MarketsSection = () => {
  const [activeCategory, setActiveCategory] = useState("popular");

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">افتح أسواق</span>
            <br />
            <span className="gold-text">عالمية متنوعة</span>
          </h2>
          <p className="text-muted-foreground">
            اكتشف فرص التداول مع العقود مقابل الفروقات على السلع مثل النفط، الذهب، والغاز الطبيعي. 
            استكشف العقود مقابل الفروقات في الفوركس، المؤشرات مثل S&P 500، وداو، وناسداك.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? "gold-gradient text-background"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Instruments List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated rounded-2xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {instruments[activeCategory as keyof typeof instruments]?.map((instrument, index) => (
                <div
                  key={instrument.name}
                  className={`flex items-center justify-between p-4 ${
                    index !== 0 ? "border-t border-border/50" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                      {instrument.symbol}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-left">
                      <div className="font-bold text-foreground">{instrument.name}</div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-primary">{instrument.spread}</span>
                        <span className="text-muted-foreground">{instrument.price}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-2xl">
                      {instrument.flag}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
