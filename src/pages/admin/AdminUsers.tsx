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
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Shield,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/admin" },
  { icon: Users, label: "المستخدمين", href: "/admin/users", active: true },
  { icon: CreditCard, label: "الباقات والأسعار", href: "/admin/plans" },
  { icon: ShoppingCart, label: "الاشتراكات", href: "/admin/subscriptions" },
  { icon: BookOpen, label: "المحتوى التعليمي", href: "/admin/courses" },
  { icon: BarChart3, label: "التقارير", href: "/admin/reports" },
  { icon: Bell, label: "الإشعارات", href: "/admin/notifications" },
];

const users = [
  { id: 1, name: "أحمد محمد", email: "ahmed@email.com", role: "مستخدم", plan: "احترافي", status: "نشط", date: "15 يناير 2024" },
  { id: 2, name: "سارة علي", email: "sara@email.com", role: "مستخدم", plan: "مبتدئ", status: "نشط", date: "14 يناير 2024" },
  { id: 3, name: "محمد خالد", email: "mohammed@email.com", role: "مشرف", plan: "VIP", status: "نشط", date: "13 يناير 2024" },
  { id: 4, name: "فاطمة أحمد", email: "fatima@email.com", role: "مستخدم", plan: "احترافي", status: "معلق", date: "12 يناير 2024" },
  { id: 5, name: "عمر حسن", email: "omar@email.com", role: "مستخدم", plan: "مجاني", status: "نشط", date: "11 يناير 2024" },
];

const AdminUsers = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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
                <h1 className="text-xl font-bold text-white">إدارة المستخدمين</h1>
                <p className="text-gray-400 text-sm">إدارة حسابات وصلاحيات المستخدمين</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Actions Bar */}
          <div className="flex items-center justify-between gap-4">
            <Button className="btn-gold">
              <Plus className="w-4 h-4 ml-2" />
              إضافة مستخدم
            </Button>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input 
                placeholder="البحث عن مستخدم..." 
                className="pr-10 text-right"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Users Table */}
          <motion.div
            className="bg-card rounded-xl border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-background">
                  <tr className="text-right">
                    <th className="p-4 text-gray-400 font-medium">الإجراءات</th>
                    <th className="p-4 text-gray-400 font-medium">تاريخ التسجيل</th>
                    <th className="p-4 text-gray-400 font-medium">الحالة</th>
                    <th className="p-4 text-gray-400 font-medium">الباقة</th>
                    <th className="p-4 text-gray-400 font-medium">الصلاحية</th>
                    <th className="p-4 text-gray-400 font-medium">المستخدم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-gray-400 text-sm">{user.date}</td>
                      <td className="p-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          user.status === 'نشط' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          user.plan === 'VIP' ? 'bg-purple-500/20 text-purple-500' :
                          user.plan === 'احترافي' ? 'bg-gold/20 text-gold' :
                          user.plan === 'مبتدئ' ? 'bg-blue-500/20 text-blue-500' :
                          'bg-gray-500/20 text-gray-500'
                        }`}>
                          {user.plan}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 justify-end">
                          <span className="text-gray-400 text-sm">{user.role}</span>
                          {user.role === 'مشرف' && <Shield className="w-4 h-4 text-gold" />}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3 justify-end">
                          <div className="text-right">
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-gray-500 text-sm">{user.email}</p>
                          </div>
                          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-black font-bold">
                            {user.name.charAt(0)}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminUsers;
