import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import { OpportunityCard } from "@/components/site/OpportunityCard";
import { opportunities } from "@/lib/content";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Available Opportunities — New Era Lands & Motors Ltd" },
      { name: "description", content: "Browse current lands and vehicles available for acquisition from New Era Lands & Motors Ltd." },
      { property: "og:title", content: "Available Opportunities" },
      { property: "og:description", content: "Verified, documented and ready for acquisition." },
      { property: "og:url", content: "/opportunities" },
    ],
    links: [{ rel: "canonical", href: "/opportunities" }],
  }),
  component: OpportunitiesPage,
});

function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Available Opportunities"
        title={<>Lands &amp; vehicles <span className="text-gold-gradient">available now.</span></>}
        description="Each listing is verified, documented and ready for inspection. Enquire on WhatsApp for full pricing and viewing."
        breadcrumb="Opportunities"
      />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((o, i) => (
              <OpportunityCard key={o.id} o={o} index={i} />
            ))}
          </div>
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
}