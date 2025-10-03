interface GalleryItem {
  src: string;
  alt?: string;
}

interface GalleryProps {
  images: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section id="gallery" className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
        >
          <img src={img.src} alt={img.alt || `Quadro ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
