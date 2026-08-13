import NavBar from "@/components/navbar";
import SkillsCarousel from "@/components/skillscarousel";
import { FaArrowRight } from "react-icons/fa";
import FeaturedProjects from "@/components/projetos-destaque";

export default function Home() {
  return (
    <>
      <header className="min-h-screen flex items-center justify-center pt-32 pb-10" id="home">
        <div id="section-welcome" className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Samela Farias | 
              <span className="bg-gradient-to-r from-[#DDB7FF] to-[#4CD7F6] bg-clip-text text-transparent block md:inline">
                {" "}Dev Front-end
              </span>
            </h1>

            <p className="text-gray-400 max-w-2xl text-sm md:text-lg leading-relaxed">
              Especialista em construir experiências digitais de alta performance, 
              acessíveis e visualmente impactantes usando tecnologias modernas.
            </p>

            <a 
              href="projects" 
              className="mt-4 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#A855F7] to-[#3b82f6] font-bold inline-flex gap-2 items-center rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95 text-sm md:text-base"
            >
              Conheça meus projetos <FaArrowRight />
            </a>
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
              Projetos <span className="text-[#9ee6f7]"> em </span>
              <span className="text-[#4CD7F6]">Destaque</span>
            </h1>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 mb-10">
              <p className="text-gray-400 max-w-2xl text-sm md:text-lg leading-relaxed mt-4">
                Veja meus projetos do momento que estão em destaque:
              </p>
              <a href="projects" className="text-gray-400 text-sm md:text-lg inline-flex items-center gap-2 hover:text-[#A855F7] transition-colors mt-2 md:mt-4">
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