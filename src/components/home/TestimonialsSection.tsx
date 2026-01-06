import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "يوسف",
    location: "الإمارات",
    rating: 5,
    text: "الانضمام إلى أكاديمية Safe Pips كان أفضل قرار اتخذته في رحلتي التداولية. التحليلات المتخصصة والإرشادات العملية كانت لا تقدر بثمن.",
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

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-white">ماذا يقول</span>
            <span className="gold-text"> عملاؤنا</span>
            <span className="text-white"> عنا</span>
          </h2>
          <p className="text-gray-400 text-sm">
            نفخر بحصولنا على تقييم 4.8 نجوم مع أكثر من 2000 تقييم
          </p>
        </motion.div>

        {/* Horizontal Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 md:w-1/2 lg:w-1/3"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="card-elevated rounded-xl p-5 h-full mx-2">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-bold text-white">5.0</span>
                        <Star className="w-4 h-4 text-primary fill-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="font-bold text-white text-sm">{testimonial.name}</div>
                          <div className="flex items-center gap-1 text-xs text-gray-400 justify-end">
                            {testimonial.location}
                            <MapPin className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-gray-300 text-sm text-right leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-gray-600 w-2 hover:bg-gray-500"
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
