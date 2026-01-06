import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpLeft } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-6 md:p-8 overflow-hidden"
        >
          {/* Dotted Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />

          <div className="relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3"
            >
              ابدأ مع Safe Pips
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-black/70 max-w-md mx-auto mb-6 text-sm"
            >
              هل أنت مستعد للارتقاء بتجربة التداول؟ انضم إلى Safe Pips واكتشف ميزات التداول المتقدمة.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-black hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center">
                  <ArrowUpLeft className="w-4 h-4" />
                </div>
                <span>افتح حساب</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
