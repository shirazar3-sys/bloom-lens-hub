// Feature data for products dropdown and feature sections
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";

export interface Feature {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  cta: string;
  images: string[];
  mockupType: "grid" | "cards" | "browser" | "search" | "directory" | "security" | "edit" | "community";
}

export const features: Feature[] = [
  {
    id: "galleries",
    title: "Beautiful Galleries",
    shortTitle: "Photo Galleries",
    subtitle: "SHARE YOUR BEST WORK",
    description: "Upload and share stunning photo galleries with your customers. Create branded, responsive galleries that showcase your work beautifully across all devices. Clients can view, favorite, and download their photos with ease.",
    cta: "Explore Galleries",
    images: [photo1, photo2, photo3, photo4],
    mockupType: "grid",
  },
  {
    id: "ai-search",
    title: "AI Gallery Search",
    shortTitle: "AI Gallery Search",
    subtitle: "FIND MOMENTS INSTANTLY",
    description: "Let your clients quickly and easily find their favorite moments with the people they love. Our advanced AI recognizes faces and understands natural language, so searching for 'bride laughing' or 'grandma with kids' just works.",
    cta: "See AI Search",
    images: [photo1, photo2, photo3],
    mockupType: "search",
  },
  {
    id: "studio-management",
    title: "Studio Management",
    shortTitle: "Manage Studio",
    subtitle: "RUN YOUR BUSINESS SEAMLESSLY",
    description: "Everything you need to manage your photography business in one place. Event calendar, customer management, contracts, invoicing, and billing—all streamlined so you can focus on what you do best: creating beautiful images.",
    cta: "Manage Your Studio",
    images: [photo5, photo6, photo1],
    mockupType: "cards",
  },
  {
    id: "photographer-index",
    title: "Photographers Directory",
    shortTitle: "Photographer Index",
    subtitle: "EXPAND YOUR REACH",
    description: "Get discovered by new clients through our public photographers directory. Showcase your portfolio, specialties, and availability to potential customers actively looking for talented photographers in their area.",
    cta: "Join Directory",
    images: [photo2, photo3, photo4, photo5],
    mockupType: "directory",
  },
  {
    id: "photographer-community",
    title: "Home for All Photographers",
    shortTitle: "Photographer Community",
    subtitle: "EVERY SPECIALTY WELCOME",
    description: "Whether you shoot weddings, business events, nature, fashion, portraits, or even animals—you belong here. Our platform is designed to serve photographers of every specialty with tools tailored to your unique needs.",
    cta: "Join Our Community",
    images: [photo1, photo4, photo5, photo6],
    mockupType: "community",
  },
  {
    id: "photo-editing",
    title: "Photo Editing Suite",
    shortTitle: "Photo Edits",
    subtitle: "PERFECT YOUR IMAGES",
    description: "Give your photos the final professional touch with our built-in editing tools. Adjust lighting, colors, and apply filters, then share the polished results directly with clients and on social media—all in one seamless workflow.",
    cta: "Start Editing",
    images: [photo3, photo4, photo1],
    mockupType: "edit",
  },
  {
    id: "security",
    title: "Security & Privacy",
    shortTitle: "Security & Privacy",
    subtitle: "FULL ACCESS CONTROL",
    description: "Keep your work and your clients' memories safe. Private galleries, secure sharing links, granular permission management, and password protection ensure only the right people see the right photos.",
    cta: "Learn About Security",
    images: [photo2, photo5, photo6, photo1],
    mockupType: "security",
  },
  {
    id: "client-portal",
    title: "Client Portal",
    shortTitle: "Client Portal",
    subtitle: "SEAMLESS CLIENT EXPERIENCE",
    description: "Keep all client information organized with detailed profiles and communication history. Build stronger relationships with a dedicated portal where clients can view galleries, sign contracts, and make payments.",
    cta: "See Client Portal",
    images: [photo2, photo3, photo4, photo5],
    mockupType: "browser",
  },
];

export const getFeatureById = (id: string): Feature | undefined => {
  return features.find((f) => f.id === id);
};
