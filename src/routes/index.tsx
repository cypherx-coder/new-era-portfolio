import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SITE, whatsappUrl } from "@/lib/site";
import { StatsSection } from "@/components/site/StatsSection";
import { PortfolioPreview } from "@/components/site/PortfolioPreview";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import { SectionHeader } from "@/components/site/SectionHeader";
import { OpportunityCard } from "@/components/site/OpportunityCard";
import { opportunities } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Era Lands & Motors Ltd — Land, Property & Vehicles in Nigeria" },
      { name: "description", content: "Trusted experts in land acquisition, property investment and quality vehicle sourcing. Helping individuals, families and businesses make confident investment decisions." },
      { property: "og:title", content: "New Era Lands & Motors Ltd" },
      { property: "og:description", content: "Building wealth through land. Delivering value through vehicles." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const featured = opportunities.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/55 to-onyx" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_55%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pt-36 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 glass px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold"
            >
              <Sparkles className="h-3 w-3" />
              Real Estate · Vehicles · Advisory
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              Building Wealth Through{" "}
              <span className="text-gold-gradient">Land.</span>
              <br className="hidden sm:block" />
              Delivering Value Through{" "}
              <span className="text-gold-gradient">Vehicles.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Trusted experts in land acquisition, property investment and quality vehicle sourcing.
              Helping individuals, families and businesses make confident investment decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep px-7 py-3.5 text-sm font-semibold text-onyx shadow-gold-glow transition-transform hover:scale-[1.03]"
              >
                View Portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-gold/40 glass-strong px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-gold hover:shadow-gold-glow"
              >
                <MessageCircle className="h-4 w-4 text-whatsapp" />
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-14 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl glass-strong"
            >
              {[
                ["100+", "Transactions"],
                ["50+", "Properties"],
                ["80+", "Vehicles"],
              ].map(([v, l]) => (
                <div key={l} className="bg-onyx/40 p-4 text-center">
                  <div className="font-display text-2xl text-gold-gradient">{v}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ABOUT SUMMARY */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                <span className="h-px w-8 bg-gold/60" />
                About {SITE.shortName}
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                A new standard for <span className="text-gold-gradient">trust</span> in land and motors.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                New Era Lands &amp; Motors Ltd is built on a simple belief — that every Nigerian
                deserves transparent guidance when acquiring valuable property or a quality vehicle.
                From verified documentation to honest pricing, we treat your investment as our own.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-gold hover:shadow-gold-glow"
              >
                <span className="text-gold-gradient">Read our story</span>
                <ArrowUpRight className="h-4 w-4 text-gold" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4 lg:col-span-7"
            >
              {[
                "Trust",
                "Integrity",
                "Transparency",
                "Professional Excellence",
                "Client Satisfaction",
                "Long-term Partnership",
              ].map((v, i) => (
                <div
                  key={v}
                  className="rounded-2xl glass p-6 transition-all hover:shadow-gold-glow"
                >
                  <div className="font-display text-3xl text-gold-gradient">0{i + 1}</div>
                  <div className="mt-3 font-display text-lg text-foreground">{v}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />

      <PortfolioPreview />

      {/* OPPORTUNITIES PREVIEW */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Available Opportunities"
            title={<>Current <span className="text-gold-gradient">lands & vehicles</span> available.</>}
            description="Verified, documented and ready for acquisition. Reach out on WhatsApp for inspection and full pricing."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((o, i) => (
              <OpportunityCard key={o.id} o={o} index={i} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              to="/opportunities"
              className="group inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-foreground hover:border-gold hover:shadow-gold-glow"
            >
              <span className="text-gold-gradient">View all opportunities</span>
              <ArrowUpRight className="h-4 w-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TestimonialsCarousel />
      <WhatsAppCTA />
    </>
  );
}
