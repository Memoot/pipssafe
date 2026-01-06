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
  Plus,
  Edit,
  Trash2,
  Tag,
  ShoppingCart,
  Percent
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/admin" },
  { icon: Users, label: "المستخدمين", href: "/admin/users" },
  { icon: CreditCard, label: "الباقات والأسعار", href: "/admin/plans", active: true },
  { icon: ShoppingCart, label: "الاشتراكات", href: "/admin/subscriptions" },
  { icon: BookOpen, label: "المحتوى التعليمي", href: "/admin/courses" },
  { icon: BarChart3, label: "التقارير", href: "/admin/reports" },
  { icon: Bell, label: "الإشعارات", href: "/admin/notifications" },
];

const plans = [
  { id: 1, name: "المبتدئ", price: 29, period: "شهري", subscribers: 450, status: "نشط" },
  { id: 2, name: "الاحترافي", price: 99, period: "شهري", subscribers: 1200, status: "نشط", popular: true },
  { id: 3, name: "VIP", price: 199, period: "شهري", subscribers: 243, status: "نشط" },
];

const coupons = [
  { id: 1, code: "WELCOME20", discount: "20%", uses: 150, maxUses: 500, status: "نشط" },
  { id: 2, code: "SUMMER50", discount: "50%", uses: 89, maxUses: 100, status: "نشط" },
  { id: 3, code: "VIP2024", discount: "30%", uses: 200, maxUses: 200, status: "منتهي" },
];

const AdminPlans = () => {
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
                <h1 className="text-xl font-bold text-white">الباقات والأسعار</h1>
                <p className="text-gray-400 text-sm">إدارة خطط الاشتراك والكوبونات</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-8">
          {/* Plans Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <Button className="btn-gold">
                <Plus className="w-4 h-4 ml-2" />
                إضافة باقة
              </Button>
              <h2 className="text-lg font-bold text-white">خطط الاشتراك</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className={`bg-card rounded-xl p-6 border ${plan.popular ? 'border-gold' : 'border-border'} relative`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 right-4 bg-gold text-black text-xs px-3 py-1 rounded-full font-bold">
                      الأكثر شعبية
                    </span>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold gold-text">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`px-2 py-1 rounded-full ${
                      plan.status === 'نشط' ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-500'
                    }`}>
                      {plan.status}
                    </span>
                    <span className="text-gray-400">{plan.subscribers} مشترك</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Coupons Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline">
                <Plus className="w-4 h-4 ml-2" />
                إضافة كوبون
              </Button>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-gold" />
                الكوبونات
              </h2>
            </div>

            <motion.div
              className="bg-card rounded-xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <table className="w-full">
                <thead className="bg-background">
                  <tr className="text-right">
                    <th className="p-4 text-gray-400 font-medium">الإجراءات</th>
                    <th className="p-4 text-gray-400 font-medium">الحالة</th>
                    <th className="p-4 text-gray-400 font-medium">الاستخدام</th>
                    <th className="p-4 text-gray-400 font-medium">الخصم</th>
                    <th className="p-4 text-gray-400 font-medium">الكود</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {coupons.map((coupon) => (
                    <tr key={coupon.id} className="hover:bg-white/5 transition-colors">
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
                      <td className="p-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          coupon.status === 'نشط' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                        }`}>
                          {coupon.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400">{coupon.uses}/{coupon.maxUses}</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1 justify-end text-gold font-bold">
                          {coupon.discount}
                          <Percent className="w-4 h-4" />
                        </span>
                      </td>
                      <td className="p-4">
                        <code className="bg-background px-3 py-1 rounded text-white font-mono">
                          {coupon.code}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminPlans;
