import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, Bell, UserCheck } from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "المعلومات التي نجمعها",
    content: "نجمع المعلومات التي تقدمها لنا مباشرة، مثل الاسم والبريد الإلكتروني ومعلومات الدفع عند إنشاء حساب أو الاشتراك في خدماتنا. كما نجمع معلومات تلقائياً عن استخدامك للموقع."
  },
  {
    icon: Eye,
    title: "كيف نستخدم معلوماتك",
    content: "نستخدم معلوماتك لتقديم خدماتنا وتحسينها، ومعالجة المدفوعات، والتواصل معك بشأن حسابك والتحديثات، وتخصيص تجربتك."
  },
  {
    icon: Lock,
    title: "حماية البيانات",
    content: "نتخذ إجراءات أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح. نستخدم تشفير SSL ونخزن البيانات في خوادم آمنة."
  },
  {
    icon: UserCheck,
    title: "حقوقك",
    content: "لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها وحذفها. يمكنك أيضاً الاعتراض على معالجة بياناتك أو طلب تقييدها في ظروف معينة."
  },
  {
    icon: Bell,
    title: "ملفات تعريف الارتباط",
    content: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل استخدام الموقع. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك."
  },
  {
    icon: Shield,
    title: "الأطراف الثالثة",
    content: "لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا عند الضرورة لتقديم خدماتنا أو عند الطلب القانوني."
  }
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-card to-background">
          <div className="container-custom">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">سياسة </span>
                <span className="gold-text">الخصوصية</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container-custom max-w-4xl">
            <div className="grid gap-6">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border text-right"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4 justify-end">
                    <h2 className="text-xl font-bold gold-text">{section.title}</h2>
                    <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center text-gray-500 text-sm pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              آخر تحديث: يناير 2024
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
