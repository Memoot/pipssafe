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
    title: "مجتمع متخصص ودعم مستمر",
    description: "تواصل مع الخبراء في أي وقت.",
  },
  {
    icon: Headphones,
    title: "دعم فني على مدار الساعة",
    description: "فريق دعم متاح 24/7.",
  },
];

export const PlatformSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Yellow Background Section */}
      <div className="bg-gradient-to-br from-primary via-primary to-primary/90 relative">
        {/* Dotted Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        <div className="container-custom py-16 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-background">منصة متطورة</span>
              <span className="text-background/80"> للمتداولين</span>
              <br />
              <span className="text-background/80">المعاصرين</span>
            </h2>
            <p className="text-background/70 max-w-2xl mx-auto">
              استمتع بمنصة متطورة مصممة للمتداولين المعاصرين، أداء سلس، تحليلات قوية، وأدوات مبتكرة تعزز نجاحك.
            </p>
          </motion.div>

          {/* Phone Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <img 
              src={platformImage} 
              alt="منصة Safe Pips"
              className="max-w-[300px] md:max-w-[400px] drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Features Section - Dark Background */}
      <div className="bg-background py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 justify-end"
              >
                <div className="text-right">
                  <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
