import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { testimonials } from "@/lib/content";

export function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Trusted by clients who <span className="text-gold-gradient">don&apos;t settle.</span></>}
        />
        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 shadow-luxury sm:p-14">
            <Quote className="absolute -left-2 -top-2 h-28 w-28 text-gold/10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
                  “{t.quote}”
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-onyx font-display text-lg text-gold-gradient">
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-foreground hover:border-gold hover:shadow-gold-glow"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((tt, idx) => (
                <button
                  key={tt.id}
                  type="button"
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-muted-foreground/40"}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next"
              onClick={() => setI((v) => (v + 1) % testimonials.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-foreground hover:border-gold hover:shadow-gold-glow"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}