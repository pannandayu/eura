import React from "react";
import styles from "../../css/Items.module.css";
import jsonItems from "../../../src/eura.items.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Item {
  name: string;
  brand?: string;
  type?: string;
  unit?: string;
}

const { BASE_URL } = import.meta.env;

const Items: React.FC = () => {
  const data = jsonItems as Item[];

  const itemNames = data.map((el) => el.name);
  const itemNamesSet = [...new Set(itemNames)];

  return (
    <div className={styles.items}>
      <div className={styles["items-content"]}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our E-Catalogue Items
        </motion.h1>
        <div className={styles["items-grid"]}>
          {itemNamesSet.map((el) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles["item-card"]}
              key={el}
            >
              <Link
                to={
                  el === "Home" ? BASE_URL : BASE_URL + "products/items/" + el
                }
              >
                <motion.p whileHover={{ color: "#ddd53c" }}>{el}</motion.p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
