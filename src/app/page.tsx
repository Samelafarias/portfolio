"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/navbar";
import SkillsCarousel from "@/components/skillscarousel";
import { FaArrowRight } from "react-icons/fa";
import FeaturedProjects from "@/components/projetos-destaque";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const frontendRoles = [
  "Desenvolvedora Frontend",
  "Interfaces Web & Mobile",
  "Design de Sistemas & UI/UX",
  "Acessibilidade & Performance",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % frontendRoles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="min-h-screen flex items-center justify-center pt-16 pb-8" id="home">
      <div id="section-welcome" className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          
          {/* COLUNA DA ESQUERDA - TEXTO E AÇÕES */}
          <div className="flex flex-col items-start text-left gap-4">
            
            {/* BADGE COM ANIMAÇÃO MORPH DE TEXTO */}
            <div className="px-5 py-1.5 rounded-full border border-[#CC9149]/40 bg-[#CC9149]/10 text-white text-md font-medium inline-flex items-center gap-2 overflow-hidden h-9 min-w-[240px]">
              <span className="w-2 h-2 rounded-full bg-[#CC9149] animate-pulse" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="whitespace-nowrap"
                >
                  {frontendRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Samela Farias{" "}
              <span className="bg-gradient-to-r from-[#CC9149] to-[#9A5807] bg-clip-text text-transparent inline-block whitespace-nowrap">
                Desenvolvedora Frontend
              </span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Especialista em construir experiências digitais de alta performance, 
              acessíveis e visualmente impactantes usando tecnologias modernas.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/curriculo.pdf" 
                download
                className="px-6 py-3 bg-gradient-to-r from-[#CC9149] to-[#9A5807] text-white font-semibold rounded-full flex items-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95 text-sm md:text-base"
              >
                Baixar Currículo <FiDownload size={18} />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Samelafarias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-white/20 text-white hover:border-[#CC9149] hover:text-[#CC9149] transition-all bg-white/5"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="mailto:seuemail@exemplo.com"
                  className="p-3 rounded-full border border-white/20 text-white hover:border-[#CC9149] hover:text-[#CC9149] transition-all bg-white/5"
                  aria-label="Email"
                >
                  <FaEnvelope size={18} />
                </a>

                <a
                  href="https://linkedin.com/in/seu-perfil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-white/20 text-white hover:border-[#CC9149] hover:text-[#CC9149] transition-all bg-white/5"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* COLUNA DA DIREITA - ILUSTRAÇÃO */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img
                src="/pc-image 1.png"
                alt="Ilustração Desenvolvedor"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </header>

      <main id="section2" className="py-20">
        <div className="container mx-auto px-4">
          <div id="skills" className="flex flex-col items-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
              Minhas Habilidades
            </h1>
            <div className="w-16 md:w-24 h-0.5 bg-[#CC9149] mt-4 rounded-full"></div>
          </div>
          
          <SkillsCarousel />
        </div>

        <div className="py-20">
          <div className="container mx-auto px-4 md:px-10 lg:px-18">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Projetos <span className="text-[#d3ae80]"> em </span>
              <span className="text-[#CC9149]">Destaque</span>
            </h1>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 mb-10">
              <p className="text-gray-400 max-w-2xl text-sm md:text-lg leading-relaxed mt-4">
                Veja meus projetos do momento que estão em destaque:
              </p>
              <a href="projects" className="text-gray-400 text-sm md:text-lg inline-flex items-center gap-2 hover:text-[#CC9149] transition-colors mt-2 md:mt-4">
                Ver mais projetos <FaArrowRight />
              </a>
            </div>
              <FeaturedProjects />
          </div>
        </div>
      </main>
    </>
  );
}