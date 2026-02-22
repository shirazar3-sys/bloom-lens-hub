import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";

export interface Photographer {
  id: string;
  name: string;
  avatar: string;
  coverPhoto: string;
  location: string;
  region: string;
  type: string;
  styles: string[];
  rating: number;
  reviewCount: number;
  startingPrice: number;
  currency: string;
  bio: string;
  portfolio: string[];
}

export const photographerStyles = [
  "Wedding",
  "Portrait",
  "Fashion",
  "Newborn",
  "Corporate",
  "Nature",
  "Events",
  "Food",
  "Architecture",
  "Documentary",
];

export const photographerTypes = [
  "Wedding",
  "Portrait",
  "Commercial",
  "Event",
  "Fine Art",
  "Product",
];

export const regions = [
  "Tel Aviv",
  "Jerusalem",
  "Haifa",
  "Beer Sheva",
  "Eilat",
  "Herzliya",
  "Netanya",
  "Ramat Gan",
];

export const photographers: Photographer[] = [
  {
    id: "emma-ross",
    name: "Emma Ross",
    avatar: photo1,
    coverPhoto: photo1,
    location: "Tel Aviv",
    region: "Tel Aviv",
    type: "Wedding",
    styles: ["Wedding", "Portrait", "Documentary"],
    rating: 4.9,
    reviewCount: 127,
    startingPrice: 3500,
    currency: "₪",
    bio: "Award-winning wedding photographer with 10 years of experience capturing love stories across Israel.",
    portfolio: [photo1, photo2, photo3, photo4, photo5, photo6],
  },
  {
    id: "david-cohen",
    name: "David Cohen",
    avatar: photo2,
    coverPhoto: photo2,
    location: "Jerusalem",
    region: "Jerusalem",
    type: "Portrait",
    styles: ["Portrait", "Corporate", "Fashion"],
    rating: 4.8,
    reviewCount: 89,
    startingPrice: 1200,
    currency: "₪",
    bio: "Specializing in cinematic portraits and corporate headshots that tell your story.",
    portfolio: [photo2, photo3, photo4, photo5, photo6, photo1],
  },
  {
    id: "sarah-levi",
    name: "Sarah Levi",
    avatar: photo3,
    coverPhoto: photo3,
    location: "Haifa",
    region: "Haifa",
    type: "Fine Art",
    styles: ["Fashion", "Fine Art", "Portrait"],
    rating: 4.7,
    reviewCount: 64,
    startingPrice: 2000,
    currency: "₪",
    bio: "Fashion and fine art photographer pushing creative boundaries with every shoot.",
    portfolio: [photo3, photo4, photo5, photo6, photo1, photo2],
  },
  {
    id: "yoni-klein",
    name: "Yoni Klein",
    avatar: photo4,
    coverPhoto: photo4,
    location: "Tel Aviv",
    region: "Tel Aviv",
    type: "Commercial",
    styles: ["Newborn", "Portrait", "Events"],
    rating: 4.9,
    reviewCount: 203,
    startingPrice: 1800,
    currency: "₪",
    bio: "Capturing precious newborn moments and family milestones with warmth and artistry.",
    portfolio: [photo4, photo5, photo6, photo1, photo2, photo3],
  },
  {
    id: "maya-bergman",
    name: "Maya Bergman",
    avatar: photo5,
    coverPhoto: photo5,
    location: "Herzliya",
    region: "Herzliya",
    type: "Event",
    styles: ["Events", "Corporate", "Wedding"],
    rating: 4.6,
    reviewCount: 156,
    startingPrice: 2500,
    currency: "₪",
    bio: "Professional event photographer covering corporate events, conferences, and celebrations.",
    portfolio: [photo5, photo6, photo1, photo2, photo3, photo4],
  },
  {
    id: "lior-shapira",
    name: "Lior Shapira",
    avatar: photo6,
    coverPhoto: photo6,
    location: "Beer Sheva",
    region: "Beer Sheva",
    type: "Fine Art",
    styles: ["Nature", "Documentary", "Architecture"],
    rating: 4.8,
    reviewCount: 42,
    startingPrice: 900,
    currency: "₪",
    bio: "Landscape and nature photographer exploring the beauty of Israel's diverse terrain.",
    portfolio: [photo6, photo1, photo2, photo3, photo4, photo5],
  },
  {
    id: "noa-avraham",
    name: "Noa Avraham",
    avatar: photo1,
    coverPhoto: photo2,
    location: "Ramat Gan",
    region: "Ramat Gan",
    type: "Product",
    styles: ["Food", "Product", "Architecture"],
    rating: 4.7,
    reviewCount: 78,
    startingPrice: 1500,
    currency: "₪",
    bio: "Food and product photographer creating mouth-watering visuals for brands and restaurants.",
    portfolio: [photo2, photo1, photo3, photo5, photo4, photo6],
  },
  {
    id: "daniel-mizrachi",
    name: "Daniel Mizrachi",
    avatar: photo3,
    coverPhoto: photo4,
    location: "Netanya",
    region: "Netanya",
    type: "Wedding",
    styles: ["Wedding", "Events", "Portrait"],
    rating: 4.9,
    reviewCount: 311,
    startingPrice: 4000,
    currency: "₪",
    bio: "Luxury wedding photographer creating timeless memories for couples across Israel and abroad.",
    portfolio: [photo4, photo3, photo5, photo6, photo1, photo2],
  },
];
