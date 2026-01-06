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
    { name: "Bitcoin", symbol: "BTC/USD", price: "93,759.830", spread: "2.500", flag: "🟠" },
    { name: "EURUSD", symbol: "EUR/USD", price: "1.04250", spread: "0.100", flag: "🇪🇺" },
    { name: "Gold", symbol: "XAU/USD", price: "2,045.50", spread: "0.350", flag: "🟡" },
  ],
  forex: [
    { name: "EURUSD", symbol: "EUR/USD", price: "1.04250", spread: "0.100", flag: "🇪🇺" },
    { name: "GBPUSD", symbol: "GBP/USD", price: "1.25680", spread: "0.150", flag: "🇬🇧" },
    { name: "USDJPY", symbol: "USD/JPY", price: "148.250", spread: "0.200", flag: "🇯🇵" },
  ],
  crypto: [
    { name: "Bitcoin", symbol: "BTC/USD", price: "93,759.830", spread: "2.500", flag: "🟠" },
    { name: "Ethereum", symbol: "ETH/USD", price: "2,380.50", spread: "1.200", flag: "🔷" },
  ],
  indices: [
    { name: "AUS200", symbol: "Indices", price: "8700.000", spread: "1.000", flag: "🇦🇺" },
    { name: "EU50", symbol: "Indices", price: "5926.700", spread: "1.500", flag: "🇪🇺" },
    { name: "GER30", symbol: "Indices", price: "24848.600", spread: "0.500", flag: "🇩🇪" },
    { name: "UK100", symbol: "Indices", price: "10038.800", spread: "0.600", flag: "🇬🇧" },
  ],
  metals: [
    { name: "Gold", symbol: "XAU/USD", price: "2,045.50", spread: "0.350", flag: "🟡" },
    { name: "Silver", symbol: "XAG/USD", price: "24.850", spread: "0.050", flag: "⚪" },
  ],
  commodities: [
    { name: "Oil", symbol: "WTI", price: "78.450", spread: "0.050", flag: "⚫" },
    { name: "Natural Gas", symbol: "NGAS", price: "2.850", spread: "0.010", flag: "🔵" },
  ],
};

export const MarketsSection = () => {
  const [activeCategory, setActiveCategory] = useState("popular");

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-white">افتح أسواق</span>
            <br />
            <span className="gold-text">عالمية متنوعة</span>
          </h2>
          <p className="text-gray-400 text-sm">
            اكتشف فرص التداول مع العقود مقابل الفروقات على السلع والمؤشرات والعملات.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Category Tabs */}
        <div className="overflow-x-auto pb-2 mb-6 scrollbar-hide">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-2 min-w-max"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? "gold-gradient text-black"
                    : "bg-card border border-border text-gray-400 hover:text-white hover:border-primary/50"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Instruments List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-elevated rounded-xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {instruments[activeCategory as keyof typeof instruments]?.map((instrument, index) => (
                <motion.div
                  key={instrument.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center justify-between p-3 hover:bg-muted/30 transition-colors ${
                    index !== 0 ? "border-t border-border/50" : ""
                  }`}
                >
                  <span className="px-2 py-1 rounded bg-muted text-gray-400 text-xs">
                    {instrument.symbol}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="text-left">
                      <div className="font-bold text-white text-sm">{instrument.name}</div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="gold-text">{instrument.spread}</span>
                        <span className="text-gray-400">{instrument.price}</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-lg">
                      {instrument.flag}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
