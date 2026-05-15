"use client"
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 
import Link from "next/link"; 
import { usePathname } from "next/navigation"; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname(); 

  // Escuta mudanças na URL para detectar âncoras (#contact)
  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    // Seta o hash inicial se houver
    setHash(window.location.hash);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  const navLinks = [
    { id: "/", label: "Home" },
    { id: "/about", label: "Sobre Mim" },
    { id: "/projects", label: "Projetos" },
    { id: "#contact", label: "Contato" }, 
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#09090B]/90 backdrop-blur-md text-white px-6 md:px-16 py-5 flex items-center justify-between font-sans border-b border-white/5">
      {/* Logo */}
      <h1 className="font-bold tracking-tight z-50">
        <Link href="/">
          <span className="bg-gradient-to-r from-[#A855F7] to-[#5d97f5] bg-clip-text text-transparent font-bold text-base md:text-2xl cursor-pointer">
            &lt; SAMELA FARIAS - DEV FRONTEND /&gt;
          </span>
        </Link>
      </h1>

      {/* Menu Desktop */}
      <ul className="hidden md:flex items-center gap-10 text-gray-400 font-medium">
        {navLinks.map((link) => {

          const isActive = link.id.includes("#") 
            ? hash === link.id.split("/")[1] || hash === link.id
            : pathname === link.id;
          
          return (
            <li key={link.id} className="relative">
              <Link
                href={link.id}
                className={`transition-colors duration-300 hover:text-white ${
                  isActive ? "text-[#a855f7]" : ""
                }`}
              >
                {link.label}
              </Link>
              {isActive && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#a855f7] transition-all duration-300" />
              )}
            </li>
          );
        })}
      </ul>

      {/* Botão Hamburguer */}
      <button 
        className="md:hidden text-3xl z-50 text-[#a855f7]" 
        onClick={toggleMenu}
      >
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Menu Mobile */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#09090B] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out z-40 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}>
        {navLinks.map((link) => {
          const isActive = link.id.includes("#") 
            ? hash === link.id.split("/")[1] || hash === link.id
            : pathname === link.id;

          return (
            <Link 
              key={link.id}
              href={link.id}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-semibold transition-all ${
                isActive ? "text-[#a855f7] scale-110" : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;