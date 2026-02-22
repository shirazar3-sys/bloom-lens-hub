import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Heart, SlidersHorizontal, X } from "lucide-react";
import { photographers, photographerStyles, photographerTypes, regions } from "@/data/photographers";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Photographers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedStyles, setSelectedStyles] = useState<Set<string>>(new Set());
  const [savedPhotographers, setSavedPhotographers] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(true);
  const { t } = useLanguage();

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) => {
      const next = new Set(prev);
      if (next.has(style)) next.delete(style);
      else next.add(style);
      return next;
    });
  };

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedPhotographers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedRegion("all");
    setSelectedStyles(new Set());
  };

  const hasActiveFilters = searchQuery || selectedType !== "all" || selectedRegion !== "all" || selectedStyles.size > 0;

  const filteredPhotographers = useMemo(() => {
    return photographers.filter((p) => {
      const matchesSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.styles.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = selectedType === "all" || p.type === selectedType;
      const matchesRegion = selectedRegion === "all" || p.region === selectedRegion;
      const matchesStyles =
        selectedStyles.size === 0 || p.styles.some((s) => selectedStyles.has(s));

      return matchesSearch && matchesType && matchesRegion && matchesStyles;
    });
  }, [searchQuery, selectedType, selectedRegion, selectedStyles]);

  const pt = (t as any).photographers || {};

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              {pt.title || "Find Your Photographer"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {pt.subtitle || "Browse talented photographers by specialty, style, and location"}
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder={pt.searchPlaceholder || "Search by name, style, or keyword..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ps-10 h-12 text-base"
              />
            </div>
            <Button
              variant={showFilters ? "secondary" : "outline"}
              size="lg"
              className="gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              {pt.filters || "Filters"}
            </Button>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full md:w-48 h-11">
                      <SelectValue placeholder={pt.type || "Type"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{pt.allTypes || "All Types"}</SelectItem>
                      {photographerTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="w-full md:w-48 h-11">
                      <MapPin className="w-4 h-4 me-1 text-muted-foreground" />
                      <SelectValue placeholder={pt.location || "Location"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{pt.allLocations || "All Locations"}</SelectItem>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground" onClick={clearFilters}>
                      <X className="w-4 h-4" />
                      {pt.clearAll || "Clear all"}
                    </Button>
                  )}
                </div>

                {/* Style Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {photographerStyles.map((style) => (
                    <button
                      key={style}
                      onClick={() => toggleStyle(style)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                        selectedStyles.has(style)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background text-foreground/70 border-border hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredPhotographers.length} {pt.photographersFound || "photographers found"}
            </p>
            {savedPhotographers.size > 0 && (
              <p className="text-sm font-medium text-primary">
                {savedPhotographers.size} {pt.saved || "saved"}
              </p>
            )}
          </div>

          {/* Photographer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotographers.map((photographer, index) => (
              <motion.div
                key={photographer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link to={`/photographers/${photographer.id}`} className="block group">
                  <div className="relative rounded-xl overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Cover Photo */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={photographer.coverPhoto}
                        alt={photographer.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Save Button - visible on hover */}
                      <button
                        onClick={(e) => toggleSave(photographer.id, e)}
                        className={`absolute top-3 end-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                          savedPhotographers.has(photographer.id)
                            ? "bg-primary text-primary-foreground opacity-100"
                            : "bg-background/80 backdrop-blur-sm text-foreground/70 opacity-0 group-hover:opacity-100 hover:bg-background hover:text-primary"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            savedPhotographers.has(photographer.id) ? "fill-current" : ""
                          }`}
                        />
                      </button>

                      {/* Style badges on hover */}
                      <div className="absolute bottom-3 start-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {photographer.styles.slice(0, 2).map((style) => (
                          <Badge
                            key={style}
                            variant="secondary"
                            className="bg-background/80 backdrop-blur-sm text-foreground text-xs"
                          >
                            {style}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-foreground text-base font-sans">
                          {photographer.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-3.5 h-3.5 fill-accent-foreground text-accent-foreground" />
                          <span className="font-medium text-foreground">{photographer.rating}</span>
                          <span className="text-muted-foreground">({photographer.reviewCount})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        {photographer.location}
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {photographer.bio}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">{pt.startingFrom || "Starting from"}</span>
                        <span className="font-semibold text-foreground font-sans">
                          {photographer.currency}{photographer.startingPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPhotographers.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-1">
                {pt.noResults || "No photographers found"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {pt.noResultsDescription || "Try adjusting your filters or search terms"}
              </p>
              <Button variant="outline" onClick={clearFilters}>
                {pt.clearAll || "Clear all filters"}
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Photographers;
