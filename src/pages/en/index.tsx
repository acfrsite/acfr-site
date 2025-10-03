// pages/en/index.tsx
import Head from "next/head";
import Navbar from "@/components/NavbarEn";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import FeaturedGallery from "@/components/FeaturedGallery";
import VaseGallery from "@/components/VaseGalleryEn";
import Hero from "@/components/HeroEn";
import About from "@/components/AboutEn";
import ParallaxSection from "@/components/ParallaxSection";
import Contact from "@/components/ContactEn";

const HomeEn: React.FC = () => {
  const featuredImage = "/quadro4.png";
  const galleryImages = [
    { src: "/quadro1.png" },
    { src: "/quadro2.png" },
    { src: "/quadro3.png" },
    { src: "/quadro5.png" },
  ];
  const vaseItems = [{ src: "/vaso1.png" }];

  return (
    <>
      <Head>
        <title>ACFR Art Gallery</title>
        <meta
          name="description"
          content="Discover unique artworks by the artist ACFR."
        />
      </Head>

      <Navbar />

      <main className="pt-32">
        {/* Seção clara */}
        <section className="bg-white text-gray-900">
          <Hero />

          <h1 className="text-5xl font-bold font-montserrat mb-10 text-center mt-20">
            OUR PAINTINGS
          </h1>
          <p className="text-xl mb-12 max-w-2xl font-montserrat mx-auto text-center">
            Explore the artist’s paintings and discover the beauty in each work.
            Every painting tells a unique story.
          </p>

          <Gallery images={galleryImages} />
        </section>

        {/* Seção escura com FeaturedGallery */}
        <section className="bg-black text-white py-20 px-6 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-light mb-8">
            Inspiration & Art
          </h2>

          <p className="text-lg md:text-xl font-montserrat max-w-3xl text-center mb-12 leading-relaxed text-gray-300">
            Each work is more than a creation: it’s a window to feelings, stories,
            and memories. In this featured gallery, we invite you to dive into
            the essence of art that connects tradition, emotion, and timeless beauty.
          </p>

          <FeaturedGallery image={featuredImage} alt="Featured Artwork" />
        </section>

        {/* PARALLAX */}
        <section
          className="relative h-[50vh] bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/banner4.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-5xl md:text-6xl font-playfair font-light text-white">
              Beyond Paintings
            </h2>
          </div>
        </section>

        {/* Seção escura depois */}
        <section className="bg-black text-white py-32 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">
            Artworks
          </h2>
          <p className="text-lg md:text-xl font-montserrat max-w-3xl mx-auto leading-relaxed text-gray-300">
            Beyond painting, Ana transforms ideas into reality through vases, macramé,
            and other unique creations. Each piece reflects creativity, attention to detail,
            and a passion for turning spaces into tangible art.
          </p>
        </section>

        {/* Galeria de vasos */}
        <section id="criacoes">
          <VaseGallery items={vaseItems} />
        </section>

        {/* Sobre a artista */}
        <About />

        {/* Contato */}
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default HomeEn;
