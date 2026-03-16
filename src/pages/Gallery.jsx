import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1603553329474-99f95f35394f?w=800&q=80", alt: "Panel beating work", category: "Panel Beating" },
  { src: "https://images.unsplash.com/photo-1621963416944-c7e20dba8137?w=800&q=80", alt: "Spray painting booth", category: "Spray Painting" },
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", alt: "Engine repair", category: "Engine Repair" },
  { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", alt: "Accident repair", category: "Accident Repair" },
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", alt: "Restored vehicle", category: "Restoration" },
  { src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80", alt: "Vehicle maintenance", category: "Maintenance" },
  { src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80", alt: "Workshop overview", category: "Workshop" },
  { src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80", alt: "Diagnostics equipment", category: "Diagnostics" },
  { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80", alt: "Auto repair in progress", category: "Panel Beating" },
];

const categories = ["All", "Panel Beating", "Spray Painting", "Engine Repair", "Accident Repair", "Restoration", "Maintenance"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Header */}
      <section className="bg-foreground text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4">Project Gallery</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Browse through our completed projects showcasing our quality workmanship.
          </p>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-heading font-semibold">{item.alt}</p>
                    <p className="text-white/60 text-sm">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
