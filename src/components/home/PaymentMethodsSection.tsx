import { motion } from "framer-motion";
import { Bitcoin } from "lucide-react";

const paymentMethods = [
  { name: "Tether", icon: "₮", color: "bg-green-500" },
  { name: "Bitcoin", icon: "₿", color: "bg-orange-500" },
  { name: "Ethereum", icon: "Ξ", color: "bg-blue-500" },
  { name: "USDC", icon: "$", color: "bg-blue-400" },
  { name: "Local Depositor", icon: "🏦", color: "bg-red-500" },
];

export const PaymentMethodsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            طرق دفع متعددة
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto"
        >
          {paymentMethods.map((method, index) => (
            <div key={method.name} className="flex items-center gap-3">
              <span className="text-foreground font-medium">{method.name}</span>
              <div className={`w-10 h-10 ${method.color} rounded-full flex items-center justify-center text-white font-bold`}>
                {method.icon}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
