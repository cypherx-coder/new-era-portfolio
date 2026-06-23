import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 shadow-luxury"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-gold-deep/20 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                <span className="h-px w-8 bg-gold/60" />
                Let&apos;s talk
              </div>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Ready to buy land or <span className="text-gold-gradient">acquire a vehicle?</span>
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Speak directly with our advisors. Get verified listings, transparent pricing and
                end-to-end support — from inspection to handover.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:col-span-2 md:items-end">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep px-7 py-4 text-base font-semibold text-onyx shadow-gold-glow transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp Now
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="text-xs text-muted-foreground">Replies within minutes · Monday – Saturday</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}