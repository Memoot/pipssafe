import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Terms = () => {
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
                <span className="text-white">شروط </span>
                <span className="gold-text">الاستخدام</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container-custom max-w-4xl">
            <motion.div
              className="space-y-8 text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold gold-text mb-4">1. مقدمة</h2>
                <p className="text-gray-400 leading-relaxed">
                  مرحباً بك في Safe Pips. باستخدامك لموقعنا وخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold gold-text mb-4">2. الخدمات المقدمة</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  نقدم خدمات توصيات التداول والمحتوى التعليمي. خدماتنا تشمل:
                </p>
                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                  <li>توصيات تداول على الفوركس والعملات الرقمية والمؤشرات</li>
                  <li>محتوى تعليمي ودورات تدريبية</li>
                  <li>أدوات إدارة المخاطر</li>
                  <li>تحليلات السوق اليومية</li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold gold-text mb-4">3. إخلاء المسؤولية</h2>
                <p className="text-gray-400 leading-relaxed">
                  التداول في الأسواق المالية ينطوي على مخاطر عالية. التوصيات المقدمة هي للأغراض التعليمية والإعلامية فقط ولا تشكل نصيحة استثمارية. الأداء السابق لا يضمن النتائج المستقبلية. أنت المسؤول الوحيد عن قرارات التداول الخاصة بك.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold gold-text mb-4">4. الاشتراكات والدفع</h2>
                <p className="text-gray-400 leading-relaxed">
                  تتوفر خطط اشتراك مختلفة مع ميزات متنوعة. يتم تجديد الاشتراكات تلقائياً ما لم يتم إلغاؤها. يمكنك إلغاء اشتراكك في أي وقت من خلال لوحة التحكم الخاصة بك.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold gold-text mb-4">5. حقوق الملكية الفكرية</h2>
                <p className="text-gray-400 leading-relaxed">
                  جميع المحتويات والمواد التعليمية والتوصيات هي ملكية فكرية لـ Safe Pips. يحظر نسخ أو توزيع أو إعادة نشر أي محتوى دون إذن كتابي مسبق.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold gold-text mb-4">6. التعديلات</h2>
                <p className="text-gray-400 leading-relaxed">
                  نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على الموقع.
                </p>
              </div>

              <div className="text-center text-gray-500 text-sm pt-4">
                آخر تحديث: يناير 2024
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
