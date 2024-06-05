import { motion } from "framer-motion";
import styles from "../../css/Brands.module.css";
import { Link } from "react-router-dom";

const { BASE_URL } = import.meta.env;

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

const Brands: React.FC = () => {
  return (
    <div className={styles.brands}>
      <section className={styles["brands-content"]}>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Our Brands
        </motion.h1>
        {brandsList.map((el, index) => {
          if (el === "Back to home") {
            return (
              <motion.span
                key={el}
                className={styles.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <Link to={BASE_URL + "products"} key={el}>
                  Back
                </Link>
              </motion.span>
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
      </section>
    </div>
  );
};

export default Brands;
