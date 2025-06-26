"use client";

import { Modo } from "@/utils/Modo";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const SideBar: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const openNav = () => {
    if (sidebarRef.current) {
      sidebarRef.current.style.width = "250px";
    }
  };

  const closeNav = () => {
    if (sidebarRef.current) {
      sidebarRef.current.style.width = "0";
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 md:px-10 py-4 max-w-7xl">
          <Modo openNav={openNav} />
          <div
            ref={sidebarRef}
            className="bg-black fixed top-0 left-0 h-full overflow-x-hidden transition-all duration-500 z-50 pt-16"
            style={{ width: "0px" }}
          >
            <button
              onClick={closeNav}
              className="absolute top-0 right-6 text-white transition-all duration-500 hover:text-neutral-700 text-4xl font-bold cursor-pointer"
            >
              &times;
            </button>
            <Link
              className="block text-white text-[25px] no-underline font-bold px-8 py-2 hover:text-neutral-700"
              style={{ fontFamily: "'ImpactCustom', sans-serif" }}
              href="/"
              onClick={closeNav}
            >
              Barbearia Freitas
            </Link>
            <Link
              className="block text-white text-[25px] no-underline font-bold px-8 py-2 hover:text-neutral-700"
              style={{ fontFamily: "'Caviar', sans-serif" }}
              href="/"
              onClick={closeNav}
            >
              Home
            </Link>
            <Link
              className="block text-white text-[25px] no-underline font-bold px-8 py-2 hover:text-neutral-700"
              style={{ fontFamily: "'Caviar', sans-serif" }}
              href="/agendamento"
              onClick={closeNav}
            >
              Agendamento
            </Link>
            <Link
              className="block text-white text-[25px] no-underline font-bold px-8 py-2 hover:text-neutral-700"
              style={{ fontFamily: "'Caviar', sans-serif" }}
              href="/assinaturas"
              onClick={closeNav}
            >
              Assinaturas
            </Link>
            <Link
              className="block text-white text-[25px] no-underline font-bold px-8 py-2 hover:text-neutral-700"
              style={{ fontFamily: "'Caviar', sans-serif" }}
              href="/produtos"
              onClick={closeNav}
            >
              Produtos
            </Link>
            <Link
              className="block text-white text-[25px] no-underline font-bold px-8 py-2 hover:text-neutral-700"
              style={{ fontFamily: "'Caviar', sans-serif" }}
              href="/servicos"
              onClick={closeNav}
            >
              Serviços
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default SideBar;
