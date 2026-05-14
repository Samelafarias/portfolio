"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills = [
  // Aqui usamos o nome da tecnologia como definido no skillicons.dev
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
    <div className="w-full max-w-7xl mx-auto py-10 px-2">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 7 },
        }}
        className="pb-10"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.id}>
            <div className="p-6 flex flex-col items-center justify-center gap-4 transition-all duration-200 
                rounded-2xl border-2 border-transparent
                bg-[linear-gradient(#121212,#121212),linear-gradient(to_right,#A855F7,#4CD7F6,#A855F7)]
                [background-clip:padding-box,border-box] 
                [background-origin:border-box]
                hover:bg-[linear-gradient(#1a1a1a,#1a1a1a),linear-gradient(to_right,#A855F7,#4CD7F6,#A855F7)]
              ">
                <div className="w-20 h-20 flex items-center justify-center m-auto">
                  <img 
                    src={`https://skillicons.dev/icons?i=${skill.slug}`} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <span className="text-gray-300 font-medium">{skill.name}</span>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}