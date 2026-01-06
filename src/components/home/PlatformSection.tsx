import { motion } from "framer-motion";
import { LineChart, Users, Headphones } from "lucide-react";
import platformImage from "@/assets/platform-phone.png";

const features = [
  {
    icon: LineChart,
    title: "أدوات تحليلية متقدمة",
    description: "اتخذ قرارات ذكية بدقة عالية.",
  },
  {
    icon: Users,
    title: "مجتمع متخصص",
    description: "تواصل مع الخبراء.",
  },
  {
    icon: Headphones,
    title: "دعم 24/7",
    description: "فريق متاح دائماً.",
  },
];

export const PlatformSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Yellow Background Section */}
      <div className="bg-gradient-to-br from-primary via-primary to-primary/90 relative">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}
        />

        <div className="container-custom py-10 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              <span className="text-black">منصة متطورة</span>
              <span className="text-black/70"> للمتداولين</span>
            </h2>
            <p className="text-black/60 text-sm max-w-lg mx-auto">
              استمتع بمنصة متطورة مصممة للمتداولين المعاصرين
            </p>
          </motion.div>

          {/* Phone Image */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.img 
              src={platformImage} 
              alt="منصة Safe Pips"
              className="max-w-[200px] md:max-w-[280px] drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background py-8">
        <div className="container-custom">
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <motion.div 
              className="flex gap-4 min-w-max"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 bg-card rounded-lg p-3 border border-border min-w-[200px]"
                >
                  <div className="text-right">
                    <h3 className="font-bold text-white text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
