import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { photographers } from "@/data/photographers";
import { MapPin, Star, Heart, ArrowLeft, Mail, Camera, Phone, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const PhotographerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const photographer = photographers.find((p) => p.id === id);
  const [saved, setSaved] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  if (!photographer) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16 container mx-auto px-6 text-center">
          <h1 className="text-2xl font-serif font-bold mb-4">הצלם לא נמצא</h1>
          <Link to="/photographers">
            <Button variant="outline">חזרה לרשימה</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/photographers"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            חזרה לרשימה
          </Link>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-border/50 shadow-card">
              <img
                src={photographer.avatar}
                alt={photographer.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                    {photographer.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {photographer.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Camera className="w-4 h-4" />
                      {photographer.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent-foreground text-accent-foreground" />
                      {photographer.rating} ({photographer.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={saved ? "default" : "outline"}
                    size="default"
                    className="gap-2"
                    onClick={() => setSaved(!saved)}
                  >
                    <Heart className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
                    {saved ? "נשמר" : "שמור"}
                  </Button>
                  {photographer.instagram && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={photographer.instagram} target="_blank" rel="noopener noreferrer" aria-label="אינסטגרם">
                        <Instagram className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {photographer.facebook && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={photographer.facebook} target="_blank" rel="noopener noreferrer" aria-label="פייסבוק">
                        <Facebook className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {photographer.email && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={`mailto:${photographer.email}`} aria-label="דוא״ל">
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {photographer.phone && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={`tel:${photographer.phone}`} aria-label="טלפון">
                        <Phone className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-foreground/80 text-base leading-relaxed mb-4 max-w-2xl">
                {photographer.bio}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {photographer.styles.map((style) => (
                  <Badge key={style} variant="outline" className="text-sm">
                    {style}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-border/50">
                <span className="text-sm text-muted-foreground">החל מ-</span>
                <span className="text-xl font-bold text-foreground font-sans">
                  {photographer.currency}{photographer.startingPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Portfolio Gallery */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">תיק עבודות</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photographer.portfolio.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedPhoto(index)}
                >
                  <img
                    src={photo}
                    alt={`${photographer.name} portfolio ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <img
            src={photographer.portfolio[selectedPhoto]}
            alt=""
            className="max-w-[90vw] max-h-[85vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PhotographerProfile;
