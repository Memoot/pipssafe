import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const footerLinks = {
  company: [
    { label: "من نحن", href: "/about" },
    { label: "كيف نعمل", href: "/how-it-works" },
    { label: "النتائج", href: "/results" },
    { label: "تواصل معنا", href: "/contact" },
  ],
  services: [
    { label: "الباقات والأسعار", href: "/pricing" },
    { label: "الأكاديمية", href: "/academy" },
    { label: "الأسئلة الشائعة", href: "/faq" },
  ],
  policies: [
    { label: "شروط الاستخدام", href: "/terms" },
    { label: "سياسة الخصوصية", href: "/privacy" },
    { label: "سياسة الاسترجاع", href: "/refund" },
    { label: "إخلاء المسؤولية", href: "/risk-disclosure" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-10">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
              منصة إشارات التداول الاحترافية. تداول بثقة مع خبراء السوق.
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

          {/* Services Links */}
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="gold-text font-bold mb-3 text-sm">الخدمات</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
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
