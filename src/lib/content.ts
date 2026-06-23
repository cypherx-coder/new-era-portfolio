import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import vehicle1 from "@/assets/vehicle-1.jpg";
import vehicle2 from "@/assets/vehicle-2.jpg";
import vehicle3 from "@/assets/vehicle-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const soldProperties = [
  { id: "p1", name: "The Elite Private Estate", location: "Lekki – Epe Expressway, Lagos", image: property1 },
  { id: "p2", name: "Coral Heights Residency", location: "Ibeju – Lekki, Lagos", image: property2 },
  { id: "p3", name: "Royal Palms Manor", location: "Ajah, Lagos", image: property3 },
  { id: "p4", name: "Goldwood Court", location: "Sangotedo, Lagos", image: property1 },
  { id: "p5", name: "Harbour View Estate", location: "Lekki Phase 2, Lagos", image: property2 },
  { id: "p6", name: "The Crown Villas", location: "Ikorodu, Lagos", image: property3 },
];

export const deliveredVehicles = [
  { id: "v1", model: "Mercedes-Benz G-Wagon", year: "2022", image: vehicle1 },
  { id: "v2", model: "Lexus RX 350", year: "2021", image: vehicle2 },
  { id: "v3", model: "Toyota Land Cruiser Prado", year: "2023", image: vehicle3 },
  { id: "v4", model: "Range Rover Sport", year: "2022", image: vehicle1 },
  { id: "v5", model: "Lexus LX 570", year: "2020", image: vehicle2 },
  { id: "v6", model: "Toyota Hilux", year: "2023", image: vehicle3 },
];

export const opportunities = [
  {
    id: "o1",
    title: "Premium Land Plots – Sapphire Gardens",
    type: "Land",
    description:
      "600 sqm fully fenced and surveyed plots in a fast-appreciating corridor. Excellent for residential development or long-term hold.",
    image: property1,
  },
  {
    id: "o2",
    title: "Ocean Ridge Serviced Estate",
    type: "Estate",
    description:
      "Gated estate with paved roads, drainage, perimeter fencing and round-the-clock security. C of O ready.",
    image: property2,
  },
  {
    id: "o3",
    title: "Toyota Land Cruiser Prado – 2023",
    type: "Vehicle",
    description:
      "Foreign used. Full options, clean interior, accident-free. Inspection and verification available on request.",
    image: vehicle3,
  },
  {
    id: "o4",
    title: "Lexus RX 350 – 2021",
    type: "Vehicle",
    description:
      "Pearl white, premium leather, navigation, reverse camera. Available for nationwide delivery.",
    image: vehicle2,
  },
  {
    id: "o5",
    title: "Mercedes-Benz G-Wagon – 2022",
    type: "Vehicle",
    description:
      "AMG package, black-on-black. Verified mileage, full service history, ready for handover.",
    image: vehicle1,
  },
  {
    id: "o6",
    title: "Crown View Estate – Phase II",
    type: "Land",
    description:
      "Strategically located plots within 10 minutes of major commercial hubs. Flexible payment plans available.",
    image: property3,
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Engr. Adebayo Williams",
    role: "Property Investor, Lagos",
    quote:
      "From the first inspection to the title handover, every step was transparent and professional. New Era Lands & Motors gave me confidence to invest beyond a single plot.",
  },
  {
    id: "t2",
    name: "Mrs. Chinwe Okafor",
    role: "Business Owner, Abuja",
    quote:
      "I ordered a Lexus RX through them while I was abroad. They handled inspection, documentation and delivery seamlessly. Truly a trusted partner.",
  },
  {
    id: "t3",
    name: "Mr. Tunde Bakare",
    role: "Family Buyer, Ogun State",
    quote:
      "My family finally owns land in Lagos because of their guidance. Honest pricing, genuine documents, and they were patient through our payment plan.",
  },
  {
    id: "t4",
    name: "Dr. Hauwa Ibrahim",
    role: "Medical Consultant",
    quote:
      "Premium service end-to-end. The team treated my purchase like a high-value transaction should be treated — with discretion, speed and clarity.",
  },
];

export const galleryImages = [
  { src: gallery1, alt: "Client meeting and document review" },
  { src: property1, alt: "Estate development" },
  { src: gallery2, alt: "Vehicle handover" },
  { src: gallery3, alt: "Site inspection" },
  { src: property3, alt: "Estate gate" },
  { src: vehicle1, alt: "Luxury vehicle delivery" },
];

export const stats = [
  { value: 100, suffix: "+", label: "Successful Transactions" },
  { value: 50, suffix: "+", label: "Properties Sold" },
  { value: 80, suffix: "+", label: "Vehicles Delivered" },
  { value: 100, suffix: "%", label: "Client Commitment" },
];