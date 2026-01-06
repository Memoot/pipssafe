import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I start receiving trading signals?",
        a: "After subscribing to one of our plans, you'll immediately get access to our trading signals via email notifications, our web platform, and our private Telegram group (Professional and Elite plans). Simply follow the entry, stop-loss, and take-profit levels provided with each signal.",
      },
      {
        q: "What markets do you cover?",
        a: "We provide signals for Forex (major, minor, and exotic pairs), Cryptocurrencies (BTC, ETH, and major altcoins), and Indices (US30, NAS100, S&P500, DAX, and more). The Starter plan covers Forex only, while Professional and Elite plans include all markets.",
      },
      {
        q: "Do I need trading experience to use your signals?",
        a: "While prior experience helps, our signals are designed to be followed by traders of all levels. Each signal includes clear entry points, stop-loss levels, and take-profit targets. We also recommend completing our free beginner courses in the Academy before trading live.",
      },
    ],
  },
  {
    category: "Subscription & Billing",
    questions: [
      {
        q: "Can I cancel my subscription anytime?",
        a: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period, and you won't be charged again after cancellation.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrency payments (Bitcoin, Ethereum, USDT). All payments are processed securely.",
      },
      {
        q: "Is there a refund policy?",
        a: "Yes, we offer a 7-day money-back guarantee for new subscribers. If you're not satisfied with our service within the first 7 days, contact our support team for a full refund, no questions asked.",
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Absolutely! You can change your plan at any time from your account settings. When upgrading, you'll only pay the prorated difference. When downgrading, the change will take effect at the start of your next billing cycle.",
      },
    ],
  },
  {
    category: "Trading & Signals",
    questions: [
      {
        q: "What is your win rate?",
        a: "Our historical win rate is 87%+, verified through our transparent results page. However, past performance doesn't guarantee future results. We recommend always using proper risk management regardless of our track record.",
      },
      {
        q: "How many signals do you provide per day/week?",
        a: "We focus on quality over quantity. On average, we provide 3-5 high-quality signals per day across all markets. We only send signals when our analysis shows a high-probability setup, not just to hit a quota.",
      },
      {
        q: "What risk management do you recommend?",
        a: "We recommend risking no more than 1-2% of your trading capital per trade. Our signals include calculated stop-loss levels, and we provide a comprehensive risk management guide in the Academy section.",
      },
    ],
  },
  {
    category: "Academy & Education",
    questions: [
      {
        q: "Are the courses included in my subscription?",
        a: "Free courses are available to everyone. Premium courses are included with Professional and Elite subscriptions. The Elite plan also includes personalized 1-on-1 mentoring sessions.",
      },
      {
        q: "Do I receive a certificate upon course completion?",
        a: "Yes! Upon completing a course and passing the final assessment, you'll receive a digital certificate that you can download and share on your professional profiles.",
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
              Frequently Asked <span className="gold-text">Questions</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to common questions about our platform, signals, and services.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for answers..."
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
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="font-medium text-foreground pr-4">
                            {item.q}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                          </motion.div>
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
                                <p className="pt-4">{item.a}</p>
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
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold"
            >
              Contact Support
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
