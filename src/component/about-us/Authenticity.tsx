import { motion } from "framer-motion";
import styles from "../../css/Authenticity.module.css";

import eura_inside from "../../../src/public/asset/image/eura_inside.jpeg";
import eura_inside_2 from "../../../src/public/asset/image/eura_inside2.jpeg";
import Wrapper from "./Wrapper";

const Authenticity: React.FC = () => {
  return (
    <Wrapper>
      <motion.img
        className={styles.image}
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75 }}
        src={eura_inside}
        alt="eura inside"
      />
      <motion.div
        className={styles["authenticity-headline"]}
        initial={{ x: 70 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <span style={{ fontSize: "30px" }}>Our</span>
        <span style={{ fontSize: "100px" }}>Authenticity</span>
        <motion.div
          className={styles["authenticity-content"]}
          initial={{ x: 60 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h3>
            Our reputation for excellence is built on a foundation of
            authenticity. We offer genuine products with a modest markup to
            ensure the sustainability of our operations.
          </h3>
        </motion.div>
        <motion.img
          className={styles.image2}
          initial={{ x: 150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.65 }}
          src={eura_inside_2}
          alt="eura inside 2"
        />
      </motion.div>
    </Wrapper>
  );
};

export default Authenticity;
