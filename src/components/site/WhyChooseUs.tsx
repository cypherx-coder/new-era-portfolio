import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  Eye,
  Compass,
  Zap,
  Headset,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { Icon: ShieldCheck, title: "Verified Transactions", body: "Every deal is screened, documented and traceable from first contact to final handover." },
  { Icon: FileCheck2, title: "Genuine Documentation", body: "Titles and ownership documents are validated by qualified legal partners before purchase." },
  { Icon: Eye, title: "Transparent Process", body: "Clear pricing, no hidden fees and full visibility at every stage of your investment." },
  { Icon: Compass, title: "Trusted Guidance", body: "Advisory rooted in market insight — we recommend what genuinely fits your goals and budget." },
  { Icon: Zap, title: "Fast Response Time", body: "Active client desk replying within minutes during business hours, including weekends." },
  { Icon: Headset, title: "Professional Consultation", body: "Dedicated advisors guide you from inspection and verification through to delivery." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>A standard of service worthy of <span className="text-gold-gradient">your investment.</span></>}
          description="Six commitments that define every transaction we handle for our clients."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-all hover:shadow-gold-glow"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition-all duration-500 group-hover:bg-gold/15" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/40 bg-onyx text-gold">
                  <it.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}