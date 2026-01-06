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

export const ServicesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">استكشف</span>
            <br />
            <span className="gold-text">خدماتنا</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            اكتشف الأدوات والخدمات المصممة خصيصاً لك لتحقيق نتائج تداول حقيقية.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="card-elevated rounded-2xl p-6 h-full flex flex-col hover-lift group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <button className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-background transition-colors">
                    <ArrowUpLeft className="w-5 h-5" />
                  </button>
                  <div className="w-20 h-20 gold-gradient rounded-2xl flex items-center justify-center text-4xl">
                    {service.image}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-right">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-right">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
