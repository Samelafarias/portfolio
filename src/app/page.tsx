"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NavBar from "@/components/navbar";
import { FaArrowRight, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import FeaturedProjects from "@/components/projetos-destaque";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/components/ContactForm";

// Importação dinâmica do carrossel desativando SSR para evitar erros de hidratação
const SkillsCarousel = dynamic(() => import("@/components/skillscarousel"), {
  ssr: false,
  loading: () => <div className="h-24 w-full bg-transparent" />,
});

// --- SUBCOMPONENTE 1: ANEL DE TEXTO ROTATIVO / FOTO ---
const TextRing = ({ text, children }: { text: string; children?: React.ReactNode }) => {
  return (
    <div className="relative flex items-center justify-center w-48 h-48 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            id="textCircle"
            d="M 200,200 m -175,0 a 175,175 0 1,1 350,0 a 175,175 0 1,1 -350,0"
            fill="none"
          />
          <text className="fill-[#ffffff] text-[12px] font-bold tracking-[6px] uppercase">
            <textPath href="#textCircle" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>

      <div className="w-36 h-36 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#CC9149]/30 bg-[#121212] z-10 shadow-xl flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

// --- SUBCOMPONENTE 2: NUMERAÇÃO COM ANIMAÇÃO SWAP/SCRAMBLE ---
const ScrambleNumber = ({ target, suffix = "+" }: { target: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const chars = "0123456789#@$%&*";

  useEffect(() => {
    let iteration = 0;
    const targetStr = target.toString();

    const interval = setInterval(() => {
      setDisplayValue(
        targetStr
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetStr[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= targetStr.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 60);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span className="font-bold text-2xl sm:text-4xl md:text-5xl text-white">
      {displayValue}
      <span className="text-[#CC9149]">{suffix}</span>
    </span>
  );
};

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
      <NavBar />

      {/* HEADER */}
      <header className="min-h-fit md:min-h-screen flex items-center justify-center pt-20 md:pt-16 pb-4 md:pb-8" id="home">
        <div id="section-welcome" className="max-w-7xl mx-auto w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            
            {/* COLUNA DA ESQUERDA */}
            <div className="flex flex-col items-start text-left gap-3 md:gap-4">
              <div className="px-4 py-1 rounded-full border border-[#CC9149]/40 bg-[#CC9149]/10 text-white text-xs md:text-md font-medium inline-flex items-center gap-2 overflow-hidden h-8 md:h-9 min-w-52 md:min-w-60">
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
                Samela Farias <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#CC9149] to-[#9A5807] bg-clip-text text-transparent inline-block">
                  Desenvolvedora Frontend
                </span>
              </h1>

              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
                Especialista em construir experiências digitais de alta performance, 
                acessíveis e visualmente impactantes usando tecnologias modernas.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
                <a
                  href="/curriculo.pdf" 
                  download
                  className="px-4 py-2.5 md:px-5 md:py-3 bg-gradient-to-r from-[#CC9149] to-[#9A5807] text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95 text-xs sm:text-sm md:text-base"
                >
                  Baixar Currículo <FiDownload size={15} />
                </a>

                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href="https://github.com/Samelafarias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 md:p-3 rounded-full border border-white/20 text-white hover:border-[#CC9149] hover:text-[#CC9149] transition-all bg-white/5"
                    aria-label="GitHub"
                  >
                    <FaGithub size={15} />
                  </a>

                  <a
                    href="mailto:samelafarias.dev@gmail.com"
                    className="p-2.5 md:p-3 rounded-full border border-white/20 text-white hover:border-[#CC9149] hover:text-[#CC9149] transition-all bg-white/5"
                    aria-label="Email"
                  >
                    <FaEnvelope size={15} />
                  </a>

                  <a
                    href="https://linkedin.com/in/samelafarias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 md:p-3 rounded-full border border-white/20 text-white hover:border-[#CC9149] hover:text-[#CC9149] transition-all bg-white/5"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* COLUNA DA DIREITA */}
            <div className="hidden lg:flex justify-center lg:justify-end">
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

      {/* CONTEÚDO PRINCIPAL */}
      <main id="section2" className="py-6 md:py-20 flex flex-col gap-8 md:gap-16">
        
        {/* HABILIDADES */}
        <div className="container mx-auto px-4">
          <div id="skills" className="flex flex-col items-center mb-4 md:mb-12">
            <h1 className="text-xl md:text-4xl font-bold text-white text-center">
              Skills
            </h1>
            <div className="w-12 md:w-24 h-0.5 bg-[#CC9149] mt-2 rounded-full"></div>
          </div>
          <SkillsCarousel />
        </div>

        {/* PROJETOS */}
        <div className="py-2 md:py-20">
          <div className="container mx-auto px-4 md:px-10 lg:px-18">
            <h1 className="text-xl md:text-4xl font-bold text-white text-left">
              Projetos em <span className="text-[#CC9149]">Destaque</span>
            </h1>
            
            <p className="text-gray-400 text-xs sm:text-sm md:text-lg leading-relaxed mt-1 mb-4 md:mb-6">
              Veja meus projetos que estão em destaque no momento
            </p>

            <FeaturedProjects />

            <div className="flex justify-center mt-6 md:mt-8">
              <a href="/projects" className="text-gray-300 text-xs sm:text-sm md:text-lg inline-flex items-center gap-2 hover:text-[#CC9149] transition-colors">
                Ver mais projetos <FaArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* SOBRE MIM */}
        <div id="about" className="py-2 md:py-20 px-4 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-6 md:mb-16">
              <h1 className="text-xl md:text-4xl font-bold text-white text-center">
                Sobre Mim
              </h1>
              <div className="w-12 md:w-24 h-0.5 bg-[#CC9149] mt-2 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
              
              <div className="flex flex-col gap-4 md:gap-8 order-1">
                <p className="text-gray-400 text-xs sm:text-sm md:text-lg leading-relaxed text-left">
                  Sou Samela Farias, sou uma Desenvolvedora Front-end com noções de Back-end, apaixonada por criar experiências digitais que unem performance e um visual de impacto. Hoje, meu foco está em construir aplicações modernas com React, TypeScript e Node.js, além de desenvolver soluções mobile com React Native. Além do código tradicional, curto explorar o que a tecnologia tem de mais inovador, como Inteligência Artificial e Visão Computacional. Meu objetivo é entregar aplicações que equilibrem design intuitivo, agilidade e boas práticas de desenvolvimento — usando minha versatilidade técnica para resolver problemas reais e gerar valor de verdade para usuários e empresas.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="flex flex-col items-start">
                    <ScrambleNumber target={2} suffix="+" />
                    <span className="text-gray-400 text-[11px] md:text-base mt-0.5">
                      Anos de experiência
                    </span>
                  </div>

                  <div className="flex flex-col items-start">
                    <ScrambleNumber target={20} suffix="+" />
                    <span className="text-gray-400 text-[11px] md:text-base mt-0.5">
                      Projetos desenvolvidos
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center order-2 my-2 lg:my-0">
                <TextRing text="• SAMELA FARIAS • FRONTEND DEVELOPER • UI/UX DESIGN • FRONTEND DEVELOPER • UI/UX DESIGN ">
                  <img
                    src="/f7.png" 
                    alt="Samela Farias"
                    className="w-full h-full object-cover rounded-full"
                  />
                </TextRing>
              </div>

            </div>
          </div>
        </div>

        {/* CONTATO */}
        <div id="contact" className="py-2 md:py-20 px-4">
          <ContactForm />
        </div>

      </main>
    </>
  );
}