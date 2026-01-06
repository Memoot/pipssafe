import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const footerLinks = {
  company: [
    { label: "من نحن", href: "/about" },
    { label: "كيف نعمل", href: "/how-it-works" },
    { label: "تواصل معنا", href: "/contact" },
  ],
  services: [
    { label: "الباقات", href: "/pricing" },
    { label: "النتائج", href: "/results" },
    { label: "الأكاديمية", href: "/academy" },
    { label: "الأسئلة الشائعة", href: "/faq" },
  ],
  policies: [
    { label: "شروط الاستخدام", href: "/terms" },
    { label: "الخصوصية", href: "/privacy" },
    { label: "الاسترجاع", href: "/refund" },
    { label: "إخلاء المسؤولية", href: "/risk-disclosure" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="text-right">
            <Link to="/" className="flex items-center gap-2 justify-end mb-4">
              <span className="text-xl font-bold">
                <span className="gold-text">Pips</span>
                <span className="text-white"> Safe</span>
              </span>
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-black" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm">منصة توصيات تداول احترافية</p>
          </div>

          {/* Company */}
          <div className="text-right">
            <h4 className="gold-text font-bold mb-3 text-sm">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-right">
            <h4 className="gold-text font-bold mb-3 text-sm">الخدمات</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="text-right">
            <h4 className="gold-text font-bold mb-3 text-sm">السياسات</h4>
            <ul className="space-y-2">
              {footerLinks.policies.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Safe Pips. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-600 text-[10px] mt-2 max-w-xl mx-auto">
            تحذير: التداول ينطوي على مخاطر عالية. الأداء السابق لا يضمن النتائج المستقبلية.
          </p>
        </div>
      </div>
    </footer>
  );
};
