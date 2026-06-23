import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { testimonials } from "@/lib/content";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — New Era Lands & Motors Ltd" },
      { name: "description", content: "Real reviews from clients who trusted New Era Lands & Motors Ltd with their property and vehicle acquisitions." },
      { property: "og:title", content: "Client Testimonials" },
      { property: "og:description", content: "What our clients say about working with us." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={<>Words from <span className="text-gold-gradient">our clients.</span></>}
        description="Honest experiences from individuals, families and businesses who have trusted us with major decisions."
        breadcrumb="Testimonials"
      />

      <TestimonialsCarousel />

      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl glass p-8 shadow-luxury"
              >
                <Quote className="absolute -left-2 -top-2 h-20 w-20 text-gold/10" />
                <div className="relative">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 font-display text-lg leading-relaxed text-foreground">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-onyx font-display text-sm text-gold-gradient">
                      {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}