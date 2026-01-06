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
  Play,
  FileText,
  FolderOpen,
  Eye,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/admin" },
  { icon: Users, label: "المستخدمين", href: "/admin/users" },
  { icon: CreditCard, label: "الباقات والأسعار", href: "/admin/plans" },
  { icon: ShoppingCart, label: "الاشتراكات", href: "/admin/subscriptions" },
  { icon: BookOpen, label: "المحتوى التعليمي", href: "/admin/courses", active: true },
  { icon: BarChart3, label: "التقارير", href: "/admin/reports" },
  { icon: Bell, label: "الإشعارات", href: "/admin/notifications" },
];

const courses = [
  { id: 1, title: "أساسيات التداول", lessons: 12, students: 856, status: "منشور", duration: "4 ساعات" },
  { id: 2, title: "التحليل الفني المتقدم", lessons: 18, students: 642, status: "منشور", duration: "6 ساعات" },
  { id: 3, title: "إدارة رأس المال", lessons: 8, students: 1203, status: "منشور", duration: "3 ساعات" },
  { id: 4, title: "سيكولوجية التداول", lessons: 10, students: 0, status: "مسودة", duration: "3.5 ساعات" },
];

const files = [
  { id: 1, name: "دليل إدارة المخاطر.pdf", type: "PDF", size: "2.4 MB", downloads: 1542 },
  { id: 2, name: "حاسبة حجم الصفقة.xlsx", type: "Excel", size: "156 KB", downloads: 2103 },
  { id: 3, name: "قالب خطة التداول.pdf", type: "PDF", size: "1.8 MB", downloads: 987 },
  { id: 4, name: "جدول تتبع الصفقات.xlsx", type: "Excel", size: "245 KB", downloads: 1876 },
];

const AdminCourses = () => {
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
                <h1 className="text-xl font-bold text-white">المحتوى التعليمي</h1>
                <p className="text-gray-400 text-sm">إدارة الكورسات والدروس والملفات</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-8">
          {/* Courses Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <Button className="btn-gold">
                <Plus className="w-4 h-4 ml-2" />
                إضافة كورس
              </Button>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold" />
                الكورسات
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="bg-card rounded-xl p-6 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        course.status === 'منشور' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{course.students} طالب</span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {course.lessons} درس
                      </span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Files Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline">
                <Plus className="w-4 h-4 ml-2" />
                رفع ملف
              </Button>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-gold" />
                الملفات والقوالب
              </h2>
            </div>

            <motion.div
              className="bg-card rounded-xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <table className="w-full">
                <thead className="bg-background">
                  <tr className="text-right">
                    <th className="p-4 text-gray-400 font-medium">الإجراءات</th>
                    <th className="p-4 text-gray-400 font-medium">التحميلات</th>
                    <th className="p-4 text-gray-400 font-medium">الحجم</th>
                    <th className="p-4 text-gray-400 font-medium">النوع</th>
                    <th className="p-4 text-gray-400 font-medium">اسم الملف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {files.map((file) => (
                    <tr key={file.id} className="hover:bg-white/5 transition-colors">
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
                      <td className="p-4 text-gray-400">{file.downloads}</td>
                      <td className="p-4 text-gray-400">{file.size}</td>
                      <td className="p-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          file.type === 'PDF' ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'
                        }`}>
                          {file.type}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 justify-end">
                          <span className="text-white">{file.name}</span>
                          <FileText className="w-4 h-4 text-gray-500" />
                        </div>
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

export default AdminCourses;
