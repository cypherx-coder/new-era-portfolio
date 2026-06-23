import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 sm:px-6",
            scrolled ? "glass-strong shadow-luxury" : "glass",
          )}
        >
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-onyx">
              <span className="font-display text-lg font-bold text-gold-gradient">N</span>
              <span className="absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-gold-glow" />
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-sm font-semibold tracking-wide text-foreground">
                NEW ERA
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Lands &amp; Motors
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                <span>{item.label}</span>
                <span className="pointer-events-none absolute inset-x-3 -bottom-px h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="hidden items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-gold hover:shadow-gold-glow md:inline-flex"
            >
              <Phone className="h-4 w-4 text-gold" />
              <span className="text-gold-gradient">{SITE.phone}</span>
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-foreground transition-colors hover:border-gold lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-2 overflow-hidden rounded-3xl glass-strong shadow-luxury lg:hidden"
            >
              <nav className="flex flex-col p-4">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-secondary/40 hover:text-foreground data-[status=active]:bg-secondary/40 data-[status=active]:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={`tel:${SITE.phoneIntl}`}
                  className="mt-2 flex items-center gap-2 rounded-2xl border border-gold/40 px-4 py-3 text-base font-medium text-foreground"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  <span className="text-gold-gradient">{SITE.phone}</span>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}