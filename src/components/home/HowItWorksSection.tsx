import { motion } from "framer-motion";
import { UserPlus, Bell, LineChart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description:
      "Sign up in less than 2 minutes. Choose your subscription plan and get instant access to our platform.",
  },
  {
    icon: Bell,
    step: "02",
    title: "Receive Signals",
    description:
      "Get real-time trading signals directly to your device. Each signal includes entry, stop-loss, and take-profit levels.",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Trade & Profit",
    description:
      "Execute trades on your preferred broker. Follow our risk management guidelines and grow your portfolio.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="gold-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Start trading with professional signals in three easy steps. 
            Our platform is designed for traders of all experience levels.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="card-elevated rounded-2xl p-8 h-full hover-lift group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 px-3 py-1 gold-gradient rounded-lg">
                    <span className="text-sm font-bold text-background">
                      STEP {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 mt-4 mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
