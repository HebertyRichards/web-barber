/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function SideBar2() {
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
        <div className="mx-auto flex items-center justify-center px-4 md:px-8 py-4 max-w-7xl">
          <img
            src="/icon.webp"
            alt="icon"
            className="object-contain w-[50px] h-[50px]"
          ></img>
          <Link
            className="text-white no-underline ml-[50px] text-[14px] lg:text-[1.5em] cursor-pointer no-underline mt-2"
            style={{ fontFamily: "'ImpactCustom', sans-serif" }}
            href="/"
          >
            Barbearia Freitas
          </Link>
          <Link
            className="ml-[50px] text-white border-none text-[14px] lg:text-[1.5em] cursor-pointer no-underline mt-2"
            href="/"
            style={{ fontFamily: "'Caviar', sans-serif" }}
          >
            Home
          </Link>
          <Link
            className="ml-[50px] text-white border-none text-[14px] lg:text-[1.5em] cursor-pointer no-underline mt-2"
            href="/agendamento"
            style={{ fontFamily: "'Caviar', sans-serif" }}
          >
            Agendamento
          </Link>
          <Link
            className="ml-[50px] text-white border-none text-[14px] lg:text-[1.5em] cursor-pointer no-underline mt-2"
            href="/assinaturas"
            style={{ fontFamily: "'Caviar', sans-serif" }}
          >
            Assinaturas
          </Link>
          <Link
            className="ml-[50px] text-white border-none text-[14px] lg:text-[1.5em] cursor-pointer no-underline mt-2"
            href="/produtos"
            style={{ fontFamily: "'Caviar', sans-serif" }}
          >
            Produtos
          </Link>
          <Link
            className="ml-[50px] text-white border-none text-[14px] lg:text-[1.5em] cursor-pointer no-underline mt-2"
            href="/servicos"
            style={{ fontFamily: "'Caviar', sans-serif" }}
          >
            Serviços
          </Link>
        </div>
      </header>
    </>
  );
}

export default SideBar2;
