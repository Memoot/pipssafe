import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpLeft, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-trading-phone.png";

export const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-8 overflow-hidden">
      <div className="container-custom">
        {/* License Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#2a2a2a] border border-border">
            <span className="text-foreground text-sm md:text-base">
              منصة موثوقة ومعتمدة لإشارات التداول الاحترافية
            </span>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="text-foreground">تداول </span>
            <span className="gold-text">بثقة</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            مع إشارات تداول احترافية تعمل وفق معايير دقيقة ومعتمدة
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <Link
            to="/register"
            className="btn-gold w-full max-w-md py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3"
          >
            <span>افتح حساب</span>
            <div className="w-10 h-10 bg-background/20 rounded-lg flex items-center justify-center">
              <ArrowUpLeft className="w-5 h-5" />
            </div>
          </Link>
        </motion.div>

        {/* Hero Image - Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-8 overflow-hidden min-h-[400px]">
            {/* Dotted Pattern Background */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Phone Image - Right side in RTL */}
              <div className="flex-1 flex justify-center order-1 md:order-2">
                <img 
                  src={heroImage} 
                  alt="تطبيق Safe Pips للتداول"
                  className="max-w-[250px] md:max-w-[300px] drop-shadow-2xl"
                />
              </div>

              {/* Text Content - Left side in RTL */}
              <div className="text-center md:text-right flex-1 order-2 md:order-1">
                <div className="mb-4">
                  <span className="text-background/80">استكشف أكثر من </span>
                  <span className="text-3xl md:text-4xl font-bold gold-text">330</span>
                </div>
                <p className="text-background/70 text-lg">فرصة تداول</p>
              </div>

              {/* Trading Widget */}
              <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg hidden md:flex items-center gap-2">
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">0.710</span>
                <div className="text-right">
                  <div className="text-sm font-bold text-background">UK100</div>
                  <div className="text-xs text-red-500">5841.47 ▼</div>
                </div>
                <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-8 h-6 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
