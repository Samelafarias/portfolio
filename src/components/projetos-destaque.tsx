"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaBolt } from "react-icons/fa";
import { MdOutlineLink } from "react-icons/md";

// Dados dos projetos
const projectsData = [
  {
    id: "01",
    title: "PayNet",
    subtitle: "Gerenciador para provedores de internet",
    description: "Sistema completo para controle de assinantes e gestão financeira de provedores de internet locais.",
    image: "/f1.png",
    link: "https://paynet.tec.br/",
    features: ["Gestão Centralizada dos clientes", "Controle Financeiro", "Relatórios Detalhados"],
    techStack: ["React", "TypeScript", "MySQL", "Docker"]
  },
  {
    id: "02",
    title: "Point do Barbeiro",
    subtitle: "Sistema de agendamento para barbearias",
    description: "Sistema moderno de gestão de atendimentos em barbearias.",
    image: "/f2.png",
    link: "https://pointdobarbeiro.com.br/cliente/servicos/point-do-barbeiro",
    features: ["Agendamento em Tempo Real", "Painel Administrativo", "Versatilidade", "Acesse de Qualque Lugar, Celular ou PC"],
    techStack: ["NextJs", "Tailwind", "Python", "TypeScript"]
  },
  {
    id: "03",
    title: "Gestus",
    subtitle: "Seu gerenciador de assinaturas",
    description: "Sistema moderno de gestão das suas assinaturas de streamings e afins, de modo muito mais prático.",
    image: "/f3.png",
    link: "https://github.com/Samelafarias/Gestus",
    features: ["Cronograma de Vencimentos Inteligente", "Notificações Personalizadas", "Dashboard de Gastos", "Painel de Gastos Mensais"],
    techStack: ["React Native", "TypeScript", "Expo", "Firebase"]
  }
];

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const project = projectsData[index];

  const nextProject = () => setIndex((prev) => (prev + 1) % projectsData.length);
  const prevProject = () => setIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);

  // Efeito para transição automática APENAS no Mobile (telas menores que lg / 1024px)
  useEffect(() => {
    // Função para checar se a tela é mobile
    const checkIsMobile = () => window.innerWidth < 1024;
    
    let interval: NodeJS.Timeout;

    if (checkIsMobile()) {
      interval = setInterval(() => {
        nextProject();
      }, 4000); // Muda o card a cada 4 segundos (ajuste se preferir)
    }

    // Limpa o intervalo ao desmontar o componente ou mudar de estado
    return () => clearInterval(interval);
  }, [index]); // Rodar novamente toda vez que o index mudar garante o reset correto do tempo

  return (
    <section className="py-10 container mx-auto px-4 md:px-10 lg:px-10" id="projects">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        
        {/* LADO ESQUERDO: CARROSSEL DE IMAGEM */}
        <div className="flex-1 relative group h-[400px] md:h-[550px] rounded-3xl overflow-hidden border-2 border-white/10">
          <AnimatePresence mode="wait">
            <motion.img
              key={project.image}
              src={project.image}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Overlay de Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Navegação Interna */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
             <div>
                <span className="text-white font-bold text-xl">{project.title}</span>
                <div className="flex gap-2 mt-2">
                    {project.techStack.slice(0, 2).map(tech => (
                        <span key={tech} className="text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/20 text-white uppercase">{tech}</span>
                    ))}
                </div>
             </div>
             <div className="flex gap-2">
                <button onClick={prevProject} className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all">
                    <FaChevronLeft className="text-white" />
                </button>
                <button onClick={nextProject} className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all">
                    <FaChevronRight className="text-white" />
                </button>
             </div>
          </div>
        </div>

        {/* LADO DIREITO: PAINEL DE DETALHES */}
        <div className="w-full lg:w-[450px] bg-[#121212] rounded-3xl p-8 border-2 border-white/10 flex flex-col shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-[#CC9149]">{project.id}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="space-y-6 flex-1">
                {/* Main Features */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4">Principais Recursos</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 bg-white/5 border border-white/10 p-2 rounded-xl text-[11px] text-gray-300">
                        <FaBolt className="text-[#CC9149] text-[10px]" /> {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4">Tecnológias Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#CC9149]/10 border border-[#CC9149]/30 text-[#ffffff] rounded-lg text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botão de Ação */}
              <a
                href={project.link}
                target="_blank"
                className="mt-8 w-full bg-gradient-to-r from-[#CC9149] to-[#9A5807] text-white py-4 rounded-4xl flex items-center justify-center gap-2 font-bold hover:scale-[1.02] "
              >
                <MdOutlineLink size={20} /> Ver projeto
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}