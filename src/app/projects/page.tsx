"use client";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import BackButtom from "@/components/BackButtom";

const allProjects = [
  {
    title: "Gerenciador para provedores de internet",
    description: "Sistema completo para controle de assinantes e gestão financeira de provedores de internet locais.",
    image: "/f1.png",
    category: "Web",
    tags: ["React", "TypeScript", "MySQL", "Docker"],
    link: "https://paynet.tec.br/"
  },
  {
    title: "Gestus - Gestor de Assinaturas",
    description: "Sistema de gerenciamento para suas assinaturas, controle seus gastos de modo prático.",
    image: "/f3.png",
    category: "Mobile",
    tags: ["React Native", "TypeScript", "Expo", "Firebase"],
    link: "https://github.com/Samelafarias/Gestus"
  },
  {
    title: "Point do Barbeiro",
    description: "Sistema de agendamento para barbearias, controle seus atendimentos de modo prático.",
    image: "/f2.png",
    category: "Web",
    tags: ["NextJs", "Tailwind", "Python", "TypeScript", "PWA"],
    link: "#"
  },
  {
    title: "Portfólio de Projetos",
    description: "Nesse portfólio, apresento alguns de meus principais projetos e das tecnológias que utilizo neles.",
    image: "/f8.jpg",
    category: "Web",
    tags: ["NextJs", "Tailwind", "TypeScript"],
    link: "https://github.com/Samelafarias/portfolio"
  },
  {
    title: "Nexus - Gerenciador de Senhas",
    description: "Esse projeto se trata de um sistema de gerenciamento de filas por meio de geração de senhas. Tornado o processo mais simples e moderno.",
    image: "/f5.png",
    category: "Web",
    tags: ["React", "JavaScript", "NodeJs", "Express", "Socket.IO"],
    link: "https://github.com/Samelafarias/Gerenciamento-de-senhas"
  },
  {
    title: "Perfil de alunos",
    description: "Este projeto foi desenvolvido como atividade prática para a disciplina de Programação Web II no IFCE. Consiste em uma galeria de perfis de alunos com foco em um design editorial de alto luxo, utilizando tecnologias front-end puras.",
    image: "/f4.png",
    category: "Web",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://samelafarias.github.io/Perfil-Alunos/"
  },
  {
    title: "Banco Safe - Gerenciador de Finanças Pessoais",
    description: "Um a página web inspirada em um sistema bancário feito majoritariamente com HMTL e CSS, feita de maneira bem simples e amadora.",
    image: "/f6.png",
    category: "Web",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://samelafarias.github.io/Sistema_bancario/pagina_inicial"
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All Projects");
  const categories = ["All Projects", "Web", "Mobile"];

  const filteredProjects = allProjects.filter(project => 
    filter === "All Projects" ? true : project.category === filter
  );

  return (
    <header className="min-h-screen pt-20 md:pt-32 pb-10 px-4 md:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <BackButtom className="mb-4 md:mb-5"/>
        
        {/* TÍTULOS E APRESENTAÇÃO COM FONTE ESCALÁVEL */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
          Meus Projetos
        </h1>
        
        <p className="text-gray-400 max-w-2xl text-xs sm:text-sm md:text-lg mb-8 md:mb-10 leading-relaxed">
          Conheça meus projetos, são uma forma de construir experiências digitais de alta performance, acessíveis e visualmente impactantes usando tecnologias modernas.
        </p>

        {/* MENU DE FILTROS - RESPONSIVO E COMPACTO NO MOBILE */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all border ${
                filter === cat 
                ? "bg-linear-to-r from-[#CC9149] to-[#9A5807] border-[#CC9149] text-white" 
                : "bg-transparent border-white/20 text-gray-400 hover:border-[#CC9149]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID DE PROJETOS RESPONSIVO */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col w-full h-full transition-all duration-300 rounded-2xl border-2 border-transparent bg-[linear-gradient(#121212,#121212),linear-gradient(to_right,#CC9149,#9A5807)] [background-clip:padding-box,border-box] bg-origin:border-box overflow-hidden hover:scale-[1.01]"
            >
              {/* CONTAINER DA IMAGEM PADRONIZADO */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              
              {/* CONTEÚDO DO CARD ADAPTADO */}
              <div className="p-5 md:p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-white/5 backdrop-blur-md text-[#CC9149] text-[9px] md:text-[10px] font-bold px-2.5 md:px-3 py-0.5 md:py-1 rounded-full border border-[#CC9149]/30 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Título adaptável */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                  {project.title}
                </h3>
                
                {/* Descrição flexível */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex items-center pt-3 md:pt-4 border-t border-white/5 mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#CC9149] transition-colors flex items-center gap-2 text-xs md:text-sm font-medium"
                  >
                    Ver Projeto <FaExternalLinkAlt size={12} className="md:w-3.5 md:h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </header>
  );
}