"use client";
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TypewriterText from "@/components/TypewriterText";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const pathname = usePathname();

  const navLinks = [
    { id: "/", label: "Home" },
    { id: "#skills", label: "Minhas Habilidades" },
    { id: "#projects", label: "Projetos" },
    { id: "#about", label: "Sobre Mim" },
    { id: "#contact", label: "Contato" },
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      if (pathname.startsWith("/projetos") || pathname.startsWith("/projects")) {
        setActiveSection("#projects");
        return;
      }

      if (pathname === "/") {
        const currentHash = window.location.hash;
        setActiveSection(currentHash || "/");
      }
    };

    updateActiveSection();

    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("popstate", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("popstate", updateActiveSection);
    };
  }, [pathname]);

  const getHref = (id: string) => {
    return id.startsWith("#") ? `/${id}` : id;
  };

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-3 md:top-5 left-0 w-full z-50 flex justify-center px-3 md:px-0 pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-5xl rounded-full bg-[#09090B]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] text-white px-4 md:px-8 py-2.5 md:py-5 flex items-center justify-between font-sans transition-all duration-300">
        {/* Logo proporcional para mobile e desktop */}
        <h1 className="font-bold tracking-tight z-50">
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <div className="cursor-pointer font-bold text-sm sm:text-base md:text-2xl">
              <TypewriterText
                prefix="<"
                texts={["Samela Farias />"]}
                color="#FFFFFF"
                prefixColor="#FFFFFF"
                cursorColor="#CC9149"
                cursorWidth={3}
                cursorHeight={20}
                font={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 900,
                  fontSize: "18px", // Tamanho reduzido para mobile
                  letterSpacing: "-0.01em",
                  textAlign: "left",
                }}
                deletingSpeed={18}
                transition={{
                  duration: 0.1,
                  delay: 15,
                }}
              />
            </div>
          </Link>
        </h1>

        {/* Menu Desktop (Intacto) */}
        <ul className="hidden md:flex items-center gap-10 text-gray-400 font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li key={link.id} className="relative">
                <Link
                  href={getHref(link.id)}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-colors duration-300 hover:text-white ${
                    isActive ? "text-[#CC9149]" : ""
                  }`}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#CC9149] transition-all duration-300" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Botão Hamburguer no Mobile */}
        <button
          className="md:hidden text-[#CC9149] text-2xl z-50 p-1"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Menu Mobile Fullscreen */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#09090B] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.id}
                href={getHref(link.id)}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xl font-semibold transition-all ${
                  isActive ? "text-[#CC9149] scale-110" : "text-gray-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;