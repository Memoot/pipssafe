import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Shield, Award, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "الثقة والشفافية",
    description: "نقدم نتائج موثقة ولا نخفي أداءنا أبداً. ما تراه هو ما تحصل عليه.",
  },
  {
    icon: Target,
    title: "الدقة",
    description: "يتم تحليل كل إشارة بدقة باستخدام منهجيات مستوى المؤسسات.",
  },
  {
    icon: Users,
    title: "المجتمع",
    description: "نؤمن بالنمو معاً. متداولونا يدعمون بعضهم البعض في رحلة النجاح.",
  },
  {
    icon: Award,
    title: "التميز",
    description: "نعمل باستمرار على تحسين استراتيجياتنا وخدماتنا لتقديم أفضل النتائج.",
  },
];

const stats = [
  { value: "2019", label: "تأسست" },
  { value: "+10,000", label: "عضو نشط" },
  { value: "+87%", label: "نسبة النجاح" },
  { value: "+50", label: "دولة" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">عن </span>
              <span className="gold-text">Safe Pips</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              نحن فريق من المتداولين والمحللين المحترفين المكرسين لمساعدة المتداولين 
              حول العالم على تحقيق ربحية مستمرة من خلال إشارات الخبراء والتعليم.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="card-elevated rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold gold-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated rounded-2xl p-8"
            >
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-background" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">مهمتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                إضفاء الطابع الديمقراطي على التداول الاحترافي من خلال تزويد المتداولين الأفراد 
                بنفس جودة التحليل والإشارات التي يستخدمها المتداولون المؤسسيون. 
                نؤمن أن الجميع يستحق الوصول إلى الأدوات والمعرفة اللازمة للنجاح في الأسواق المالية.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated rounded-2xl p-8"
            >
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-background" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                أن نصبح أكثر منصة توصيات وتعليم تداول موثوقة في العالم، 
                معروفة بالشفافية والنتائج المتسقة وقصص النجاح الاستثنائية. 
                نتصور مجتمعاً يدعم فيه المتداولون بعضهم البعض لتحقيق الاستقلال المالي.
              </p>
            </motion.div>
          </div>

          {/* Why Safe Pips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">لماذا تختار </span>
                <span className="gold-text">Safe Pips</span>؟
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                نتميز عن مزودي الإشارات الآخرين من خلال التزامنا بهذه القيم الأساسية.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-elevated rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-elevated rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              قصتنا
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                تأسست Safe Pips في عام 2019 من قبل مجموعة من المتداولين المحترفين الذين 
                رأوا فجوة كبيرة في السوق لإشارات تداول موثوقة وشفافة. محبطين من نقص 
                المساءلة في الصناعة، شرعوا في إنشاء خدمة تعطي الأولوية لنجاح الأعضاء فوق كل شيء.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                بدءاً بعدد قليل من الأعضاء، ركزنا على تقديم نتائج متسقة مع بناء مجتمع داعم. 
                انتشرت الكلمة بسرعة، واليوم نخدم أكثر من 10,000 متداول نشط في أكثر من 50 دولة.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                يضم فريقنا الآن محللين ومعلمين ومتخصصين في الدعم، يجمعهم جميعاً هدف مشترك: 
                مساعدة أعضائنا على تحقيق أهدافهم في التداول. نستمر في التطور، نضيف ميزات 
                ودورات جديدة بناءً على ملاحظات الأعضاء، ونبقى دائماً صادقين مع مبادئنا التأسيسية 
                المتمثلة في الثقة والشفافية والتميز.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
