import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UserPlus, Bell, LineChart, Shield, Smartphone, Clock, Target, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: 1,
    title: "Create Your Account",
    description: "Sign up in less than 2 minutes. Choose the subscription plan that fits your trading goals and budget. No complex setup required.",
    details: [
      "Quick registration process",
      "Flexible plan options",
      "Secure payment processing",
      "Instant account activation",
    ],
  },
  {
    icon: Bell,
    step: 2,
    title: "Receive Real-Time Signals",
    description: "Get professional trading signals delivered directly to your device. Each signal includes complete trade details for easy execution.",
    details: [
      "Entry price with exact level",
      "Stop-loss for risk protection",
      "Take-profit targets (TP1, TP2, TP3)",
      "Real-time notifications",
    ],
  },
  {
    icon: LineChart,
    step: 3,
    title: "Execute Your Trades",
    description: "Open your preferred broker platform and place the trade according to our signal. We support all major forex and crypto brokers.",
    details: [
      "Works with any MT4/MT5 broker",
      "Compatible with crypto exchanges",
      "Simple copy-paste execution",
      "Position size calculator included",
    ],
  },
  {
    icon: Shield,
    step: 4,
    title: "Manage Risk & Grow",
    description: "Follow our risk management guidelines to protect your capital while growing your account consistently over time.",
    details: [
      "Risk 1-2% per trade maximum",
      "Use our position size calculator",
      "Track your progress in dashboard",
      "Learn from our academy courses",
    ],
  },
];

const features = [
  {
    icon: Smartphone,
    title: "Multi-Platform Delivery",
    description: "Receive signals via email, web app, Telegram, and push notifications.",
  },
  {
    icon: Clock,
    title: "24/7 Market Coverage",
    description: "We monitor markets around the clock to never miss an opportunity.",
  },
  {
    icon: Target,
    title: "Clear Trade Levels",
    description: "Every signal includes entry, stop-loss, and multiple take-profit levels.",
  },
  {
    icon: CheckCircle,
    title: "Verified Results",
    description: "Transparent track record with 87%+ win rate and detailed history.",
  },
];

const HowItWorks = () => {
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
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="gold-text">Works</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Start trading like a professional in four simple steps. Our platform 
              is designed to make trading signals accessible to everyone.
            </p>
          </motion.div>

          {/* Steps Timeline */}
          <div className="max-w-4xl mx-auto mb-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-border hidden md:block" />
                )}

                <div className="flex gap-6 md:gap-8">
                  {/* Step Number */}
                  <div className="relative">
                    <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-background" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card-elevated rounded-2xl p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What Makes Our <span className="gold-text">Signals Different</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-elevated rounded-xl p-6 text-center hover-lift"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Example Signal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              Example <span className="gold-text">Signal Format</span>
            </h2>
            <div className="card-elevated rounded-2xl p-6 md:p-8 font-mono text-sm">
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <span className="px-2 py-1 gold-gradient text-background rounded text-xs">BUY</span>
                <span className="text-lg">EUR/USD</span>
              </div>
              <div className="space-y-2 text-foreground">
                <p>📍 Entry: <span className="text-primary">1.0850</span></p>
                <p>🛑 Stop Loss: <span className="text-red-500">1.0810</span></p>
                <p>✅ Take Profit 1: <span className="text-green-500">1.0890</span></p>
                <p>✅ Take Profit 2: <span className="text-green-500">1.0920</span></p>
                <p>✅ Take Profit 3: <span className="text-green-500">1.0950</span></p>
              </div>
              <div className="mt-4 pt-4 border-t border-border text-muted-foreground">
                💡 Analysis: Strong support bounce with bullish divergence on H4
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center card-elevated rounded-2xl p-12 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start <span className="gold-text">Trading?</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of traders who are already profiting from our signals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="btn-gold px-8 py-4 rounded-xl font-semibold"
              >
                Start Free Trial
              </Link>
              <Link
                to="/results"
                className="btn-outline-gold px-8 py-4 rounded-xl font-semibold"
              >
                View Our Results
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
