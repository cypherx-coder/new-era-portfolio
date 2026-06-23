import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb?: string;
}

export function PageHero({ eyebrow, title, description, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 glass px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
          {breadcrumb && (
            <div className="mt-8 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-gold">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{breadcrumb}</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}