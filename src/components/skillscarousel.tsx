"use client";

import { useState, useEffect } from "react";
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Evita renderizar o Swiper no SSR (Server-Side Rendering)
  if (!isMounted) {
    return (
      <div className="w-full max-w-7xl mx-auto px-2 h-20 sm:h-24 md:h-32 flex items-center justify-center">
        <div className="w-full h-full bg-[#09090B]/50 rounded-2xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-2">
      <Swiper
        spaceBetween={12}
        slidesPerView={"auto"}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="w-full py-4 linear-swiper"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.id} className="!w-auto">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 p-2 flex items-center justify-center 
                         rounded-xl md:rounded-3xl border border-[#CC9149]/80 md:border-2 md:border-transparent
                         bg-[#09090B] md:bg-[linear-gradient(#09090B,#09090B),linear-gradient(to_bottom_right,#CC9149,#3A2207)]
                         md:[background-clip:padding-box,border-box] 
                         md:[background-origin:border-box]
                         hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg"
            >
              <img
                src={`https://skillicons.dev/icons?i=${skill.slug}`}
                alt={skill.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}