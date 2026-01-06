import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Mail, Lock, Eye, EyeOff, User, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "ضمان استرداد الأموال لمدة 7 أيام",
  "إلغاء في أي وقت بدون أسئلة",
  "وصول فوري للإشارات",
  "دورات مجانية للمبتدئين",
];

const Register = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "يرجى الموافقة على الشروط",
        description: "يجب الموافقة على الشروط والأحكام للمتابعة.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "تم إنشاء الحساب!",
      description: "مرحباً بك في Safe Pips. لنبدأ رحلة التداول.",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-[-8rem] w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 left-[-8rem] w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center">
            <TrendingUp className="w-7 h-7 text-background" />
          </div>
          <span className="text-3xl font-bold">
            <span className="gold-text">Pips</span>
            <span className="text-foreground"> Safe</span>
          </span>
        </Link>

        {/* Form Card */}
        <div className="card-elevated rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-foreground text-center mb-2">
            إنشاء حساب جديد
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            ابدأ رحلة التداول مع Safe Pips
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                الاسم الكامل
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full pr-12 pl-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="محمد أحمد"
                />
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full pr-12 pl-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="example@email.com"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  minLength={8}
                  className="w-full pr-12 pl-12 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="8 أحرف على الأقل"
                />
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 w-4 h-4 rounded border-border bg-muted text-primary focus:ring-primary/50"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                أوافق على{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  الشروط والأحكام
                </Link>{" "}
                و{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  سياسة الخصوصية
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-gold w-full py-4 rounded-xl font-semibold disabled:opacity-50"
            >
              {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
            </button>
          </form>

          {/* Benefits */}
          <div className="mt-6 pt-6 border-t border-border">
            <ul className="space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-center">
            <span className="text-muted-foreground">لديك حساب بالفعل؟ </span>
            <Link to="/login" className="text-primary font-medium hover:underline">
              تسجيل الدخول
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <p className="text-center mt-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            → العودة للرئيسية
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
