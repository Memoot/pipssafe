import { Link } from "react-router-dom";
import { TrendingUp, Mail, Phone, MapPin, Twitter, Linkedin, Youtube, Send } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Results", href: "/results" },
    { label: "Pricing", href: "/pricing" },
    { label: "Academy", href: "/academy" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Risk Disclosure", href: "/risk-disclosure" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Send, href: "#", label: "Telegram" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-background" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-foreground">Safe</span>
                <span className="gold-text"> Pips</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Professional trading signals and education platform. Trade smarter with 
              our expert analysis and proven strategies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-8">
          <a
            href="mailto:support@safepips.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            support@safepips.com
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            +1 (234) 567-890
          </a>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            Dubai, United Arab Emirates
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Safe Pips. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm text-center md:text-right max-w-xl">
            Trading involves significant risk. Past performance does not guarantee future results. 
            Please trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};
