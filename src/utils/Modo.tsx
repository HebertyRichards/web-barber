import React from "react";

interface ModoProps {
  openNav: () => void;
}

export const Modo: React.FC<ModoProps> = ({ openNav }) => {
  return (
    <button
      onClick={openNav}
      className="text-white bg-transparent border-none px-4 py-2 cursor-pointer transition-all duration-500 hover:text-neutral-700"
    >
      ☰
    </button>
  );
};
