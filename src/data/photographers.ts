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
  instagram?: string;
  facebook?: string;
  email?: string;
  phone?: string;
}

export const photographerStyles = [
  "חתונות",
  "פורטרט",
  "אופנה",
  "ניובורן",
  "עסקי",
  "טבע",
  "אירועים",
  "אוכל",
  "אדריכלות",
  "דוקומנטרי",
];

export const photographerTypes = [
  "חתונות",
  "פורטרט",
  "מסחרי",
  "אירועים",
  "אמנות",
  "מוצר",
];

export const regions = [
  "אילת",
  "דרום",
  "ירושלים",
  "מרכז",
  "צפון",
];

export const photographers: Photographer[] = [
  {
    id: "emma-ross",
    name: "אמה רוס",
    avatar: photo1,
    coverPhoto: photo1,
    location: "מרכז",
    region: "מרכז",
    type: "חתונות",
    styles: ["חתונות", "פורטרט", "דוקומנטרי"],
    rating: 4.9,
    reviewCount: 127,
    startingPrice: 3500,
    currency: "₪",
    bio: "צלמת חתונות מעטרת פרסים עם 10 שנות ניסיון בלכידת סיפורי אהבה ברחבי ישראל.",
    portfolio: [photo1, photo2, photo3, photo4, photo5, photo6],
    instagram: "https://instagram.com/emmaross",
    facebook: "https://facebook.com/emmaross",
    email: "emma@example.com",
    phone: "050-1234567",
  },
  {
    id: "david-cohen",
    name: "דוד כהן",
    avatar: photo2,
    coverPhoto: photo2,
    location: "ירושלים",
    region: "ירושלים",
    type: "פורטרט",
    styles: ["פורטרט", "עסקי", "אופנה"],
    rating: 4.8,
    reviewCount: 89,
    startingPrice: 1200,
    currency: "₪",
    bio: "מתמחה בפורטרטים קולנועיים ותמונות תדמית עסקיות שמספרות את הסיפור שלכם.",
    portfolio: [photo2, photo3, photo4, photo5, photo6, photo1],
    instagram: "https://instagram.com/davidcohen",
    email: "david@example.com",
    phone: "052-9876543",
  },
  {
    id: "sarah-levi",
    name: "שרה לוי",
    avatar: photo3,
    coverPhoto: photo3,
    location: "צפון",
    region: "צפון",
    type: "אמנות",
    styles: ["אופנה", "אמנות", "פורטרט"],
    rating: 4.7,
    reviewCount: 64,
    startingPrice: 2000,
    currency: "₪",
    bio: "צלמת אופנה ואמנות שדוחפת גבולות יצירתיים בכל צילום.",
    portfolio: [photo3, photo4, photo5, photo6, photo1, photo2],
    instagram: "https://instagram.com/sarahlevi",
    facebook: "https://facebook.com/sarahlevi",
    email: "sarah@example.com",
  },
  {
    id: "yoni-klein",
    name: "יוני קליין",
    avatar: photo4,
    coverPhoto: photo4,
    location: "מרכז",
    region: "מרכז",
    type: "מסחרי",
    styles: ["ניובורן", "פורטרט", "אירועים"],
    rating: 4.9,
    reviewCount: 203,
    startingPrice: 1800,
    currency: "₪",
    bio: "מנציח רגעים יקרים של ניובורן ואבני דרך משפחתיות בחום ואומנות.",
    portfolio: [photo4, photo5, photo6, photo1, photo2, photo3],
    instagram: "https://instagram.com/yoniklein",
    facebook: "https://facebook.com/yoniklein",
    email: "yoni@example.com",
    phone: "054-5551234",
  },
  {
    id: "maya-bergman",
    name: "מאיה ברגמן",
    avatar: photo5,
    coverPhoto: photo5,
    location: "מרכז",
    region: "מרכז",
    type: "אירועים",
    styles: ["אירועים", "עסקי", "חתונות"],
    rating: 4.6,
    reviewCount: 156,
    startingPrice: 2500,
    currency: "₪",
    bio: "צלמת אירועים מקצועית המכסה אירועים עסקיים, כנסים וחגיגות.",
    portfolio: [photo5, photo6, photo1, photo2, photo3, photo4],
    email: "maya@example.com",
    phone: "053-7778899",
  },
  {
    id: "lior-shapira",
    name: "ליאור שפירא",
    avatar: photo6,
    coverPhoto: photo6,
    location: "דרום",
    region: "דרום",
    type: "אמנות",
    styles: ["טבע", "דוקומנטרי", "אדריכלות"],
    rating: 4.8,
    reviewCount: 42,
    startingPrice: 900,
    currency: "₪",
    bio: "צלם נוף וטבע החוקר את היופי של השטח המגוון של ישראל.",
    portfolio: [photo6, photo1, photo2, photo3, photo4, photo5],
    instagram: "https://instagram.com/liorshapira",
    email: "lior@example.com",
  },
  {
    id: "noa-avraham",
    name: "נועה אברהם",
    avatar: photo1,
    coverPhoto: photo2,
    location: "מרכז",
    region: "מרכז",
    type: "מוצר",
    styles: ["אוכל", "מוצר", "אדריכלות"],
    rating: 4.7,
    reviewCount: 78,
    startingPrice: 1500,
    currency: "₪",
    bio: "צלמת אוכל ומוצרים היוצרת ויזואליות מפתה למותגים ומסעדות.",
    portfolio: [photo2, photo1, photo3, photo5, photo4, photo6],
    instagram: "https://instagram.com/noaavraham",
    facebook: "https://facebook.com/noaavraham",
    email: "noa@example.com",
    phone: "050-3334455",
  },
  {
    id: "daniel-mizrachi",
    name: "דניאל מזרחי",
    avatar: photo3,
    coverPhoto: photo4,
    location: "אילת",
    region: "אילת",
    type: "חתונות",
    styles: ["חתונות", "אירועים", "פורטרט"],
    rating: 4.9,
    reviewCount: 311,
    startingPrice: 4000,
    currency: "₪",
    bio: "צלם חתונות יוקרתי היוצר זכרונות נצחיים לזוגות ברחבי ישראל והעולם.",
    portfolio: [photo4, photo3, photo5, photo6, photo1, photo2],
    instagram: "https://instagram.com/danielmizrachi",
    facebook: "https://facebook.com/danielmizrachi",
    email: "daniel@example.com",
    phone: "058-1112233",
  },
];
