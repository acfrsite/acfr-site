import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contato"
      className="w-full py-20 bg-black text-gray-300"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-light mb-8">
          Contato
        </h2>
        <p className="text-lg md:text-x1 font-playfair mb-12 leading-relaxed">
          Quer conversar sobre uma obra, encomendar um quadro ou conhecer outros trabalhos da artista?  
          Entre em contato através do formulário abaixo ou utilize os dados disponíveis.
        </p>
       

        {/* Informações de contato alternativas */}
        <div className="mt-12 text-gray-400 font-playfair">
          <p>Email: <a href="mailto:contato@acfr.site" className="underline hover:text-white">anacadia@hotmail.com</a></p>
          <p>Telefone: <a href="tel:+55(19)98126-1511" className="underline hover:text-white">+55 19 98126-1511</a></p>
          <p>Redes sociais: <a href="#" className="underline hover:text-white">Instagram / Facebook</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
