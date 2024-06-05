import { motion } from "framer-motion";
import styles from "../../css/Ethos.module.css";

import eura_front from "../../../src/public/asset/image/eura_front.jpeg";

const Ethos: React.FC = () => {
  return (
    <div className={styles.ethos}>
      <motion.section
        className={styles["ethos-headline"]}
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <span className={styles["ethos-headline-our"]}>Our</span>
        <span className={styles["ethos-headline-category"]}>Ethos</span>
        <motion.div
          className={styles["ethos-content"]}
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p>
            This company profile website is designed to be concise. Like our
            business ethos, we believe in delivering{" "}
            <b>quality through action</b> rather than words.
          </p>
        </motion.div>
      </motion.section>
      <motion.img
        className={styles.image}
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        src={eura_front}
        alt="eura front"
      />
    </div>
  );
};

export default Ethos;
