import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Header'ın arka plan saydamlığını hesapla
  const opacity = Math.min(1, scrollY / 300); // 300px kaydırıldığında tamamen görünür

  return (
    <header
      className="fixed top-0 left-0 right-0 mb-10 z-50 p-4"
      style={{ backgroundColor: `rgba(20, 20, 20, ${opacity})` }} // Saydamlık derecesi
    >
      <Link to={"/"}>
        <img
          className="max-w-[150px]"
          src="public/netflix-3.svg"
          alt="netflix"
        />
      </Link>
    </header>
  );
};

export default Header;
