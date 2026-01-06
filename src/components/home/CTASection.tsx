import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpLeft } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-custom">
        {/* Yellow CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {/* Dotted Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-4">
              ابدأ مع Safe Pips
            </h2>
            <p className="text-background/80 max-w-xl mx-auto mb-8">
              هل أنت مستعد للارتقاء بتجربة التداول الخاصة بك؟ انضم إلى Safe Pips 
              واكتشف ميزات التداول المتقدمة والعروض الخاصة.
            </p>

            <Link
              to="/register"
              className="inline-flex items-center gap-3 bg-white text-background px-8 py-4 rounded-2xl font-bold text-lg hover:bg-background hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
                <ArrowUpLeft className="w-5 h-5" />
              </div>
              <span>افتح حساب</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
