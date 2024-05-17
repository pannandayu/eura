import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../css/NavBar.module.css";

const NavBar: React.FC = () => {
  const [pixel, setPixel] = useState(0);
  const [segment, setSegment] = useState("Introduction");

  const homeSegment = [
    "Introduction",
    "Vision and Mission",
    "Rating",
    "Get in Touch",
  ];

  const loc = useLocation();

  const fontColor = {
    color:
      loc.pathname === "/about-us" || loc.pathname === "/menu"
        ? "white"
        : "black",
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      setPixel(scrollPos);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    if (loc.pathname === "/menu") {
      setSegment("Menu");
    } else if (loc.pathname === "/products") {
      setSegment("Products");
    } else if (loc.pathname === "/about-us") {
      setSegment("About Us");
    } else {
      const index = Math.floor(pixel / 750);
      setSegment(homeSegment[index]);
    }
  }, [pixel, loc.pathname]);

  return (
    <div className={styles.navbar} style={fontColor}>
      <a
        href="https://www.google.com/search?q=euraniaga+mitra+abadi"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <p style={fontColor}>E . M . A</p>
      </a>
      <div>
        <p>Eura</p>
        <b>{segment}</b>
      </div>
      <Link style={fontColor} to="/menu">
        Menu
      </Link>
    </div>
  );
};

export default NavBar;
