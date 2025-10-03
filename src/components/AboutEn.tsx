import React from "react";

const AboutEn: React.FC = () => {
  return (
    <section id="aboutEn" className="w-full py-20 bg-neutral-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
        
        {/* Artist image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/artista.jpeg" // replace with the artist's photo
            alt="Artist ACFR"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* About text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-6xl font-bold font-playfair mb-10 text-left text-white">
            About the Artist
          </h2>

          {/* First highlighted paragraph */}
          <p className="text-gray-200 font-playfair text-2xl md:text-2xl font-light mb-6 leading-relaxed">
            <span className="text-4xl md:text-5xl font-playfair font-semibold text-white mr-2">Ana</span>
            is an artist passionate about transforming materials and ideas into works that delight and inspire. She has developed a sensitive eye for shapes, colors, and textures, exploring different techniques such as handicrafts, oil painting, sculpture, and vase making.
          </p>

          {/* Other paragraphs */}
          <p className="text-gray-400 font-playfair md:text-2xl mb-4 leading-relaxed">
            Graduated in Fine Arts from PUC-Campinas, she combines technical knowledge and artistic sensitivity in each piece, creating unique works that balance tradition and innovation.
          </p>
          <p className="text-gray-400 font-playfair md:text-2xl leading-relaxed">
            Throughout her career, Ana has exhibited her works in various shows, captivating audiences with her ability to transform simplicity into beauty, making each creation a visual and emotional experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutEn;
