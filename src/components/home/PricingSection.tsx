import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Zap, Star, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: 49,
    period: "month",
    description: "Perfect for beginners",
    features: [
      "Up to 10 signals/week",
      "Forex signals only",
      "Email notifications",
      "Basic support",
      "Risk management guide",
    ],
    popular: false,
  },
  {
    name: "Professional",
    icon: Star,
    price: 99,
    period: "month",
    description: "Most popular choice",
    features: [
      "Unlimited signals",
      "Forex, Crypto & Indices",
      "Real-time notifications",
      "Priority support",
      "Full academy access",
      "Weekly market analysis",
      "Private Telegram group",
    ],
    popular: true,
  },
  {
    name: "Elite",
    icon: Crown,
    price: 199,
    period: "month",
    description: "For serious traders",
    features: [
      "Everything in Professional",
      "1-on-1 mentoring sessions",
      "Custom trading strategies",
      "Portfolio review",
      "VIP Discord access",
      "Early access to features",
      "Personal account manager",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="gold-text">Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible subscription plans designed to match your trading goals. 
            Cancel anytime, no hidden fees.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden hover-lift ${
                plan.popular
                  ? "border-2 border-primary shadow-xl shadow-primary/10"
                  : "border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 gold-gradient py-2 text-center">
                  <span className="text-sm font-bold text-background">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className={`p-8 bg-card ${plan.popular ? "pt-14" : ""}`}>
                {/* Plan Icon */}
                <div
                  className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                    plan.popular
                      ? "gold-gradient"
                      : "bg-primary/10 border border-primary/20"
                  }`}
                >
                  <plan.icon
                    className={`w-6 h-6 ${
                      plan.popular ? "text-background" : "text-primary"
                    }`}
                  />
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/register"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all ${
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

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-12"
        >
          🔒 Secure payment with 7-day money-back guarantee
        </motion.p>
      </div>
    </section>
  );
};
