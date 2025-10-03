import React from "react";

const HeroEn: React.FC = () => {
  return (
    <section
      className="w-full h-[60vh] relative flex items-center justify-start bg-gray-900 text-white px-8 md:px-16"
      style={{
        backgroundImage: "url('/banner2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl pb-20">
        <h1 className="text-4xl md:text-7xl font-playfair mb-4">
          Art Like Never Before
        </h1>
        <p className="text-lg md:text-xl font-montserrat mb-8">
          Exploring the beauty of contemporary art
        </p>
        <a
          href="#gallery"
          className="inline-block bg-white text-black font-montserrat px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          View Gallery
        </a>
      </div>
    </section>
  );
};

export default HeroEn;
