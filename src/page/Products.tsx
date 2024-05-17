import styles from "../css/Products.module.css";
import { motion } from "framer-motion";

const Products: React.FC = () => {
  const productsList = [
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
  ];

  return (
    <div className={styles.products}>
      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          Our Products
        </motion.h1>
        <div>
          {productsList.map((el, index) => {
            return (
              <motion.p
                key={el}
                initial={{ opacity: 0, x: index % 2 == 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {el}
              </motion.p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
