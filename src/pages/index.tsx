import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import FeaturedGallery from "../components/FeaturedGallery";
import VaseGallery from "@/components/VaseGallery";
import Hero from "../components/Hero";
import About from "@/components/About";
import ParallaxSection from "@/components/ParallaxSection";
import Contact from "@/components/Contact";

const Home: React.FC = () => {
  const featuredImage = "/quadro4.png";
  const galleryImages = [{ src: "/quadro1.png" }, { src: "/quadro2.png" }, { src: "/quadro3.png" }, { src: "/quadro5.png" }];
  const vaseItems = [{ src: "/vaso1.png" }];

  return (
    <>
      <Head>
        <title>ACFR</title>
        <meta name="description" content="Galeria de quadros da artista ACFR. Descubra obras de arte únicas e inspiradoras." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-32">
        {/* Seção clara */}
        <section className="bg-white text-gray-900">
          
          <Hero />

          <h1 className="text-5xl font-bold font-montserrat mb-10 text-center mt-20">NOSSOS QUADROS</h1>
          <p className="text-xl mb-12 max-w-2xl font-montserrat mx-auto text-center">
            Explore os quadros da artista e descubra a beleza de cada obra. Com inspiração própria, cada pintura conta uma história única.
          </p>

          <Gallery images={galleryImages} />
          
     
        </section>

        {/* Seção escura com FeaturedGallery */}
<section className="bg-black text-white py-20 px-6 flex flex-col items-center justify-center">
  <h2 className="text-4xl md:text-5xl font-playfair font-light mb-8">
    Inspiração e Arte
  </h2>

  <p className="text-lg md:text-xl font-montserrat max-w-3xl text-center mb-12 leading-relaxed text-gray-300">
    Cada obra é mais do que uma criação: é uma janela para sentimentos, histórias e memórias.  
    Nesta galeria em destaque, convidamos você a mergulhar na essência da arte que conecta tradição, emoção e beleza atemporal.
  </p>

  <FeaturedGallery image={featuredImage} alt="Quadro em destaque" />
</section>


  {/* PARALLAX */}
<section
  className="relative h-[50vh] bg-fixed bg-center bg-cover"
  style={{ backgroundImage: "url('/banner4.jpg')" }}
>
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h2 className="text-5xl md:text-6xl font-playfair font-light text-white">
      Mais do que quadros
    </h2>
  </div>
</section>

{/* Seção escura depois */}
<section className="bg-black text-white py-32 text-center">
  <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">
    Obras de arte
  </h2>
  <p className="text-lg md:text-xl font-montserrat max-w-3xl mx-auto leading-relaxed text-gray-300">
    Além da pintura, Ana transforma ideias em realidade através de vasos, peças de macramê e outras criações únicas.  
    Cada trabalho reflete criatividade, cuidado nos detalhes e paixão por transformar espaços em arte tangível.
  </p>

  
</section>

{/* Galeria de vasos */}
<section id="criacoes"><VaseGallery items={vaseItems} /></section>

{/* Sobre a artista */}
<About />

{/* Contato */}
<Contact />


      </main>

      

      <Footer />
    </>
  );
};

export default Home;
