import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import SideBar2 from "./SideBar2";

const Active = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isMobile ? <SideBar /> : <SideBar2 />}</div>;
};

export default Active;
