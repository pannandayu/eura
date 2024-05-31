import { motion } from "framer-motion";
import { useSetAtom } from "jotai";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { menuAtom } from "../../context/atom";
import styles from "../../css/Store.module.css";

const { BASE_URL } = import.meta.env;

const RunningText: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "130%" }}
      animate={{ x: "-200%" }}
      transition={{
        duration: 15,
        repeat: Infinity,
        linear: true,
      }}
    >
      <h1 style={{ margin: 0, color: "#eeeba7" }}>{children}</h1>
    </motion.div>
  );
};

const Store: React.FC = () => {
  const setMenuState = useSetAtom(menuAtom);

  return (
    <div className={styles.shop}>
      <RunningText>
        VISIT OUR STORE! VISIT OUR STORE! VISIT OUR STORE! VISIT OUR STORE!
      </RunningText>
      <div>
        <div className={styles.links}>
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.tokopedia.com/euraniaga" target="_blank">
              Tokopedia
            </a>
          </motion.h1>
          <motion.h1
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://shopee.co.id/euraniaga" target="_blank">
              Shopee
            </a>
          </motion.h1>
        </div>
        <Link
          style={{ color: "#eeeba7", textDecoration: "none" }}
          to={BASE_URL}
          onClick={() => setMenuState(false)}
        >
          Home
        </Link>
      </div>
      <RunningText>
        SHOP WITH US! SHOP WITH US! SHOP WITH US! SHOP WITH US!
      </RunningText>
    </div>
  );
};

export default Store;
