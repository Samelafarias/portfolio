"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#09090B] text-white px-6 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-6 font-sans border-t border-white/5" id="contact">
      <div className="text-center md:text-left">
        <h2 className="text-lg md:text-xl font-medium tracking-tight">
          <span className="text-white">
            SAMELA FARIAS DEV - PORTFOLIO
          </span>
        </h2>
        <p className="text-sm tracking-tight text-gray-400 mt-1">@SamelaFarias - Portfólio 2026</p>
      </div>

      <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-gray-400 font-medium">
        <li>
          <a 
            href="https://github.com/Samelafarias" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center cursor-pointer transition-colors duration-300 hover:text-white"
          >
            <FaGithub /> Github
          </a>
        </li>
        <li>
          <a 
            href="https://linkedin.com/in/samela-farias-6a153a2a2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center cursor-pointer transition-colors duration-300 hover:text-white"
          >
            <FaLinkedin /> Linkedin
          </a>
        </li>
        <li>
          <a 
            href="mailto:samelafarias2005@gmail.com" 
            className="inline-flex gap-2 items-center cursor-pointer transition-colors duration-300 hover:text-white"
          >
            <MdOutlineMail /> Email
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;