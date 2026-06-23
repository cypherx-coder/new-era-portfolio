export const SITE = {
  name: "New Era Lands & Motors Ltd",
  shortName: "New Era L&M",
  tagline: "Building Wealth Through Land. Delivering Value Through Vehicles.",
  phone: "08065471491",
  phoneIntl: "+2348065471491",
  whatsapp: "2348065471491",
  email: "info@neweralandsmotors.com",
  address: "Lagos, Nigeria",
  whatsappMessage: "Hello New Era Lands & Motors, I'd like to make an enquiry.",
};

export const whatsappUrl = (message: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/opportunities", label: "Opportunities" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;