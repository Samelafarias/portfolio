"use client";
import { useState } from "react"; // 1. Importar o useState
import NavBar from "@/components/navbar";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  // 2. Estado para feedback do envio
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  // 3. Função de envio
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Enviando...");

    const formData = new FormData(event.currentTarget);
    
    // Puxa a chave do seu .env (certifique-se que no .env ela chama NEXT_PUBLIC_WEB3FORMS_KEY)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (accessKey) {
        formData.append("access_key", accessKey);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Mensagem enviada com sucesso! ✨");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      setResult("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen text-white bg-[#0a0a0a]">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <section className="flex flex-col lg:flex-row gap-18 items-center mb-32">
          {/* MOLDURA DA IMAGEM */}
          <div className="relative group hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#A855F7] to-[#5d97f5] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-[#121212] rounded-3xl border border-white/10 overflow-hidden">
              <img 
                src="/f7.jpg" 
                alt="Samela Farias" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Desenvolvedora <br />
              <span className="bg-gradient-to-r from-[#A855F7] to-[#5d97f5] bg-clip-text text-transparent">
                Frontend
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
             Sou Samela Farias, sou uma Desenvolvedora Front-end com noções de Back-end, apaixonada por criar experiências digitais que unem performance e um visual de impacto.  Hoje, meu foco está em construir aplicações modernas com React, TypeScript e Node.js, além de desenvolver soluções mobile com React Native. Além do código tradicional, curto explorar o que a tecnologia tem de mais inovador, como Inteligência Artificial e Visão Computacional.  Meu objetivo é entregar aplicações que equilibrem design intuitivo, agilidade e boas práticas de desenvolvimento — usando minha versatilidade técnica para resolver problemas reais e gerar valor de verdade para usuários e empresas. 
            </p>

            {/* Tags de Skills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["React & Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design"].map((skill) => (
                <span key={skill} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="/curriculo.pdf"
                download="Curriculo_Samela_Farias.pdf" 
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition-all"
              >
                <FaDownload className="text-[#A855F7]" /> Download CV
              </a>
              <div className="flex gap-2">
                 <a href="https://github.com/Samelafarias" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:text-[#A855F7] transition-colors"><FaGithub size={20} /></a>
                 <a href="https://www.linkedin.com/in/samela-farias-6a153a2a2" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:text-[#5d97f5] transition-colors"><FaLinkedin size={20} /></a>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE CONTATO ATUALIZADA */}
        <section className="max-w-4xl mx-auto bg-[#121212] border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gostou do meu trabalho? <span className="text-[#A855F7]">Entre em contato.</span>
            </h2>
            <p className="text-gray-500">Disponível para novos projetos e parcerias de impacto.</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Seu nome</label>
                <input 
                  name="name" 
                  required
                  type="text" 
                  placeholder="Seu nome" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:border-[#A855F7] outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Endereço de email</label>
                <input 
                  name="email"
                  required
                  type="email" 
                  placeholder="nome@example.com" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:border-[#A855F7] outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Mensagem</label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="Conte-me sobre seu projeto..." 
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:border-[#A855F7] outline-none transition-all resize-none"
              ></textarea>
            </div>
            
            <button 
              disabled={isSending}
              type="submit"
              className={`w-full bg-gradient-to-r from-[#A855F7] via-[#5d97f5] to-[#A855F7] bg-[length:200%_auto] hover:bg-right text-white font-bold py-4 rounded-2xl transition-all duration-500 shadow-lg shadow-purple-500/20 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSending ? "Enviando..." : "Enviar Mensagem"}
            </button>

            {result && (
              <p className={`text-center font-medium mt-4 ${result.includes("sucesso") ? "text-green-400" : "text-red-400"}`}>
                {result}
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}