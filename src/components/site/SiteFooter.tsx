import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, ArrowUpRight } from "lucide-react";
import { NAV, SITE, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-gold/20 bg-onyx/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-onyx">
                <span className="font-display text-xl font-bold text-gold-gradient">N</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-semibold tracking-wide text-foreground">
                  NEW ERA LANDS &amp; MOTORS LTD
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Real Estate · Vehicles · Advisory
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              A trusted partner for land acquisition, property investment and quality vehicle sourcing.
              We help individuals, families and businesses make confident, well-documented decisions.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-gold hover:shadow-gold-glow"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              <span className="text-gold-gradient">Chat on WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 text-gold" />
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Navigate</h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-gold" />
                <a href={`tel:${SITE.phoneIntl}`} className="hover:text-foreground">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-gold" />
                <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                <span>{SITE.address}</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: MessageCircle, label: "WhatsApp", href: whatsappUrl() },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-muted-foreground transition-all hover:border-gold hover:text-gold hover:shadow-gold-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-gold/15 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} New Era Lands &amp; Motors Ltd. All rights reserved.</p>
          <p className="tracking-[0.22em] uppercase text-gold/80">Integrity · Trust · Excellence</p>
        </div>
      </div>
    </footer>
  );
}