"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills = [
  { name: "React", slug: "react", id: 1 },
  { name: "TypeScript", slug: "typescript", id: 2 },
  { name: "Tailwind", slug: "tailwind", id: 3 },
  { name: "JavaScript", slug: "js", id: 4 },
  { name: "Next.js", slug: "nextjs", id: 5 },
  { name: "HTML5", slug: "html", id: 6 }, 
  { name: "CSS", slug: "css", id: 7 },
  { name: "Vite", slug: "vite", id: 8 }, 
  { name: "Bootstrap", slug: "bootstrap", id: 9 }, 
  { name: "Figma", slug: "figma", id: 10 }, 
  { name: "Node.js", slug: "nodejs", id: 11 }, 
  { name: "Python", slug: "python", id: 12 }, 
  { name: "MySQL", slug: "mysql", id: 13 }, 
  { name: "PostgreSQL", slug: "postgres", id: 14 }, 
  { name: "Docker", slug: "docker", id: 15 }, 
  { name: "Electron", slug: "electron", id: 16 }, 
];

export default function SkillsCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-2">
      <Swiper
        spaceBetween={12} // Espaçamento bem menor entre os cards
        slidesPerView={"auto"} // Permite ajustar múltiplos cards pequenos automaticamente
        loop={true} 
        speed={6000} 
        autoplay={{
          delay: 0, // Movimento contínuo e sem pausas (estilo marquee)
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Pausa levemente ao passar o mouse por cima
        }}
        modules={[Autoplay]}
        className="w-full py-4 linear-swiper"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.id} className="!w-auto">
            {/* Card com tamanho compacto (quadrado com cantos bem arredondados) */}
            <div
              className="w-25 h-25 md:w-30 md:h-30 p-2.5 flex items-center justify-center 
                         transition-all duration-300 rounded-2xl md:rounded-3xl border-2 
                         border-transparent
                         bg-[linear-gradient(#09090B,#09090B),linear-gradient(to_bottom_right,#CC9149,#3A2207)]
                         [background-clip:padding-box,border-box] 
                         [background-origin:border-box]
                         hover:scale-105 cursor-pointer shadow-lg shadow-black/40"
            >
              <img 
                src={`https://skillicons.dev/icons?i=${skill.slug}`} 
                alt={skill.name}
                className="w-18 h-18 md:w-20 md:h-20 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}