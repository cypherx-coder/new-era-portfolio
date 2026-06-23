import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { soldProperties, deliveredVehicles } from "@/lib/content";

export function PortfolioPreview() {
  const props = soldProperties.slice(0, 3);
  const vehs = deliveredVehicles.slice(0, 3);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title={<>Properties sold. Vehicles <span className="text-gold-gradient">delivered.</span></>}
          description="A small selection of recent transactions handled end-to-end by our team."
        />

        <div className="mt-14">
          <div className="flex items-end justify-between">
            <h3 className="font-display text-2xl text-foreground">Sold Properties</h3>
            <Link to="/portfolio" className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-gold hover:text-gold-soft sm:inline-flex">
              View all →
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {props.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass shadow-luxury"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full border border-gold/40 bg-onyx/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gold backdrop-blur">
                    Sold
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg text-foreground">{p.name}</h4>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-gold" />
                    {p.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between">
            <h3 className="font-display text-2xl text-foreground">Vehicles Delivered</h3>
            <Link to="/portfolio" className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-gold hover:text-gold-soft sm:inline-flex">
              View all →
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {vehs.map((v, i) => (
              <motion.article
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass shadow-luxury"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-onyx">
                  <img
                    src={v.image}
                    alt={v.model}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute right-4 top-4 rounded-full border border-gold/40 bg-onyx/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gold backdrop-blur">
                    Delivered
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg text-foreground">{v.model}</h4>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-gold" />
                    {v.year}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-gold hover:shadow-gold-glow"
          >
            <span className="text-gold-gradient">Explore the full portfolio</span>
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}