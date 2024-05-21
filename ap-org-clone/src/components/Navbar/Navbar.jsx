import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import MiddleNav from "./MiddleNav";
import BottomNavMobile from "./BottomNavMobile";
import BottomNav from "./BottomNav";

export default function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1023);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <TopNav />
      <MiddleNav />
      {isSmallScreen ? <BottomNavMobile /> : <BottomNav />}
    </div>
  );
}
