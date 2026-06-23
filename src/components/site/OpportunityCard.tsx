import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export interface Opportunity {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
}

export function OpportunityCard({ o, index = 0 }: { o: Opportunity; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-2xl glass shadow-luxury transition-all hover:shadow-gold-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={o.image}
          alt={o.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-onyx/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gold backdrop-blur">
          {o.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-foreground">{o.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{o.description}</p>
        <a
          href={whatsappUrl(`Hello, I'd like to enquire about: ${o.title}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-gold hover:shadow-gold-glow"
        >
          <MessageCircle className="h-4 w-4 text-gold" />
          <span className="text-gold-gradient">Enquire Now</span>
          <ArrowUpRight className="h-4 w-4 text-gold" />
        </a>
      </div>
    </motion.article>
  );
}