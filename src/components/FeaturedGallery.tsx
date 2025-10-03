import React from "react";

interface FeaturedGalleryProps {
  image: string;
  alt?: string;
}

const FeaturedGallery: React.FC<FeaturedGalleryProps> = ({ image, alt }) => {
  return (
    <section className="max-w-6xl mx-auto p-6 mb-12">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={image}
          alt={alt || "Quadro em destaque"}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default FeaturedGallery;
