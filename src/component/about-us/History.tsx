import { motion } from "framer-motion";
import styles from "../../css/History.module.css";

import eura_banner from "../../../src/public/asset/image/eura_banner2.jpg";

const History: React.FC = () => {
  return (
    <div className={styles.history}>
      <motion.section
        className={styles["history-headline"]}
        initial={{ x: -40 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles["history-headline-our"]}>Our</span>
        <span className={styles["history-headline-category"]}>History</span>
        <motion.div
          className={styles["history-content"]}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p style={{ marginBottom: 0 }}>
            Eura, established over a decade ago on March 1st, 2012, has
            consistently maintained its position as a robust and reliable
            medical supply distributor.
          </p>
          <p>
            We have successfully fulfilled requests from a{" "}
            <b>wide range of clients</b>, including large corporations and small
            businesses.
          </p>
        </motion.div>
      </motion.section>
      <motion.img
        className={styles.image}
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        src={eura_banner}
        alt="eura banner"
      />
    </div>
  );
};

export default History;
