import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  BookOpen, 
  Shield,
  ChevronLeft,
  Star,
  Users,
  Award,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Stats data for horizontal slider
const stats = [
  { value: "92%", label: "نسبة النجاح" },
  { value: "+5,200", label: "توصية ناجحة" },
  { value: "+2,500", label: "متداول نشط" },
  { value: "+150K", label: "نقطة مُحققة" },
  { value: "24/7", label: "دعم متواصل" },
  { value: "4.9★", label: "تقييم العملاء" },
];

// Results preview data
const recentResults = [
  { pair: "EUR/USD", type: "شراء", profit: "+85", status: "ناجح" },
  { pair: "GBP/JPY", type: "بيع", profit: "+120", status: "ناجح" },
  { pair: "XAU/USD", type: "شراء", profit: "+200", status: "ناجح" },
  { pair: "BTC/USD", type: "بيع", profit: "+350", status: "ناجح" },
];

// Pricing plans preview
const plans = [
  { name: "المبتدئ", price: 29, features: ["5 توصيات يومية", "الأكاديمية الأساسية"] },
  { name: "الاحترافي", price: 99, features: ["توصيات غير محدودة", "جميع الكورسات", "دعم VIP"], popular: true },
  { name: "VIP", price: 199, features: ["كل المميزات", "استشارات خاصة", "توصيات حصرية"] },
];

// Testimonials
const testimonials = [
  { name: "أحمد محمد", role: "متداول محترف", content: "منصة رائعة غيرت طريقة تداولي بالكامل. النتائج مذهلة!", rating: 5 },
  { name: "سارة علي", role: "مستثمرة", content: "الأكاديمية ممتازة والتوصيات دقيقة جداً. أنصح بها بشدة.", rating: 5 },
  { name: "محمد خالد", role: "متداول", content: "أفضل منصة توصيات استخدمتها. فريق الدعم ممتاز.", rating: 5 },
  { name: "فاطمة أحمد", role: "مبتدئة", content: "تعلمت الكثير من الأكاديمية وبدأت أحقق أرباح.", rating: 5 },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-border/30">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-white hover:text-gold text-xs">
                  تسجيل الدخول
                </Button>
              </Link>
              <Link to="/register">
                <Button className="btn-gold text-xs px-4">
                  إنشاء حساب
                </Button>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/results", label: "النتائج" },
                { href: "/pricing", label: "الباقات" },
                { href: "/academy", label: "الأكاديمية" },
                { href: "/how-it-works", label: "كيف نعمل" },
                { href: "/about", label: "من نحن" },
                { href: "/faq", label: "الأسئلة" },
                { href: "/contact", label: "تواصل معنا" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-lg font-bold">
                <span className="gold-text">Pips</span>
                <span className="text-white"> Safe</span>
              </span>
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-black" />
              </div>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
                <span className="text-gold text-sm">منصة مرخصة وموثوقة</span>
                <Shield className="w-4 h-4 text-gold" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">تداول بثقة مع </span>
                <span className="gold-text">Safe Pips</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                احصل على توصيات تداول احترافية بدقة عالية. تعلم من خبراء السوق وحقق أهدافك المالية.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button className="btn-gold px-8 py-6 text-base">
                    ابدأ الآن مجاناً
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                </Link>
                <Link to="/results">
                  <Button variant="outline" className="px-8 py-6 text-base">
                    عرض النتائج
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Horizontal Slider */}
        <section className="py-6 bg-card border-y border-border overflow-hidden">
          <div className="flex animate-scroll-left">
            {[...stats, ...stats].map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3 px-8 border-l border-border"
              >
                <span className="text-gray-400 text-sm">{stat.label}</span>
                <span className="text-xl font-bold gold-text">{stat.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">كيف </span>
                <span className="gold-text">نعمل؟</span>
              </h2>
              <p className="text-gray-400">خطوات بسيطة لبدء رحلتك معنا</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "إنشاء حساب", desc: "سجل مجاناً واختر الباقة المناسبة لك" },
                { icon: Target, title: "استلم التوصيات", desc: "احصل على توصيات دقيقة لحظياً" },
                { icon: TrendingUp, title: "حقق الأرباح", desc: "طبق التوصيات واجني الأرباح" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 gold-gradient rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-2xl font-bold gold-text mb-2">{index + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/how-it-works">
                <Button variant="outline">
                  اعرف المزيد
                  <ChevronLeft className="w-4 h-4 mr-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Results Preview */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">آخر </span>
                <span className="gold-text">النتائج</span>
              </h2>
              <p className="text-gray-400">نتائج حقيقية وموثقة</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {recentResults.map((result, index) => (
                <motion.div
                  key={index}
                  className="bg-background rounded-xl p-4 border border-border"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-500 font-bold">{result.profit} نقطة</span>
                    <span className="text-white font-bold">{result.pair}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">{result.status}</span>
                    <span className="text-gray-400 text-sm">{result.type}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/results">
                <Button className="btn-gold">
                  عرض جميع النتائج
                  <ChevronLeft className="w-4 h-4 mr-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">باقات </span>
                <span className="gold-text">الاشتراك</span>
              </h2>
              <p className="text-gray-400">اختر الباقة المناسبة لاحتياجاتك</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`bg-card rounded-2xl p-6 border ${plan.popular ? 'border-gold' : 'border-border'} relative`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs px-3 py-1 rounded-full font-bold">
                      الأكثر شعبية
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{plan.name}</h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold gold-text">${plan.price}</span>
                    <span className="text-gray-400">/شهر</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 justify-end text-gray-300 text-sm">
                        {feature}
                        <Target className="w-4 h-4 text-gold flex-shrink-0" />
                      </li>
                    ))}
                  </ul>
                  <Link to="/pricing">
                    <Button className={`w-full ${plan.popular ? 'btn-gold' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                      اختر الباقة
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/pricing" className="text-gold hover:underline text-sm">
                عرض جميع الباقات والمميزات ←
              </Link>
            </div>
          </div>
        </section>

        {/* Academy Preview */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-white">أكاديمية </span>
                  <span className="gold-text">Safe Pips</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  تعلم التداول من الصفر حتى الاحتراف مع أفضل الخبراء. كورسات شاملة ومحتوى حصري.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "دورات تعليمية شاملة",
                    "فيديوهات عالية الجودة",
                    "اختبارات بعد كل وحدة",
                    "شهادات معتمدة",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <Award className="w-5 h-5 text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/academy">
                  <Button className="btn-gold">
                    استكشف الأكاديمية
                    <BookOpen className="w-4 h-4 mr-2" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {[
                  { title: "أساسيات التداول", lessons: 12, color: "from-blue-500/20 to-transparent" },
                  { title: "التحليل الفني", lessons: 18, color: "from-gold/20 to-transparent" },
                  { title: "إدارة المخاطر", lessons: 8, color: "from-green-500/20 to-transparent" },
                  { title: "سيكولوجية التداول", lessons: 10, color: "from-purple-500/20 to-transparent" },
                ].map((course, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${course.color} bg-background rounded-xl p-4 border border-border`}
                  >
                    <BookOpen className="w-8 h-8 text-gold mb-3" />
                    <h4 className="text-white font-bold mb-1">{course.title}</h4>
                    <p className="text-gray-400 text-sm">{course.lessons} درس</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Horizontal Slider */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">آراء </span>
                <span className="gold-text">العملاء</span>
              </h2>
              <p className="text-gray-400">ماذا يقول عملاؤنا عنا</p>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
              <motion.div
                key={currentTestimonial}
                className="bg-card rounded-2xl p-8 border border-border text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-6">"{testimonials[currentTestimonial].content}"</p>
                <div>
                  <p className="text-white font-bold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>

              {/* Slider dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-gold' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">ابدأ رحلتك مع </span>
                <span className="gold-text">Safe Pips</span>
              </h2>
              <p className="text-gray-400 mb-8">
                انضم لآلاف المتداولين الناجحين وابدأ تحقيق أرباحك اليوم
              </p>
              <Link to="/register">
                <Button className="btn-gold px-8 py-6 text-base">
                  سجل الآن مجاناً
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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

            <div className="text-right">
              <h4 className="gold-text font-bold mb-3 text-sm">الشركة</h4>
              <ul className="space-y-2">
                {[
                  { label: "من نحن", href: "/about" },
                  { label: "كيف نعمل", href: "/how-it-works" },
                  { label: "تواصل معنا", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-gray-400 hover:text-white text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-right">
              <h4 className="gold-text font-bold mb-3 text-sm">الخدمات</h4>
              <ul className="space-y-2">
                {[
                  { label: "الباقات", href: "/pricing" },
                  { label: "النتائج", href: "/results" },
                  { label: "الأكاديمية", href: "/academy" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-gray-400 hover:text-white text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-right">
              <h4 className="gold-text font-bold mb-3 text-sm">السياسات</h4>
              <ul className="space-y-2">
                {[
                  { label: "شروط الاستخدام", href: "/terms" },
                  { label: "الخصوصية", href: "/privacy" },
                  { label: "الاسترجاع", href: "/refund" },
                  { label: "إخلاء المسؤولية", href: "/risk-disclosure" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-gray-400 hover:text-white text-sm">
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
    </div>
  );
};

export default Index;
