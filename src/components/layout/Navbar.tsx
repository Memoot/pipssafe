import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, TrendingUp } from "lucide-react";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/results", label: "النتائج" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/academy", label: "الأكاديمية" },
  { href: "/how-it-works", label: "كيف تعمل" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-border/30"
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Right Side - Menu Button (Mobile) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 text-background bg-white rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
                <span className="text-sm font-medium">عربي</span>
                <span className="text-xl">🇮🇶</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[120px] z-50"
                  >
                    <button className="w-full px-4 py-2 text-sm text-right hover:bg-muted flex items-center gap-2 justify-end">
                      عربي <span>🇮🇶</span>
                    </button>
                    <button className="w-full px-4 py-2 text-sm text-right hover:bg-muted flex items-center gap-2 justify-end">
                      English <span>🇬🇧</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Left Side - Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-background" />
            </div>
            <span className="text-2xl font-bold">
              <span className="gold-text">Pips</span>
              <span className="text-foreground"> Safe</span>
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1a1a1a] border-t border-border"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {/* Auth Buttons */}
              <div className="flex gap-4 mb-4">
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 btn-gold py-3 rounded-xl text-center font-semibold"
                >
                  التسجيل
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 btn-outline-gold py-3 rounded-xl text-center font-semibold"
                >
                  تسجيل الدخول
                </Link>
              </div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border/50 pb-3"
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-2 text-lg font-medium ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 rotate-90" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
