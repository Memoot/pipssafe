import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check, Zap, Star, Crown, Shield, Clock, Headphones, Award } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: { monthly: 49, quarterly: 129, yearly: 399 },
    description: "Perfect for beginners starting their trading journey",
    features: [
      "Up to 10 signals per week",
      "Forex signals only",
      "Email notifications",
      "Basic support (24h response)",
      "Risk management guide",
      "Access to basic lessons",
    ],
    notIncluded: [
      "Crypto & Indices signals",
      "Real-time notifications",
      "Priority support",
      "Full academy access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    icon: Star,
    price: { monthly: 99, quarterly: 249, yearly: 799 },
    description: "Most popular choice for serious traders",
    features: [
      "Unlimited signals",
      "Forex, Crypto & Indices",
      "Real-time push notifications",
      "Priority support (1h response)",
      "Full academy access",
      "Weekly market analysis",
      "Private Telegram group",
      "Trading journal template",
      "Monthly webinars",
    ],
    notIncluded: [
      "1-on-1 mentoring",
      "Custom strategies",
    ],
    popular: true,
  },
  {
    name: "Elite",
    icon: Crown,
    price: { monthly: 199, quarterly: 499, yearly: 1599 },
    description: "For traders who want the ultimate edge",
    features: [
      "Everything in Professional",
      "1-on-1 mentoring sessions",
      "Custom trading strategies",
      "Portfolio review",
      "VIP Discord access",
      "Early access to features",
      "Personal account manager",
      "Institutional-grade analysis",
      "Quarterly strategy review",
    ],
    notIncluded: [],
    popular: false,
  },
];

const features = [
  { icon: Shield, title: "7-Day Guarantee", description: "Full refund if not satisfied" },
  { icon: Clock, title: "24/7 Signals", description: "Round-the-clock coverage" },
  { icon: Headphones, title: "Expert Support", description: "Professional assistance" },
  { icon: Award, title: "Proven Results", description: "87%+ win rate track record" },
];

const Pricing = () => {
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent <span className="gold-text">Pricing</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose the plan that fits your trading goals. No hidden fees, 
              cancel anytime.
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden hover-lift ${
                  plan.popular
                    ? "border-2 border-primary shadow-xl shadow-primary/10"
                    : "border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 gold-gradient py-2 text-center">
                    <span className="text-sm font-bold text-background">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className={`p-8 bg-card ${plan.popular ? "pt-14" : ""}`}>
                  <div
                    className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                      plan.popular
                        ? "gold-gradient"
                        : "bg-primary/10 border border-primary/20"
                    }`}
                  >
                    <plan.icon
                      className={`w-7 h-7 ${
                        plan.popular ? "text-background" : "text-primary"
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-foreground">
                      ${plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-6">
                    <p>Quarterly: <span className="text-foreground">${plan.price.quarterly}</span> (save 15%)</p>
                    <p>Yearly: <span className="text-foreground">${plan.price.yearly}</span> (save 33%)</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/register"
                    className={`block text-center py-4 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? "btn-gold"
                        : "btn-outline-gold"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 gold-gradient rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-background" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* FAQ Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Have questions about our plans?
            </p>
            <Link
              to="/faq"
              className="text-primary font-semibold hover:underline"
            >
              Check our FAQ →
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
