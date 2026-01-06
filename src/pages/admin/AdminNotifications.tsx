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
  Send,
  Mail,
  Smartphone,
  Globe,
  CheckCircle,
  Clock,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/admin" },
  { icon: Users, label: "المستخدمين", href: "/admin/users" },
  { icon: CreditCard, label: "الباقات والأسعار", href: "/admin/plans" },
  { icon: ShoppingCart, label: "الاشتراكات", href: "/admin/subscriptions" },
  { icon: BookOpen, label: "المحتوى التعليمي", href: "/admin/courses" },
  { icon: BarChart3, label: "التقارير", href: "/admin/reports" },
  { icon: Bell, label: "الإشعارات", href: "/admin/notifications", active: true },
];

const sentNotifications = [
  { id: 1, title: "توصية جديدة متاحة", type: "push", recipients: "جميع المشتركين", date: "منذ ساعة", status: "مُرسل" },
  { id: 2, title: "تحديث الأكاديمية", type: "email", recipients: "جميع المستخدمين", date: "منذ يوم", status: "مُرسل" },
  { id: 3, title: "عرض خاص - خصم 30%", type: "all", recipients: "المستخدمين المجانيين", date: "منذ 3 أيام", status: "مُرسل" },
];

const AdminNotifications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationData, setNotificationData] = useState({
    title: '',
    message: '',
    type: 'push',
    recipients: 'all'
  });

  const handleSend = () => {
    toast({
      title: "تم إرسال الإشعار",
      description: "تم إرسال الإشعار بنجاح لجميع المستلمين"
    });
    setNotificationData({ title: '', message: '', type: 'push', recipients: 'all' });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'push': return Smartphone;
      case 'email': return Mail;
      case 'all': return Globe;
      default: return Bell;
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
                <h1 className="text-xl font-bold text-white">الإشعارات والتنبيهات</h1>
                <p className="text-gray-400 text-sm">إرسال إشعارات للمستخدمين</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* New Notification Form */}
          <motion.div
            className="bg-card rounded-xl border border-border p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-lg font-bold text-white mb-6 text-right flex items-center gap-2 justify-end">
              <span>إرسال إشعار جديد</span>
              <Plus className="w-5 h-5 text-gold" />
            </h2>
            
            <div className="space-y-4">
              <div className="text-right">
                <label className="text-gray-400 text-sm mb-2 block">عنوان الإشعار</label>
                <Input 
                  placeholder="أدخل عنوان الإشعار" 
                  className="text-right"
                  value={notificationData.title}
                  onChange={(e) => setNotificationData({...notificationData, title: e.target.value})}
                />
              </div>
              
              <div className="text-right">
                <label className="text-gray-400 text-sm mb-2 block">محتوى الإشعار</label>
                <Textarea 
                  placeholder="أدخل محتوى الإشعار..." 
                  className="text-right min-h-24"
                  value={notificationData.message}
                  onChange={(e) => setNotificationData({...notificationData, message: e.target.value})}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-right">
                  <label className="text-gray-400 text-sm mb-2 block">نوع الإشعار</label>
                  <div className="flex gap-2 justify-end">
                    {[
                      { value: 'push', label: 'إشعار', icon: Smartphone },
                      { value: 'email', label: 'بريد', icon: Mail },
                      { value: 'all', label: 'الكل', icon: Globe },
                    ].map((type) => (
                      <button
                        key={type.value}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                          notificationData.type === type.value 
                            ? 'border-gold bg-gold/10 text-gold' 
                            : 'border-border text-gray-400 hover:border-gray-600'
                        }`}
                        onClick={() => setNotificationData({...notificationData, type: type.value})}
                      >
                        <type.icon className="w-4 h-4" />
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  <label className="text-gray-400 text-sm mb-2 block">المستلمين</label>
                  <div className="flex gap-2 justify-end">
                    {[
                      { value: 'all', label: 'الجميع' },
                      { value: 'subscribers', label: 'المشتركين' },
                      { value: 'free', label: 'المجانيين' },
                    ].map((recipient) => (
                      <button
                        key={recipient.value}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          notificationData.recipients === recipient.value 
                            ? 'border-gold bg-gold/10 text-gold' 
                            : 'border-border text-gray-400 hover:border-gray-600'
                        }`}
                        onClick={() => setNotificationData({...notificationData, recipients: recipient.value})}
                      >
                        {recipient.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button className="btn-gold" onClick={handleSend}>
                  <Send className="w-4 h-4 ml-2" />
                  إرسال الإشعار
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Sent Notifications */}
          <motion.div
            className="bg-card rounded-xl border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-4 border-b border-border">
              <h3 className="font-bold text-white text-right">الإشعارات المرسلة</h3>
            </div>
            <div className="divide-y divide-border">
              {sentNotifications.map((notification) => {
                const TypeIcon = getTypeIcon(notification.type);
                return (
                  <div key={notification.id} className="p-4 flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{notification.date}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        {notification.status}
                      </span>
                      <span className="text-gray-400 text-sm">{notification.recipients}</span>
                      <div className="flex items-center gap-2 text-right">
                        <div>
                          <p className="text-white font-medium">{notification.title}</p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                          <TypeIcon className="w-4 h-4 text-gold" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminNotifications;
