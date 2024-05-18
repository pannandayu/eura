import { Link } from "react-router-dom";
import styles from "../css/Menu.module.css";
import { motion } from "framer-motion";

const Menu: React.FC = () => {
  const menuList = ["Products", "About Us"];

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.menu}
      >
        <div>
          {menuList.map((el) => {
            return (
              <motion.h1
                key={el}
                style={{ cursor: "pointer" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to={"/" + el.toLowerCase().replace(" ", "-")}>{el}</Link>
              </motion.h1>
            );
          })}
        </div>
        <Link to="/">Home</Link>
      </motion.div>
    </motion.div>
  );
};

export default Menu;
