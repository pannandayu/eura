import { motion } from "framer-motion";
import styles from "../../css/Authenticity.module.css";

import eura_inside from "../../../src/public/asset/image/eura_inside.jpeg";

const Authenticity: React.FC = () => {
  return (
    <div className={styles.authenticity}>
      <motion.section
        className={styles["authenticity-headline"]}
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <span className={styles["authenticity-headline-our"]}>Our</span>
        <span className={styles["authenticity-headline-category"]}>
          Authenticity
        </span>
        <motion.div
          className={styles["authenticity-content"]}
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h3>
            Our reputation for excellence is built on a foundation of
            authenticity. We offer genuine products with a modest markup to
            ensure the sustainability of our operations.
          </h3>
        </motion.div>
      </motion.section>
      <motion.img
        className={styles.image}
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65 }}
        src={eura_inside}
        alt="eura inside"
      />
    </div>
  );
};

export default Authenticity;
