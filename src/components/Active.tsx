"use client";

import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import SideBar2 from "./SideBar2";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth > 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <>{isMobile ? <SideBar2 /> : <SideBar />}</>;
}
