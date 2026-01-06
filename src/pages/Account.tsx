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
  ChevronLeft,
  CreditCard,
  Receipt,
  User,
  Mail,
  Phone,
  Lock,
  Download,
  Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/dashboard" },
  { icon: BookOpen, label: "الأكاديمية", href: "/dashboard/academy" },
  { icon: Shield, label: "إدارة المخاطر", href: "/dashboard/risk-management" },
  { icon: HeadphonesIcon, label: "الدعم الفني", href: "/dashboard/support" },
  { icon: Settings, label: "الحساب والفوترة", href: "/dashboard/account", active: true },
];

const invoices = [
  { id: "INV-2024-001", date: "15 يناير 2024", amount: "99$", status: "مدفوعة" },
  { id: "INV-2023-012", date: "15 ديسمبر 2023", amount: "99$", status: "مدفوعة" },
  { id: "INV-2023-011", date: "15 نوفمبر 2023", amount: "99$", status: "مدفوعة" },
];

const Account = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  const handleSave = () => {
    toast({
      title: "تم الحفظ",
      description: "تم حفظ التغييرات بنجاح"
    });
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
                <h1 className="text-xl font-bold text-white">الحساب والفوترة</h1>
                <p className="text-gray-400 text-sm">إدارة حسابك واشتراكك</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-white/5 rounded-lg">
                <Bell className="w-5 h-5 text-gray-400" />
              </button>
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-black font-bold">
                أ
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Tabs */}
          <div className="flex gap-4 border-b border-border pb-4 justify-end">
            {[
              { id: 'profile', label: 'الملف الشخصي', icon: User },
              { id: 'subscription', label: 'الاشتراك', icon: Crown },
              { id: 'invoices', label: 'الفواتير', icon: Receipt },
              { id: 'security', label: 'الأمان', icon: Lock },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-gold/10 text-gold' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <motion.div
              className="bg-card rounded-xl border border-border p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-lg font-bold text-white mb-6 text-right">معلومات الحساب</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-right">
                  <label className="text-gray-400 text-sm mb-2 block">الاسم الكامل</label>
                  <div className="relative">
                    <Input defaultValue="أحمد محمد" className="text-right pr-10" />
                    <User className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="text-right">
                  <label className="text-gray-400 text-sm mb-2 block">البريد الإلكتروني</label>
                  <div className="relative">
                    <Input defaultValue="ahmed@email.com" className="text-right pr-10" />
                    <Mail className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="text-right">
                  <label className="text-gray-400 text-sm mb-2 block">رقم الهاتف</label>
                  <div className="relative">
                    <Input defaultValue="+966 50 123 4567" className="text-right pr-10" />
                    <Phone className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="btn-gold" onClick={handleSave}>
                  حفظ التغييرات
                </Button>
              </div>
            </motion.div>
          )}

          {/* Subscription Tab */}
          {activeTab === 'subscription' && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Current Plan */}
              <div className="bg-gradient-to-l from-gold/10 to-card rounded-xl border border-gold/20 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Button variant="outline">إلغاء الاشتراك</Button>
                    <Button className="btn-gold">ترقية الباقة</Button>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end mb-2">
                      <span className="bg-gold/20 text-gold text-xs px-2 py-1 rounded">نشط</span>
                      <Crown className="w-5 h-5 text-gold" />
                      <h3 className="text-xl font-bold text-white">الباقة الاحترافية</h3>
                    </div>
                    <p className="text-gray-400">99$ / شهرياً</p>
                    <p className="text-gray-500 text-sm mt-2">التجديد التالي: 15 فبراير 2024</p>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-white mb-4 text-right">طريقة الدفع</h3>
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm">تحديث</Button>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-white">•••• •••• •••• 4242</p>
                      <p className="text-gray-500 text-sm">تنتهي 12/25</p>
                    </div>
                    <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Invoices Tab */}
          {activeTab === 'invoices' && (
            <motion.div
              className="bg-card rounded-xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="p-4 border-b border-border">
                <h2 className="font-bold text-white text-right">سجل الفواتير</h2>
              </div>
              <div className="divide-y divide-border">
                {invoices.map((invoice, index) => (
                  <div key={invoice.id} className="p-4 flex items-center justify-between">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4 ml-1" />
                      تحميل
                    </Button>
                    <div className="flex items-center gap-8">
                      <span className="text-green-500 text-sm">{invoice.status}</span>
                      <span className="text-white font-medium">{invoice.amount}</span>
                      <span className="text-gray-400 text-sm">{invoice.date}</span>
                      <span className="text-gray-500">{invoice.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <motion.div
              className="bg-card rounded-xl border border-border p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-lg font-bold text-white mb-6 text-right">تغيير كلمة المرور</h2>
              <div className="space-y-4 max-w-md mr-auto">
                <div className="text-right">
                  <label className="text-gray-400 text-sm mb-2 block">كلمة المرور الحالية</label>
                  <Input type="password" className="text-right" />
                </div>
                <div className="text-right">
                  <label className="text-gray-400 text-sm mb-2 block">كلمة المرور الجديدة</label>
                  <Input type="password" className="text-right" />
                </div>
                <div className="text-right">
                  <label className="text-gray-400 text-sm mb-2 block">تأكيد كلمة المرور</label>
                  <Input type="password" className="text-right" />
                </div>
                <Button className="btn-gold w-full" onClick={handleSave}>
                  تحديث كلمة المرور
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Account;
