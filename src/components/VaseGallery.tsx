import React from "react";

interface VaseGalleryItem {
  src: string;
  alt?: string;
}

interface VaseGalleryProps {
  items: VaseGalleryItem[];
}

const VaseGallery: React.FC<VaseGalleryProps> = ({ items }) => {
  return (
    <section id="vases" className="max-w-6xl mx-auto p-6 py-12">
      <h2 className="text-4xl font-playfair font-semibold text-gray-900 mb-10 text-center">
        Vasos e Criações
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          >
            <img
              src={item.src}
              alt={item.alt || `Vaso ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VaseGallery;
