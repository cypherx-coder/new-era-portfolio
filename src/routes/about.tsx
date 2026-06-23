import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Handshake, Eye, Sparkles, HeartHandshake, Building2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { StatsSection } from "@/components/site/StatsSection";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import gallery1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — New Era Lands & Motors Ltd" },
      { name: "description", content: "Learn about New Era Lands & Motors Ltd — a trusted Nigerian company focused on transparent land acquisition, property investment and quality vehicle sourcing." },
      { property: "og:title", content: "About New Era Lands & Motors Ltd" },
      { property: "og:description", content: "Trust, integrity, transparency and professional excellence in every transaction." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Handshake, title: "Trust", body: "We do what we say. Every commitment is honoured." },
  { Icon: Award, title: "Integrity", body: "Honest dealings, honest pricing — always." },
  { Icon: Eye, title: "Transparency", body: "Full visibility at every stage of the transaction." },
  { Icon: Sparkles, title: "Professional Excellence", body: "World-class standards on every brief." },
  { Icon: HeartHandshake, title: "Client Satisfaction", body: "Your peace of mind is the real outcome we sell." },
  { Icon: Building2, title: "Long-term Partnership", body: "We build relationships, not just transactions." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>A trusted partner in <span className="text-gold-gradient">land & motors.</span></>}
        description="New Era Lands & Motors Ltd is a premium Nigerian company helping clients acquire valuable properties and quality vehicles through transparency, integrity and professional service."
        breadcrumb="About"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="relative overflow-hidden rounded-3xl glass shadow-luxury">
                <img src={gallery1} alt="Client meeting" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                <span className="h-px w-8 bg-gold/60" /> Our Story
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Built on <span className="text-gold-gradient">trust.</span> Driven by results.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Our work spans land acquisition, property investments, vehicle sales, auto
                  consulting, property advisory and asset acquisition. Across every service,
                  one principle stays constant: do right by the client.
                </p>
                <p>
                  Whether you are buying your first plot, expanding a property portfolio or
                  upgrading your fleet, we provide the verified guidance, documentation and
                  professional support to make confident decisions.
                </p>
                <p>
                  Our clients return because we treat their investments with the same care we&apos;d
                  give our own — and we&apos;re only just getting started.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-8 bg-gold/60" /> Our Values <span className="h-px w-8 bg-gold/60" />
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              The principles behind <span className="text-gold-gradient">every deal.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl glass p-7 hover:shadow-gold-glow"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/40 bg-onyx text-gold">
                  <v.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <WhatsAppCTA />
    </>
  );
}