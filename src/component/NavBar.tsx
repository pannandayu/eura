import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../css/NavBar.module.css";
import _ from "lodash";

const homeSegment = [
  "Introduction",
  "Vision and Mission",
  "Rating",
  "Get in Touch",
];

const { BASE_URL } = import.meta.env;

const NavBar: React.FC = () => {
  const [pixel, setPixel] = useState(0);
  const [segment, setSegment] = useState("Introduction");

  const loc = useLocation();

  const fontColor = useMemo(() => {
    return {
      color:
        loc.pathname === BASE_URL + "/about-us" ||
        loc.pathname === BASE_URL + "/menu"
          ? "white"
          : "black",
    };
  }, [loc.pathname]);

  useEffect(() => {
    const scrollHandler = _.throttle(() => {
      setPixel(window.scrollY);
    }, 100);

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (loc.pathname === BASE_URL + "/menu") {
      setSegment("Menu");
    } else if (loc.pathname === BASE_URL + "/products") {
      setSegment("Products");
    } else if (loc.pathname === BASE_URL + "/about-us") {
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
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p style={fontColor}>E . M . A</p>
      </a>
      <div>
        <p>Eura</p>
        <b>{segment}</b>
      </div>
      <Link style={fontColor} to={BASE_URL + "/menu"}>
        Menu
      </Link>
    </div>
  );
};

export default NavBar;
