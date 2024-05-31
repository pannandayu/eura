import { motion } from "framer-motion";
import styles from "../../css/Brands.module.css";
import { Link } from "react-router-dom";

const { BASE_URL } = import.meta.env;

const Brands: React.FC = () => {
  const brandsList = [
    "Onehealth",
    "General Care",
    "Resources",
    "Onemed",
    "Terumo",
    "Omron",
    "Easy Touch",
    "Autocheck",
    "Bistos",
    "Gea",
    "Renz",
    "Philips",
    "And many more!",
    "Back to home",
  ];

  return (
    <div className={styles.brands}>
      <div className={styles["brands-content"]}>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Our Brands
        </motion.h1>
        {brandsList.map((el, index) => {
          if (el === "Back to home") {
            return (
              <Link
                style={{ textDecoration: "none", color: "#eeeba7" }}
                to={BASE_URL}
                key={el}
              >
                Home
              </Link>
            );
          }
          return (
            <motion.h3
              key={el}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {el}
            </motion.h3>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
