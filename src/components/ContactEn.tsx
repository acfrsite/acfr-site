import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contato"
      className="w-full py-20 bg-black text-gray-300"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-light mb-8">
          Contact
        </h2>
        <p className="text-lg md:text-xl font-playfair mb-12 leading-relaxed">
          Want to talk about a painting, commission a work, or explore other creations by the artist?  
          Get in touch using the form below or the contact details provided.
        </p>

        {/* Alternative contact info */}
        <div className="mt-12 text-gray-400 font-playfair">
          <p>Email: <a href="mailto:contato@acfr.site" className="underline hover:text-white">anacadia@hotmail.com</a></p>
          <p>Phone: <a href="tel:+55(19)98126-1511" className="underline hover:text-white">+55 19 98126-1511</a></p>
          <p>Social media: <a href="#" className="underline hover:text-white">Instagram / Facebook</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
