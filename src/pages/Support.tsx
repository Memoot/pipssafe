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
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/dashboard" },
  { icon: BookOpen, label: "الأكاديمية", href: "/dashboard/academy" },
  { icon: Shield, label: "إدارة المخاطر", href: "/dashboard/risk-management" },
  { icon: HeadphonesIcon, label: "الدعم الفني", href: "/dashboard/support", active: true },
  { icon: Settings, label: "الحساب والفوترة", href: "/dashboard/account" },
];

const tickets = [
  {
    id: "#1234",
    subject: "مشكلة في الوصول للأكاديمية",
    status: "مفتوحة",
    priority: "عالية",
    date: "منذ ساعتين",
    lastReply: "فريق الدعم"
  },
  {
    id: "#1233",
    subject: "استفسار عن ترقية الباقة",
    status: "مغلقة",
    priority: "متوسطة",
    date: "منذ يومين",
    lastReply: "أنت"
  },
  {
    id: "#1232",
    subject: "طلب استرجاع",
    status: "قيد المعالجة",
    priority: "عالية",
    date: "منذ 3 أيام",
    lastReply: "فريق الدعم"
  },
];

const Support = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNewTicket, setShowNewTicket] = useState(false);
  const [ticketData, setTicketData] = useState({ subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال التذكرة",
      description: "سنرد عليك في أقرب وقت ممكن"
    });
    setShowNewTicket(false);
    setTicketData({ subject: '', message: '' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'مفتوحة': return 'bg-yellow-500/20 text-yellow-500';
      case 'مغلقة': return 'bg-green-500/20 text-green-500';
      case 'قيد المعالجة': return 'bg-blue-500/20 text-blue-500';
      default: return 'bg-gray-500/20 text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'مفتوحة': return AlertCircle;
      case 'مغلقة': return CheckCircle;
      case 'قيد المعالجة': return Clock;
      default: return MessageSquare;
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
                <h1 className="text-xl font-bold text-white">الدعم الفني</h1>
                <p className="text-gray-400 text-sm">نحن هنا لمساعدتك</p>
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
          {/* New Ticket Button */}
          <div className="flex justify-end">
            <Button 
              className="btn-gold"
              onClick={() => setShowNewTicket(!showNewTicket)}
            >
              <Plus className="w-4 h-4 ml-2" />
              تذكرة جديدة
            </Button>
          </div>

          {/* New Ticket Form */}
          {showNewTicket && (
            <motion.div
              className="bg-card rounded-xl border border-border p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-lg font-bold text-white mb-4 text-right">إنشاء تذكرة جديدة</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-right">
                  <label className="text-gray-400 text-sm mb-2 block">الموضوع</label>
                  <Input
                    placeholder="أدخل موضوع التذكرة"
                    value={ticketData.subject}
                    onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
                    className="text-right"
                    required
                  />
                </div>
                <div className="text-right">
                  <label className="text-gray-400 text-sm mb-2 block">الرسالة</label>
                  <Textarea
                    placeholder="اكتب رسالتك هنا..."
                    value={ticketData.message}
                    onChange={(e) => setTicketData({ ...ticketData, message: e.target.value })}
                    className="text-right min-h-32"
                    required
                  />
                </div>
                <div className="flex gap-4 justify-end">
                  <Button type="button" variant="outline" onClick={() => setShowNewTicket(false)}>
                    إلغاء
                  </Button>
                  <Button type="submit" className="btn-gold">
                    <Send className="w-4 h-4 ml-2" />
                    إرسال التذكرة
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Tickets List */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h2 className="font-bold text-white text-right">تذاكرك السابقة</h2>
            </div>
            <div className="divide-y divide-border">
              {tickets.map((ticket, index) => {
                const StatusIcon = getStatusIcon(ticket.status);
                return (
                  <motion.div
                    key={ticket.id}
                    className="p-4 hover:bg-white/5 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                        <span className="text-gray-500 text-sm">{ticket.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-right">
                        <div>
                          <p className="text-white font-medium">{ticket.subject}</p>
                          <p className="text-gray-500 text-sm">{ticket.id} • آخر رد: {ticket.lastReply}</p>
                        </div>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getStatusColor(ticket.status).replace('text-', 'bg-').replace('/20', '/10')}`}>
                          <StatusIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* FAQ Quick Links */}
          <motion.div
            className="bg-gradient-to-l from-gold/10 to-transparent rounded-xl p-6 border border-gold/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between">
              <Link to="/faq">
                <Button variant="outline">
                  عرض الأسئلة الشائعة
                </Button>
              </Link>
              <div className="text-right">
                <h3 className="text-lg font-bold text-white mb-1">هل لديك سؤال شائع؟</h3>
                <p className="text-gray-400 text-sm">قد تجد إجابتك في قسم الأسئلة الشائعة</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Support;
