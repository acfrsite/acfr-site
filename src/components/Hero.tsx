import React from "react";

const Hero: React.FC = () => {
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

  {/* Conteúdo */}
  <div className="relative z-10 max-w-3xl pb-20">
    <h1 className="text-4xl md:text-7xl font-playfair mb-4">
      Arte nunca vista
    </h1>
    <p className="text-lg md:text-xl font-montserrat mb-8">
      Explorando a beleza da arte contemporânea
    </p>
    <a
      href="#gallery"
      className="inline-block bg-white text-black font-montserrat px-6 py-3 rounded-md hover:bg-gray-200 transition"
    >
      Ver Galeria
    </a>
  </div>
</section>
  );
};

export default Hero;
