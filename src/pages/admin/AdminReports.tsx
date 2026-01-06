import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  BookOpen, 
  BarChart3, 
  Bell,
  LogOut,
  TrendingUp,
  ChevronLeft,
  Download,
  Calendar,
  DollarSign,
  UserPlus,
  Activity,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/admin" },
  { icon: Users, label: "المستخدمين", href: "/admin/users" },
  { icon: CreditCard, label: "الباقات والأسعار", href: "/admin/plans" },
  { icon: ShoppingCart, label: "الاشتراكات", href: "/admin/subscriptions" },
  { icon: BookOpen, label: "المحتوى التعليمي", href: "/admin/courses" },
  { icon: BarChart3, label: "التقارير", href: "/admin/reports", active: true },
  { icon: Bell, label: "الإشعارات", href: "/admin/notifications" },
];

const monthlyData = [
  { month: "يناير", revenue: 45230, users: 234, subscriptions: 189 },
  { month: "ديسمبر", revenue: 42100, users: 201, subscriptions: 167 },
  { month: "نوفمبر", revenue: 38900, users: 189, subscriptions: 145 },
  { month: "أكتوبر", revenue: 35600, users: 156, subscriptions: 132 },
];

const AdminReports = () => {
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
              <span className="gold-text">Admin</span>
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
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400 hover:text-white hover:bg-white/5">
              <LogOut className="w-5 h-5" />
              {sidebarOpen && <span>العودة للموقع</span>}
            </Button>
          </Link>
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
                <h1 className="text-xl font-bold text-white">التقارير والإحصائيات</h1>
                <p className="text-gray-400 text-sm">تحليل أداء المنصة</p>
              </div>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 ml-2" />
              تصدير التقرير
            </Button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: DollarSign, label: "إجمالي الإيرادات", value: "$161,830", subtext: "آخر 4 أشهر", color: "gold-text" },
              { icon: UserPlus, label: "المستخدمين الجدد", value: "780", subtext: "آخر 4 أشهر", color: "text-blue-500" },
              { icon: Activity, label: "الاشتراكات الجديدة", value: "633", subtext: "آخر 4 أشهر", color: "text-green-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">{stat.subtext}</span>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Monthly Data */}
          <motion.div
            className="bg-card rounded-xl border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-gray-400 text-sm">آخر 4 أشهر</span>
              </div>
              <h3 className="font-bold text-white">التقرير الشهري</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-background">
                  <tr className="text-right">
                    <th className="p-4 text-gray-400 font-medium">الاشتراكات</th>
                    <th className="p-4 text-gray-400 font-medium">المستخدمين الجدد</th>
                    <th className="p-4 text-gray-400 font-medium">الإيرادات</th>
                    <th className="p-4 text-gray-400 font-medium">الشهر</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {monthlyData.map((data, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-gray-400">{data.subscriptions}</td>
                      <td className="p-4 text-gray-400">{data.users}</td>
                      <td className="p-4 text-green-500 font-medium">${data.revenue.toLocaleString()}</td>
                      <td className="p-4 text-white font-medium">{data.month}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Chart Placeholder */}
          <motion.div
            className="bg-card rounded-xl p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-bold text-white mb-6 text-right">رسم بياني للإيرادات</h3>
            <div className="h-64 flex items-end justify-around gap-4">
              {monthlyData.reverse().map((data, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <motion.div
                    className="w-16 gold-gradient rounded-t-lg"
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.revenue / 50000) * 200}px` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  />
                  <span className="text-gray-400 text-sm">{data.month}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminReports;
