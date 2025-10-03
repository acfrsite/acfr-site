import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  image: string;
  height?: string; // altura da seção, opcional
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ image, height = "60vh" }) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;
        const elementTop = sectionRef.current.offsetTop;
        const yOffset = scrollTop - elementTop;
        setOffset(yOffset * 0.3); // ajuste a velocidade
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full flex items-center justify-center overflow-hidden`}
      style={{ height }}
    >
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300"
        style={{ transform: `translate(-50%, ${offset}px)` }}
      >
        <img src={image} alt="Parallax Image" className="w-1/2 md:w-1/3" />
      </div>
    </section>
  );
};

export default ParallaxSection;
