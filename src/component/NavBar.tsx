import { useEffect, useState } from "react";
import styles from "../css/NavBar.module.css";
const NavBar: React.FC = () => {
  const [pixel, setPixel] = useState(0);
  const [segmentIndex, setSegmentIndex] = useState(0);

  const segmentList = ["Introduction", "Vision and Mission", "Get in Touch"];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      setPixel(scrollPos);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      const index = Math.floor(pixel / 800);
      setSegmentIndex(index);
    }, 250);
    () => clearTimeout(id);
  }, [pixel]);

  return (
    <div className={styles.navbar}>
      <a
        href="https://www.google.com/search?q=euraniaga+mitra+abadi"
        target="_blank"
        style={{ textDecoration: "none", color: "black" }}
      >
        <p>E . M . A</p>
      </a>
      <div>
        <p>Eura</p>
        <b>{segmentList[segmentIndex]}</b>
      </div>
      <p>Menu</p>
    </div>
  );
};

export default NavBar;
