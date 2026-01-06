import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  BookOpen, 
  Shield, 
  HeadphonesIcon, 
  Settings, 
  LogOut,
  Bell,
  TrendingUp,
  Play,
  Lock,
  CheckCircle,
  Clock,
  FileText,
  Award,
  ChevronLeft,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/dashboard" },
  { icon: BookOpen, label: "الأكاديمية", href: "/dashboard/academy", active: true },
  { icon: Shield, label: "إدارة المخاطر", href: "/dashboard/risk-management" },
  { icon: HeadphonesIcon, label: "الدعم الفني", href: "/dashboard/support" },
  { icon: Settings, label: "الحساب والفوترة", href: "/dashboard/account" },
];

const courses = [
  {
    id: 1,
    title: "أساسيات التداول",
    description: "تعلم المبادئ الأساسية للتداول في الأسواق المالية",
    lessons: 12,
    duration: "4 ساعات",
    progress: 75,
    image: "/placeholder.svg",
    modules: [
      { title: "مقدمة في الأسواق المالية", lessons: 3, completed: true },
      { title: "أنواع الأوامر", lessons: 3, completed: true },
      { title: "قراءة الشارت", lessons: 3, completed: true },
      { title: "التطبيق العملي", lessons: 3, completed: false },
    ]
  },
  {
    id: 2,
    title: "التحليل الفني المتقدم",
    description: "استراتيجيات التحليل الفني المتقدمة للمحترفين",
    lessons: 18,
    duration: "6 ساعات",
    progress: 30,
    image: "/placeholder.svg",
    modules: [
      { title: "أنماط الشموع اليابانية", lessons: 4, completed: true },
      { title: "المؤشرات الفنية", lessons: 5, completed: false },
      { title: "خطوط الاتجاه والدعم والمقاومة", lessons: 5, completed: false },
      { title: "الفيبوناتشي والموجات", lessons: 4, completed: false },
    ]
  },
  {
    id: 3,
    title: "إدارة رأس المال",
    description: "تعلم كيفية حماية رأس مالك وإدارة المخاطر بفعالية",
    lessons: 8,
    duration: "3 ساعات",
    progress: 100,
    image: "/placeholder.svg",
    certificate: true,
    modules: [
      { title: "أساسيات إدارة المخاطر", lessons: 2, completed: true },
      { title: "حساب حجم الصفقة", lessons: 2, completed: true },
      { title: "نسبة المخاطرة للربح", lessons: 2, completed: true },
      { title: "خطة التداول", lessons: 2, completed: true },
    ]
  },
  {
    id: 4,
    title: "سيكولوجية التداول",
    description: "تحكم في مشاعرك وطور عقلية المتداول الناجح",
    lessons: 10,
    duration: "3.5 ساعات",
    progress: 0,
    locked: true,
    image: "/placeholder.svg",
    modules: []
  },
];

const MembersAcademy = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background flex" dir="rtl">
      {/* Sidebar */}
      <motion.aside 
        className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-card border-l border-border transition-all duration-300 fixed h-full z-50`}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
      >
        <div className="p-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2 justify-center">
            <span className={`text-xl font-bold ${!sidebarOpen && 'hidden'}`}>
              <span className="gold-text">Pips</span>
              <span className="text-white"> Safe</span>
            </span>
            <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-black" />
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active 
                  ? 'bg-gold/10 text-gold border border-gold/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 right-4 left-4">
          <Button variant="ghost" className="w-full justify-start gap-3 text-red-400 hover:text-red-300 hover:bg-red-500/10">
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>تسجيل الخروج</span>}
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={`flex-1 ${sidebarOpen ? 'mr-64' : 'mr-20'} transition-all duration-300`}>
        {/* Top Bar */}
        <header className="bg-card border-b border-border px-6 py-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/5 rounded-lg" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <ChevronLeft className={`w-5 h-5 text-gray-400 transition-transform ${!sidebarOpen && 'rotate-180'}`} />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">الأكاديمية</h1>
                <p className="text-gray-400 text-sm">تعلم التداول الاحترافي</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-white/5 rounded-lg">
                <Bell className="w-5 h-5 text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full"></span>
              </button>
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-black font-bold">
                أ
              </div>
            </div>
          </div>
        </header>

        {/* Courses Grid */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className={`bg-card rounded-xl border border-border overflow-hidden ${course.locked ? 'opacity-60' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Course Header */}
                <div className="relative h-40 bg-gradient-to-bl from-gold/20 to-background flex items-center justify-center">
                  {course.locked ? (
                    <Lock className="w-12 h-12 text-gray-500" />
                  ) : course.certificate ? (
                    <Award className="w-12 h-12 text-gold" />
                  ) : (
                    <BookOpen className="w-12 h-12 text-gold" />
                  )}
                  {course.progress === 100 && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      مكتمل
                    </div>
                  )}
                </div>

                {/* Course Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 text-right">{course.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 text-right">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      <span>{course.lessons} درس</span>
                    </div>
                  </div>

                  {!course.locked && (
                    <>
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>{course.progress}%</span>
                          <span>التقدم</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div 
                            className="gold-gradient h-2 rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Modules Toggle */}
                      <button
                        className="w-full flex items-center justify-between p-3 bg-background rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                      >
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${selectedCourse === course.id ? 'rotate-180' : ''}`} />
                        <span className="text-white text-sm">عرض الوحدات</span>
                      </button>

                      <AnimatePresence>
                        {selectedCourse === course.id && (
                          <motion.div
                            className="mt-4 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {course.modules.map((module, idx) => (
                              <div 
                                key={idx}
                                className="flex items-center justify-between p-3 bg-background rounded-lg"
                              >
                                <div className="flex items-center gap-2">
                                  {module.completed ? (
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-gray-600" />
                                  )}
                                  <span className="text-gray-500 text-xs">{module.lessons} دروس</span>
                                </div>
                                <span className={`text-sm ${module.completed ? 'text-gray-400' : 'text-white'}`}>
                                  {module.title}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}

                  {course.locked && (
                    <Button className="w-full btn-gold" disabled>
                      <Lock className="w-4 h-4 ml-2" />
                      مقفل - قم بترقية اشتراكك
                    </Button>
                  )}

                  {course.certificate && (
                    <Button className="w-full mt-4" variant="outline">
                      <Award className="w-4 h-4 ml-2" />
                      تحميل الشهادة
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MembersAcademy;
