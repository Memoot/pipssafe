import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { RefreshCcw, Clock, CheckCircle, XCircle, HelpCircle, Mail } from "lucide-react";

const Refund = () => {
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
                <span className="gold-text">الاسترجاع</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                نحن نسعى لرضاكم التام عن خدماتنا
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container-custom max-w-4xl">
            <div className="space-y-8 text-right">
              {/* Main Policy */}
              <motion.div
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3 mb-4 justify-end">
                  <h2 className="text-xl font-bold gold-text">سياسة الاسترجاع</h2>
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                    <RefreshCcw className="w-5 h-5 text-black" />
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  نقدم ضمان استرجاع الأموال خلال 7 أيام من تاريخ الاشتراك الأول. إذا لم تكن راضياً عن خدماتنا، يمكنك طلب استرداد كامل المبلغ خلال هذه الفترة.
                </p>
              </motion.div>

              {/* Conditions */}
              <motion.div
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4 justify-end">
                  <h2 className="text-xl font-bold gold-text">شروط الاسترجاع</h2>
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-black" />
                  </div>
                </div>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center gap-2 justify-end">
                    <span>يجب تقديم طلب الاسترجاع خلال 7 أيام من الاشتراك</span>
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  </li>
                  <li className="flex items-center gap-2 justify-end">
                    <span>يجب أن يكون هذا اشتراكك الأول في المنصة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  </li>
                  <li className="flex items-center gap-2 justify-end">
                    <span>يتم معالجة الطلب خلال 3-5 أيام عمل</span>
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  </li>
                </ul>
              </motion.div>

              {/* Exclusions */}
              <motion.div
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4 justify-end">
                  <h2 className="text-xl font-bold gold-text">الاستثناءات</h2>
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center gap-2 justify-end">
                    <span>الاشتراكات المتجددة (بعد الفترة الأولى)</span>
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  </li>
                  <li className="flex items-center gap-2 justify-end">
                    <span>الحسابات التي تم حظرها لانتهاك الشروط</span>
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  </li>
                  <li className="flex items-center gap-2 justify-end">
                    <span>العروض والخصومات الخاصة</span>
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  </li>
                </ul>
              </motion.div>

              {/* Process */}
              <motion.div
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4 justify-end">
                  <h2 className="text-xl font-bold gold-text">كيفية طلب الاسترجاع</h2>
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 justify-end">
                    <div>
                      <p className="text-white font-medium">تواصل مع الدعم</p>
                      <p className="text-gray-500 text-sm">أرسل طلبك عبر البريد الإلكتروني</p>
                    </div>
                    <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-black font-bold">1</div>
                  </div>
                  <div className="flex items-center gap-4 justify-end">
                    <div>
                      <p className="text-white font-medium">تأكيد الهوية</p>
                      <p className="text-gray-500 text-sm">سنطلب التحقق من بيانات حسابك</p>
                    </div>
                    <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-black font-bold">2</div>
                  </div>
                  <div className="flex items-center gap-4 justify-end">
                    <div>
                      <p className="text-white font-medium">معالجة الطلب</p>
                      <p className="text-gray-500 text-sm">استرداد المبلغ خلال 3-5 أيام عمل</p>
                    </div>
                    <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-black font-bold">3</div>
                  </div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-6 border border-gold/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-4 justify-end">
                  <div className="text-right">
                    <p className="text-white font-bold mb-1">هل لديك أسئلة؟</p>
                    <p className="text-gray-400 text-sm">تواصل معنا على support@safepips.com</p>
                  </div>
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Refund;
