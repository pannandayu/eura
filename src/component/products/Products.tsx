import { Link } from "react-router-dom";
import styles from "../../css/Products.module.css";
import { motion } from "framer-motion";

const { BASE_URL } = import.meta.env;

const Products: React.FC = () => {
  return (
    <div className={styles.products}>
      <motion.div
        className={styles["products-segment"]}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <Link to={BASE_URL + "products/items"}>
          <h1>Items</h1>
        </Link>
        <Link to={BASE_URL + "products/brands"}>
          <h1>Brands</h1>
        </Link>
        <Link
          to={BASE_URL}
          style={{ textDecoration: "none", color: "#eeeba7" }}
        >
          Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Products;
