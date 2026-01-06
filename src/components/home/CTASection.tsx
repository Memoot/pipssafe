import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Headphones } from "lucide-react";

const benefits = [
  { icon: Shield, text: "Risk-Free Trial" },
  { icon: Clock, text: "24/7 Signals" },
  { icon: Headphones, text: "Expert Support" },
];

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background with gold accent */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your
            <br />
            <span className="gold-text">Trading Journey?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join Safe Pips today and get access to professional trading signals, 
            expert education, and a supportive community of traders.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <benefit.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/register"
              className="btn-gold inline-flex items-center gap-3 px-10 py-5 rounded-xl text-lg font-bold group"
            >
              Start Trading Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required for trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};
