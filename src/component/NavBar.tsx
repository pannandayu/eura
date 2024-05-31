import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { menuAtom } from "../context/atom";
import styles from "../css/NavBar.module.css";
import Menu from "./home/Menu";

const NavBar: React.FC = () => {
  const [menu, setMenu] = useAtom(menuAtom);

  return (
    <div>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1, cursor: "pointer" }}
        whileTap={{ scale: 0.9 }}
        onTap={() => setMenu((prev) => !prev)}
        className={styles.menu}
      >
        <p>{menu ? "x" : "☰"}</p>
      </motion.div>
      <Menu />
    </div>
  );
};

export default NavBar;
