import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "يوسف",
    location: "الإمارات",
    rating: 5,
    text: "الانضمام إلى أكاديمية Safe Pips كان أفضل قرار اتخذته في رحلتي التداولية. التحليلات المتخصصة والإرشادات العملية كانت لا تقدر بثمن. لقد شهدت تحسنًا كبيرًا في استراتيجياتي ونتائجي.",
  },
  {
    id: 2,
    name: "أحمد",
    location: "السعودية",
    rating: 5,
    text: "خدمة ممتازة وإشارات دقيقة جداً. فريق الدعم متعاون ويرد بسرعة. أنصح بها بشدة لكل من يريد البدء في التداول.",
  },
  {
    id: 3,
    name: "محمد",
    location: "مصر",
    rating: 5,
    text: "منصة رائعة ومحتوى تعليمي ممتاز. تعلمت الكثير من الدورات المقدمة وأصبحت أتداول بثقة أكبر الآن.",
  },
  {
    id: 4,
    name: "خالد",
    location: "الكويت",
    rating: 5,
    text: "نسبة نجاح عالية جداً في الإشارات. أتابع الإشارات منذ 6 أشهر والنتائج ممتازة. شكراً Safe Pips!",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">ماذا يقول</span>
            <span className="gold-text"> عملاؤنا</span>
            <span className="text-foreground"> عنا</span>
          </h2>
          <p className="text-muted-foreground">
            نفخر بحصولنا على تقييم 4.8 نجوم على تراست بايلوت مع أكثر من 2000 تقييم. 
            استمع إلى ما يقوله عنا عملاؤنا!
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="card-elevated rounded-2xl p-8"
            >
              {/* Header Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-foreground">5.0</span>
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-bold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground justify-end">
                      {testimonials[currentIndex].location}
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed text-right text-lg">
                {testimonials[currentIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <button
                onClick={next}
                className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={prev}
                className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
