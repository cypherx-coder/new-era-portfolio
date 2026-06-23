import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — New Era Lands & Motors Ltd" },
      { name: "description", content: "Reach New Era Lands & Motors Ltd by phone, WhatsApp or email. We respond within minutes during business hours." },
      { property: "og:title", content: "Contact New Era Lands & Motors Ltd" },
      { property: "og:description", content: "Talk to our advisors today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello, my name is ${form.name} (${form.email}).\n\n${form.message}`;
    window.open(whatsappUrl(msg), "_blank");
    setSent(true);
  };

  const channels = [
    { Icon: Phone, label: "Call us", value: SITE.phone, href: `tel:${SITE.phoneIntl}` },
    { Icon: MessageCircle, label: "WhatsApp", value: SITE.phone, href: whatsappUrl() },
    { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: MapPin, label: "Location", value: SITE.address, href: "#" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s start a <span className="text-gold-gradient">conversation.</span></>}
        description="Whether you're acquiring land, sourcing a vehicle or exploring an investment, our team is ready to help."
        breadcrumb="Contact"
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl glass-strong p-8 shadow-luxury">
                <h2 className="font-display text-2xl text-foreground">Reach our team</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  We typically respond within minutes during business hours (Mon – Sat).
                </p>
                <ul className="mt-8 space-y-4">
                  {channels.map(({ Icon, label, value, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-gold/20 p-4 transition-all hover:border-gold hover:shadow-gold-glow"
                      >
                        <span className="grid h-11 w-11 place-items-center rounded-xl border border-gold/40 bg-onyx text-gold">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
                          <span className="text-sm font-medium text-foreground">{value}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep px-6 py-3.5 text-sm font-semibold text-onyx shadow-gold-glow transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl glass p-8 shadow-luxury"
              >
                <h2 className="font-display text-2xl text-foreground">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form and we&apos;ll continue the conversation on WhatsApp.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="Full name">
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-gold/20 bg-onyx/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gold/20 bg-onyx/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    />
                  </Field>
                </div>
                <div className="mt-5">
                  <Field label="Message">
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you're looking to acquire..."
                      className="w-full resize-none rounded-xl border border-gold/20 bg-onyx/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-gold hover:shadow-gold-glow"
                >
                  {sent ? (
                    <>
                      <Check className="h-4 w-4 text-gold" />
                      <span className="text-gold-gradient">Opened in WhatsApp</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 text-gold" />
                      <span className="text-gold-gradient">Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}