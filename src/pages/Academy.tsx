import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Play, Lock, Clock, BookOpen, Award, Users } from "lucide-react";

const freeCourses = [
  {
    id: 1,
    title: "أساسيات التداول",
    lessons: 5,
    duration: "1.5 ساعة",
    level: "مبتدئ",
    image: "📈",
    free: true,
  },
  {
    id: 2,
    title: "فهم إدارة المخاطر",
    lessons: 4,
    duration: "1 ساعة",
    level: "مبتدئ",
    image: "🛡️",
    free: true,
  },
  {
    id: 3,
    title: "قراءة حركة السعر",
    lessons: 6,
    duration: "2 ساعة",
    level: "مبتدئ",
    image: "📊",
    free: true,
  },
];

const premiumCourses = [
  {
    id: 4,
    title: "التحليل الفني المتقدم",
    lessons: 12,
    duration: "6 ساعات",
    level: "متوسط",
    image: "📉",
    progress: 0,
  },
  {
    id: 5,
    title: "مفاهيم الأموال الذكية",
    lessons: 15,
    duration: "8 ساعات",
    level: "متقدم",
    image: "💰",
    progress: 0,
  },
  {
    id: 6,
    title: "سيكولوجية التداول",
    lessons: 8,
    duration: "4 ساعات",
    level: "متوسط",
    image: "🧠",
    progress: 0,
  },
  {
    id: 7,
    title: "احتراف تداول الكريبتو",
    lessons: 10,
    duration: "5 ساعات",
    level: "متوسط",
    image: "₿",
    progress: 0,
  },
  {
    id: 8,
    title: "بناء نظام التداول الخاص بك",
    lessons: 14,
    duration: "7 ساعات",
    level: "متقدم",
    image: "⚙️",
    progress: 0,
  },
];

const Academy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">أكاديمية </span>
              <span className="gold-text">Safe Pips</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              أتقن فن التداول مع دوراتنا الشاملة المصممة من قبل متداولين محترفين 
              لديهم سنوات من الخبرة في الأسواق.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { icon: BookOpen, label: "دورة", value: "+15" },
              { icon: Play, label: "ساعة فيديو", value: "+50" },
              { icon: Users, label: "طالب", value: "+8,000" },
              { icon: Award, label: "شهادة", value: "+5,000" },
            ].map((stat) => (
              <div key={stat.label} className="card-elevated rounded-xl p-4 text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Free Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                الدورات المجانية
              </h2>
              <span className="text-sm text-primary font-medium">
                لا يتطلب اشتراك
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {freeCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="card-elevated rounded-2xl overflow-hidden hover-lift group"
                >
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-5xl">{course.image}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded">
                        مجاني
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {course.lessons} درس
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                    </div>
                    <button className="w-full btn-gold py-2.5 rounded-xl flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      ابدأ التعلم
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Premium Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                الدورات المميزة
              </h2>
              <Link to="/pricing" className="text-sm text-primary font-medium hover:underline">
                عرض خطط الاشتراك ←
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="card-elevated rounded-2xl overflow-hidden relative group"
                >
                  {/* Lock Overlay */}
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center">
                      <Lock className="w-10 h-10 text-primary mx-auto mb-2" />
                      <p className="text-foreground font-medium">اشترك للفتح</p>
                    </div>
                  </div>

                  <div className="h-28 bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center">
                    <span className="text-4xl opacity-50">{course.image}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                        مميز
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {course.lessons} درس
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center card-elevated rounded-2xl p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              هل أنت مستعد لتصبح <span className="gold-text">متداولاً محترفاً</span>؟
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              احصل على وصول كامل لجميع الدورات والجلسات المباشرة والإرشاد مع اشتراكنا الاحترافي أو النخبة.
            </p>
            <Link
              to="/pricing"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold"
            >
              عرض خطط الأسعار
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Academy;
