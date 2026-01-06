import { Link } from "react-router-dom";
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
    { label: "سياسة الكوكيز", href: "/privacy" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-16">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="text-right">
            <Link to="/" className="flex items-center gap-3 justify-end mb-6">
              <span className="text-2xl font-bold">
                <span className="text-foreground">Safe</span>
                <span className="gold-text"> Pips</span>
              </span>
              <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-background" />
              </div>
            </Link>
            <p className="text-muted-foreground">
              منصة إشارات التداول الاحترافية. تداول بثقة مع تحليلات دقيقة واستراتيجيات مثبتة.
            </p>
          </div>

          {/* Company Links */}
          <div className="text-right">
            <h4 className="text-primary font-bold mb-4">الشركة</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Links */}
          <div className="text-right">
            <h4 className="text-primary font-bold mb-4">السياسات</h4>
            <ul className="space-y-3">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm mb-4">
            © {new Date().getFullYear()} Safe Pips. جميع الحقوق محفوظة.
          </p>
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto">
            تحذير المخاطر: التداول في الفوركس والعقود مقابل الفروقات ينطوي على مخاطر عالية. 
            الأداء السابق لا يضمن النتائج المستقبلية. يرجى التداول بمسؤولية.
          </p>
        </div>
      </div>
    </footer>
  );
};
