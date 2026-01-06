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
  Search,
  RefreshCcw,
  XCircle,
  CheckCircle,
  Clock,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/admin" },
  { icon: Users, label: "المستخدمين", href: "/admin/users" },
  { icon: CreditCard, label: "الباقات والأسعار", href: "/admin/plans" },
  { icon: ShoppingCart, label: "الاشتراكات", href: "/admin/subscriptions", active: true },
  { icon: BookOpen, label: "المحتوى التعليمي", href: "/admin/courses" },
  { icon: BarChart3, label: "التقارير", href: "/admin/reports" },
  { icon: Bell, label: "الإشعارات", href: "/admin/notifications" },
];

const subscriptions = [
  { id: "SUB-001", user: "أحمد محمد", plan: "احترافي", amount: "$99", startDate: "15 يناير 2024", endDate: "15 فبراير 2024", status: "نشط" },
  { id: "SUB-002", user: "سارة علي", plan: "مبتدئ", amount: "$29", startDate: "10 يناير 2024", endDate: "10 فبراير 2024", status: "نشط" },
  { id: "SUB-003", user: "محمد خالد", plan: "VIP", amount: "$199", startDate: "5 يناير 2024", endDate: "5 فبراير 2024", status: "قيد التجديد" },
  { id: "SUB-004", user: "فاطمة أحمد", plan: "احترافي", amount: "$99", startDate: "1 ديسمبر 2023", endDate: "1 يناير 2024", status: "منتهي" },
  { id: "SUB-005", user: "عمر حسن", plan: "مبتدئ", amount: "$29", startDate: "20 ديسمبر 2023", endDate: "20 يناير 2024", status: "ملغي" },
];

const AdminSubscriptions = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'نشط': return CheckCircle;
      case 'منتهي': return XCircle;
      case 'قيد التجديد': return RefreshCcw;
      case 'ملغي': return XCircle;
      default: return Clock;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'نشط': return 'bg-green-500/20 text-green-500';
      case 'منتهي': return 'bg-gray-500/20 text-gray-500';
      case 'قيد التجديد': return 'bg-yellow-500/20 text-yellow-500';
      case 'ملغي': return 'bg-red-500/20 text-red-500';
      default: return 'bg-gray-500/20 text-gray-500';
    }
  };

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
                <h1 className="text-xl font-bold text-white">إدارة الاشتراكات</h1>
                <p className="text-gray-400 text-sm">متابعة وإدارة اشتراكات المستخدمين</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: "الاشتراكات النشطة", value: "1,893", color: "text-green-500" },
              { label: "قيد التجديد", value: "156", color: "text-yellow-500" },
              { label: "منتهية", value: "342", color: "text-gray-500" },
              { label: "ملغاة", value: "89", color: "text-red-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-4 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Search */}
          <div className="relative max-w-md mr-auto">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input placeholder="البحث عن اشتراك..." className="pr-10 text-right" />
          </div>

          {/* Subscriptions Table */}
          <motion.div
            className="bg-card rounded-xl border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-background">
                  <tr className="text-right">
                    <th className="p-4 text-gray-400 font-medium">الإجراءات</th>
                    <th className="p-4 text-gray-400 font-medium">الحالة</th>
                    <th className="p-4 text-gray-400 font-medium">تاريخ الانتهاء</th>
                    <th className="p-4 text-gray-400 font-medium">تاريخ البداية</th>
                    <th className="p-4 text-gray-400 font-medium">المبلغ</th>
                    <th className="p-4 text-gray-400 font-medium">الباقة</th>
                    <th className="p-4 text-gray-400 font-medium">المستخدم</th>
                    <th className="p-4 text-gray-400 font-medium">رقم الاشتراك</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {subscriptions.map((sub) => {
                    const StatusIcon = getStatusIcon(sub.status);
                    return (
                      <tr key={sub.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4">
                          <Button size="sm" variant="outline">تفاصيل</Button>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getStatusColor(sub.status)}`}>
                            <StatusIcon className="w-3 h-3" />
                            {sub.status}
                          </span>
                        </td>
                        <td className="p-4 text-gray-400 text-sm">{sub.endDate}</td>
                        <td className="p-4 text-gray-400 text-sm">{sub.startDate}</td>
                        <td className="p-4 text-white font-medium">{sub.amount}</td>
                        <td className="p-4">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            sub.plan === 'VIP' ? 'bg-purple-500/20 text-purple-500' :
                            sub.plan === 'احترافي' ? 'bg-gold/20 text-gold' :
                            'bg-blue-500/20 text-blue-500'
                          }`}>
                            {sub.plan}
                          </span>
                        </td>
                        <td className="p-4 text-white">{sub.user}</td>
                        <td className="p-4 text-gray-500 font-mono text-sm">{sub.id}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminSubscriptions;
