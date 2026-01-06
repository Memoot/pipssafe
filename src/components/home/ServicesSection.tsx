import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpLeft } from "lucide-react";

const services = [
  {
    title: "إشارات التداول",
    description: "احصل على إشارات تداول دقيقة مع نقاط الدخول والخروج",
    image: "📊",
    link: "/results",
  },
  {
    title: "أكاديمية التداول",
    description: "تعلم أساسيات واستراتيجيات التداول الاحترافي",
    image: "🎓",
    link: "/academy",
  },
  {
    title: "إدارة المخاطر",
    description: "أدوات وقوالب لإدارة رأس المال بشكل احترافي",
    image: "🛡️",
    link: "/how-it-works",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const ServicesSection = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-white">استكشف</span>
            <br />
            <span className="gold-text">خدماتنا</span>
          </h2>
          <p className="text-gray-400 text-sm">
            اكتشف الأدوات والخدمات المصممة خصيصاً لك لتحقيق نتائج تداول حقيقية.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={service.link}
                className="card-elevated rounded-xl p-5 h-full flex flex-col hover:border-primary/50 transition-colors block"
              >
                <div className="flex items-start justify-between mb-3">
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors"
                  >
                    <ArrowUpLeft className="w-4 h-4" />
                  </motion.button>
                  <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center text-2xl">
                    {service.image}
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-1 text-right">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm text-right">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
