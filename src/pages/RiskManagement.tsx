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
  FileText,
  Download,
  CheckSquare,
  Calculator,
  Target,
  PieChart
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/dashboard" },
  { icon: BookOpen, label: "الأكاديمية", href: "/dashboard/academy" },
  { icon: Shield, label: "إدارة المخاطر", href: "/dashboard/risk-management", active: true },
  { icon: HeadphonesIcon, label: "الدعم الفني", href: "/dashboard/support" },
  { icon: Settings, label: "الحساب والفوترة", href: "/dashboard/account" },
];

const templates = [
  {
    icon: Calculator,
    title: "حاسبة حجم الصفقة",
    description: "احسب الحجم الأمثل لصفقاتك بناءً على نسبة المخاطرة",
    type: "excel"
  },
  {
    icon: Target,
    title: "قالب خطة التداول",
    description: "خطط لتداولاتك اليومية والأسبوعية بشكل احترافي",
    type: "pdf"
  },
  {
    icon: PieChart,
    title: "جدول تتبع الصفقات",
    description: "سجل وحلل جميع صفقاتك لتحسين أدائك",
    type: "excel"
  },
  {
    icon: FileText,
    title: "دليل إدارة المخاطر",
    description: "دليل شامل لحماية رأس مالك",
    type: "pdf"
  },
];

const checklists = [
  {
    title: "قبل فتح الصفقة",
    items: [
      "تحديد الاتجاه العام للسوق",
      "تحديد مستويات الدعم والمقاومة",
      "التأكد من وجود إشارة دخول واضحة",
      "حساب نسبة المخاطرة للربح (1:2 على الأقل)",
      "تحديد حجم الصفقة المناسب",
      "وضع وقف الخسارة والهدف"
    ]
  },
  {
    title: "أثناء الصفقة",
    items: [
      "عدم تحريك وقف الخسارة للأسفل",
      "تحريك الوقف للتعادل عند تحقيق نسبة معينة",
      "عدم إضافة لصفقة خاسرة",
      "الالتزام بخطة الخروج"
    ]
  },
  {
    title: "بعد إغلاق الصفقة",
    items: [
      "تسجيل الصفقة في جدول التتبع",
      "تحليل سبب الربح أو الخسارة",
      "أخذ استراحة بعد سلسلة خسائر",
      "مراجعة أسبوعية للأداء"
    ]
  }
];

const RiskManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});

  const toggleCheck = (checklistIndex: number, itemIndex: number) => {
    const key = `${checklistIndex}-${itemIndex}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
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
                <h1 className="text-xl font-bold text-white">إدارة المخاطر</h1>
                <p className="text-gray-400 text-sm">أدوات وقوالب لحماية رأس مالك</p>
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

        <div className="p-6 space-y-8">
          {/* Templates Section */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 text-right">القوالب والأدوات</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {templates.map((template, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-gold/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <Button size="sm" variant="outline" className="flex-shrink-0">
                      <Download className="w-4 h-4 ml-1" />
                      تحميل
                    </Button>
                    <div className="flex-1 text-right">
                      <div className="flex items-center gap-2 justify-end mb-2">
                        <span className="text-xs text-gray-500 uppercase">{template.type}</span>
                        <h3 className="font-bold text-white">{template.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{template.description}</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                      <template.icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Checklists Section */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 text-right">قوائم التحقق</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {checklists.map((checklist, checklistIndex) => (
                <motion.div
                  key={checklistIndex}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + checklistIndex * 0.1 }}
                >
                  <div className="p-4 border-b border-border bg-gold/5">
                    <div className="flex items-center gap-2 justify-end">
                      <h3 className="font-bold text-white">{checklist.title}</h3>
                      <CheckSquare className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    {checklist.items.map((item, itemIndex) => {
                      const key = `${checklistIndex}-${itemIndex}`;
                      const isChecked = checkedItems[key];
                      return (
                        <button
                          key={itemIndex}
                          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors text-right"
                          onClick={() => toggleCheck(checklistIndex, itemIndex)}
                        >
                          <span className={`flex-1 text-sm ${isChecked ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                            {item}
                          </span>
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            isChecked ? 'border-gold bg-gold' : 'border-gray-600'
                          }`}>
                            {isChecked && <CheckSquare className="w-3 h-3 text-black" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RiskManagement;
