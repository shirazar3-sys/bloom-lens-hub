import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Heart, 
  Share2, 
  Grid, 
  LayoutGrid, 
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Import gallery images
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";

const photos = [
  { id: 1, src: photo1, title: "Wedding Portrait", orientation: "portrait" },
  { id: 2, src: photo2, title: "Mountain Sunrise", orientation: "landscape" },
  { id: 3, src: photo3, title: "Fashion Editorial", orientation: "portrait" },
  { id: 4, src: photo4, title: "Newborn Session", orientation: "square" },
  { id: 5, src: photo5, title: "Wedding Venue", orientation: "landscape" },
  { id: 6, src: photo6, title: "Corporate Headshot", orientation: "portrait" },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [gridSize, setGridSize] = useState<"small" | "large">("large");

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const openLightbox = (id: number) => {
    setSelectedPhoto(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = "auto";
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhoto === null) return;
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto);
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedPhoto(photos[newIndex].id);
  };

  const currentPhoto = photos.find(p => p.id === selectedPhoto);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Gallery Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                  Sarah & Michael's Wedding
                </h1>
                <p className="text-muted-foreground">
                  October 15, 2024 • 248 photos • Shared by Emma Photography
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="hero" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download All
                </Button>
              </div>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2 mt-6">
              <span className="text-sm text-muted-foreground mr-2">View:</span>
              <Button 
                variant={gridSize === "large" ? "secondary" : "ghost"} 
                size="icon"
                onClick={() => setGridSize("large")}
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button 
                variant={gridSize === "small" ? "secondary" : "ghost"} 
                size="icon"
                onClick={() => setGridSize("small")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              
              {favorites.size > 0 && (
                <span className="ml-4 text-sm text-primary font-medium">
                  {favorites.size} favorites selected
                </span>
              )}
            </div>
          </div>

          {/* Photo Grid */}
          <div className={`grid gap-4 ${
            gridSize === "large" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          }`}>
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className={`group relative overflow-hidden rounded-xl bg-muted cursor-pointer ${
                  photo.orientation === "portrait" && gridSize === "large" ? "row-span-2" : ""
                }`}
                onClick={() => openLightbox(photo.id)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: photo.orientation === "portrait" ? "3/4" : photo.orientation === "landscape" ? "4/3" : "1/1" }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-background text-sm font-medium">
                    {photo.title}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-background hover:bg-background/20"
                    onClick={(e) => toggleFavorite(photo.id, e)}
                  >
                    <Heart className={`w-5 h-5 ${favorites.has(photo.id) ? "fill-primary text-primary" : ""}`} />
                  </Button>
                </div>
                
                {/* Favorite indicator */}
                {favorites.has(photo.id) && (
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Heart className="w-4 h-4 text-primary-foreground fill-current" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedPhoto !== null && currentPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-4 right-4 text-background hover:bg-background/10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/10"
            onClick={(e) => { e.stopPropagation(); navigatePhoto("prev"); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/10"
            onClick={(e) => { e.stopPropagation(); navigatePhoto("next"); }}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
          
          <img 
            src={currentPhoto.src} 
            alt={currentPhoto.title}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-background hover:bg-background/10 gap-2"
              onClick={(e) => { e.stopPropagation(); toggleFavorite(currentPhoto.id, e); }}
            >
              <Heart className={`w-5 h-5 ${favorites.has(currentPhoto.id) ? "fill-primary text-primary" : ""}`} />
              Favorite
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-background hover:bg-background/10 gap-2"
            >
              <Download className="w-5 h-5" />
              Download
            </Button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
