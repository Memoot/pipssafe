import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  BookOpen, 
  Shield, 
  HeadphonesIcon, 
  Settings, 
  LogOut,
  Bell,
  TrendingUp,
  Target,
  Award,
  Calendar,
  Clock,
  ChevronLeft,
  Play,
  FileText,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/dashboard", active: true },
  { icon: BookOpen, label: "الأكاديمية", href: "/dashboard/academy" },
  { icon: Shield, label: "إدارة المخاطر", href: "/dashboard/risk-management" },
  { icon: HeadphonesIcon, label: "الدعم الفني", href: "/dashboard/support" },
  { icon: Settings, label: "الحساب والفوترة", href: "/dashboard/account" },
];

const recentSignals = [
  { pair: "EUR/USD", type: "شراء", entry: "1.0850", target: "1.0920", status: "نشط", profit: "+70 نقطة" },
  { pair: "GBP/JPY", type: "بيع", entry: "188.50", target: "187.80", status: "مغلق", profit: "+45 نقطة" },
  { pair: "XAU/USD", type: "شراء", entry: "2015.00", target: "2035.00", status: "نشط", profit: "+120 نقطة" },
];

const courses = [
  { title: "أساسيات التداول", progress: 75, lessons: 12 },
  { title: "التحليل الفني المتقدم", progress: 30, lessons: 18 },
  { title: "إدارة رأس المال", progress: 100, lessons: 8 },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
                <h1 className="text-xl font-bold text-white">مرحباً، أحمد 👋</h1>
                <p className="text-gray-400 text-sm">لوحة التحكم الخاصة بك</p>
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

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Target, label: "نسبة النجاح", value: "92%", color: "text-green-500" },
              { icon: TrendingUp, label: "إجمالي النقاط", value: "+2,450", color: "gold-text" },
              { icon: Calendar, label: "أيام الاشتراك المتبقية", value: "25 يوم", color: "text-blue-500" },
              { icon: Award, label: "الشهادات", value: "3", color: "text-purple-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Signals */}
            <motion.div
              className="bg-card rounded-xl border border-border"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-4 border-b border-border flex items-center justify-between">
                <Link to="/dashboard/signals" className="text-gold text-sm hover:underline">عرض الكل</Link>
                <h3 className="font-bold text-white">آخر التوصيات</h3>
              </div>
              <div className="p-4 space-y-4">
                {recentSignals.map((signal, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className={`text-sm font-medium ${signal.status === 'نشط' ? 'text-green-500' : 'text-gray-400'}`}>
                      {signal.profit}
                    </span>
                    <div className="text-right">
                      <p className="text-white font-medium">{signal.pair}</p>
                      <p className="text-gray-400 text-xs">{signal.type} @ {signal.entry}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Course Progress */}
            <motion.div
              className="bg-card rounded-xl border border-border"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-4 border-b border-border flex items-center justify-between">
                <Link to="/dashboard/academy" className="text-gold text-sm hover:underline">عرض الكل</Link>
                <h3 className="font-bold text-white">تقدمك في الأكاديمية</h3>
              </div>
              <div className="p-4 space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="p-3 bg-background rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-xs">{course.progress}%</span>
                      <p className="text-white font-medium text-sm">{course.title}</p>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className="gold-gradient h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-end gap-1 mt-2 text-gray-500 text-xs">
                      <span>{course.lessons} دروس</span>
                      <Play className="w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Subscription Info */}
          <motion.div
            className="bg-gradient-to-l from-gold/10 to-transparent rounded-xl p-6 border border-gold/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <Button className="btn-gold">
                ترقية الباقة
              </Button>
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end mb-2">
                  <span className="text-sm bg-gold/20 text-gold px-2 py-1 rounded">الباقة الاحترافية</span>
                  <h3 className="text-lg font-bold text-white">اشتراكك الحالي</h3>
                </div>
                <p className="text-gray-400 text-sm">ينتهي في: 15 فبراير 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
