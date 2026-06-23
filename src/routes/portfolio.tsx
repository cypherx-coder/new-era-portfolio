import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { soldProperties, deliveredVehicles, galleryImages } from "@/lib/content";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — New Era Lands & Motors Ltd" },
      { name: "description", content: "Browse a selection of properties sold and vehicles delivered by New Era Lands & Motors Ltd." },
      { property: "og:title", content: "Portfolio — New Era Lands & Motors Ltd" },
      { property: "og:description", content: "Sold properties and delivered vehicles handled end-to-end by our team." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Properties sold. <span className="text-gold-gradient">Vehicles delivered.</span></>}
        description="A growing record of successful transactions across Lagos and beyond."
        breadcrumb="Portfolio"
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Sold Properties"
            title={<>Estates &amp; land plots <span className="text-gold-gradient">delivered to owners.</span></>}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {soldProperties.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group overflow-hidden rounded-2xl glass shadow-luxury"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full border border-gold/40 bg-onyx/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gold backdrop-blur">
                    Sold
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-foreground">{p.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-gold" />
                    {p.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Vehicles Delivered"
            title={<>Premium vehicles <span className="text-gold-gradient">handed over.</span></>}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliveredVehicles.map((v, i) => (
              <motion.article
                key={v.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group overflow-hidden rounded-2xl glass shadow-luxury"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-onyx">
                  <img src={v.image} alt={v.model} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute right-4 top-4 rounded-full border border-gold/40 bg-onyx/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gold backdrop-blur">
                    Delivered
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-foreground">{v.model}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-gold" />
                    {v.year}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Gallery"
            title={<>Behind the <span className="text-gold-gradient">deals.</span></>}
            description="Site inspections, estate visits, vehicle handovers, client meetings — moments from real transactions."
          />
          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 md:auto-rows-[220px] md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group overflow-hidden rounded-2xl glass ${i === 0 ? "row-span-2" : ""} ${i === 3 ? "col-span-2" : ""}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}