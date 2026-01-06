import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const footerLinks = {
  company: [
    { label: "من نحن", href: "/about" },
    { label: "لماذا تختارنا", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
    { label: "الجوائز", href: "/about" },
  ],
  policies: [
    { label: "اتفاقية العميل", href: "/terms" },
    { label: "الشروط والأحكام", href: "/terms" },
    { label: "بيان السياسة", href: "/privacy" },
    { label: "الإفصاح عن المخاطر", href: "/risk-disclosure" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-10">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-2 justify-end mb-4">
              <span className="text-xl font-bold">
                <span className="gold-text">Pips</span>
                <span className="text-white"> Safe</span>
              </span>
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-black" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              منصة إشارات التداول الاحترافية. تداول بثقة.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="gold-text font-bold mb-3 text-sm">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies Links */}
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="gold-text font-bold mb-3 text-sm">السياسات</h4>
            <ul className="space-y-2">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="pt-6 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs mb-2">
            © {new Date().getFullYear()} Safe Pips. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-500 text-[10px] max-w-xl mx-auto">
            تحذير المخاطر: التداول ينطوي على مخاطر عالية. الأداء السابق لا يضمن النتائج المستقبلية.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
