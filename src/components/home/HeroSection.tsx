import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpLeft, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-trading-phone.png";

export const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-6 overflow-hidden">
      <div className="container-custom">
        {/* License Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2a2a2a] border border-border">
            <span className="text-white text-sm">
              منصة موثوقة ومعتمدة لإشارات التداول الاحترافية
            </span>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-5"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            <span className="text-white">تداول </span>
            <span className="gold-text">بثقة</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            مع إشارات تداول احترافية تعمل وفق معايير دقيقة ومعتمدة
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <Link
            to="/register"
            className="btn-gold w-full max-w-sm py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3"
          >
            <span>افتح حساب</span>
            <div className="w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center">
              <ArrowUpLeft className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>

        {/* Hero Image - Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 rounded-2xl p-6 overflow-hidden">
            {/* Dotted Pattern Background */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
            />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Phone Image */}
              <motion.div 
                className="flex-1 flex justify-center order-1 md:order-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src={heroImage} 
                  alt="تطبيق Safe Pips للتداول"
                  className="max-w-[200px] md:max-w-[250px] drop-shadow-2xl"
                />
              </motion.div>

              {/* Text Content */}
              <div className="text-center md:text-right flex-1 order-2 md:order-1">
                <div className="mb-3">
                  <span className="text-black/70 text-sm">استكشف أكثر من </span>
                  <span className="text-2xl md:text-3xl font-bold text-black">330</span>
                </div>
                <p className="text-black/60">فرصة تداول</p>
              </div>

              {/* Trading Widget */}
              <motion.div 
                className="absolute top-3 right-3 bg-white rounded-lg p-2 shadow-lg hidden md:flex items-center gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded">0.710</span>
                <div className="text-right">
                  <div className="text-xs font-bold text-black">UK100</div>
                  <div className="text-[10px] text-red-500">5841.47 ▼</div>
                </div>
                <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-6 h-4 rounded" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
