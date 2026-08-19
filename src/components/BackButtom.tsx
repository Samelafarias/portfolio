"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IoArrowBackCircleSharp } from "react-icons/io5";

interface BackButtonProps {
  to?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to, className = "" }) => {
  const router = useRouter();

  const handleBack = () => {
    if (to) {
      router.push(to);
    } else {
      router.back();
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10 active:scale-95 ${className}`}
    >
      <IoArrowBackCircleSharp size={20} />
      <span>Voltar</span>
    </button>
  );
};

export default BackButton;