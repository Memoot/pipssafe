import { motion } from "framer-motion";

const paymentMethods = [
  { name: "Tether", icon: "₮", color: "bg-green-500" },
  { name: "Bitcoin", icon: "₿", color: "bg-orange-500" },
  { name: "Ethereum", icon: "Ξ", color: "bg-blue-500" },
  { name: "USDC", icon: "$", color: "bg-blue-400" },
  { name: "Local", icon: "🏦", color: "bg-red-500" },
];

export const PaymentMethodsSection = () => {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white">
            طرق دفع متعددة
          </h2>
        </motion.div>

        {/* Horizontal Scrolling Payment Methods */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-6 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {paymentMethods.map((method, index) => (
              <motion.div 
                key={method.name} 
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white text-sm font-medium">{method.name}</span>
                <div className={`w-8 h-8 ${method.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                  {method.icon}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
