"use client";

import React, { useState } from "react";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "eec77a91-ee6b-4144-a9a9-656a9dfd71cd",
          name: formData.nome,
          email: formData.email,
          message: formData.mensagem,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Erro de conexão. Verifique sua rede e tente novamente.");
    }
  };

  return (
    <div
      className={`w-full max-w-3xl mx-auto rounded-3xl border border-white/10 bg-[#09090B]/90 backdrop-blur-md p-6 sm:p-8 md:p-12 shadow-2xl ${className}`}
    >
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
          Gostou do meu trabalho?{" "}
          <span className="text-[#CC9149]">Entre em contato.</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nome" className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
              Seu Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu Nome"
              className="w-full px-4 py-3 rounded-2xl bg-[#09090B] border border-white/15 text-white text-xs sm:text-sm placeholder-gray-600 focus:outline-none focus:border-[#CC9149] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
              Seu Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu Email"
              className="w-full px-4 py-3 rounded-2xl bg-[#09090B] border border-white/15 text-white text-xs sm:text-sm placeholder-gray-600 focus:outline-none focus:border-[#CC9149] transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="mensagem" className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            rows={4}
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Conte-me mais sobre sua ideia de projeto ..."
            className="w-full px-4 py-3 rounded-2xl bg-[#09090B] border border-white/15 text-white text-xs sm:text-sm placeholder-gray-600 focus:outline-none focus:border-[#CC9149] transition-colors resize-none"
          />
        </div>

        <div className="flex justify-center mt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-linear-to-r from-[#CC9149] to-[#9A5807] text-white font-semibold text-xs sm:text-sm transition-all hover:opacity-90 active:scale-[0.99] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </div>

        {status === "success" && (
          <p className="text-green-400 text-xs sm:text-sm text-center font-medium mt-1">
            Mensagem enviada com sucesso! Em breve entrarei em contato.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-xs sm:text-sm text-center font-medium mt-1">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}