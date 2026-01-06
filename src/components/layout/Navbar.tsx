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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-border/30"
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Right Side - Menu Button (Mobile) */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-black bg-white rounded-lg"
            >
              <Menu className="w-4 h-4" />
            </motion.button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white hover:text-primary transition-colors"
              >
                <ChevronDown className="w-3 h-3" />
                <span className="text-xs font-medium">عربي</span>
                <span className="text-base">🇮🇶</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[100px] z-50"
                  >
                    <button className="w-full px-3 py-2 text-xs text-right hover:bg-muted flex items-center gap-2 justify-end text-white">
                      عربي <span>🇮🇶</span>
                    </button>
                    <button className="w-full px-3 py-2 text-xs text-right hover:bg-muted flex items-center gap-2 justify-end text-white">
                      English <span>🇬🇧</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-xs font-medium transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "gold-text"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Left Side - Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center"
            >
              <TrendingUp className="w-4 h-4 text-black" />
            </motion.div>
            <span className="text-lg font-bold">
              <span className="gold-text">Pips</span>
              <span className="text-white"> Safe</span>
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
            <div className="container-custom py-4 flex flex-col gap-3">
              {/* Auth Buttons */}
              <div className="flex gap-3 mb-3">
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 btn-gold py-2.5 rounded-lg text-center font-semibold text-sm"
                >
                  التسجيل
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 btn-outline-gold py-2.5 rounded-lg text-center font-semibold text-sm"
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
                  className="border-b border-border/50 pb-2"
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-1.5 text-sm font-medium ${
                      location.pathname === link.href
                        ? "gold-text"
                        : "text-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 rotate-90 text-gray-400" />
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
