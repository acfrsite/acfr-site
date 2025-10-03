import React, { useState, useRef, useEffect } from "react";

const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const searchRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const SCROLL_THRESHOLD = 1600;
  const NAVBAR_HEIGHT = 120;

  // Função de scroll suave
  const scrollToSection = (id: string) => {
    const startY = window.scrollY;

    if (id === "#home") {
      const duration = 800;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = easeInOutQuad(progress);

        window.scrollTo(0, startY - startY * easedProgress);

        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
      return;
    }

    const target = document.querySelector(id);
    if (!target) return;

    const targetY =
      target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    const duration = 800;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, startY + (targetY - startY) * easedProgress);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node))
        setSearchOpen(false);
      if (langRef.current && !langRef.current.contains(event.target as Node))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > SCROLL_THRESHOLD && currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full bg-black text-white shadow-md z-[9999] transition-transform duration-500 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-4 md:p-6 bg-black text-white">
        {/* Esquerda: Search + Idioma */}
        <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-0">
          {/* Search */}
          <div ref={searchRef} className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="px-3 py-1 hover:bg-gray-800 transition"
            >
              Search
            </button>
            {searchOpen && (
              <div className="absolute top-10 left-0 w-72 md:w-80 bg-black border border-gray-700 shadow-lg rounded-md p-4 z-50 text-white">
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute top-2 right-2 text-white"
                >
                  ✕
                </button>
                <form
                  role="search"
                  method="get"
                  action="/search-results"
                  className="mt-4 flex"
                >
                  <input
                    type="search"
                    name="keywords"
                    required
                    placeholder="Search..."
                    className="flex-grow border border-gray-600 rounded-l-md px-3 py-1 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-gray-600 text-white px-3 rounded-r-md hover:bg-blue-700 transition"
                  >
                    Go
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Idioma */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-3 py-1 rounded-md hover:bg-gray-800 transition flex items-center"
            >
              Português <span className="ml-1">▾</span>
            </button>
            {langOpen && (
              <div className="absolute top-10 left-0 w-32 bg-black shadow-lg rounded-md p-2 z-50 text-white">
                <p className="text-xs font-bold mb-2">Línguas</p>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="/"
                      className="block px-2 py-1 hover:bg-gray-800 rounded"
                    >
                      Português
                    </a>
                  </li>
                  <li>
                    <a
                      href="/en"
                      className="block px-2 py-1 hover:bg-gray-800 rounded"
                    >
                      English
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Menu central */}
        <nav className="w-full md:flex-1 md:flex md:justify-center">
          <ul className="flex flex-col md:flex-row md:space-x-8 text-base md:text-[20px] font-medium font-montserrat items-center">
            <li>
              <button
                onClick={() => scrollToSection("#home")}
                className="hover:text-blue-400 transition py-2"
              >
                HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#gallery")}
                className="hover:text-blue-400 transition py-2"
              >
                GALERIA
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#criacoes")}
                className="hover:text-blue-400 transition py-2"
              >
                CRIAÇÕES
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#sobre")}
                className="hover:text-blue-400 transition py-2"
              >
                SOBRE
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#contato")}
                className="hover:text-blue-400 transition py-2"
              >
                CONTATO
              </button>
            </li>
          </ul>
        </nav>

        {/* Logo */}
        <div className="flex-shrink-0 mt-2 md:mt-0">
          <img src="/logo1.png" alt="Logo ACFR" className="h-12 md:h-20 w-auto" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
