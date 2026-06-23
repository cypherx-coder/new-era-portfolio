import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 180, damping: 16 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-whatsapp/30" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_10px_40px_-6px_rgba(34,197,94,0.6)] ring-2 ring-white/10">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full glass-strong px-3 py-1.5 text-xs font-medium text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat with us
      </span>
    </motion.a>
  );
}