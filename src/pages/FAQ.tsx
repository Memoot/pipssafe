import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    category: "البدء",
    questions: [
      {
        q: "كيف أبدأ في استلام إشارات التداول؟",
        a: "بعد الاشتراك في إحدى خططنا، ستحصل فوراً على إمكانية الوصول إلى إشارات التداول عبر إشعارات البريد الإلكتروني ومنصتنا ومجموعة تليجرام الخاصة (للخطط الاحترافية والنخبة). ما عليك سوى اتباع مستويات الدخول ووقف الخسارة وجني الأرباح المقدمة مع كل إشارة.",
      },
      {
        q: "ما الأسواق التي تغطونها؟",
        a: "نقدم إشارات للفوركس (الأزواج الرئيسية والثانوية والنادرة)، والعملات الرقمية (BTC, ETH، والعملات البديلة الرئيسية)، والمؤشرات (US30, NAS100, S&P500, DAX، والمزيد). خطة المبتدئ تغطي الفوركس فقط، بينما الخطط الاحترافية والنخبة تشمل جميع الأسواق.",
      },
      {
        q: "هل أحتاج خبرة في التداول لاستخدام إشاراتكم؟",
        a: "بينما تساعد الخبرة السابقة، إشاراتنا مصممة ليتبعها المتداولون من جميع المستويات. تتضمن كل إشارة نقاط دخول واضحة ومستويات وقف الخسارة وأهداف جني الأرباح. نوصي أيضاً بإكمال دوراتنا المجانية للمبتدئين في الأكاديمية قبل التداول الحقيقي.",
      },
    ],
  },
  {
    category: "الاشتراك والفوترة",
    questions: [
      {
        q: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
        a: "نعم، يمكنك إلغاء اشتراكك في أي وقت من إعدادات حسابك. سيستمر وصولك حتى نهاية فترة الفوترة الحالية، ولن يتم تحصيل رسوم منك بعد الإلغاء.",
      },
      {
        q: "ما طرق الدفع التي تقبلونها؟",
        a: "نقبل جميع بطاقات الائتمان الرئيسية (Visa, Mastercard, American Express)، وPayPal، ومدفوعات العملات الرقمية (Bitcoin, Ethereum, USDT). تتم معالجة جميع المدفوعات بشكل آمن.",
      },
      {
        q: "هل هناك سياسة استرداد؟",
        a: "نعم، نقدم ضمان استرداد الأموال لمدة 7 أيام للمشتركين الجدد. إذا لم تكن راضياً عن خدمتنا خلال أول 7 أيام، اتصل بفريق الدعم لاسترداد كامل المبلغ، بدون أسئلة.",
      },
      {
        q: "هل يمكنني ترقية أو تخفيض خطتي؟",
        a: "بالتأكيد! يمكنك تغيير خطتك في أي وقت من إعدادات حسابك. عند الترقية، ستدفع فقط الفرق النسبي. عند التخفيض، سيسري التغيير في بداية دورة الفوترة التالية.",
      },
    ],
  },
  {
    category: "التداول والإشارات",
    questions: [
      {
        q: "ما نسبة نجاحكم؟",
        a: "نسبة نجاحنا التاريخية هي +87%، موثقة من خلال صفحة النتائج الشفافة. ومع ذلك، الأداء السابق لا يضمن النتائج المستقبلية. نوصي دائماً باستخدام إدارة مخاطر سليمة بغض النظر عن سجلنا.",
      },
      {
        q: "كم عدد الإشارات التي تقدمونها يومياً/أسبوعياً؟",
        a: "نركز على الجودة وليس الكمية. في المتوسط، نقدم 3-5 إشارات عالية الجودة يومياً عبر جميع الأسواق. نرسل الإشارات فقط عندما يُظهر تحليلنا إعداداً عالي الاحتمالية، وليس فقط لتحقيق حصة.",
      },
      {
        q: "ما إدارة المخاطر التي توصون بها؟",
        a: "نوصي بالمخاطرة بما لا يزيد عن 1-2% من رأس مالك التداولي لكل صفقة. تتضمن إشاراتنا مستويات وقف خسارة محسوبة، ونقدم دليلاً شاملاً لإدارة المخاطر في قسم الأكاديمية.",
      },
    ],
  },
  {
    category: "الأكاديمية والتعليم",
    questions: [
      {
        q: "هل الدورات مشمولة في اشتراكي؟",
        a: "الدورات المجانية متاحة للجميع. الدورات المميزة مشمولة مع اشتراكات الاحترافي والنخبة. تتضمن خطة النخبة أيضاً جلسات إرشاد فردية مخصصة.",
      },
      {
        q: "هل أحصل على شهادة عند إكمال الدورة؟",
        a: "نعم! عند إكمال الدورة واجتياز التقييم النهائي، ستحصل على شهادة رقمية يمكنك تنزيلها ومشاركتها على ملفاتك المهنية.",
      },
    ],
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">الأسئلة </span>
              <span className="gold-text">الشائعة</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              اعثر على إجابات للأسئلة الشائعة حول منصتنا وإشاراتنا وخدماتنا.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث عن إجابات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="mb-8"
              >
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((item, index) => {
                    const id = `${category.category}-${index}`;
                    const isOpen = openItems.includes(id);

                    return (
                      <div
                        key={id}
                        className="card-elevated rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(id)}
                          className="w-full flex items-center justify-between p-5 text-right"
                        >
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                          </motion.div>
                          <span className="font-medium text-foreground pr-4">
                            {item.q}
                          </span>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-5 pb-5 pt-0 text-muted-foreground border-t border-border">
                                <p className="pt-4 text-right">{item.a}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center card-elevated rounded-2xl p-12 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              لا تزال لديك أسئلة؟
            </h3>
            <p className="text-muted-foreground mb-6">
              لا تستطيع العثور على الإجابة التي تبحث عنها؟ فريق الدعم لدينا هنا للمساعدة.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold"
            >
              تواصل مع الدعم
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
