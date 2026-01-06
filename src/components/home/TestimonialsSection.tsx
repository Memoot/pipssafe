import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Hassan",
    location: "Dubai, UAE",
    rating: 5,
    text: "Safe Pips has transformed my trading journey. The signals are incredibly accurate, and the risk management guidance has helped me protect my capital while growing my account consistently.",
    avatar: "AH",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    text: "I've tried many signal providers, but Safe Pips stands out. The team's analysis is thorough, and I've seen a 40% increase in my portfolio since joining. Highly recommended!",
    avatar: "SM",
  },
  {
    id: 3,
    name: "Mohammed Khalil",
    location: "Cairo, Egypt",
    rating: 5,
    text: "The academy courses are exceptional. I went from a complete beginner to executing trades with confidence. The support team is always there to help when I have questions.",
    avatar: "MK",
  },
  {
    id: 4,
    name: "Jennifer Wong",
    location: "Singapore",
    rating: 5,
    text: "Professional service with consistent results. The signals are delivered on time, and the entry/exit levels are precise. Best investment I've made in my trading education.",
    avatar: "JW",
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
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gold-text">Traders Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied traders who have transformed their 
            trading with Safe Pips.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-8 -left-4 w-16 h-16 text-primary/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="card-elevated rounded-2xl p-8 md:p-12"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center">
                    <span className="text-lg font-bold text-background">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
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
      </div>
    </section>
  );
};
