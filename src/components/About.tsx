import React from "react";

const About: React.FC = () => {
  return (
    <section id="sobre" className="w-full py-20 bg-neutral-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
        
        {/* Imagem da artista */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/artista.jpeg" // substitua pela foto da artista
            alt="Artista ACFR"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Texto sobre */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-6xl font-bold font-playfair mb-10 text-left text-white">
            Sobre a Artista
          </h2>

          {/* Primeiro parágrafo com destaque */}
          <p className="text-gray-200 font-playfair text-2xl md:text-2xl font-light mb-6 leading-relaxed">
            <span className="text-4xl md:text-5xl font-playfair font-semibold text-white mr-2">Ana</span>
            é uma artista apaixonada por transformar matéria e ideias em obras que encantam e inspiram. Desenvolveu um olhar sensível para as formas, cores e texturas, explorando diferentes técnicas de artesanato, pintura a óleo, escultura e confecção de vasos.
          </p>

          {/* Demais parágrafos */}
          <p className="text-gray-400 font-playfair md:text-2xl mb-4 leading-relaxed">
            Graduada em Artes Plásticas pela PUC-Campinas, ela combina conhecimento técnico e sensibilidade artística em cada peça, criando trabalhos únicos que dialogam com tradição e inovação.
          </p>
          <p className="text-gray-400 font-playfair md:text-2xl leading-relaxed">
            Ao longo de sua trajetória, Ana já expôs suas obras em diversas mostras, encantando públicos com sua habilidade de transformar simplicidade em beleza, e transformando cada criação em uma experiência visual e emocional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
