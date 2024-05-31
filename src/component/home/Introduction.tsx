import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "../../css/Introduction.module.css";

const Introduction: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <motion.div className={styles.introduction}>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>PT. Euraniaga</h1>
        <h1>Mitra Abadi</h1>
      </motion.div>
      <motion.div
        className={styles["info-box"]}
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.65 }}
      >
        <p>
          We are a <b>medical supply distributor</b> based in Palembang, South
          Sumatra.
        </p>
        <p>
          We serve numerous hospitals, clinics, and individual customers like
          yourself. Committed to offering effective solutions, we ensure
          affordability because maintaining good health shouldn't break the
          bank.
        </p>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Introduction;
