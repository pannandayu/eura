import { motion } from "framer-motion";
import styles from "../../css/Ethos.module.css";
import Wrapper from "./Wrapper";

import eura_front from "../../../src/public/asset/image/eura_front.jpeg";

const Ethos: React.FC = () => {
  return (
    <Wrapper>
      <motion.div
        className={styles["ethos-headline"]}
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <span style={{ fontSize: "30px" }}>Our</span>
        <span style={{ fontSize: "150px" }}>Ethos</span>
        <motion.div
          className={styles["ethos-content"]}
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h3>
            This company profile website is designed to be concise. Like our
            business ethos, we believe in delivering{" "}
            <b>quality through action</b> rather than words.
          </h3>
        </motion.div>
      </motion.div>
      <motion.img
        className={styles.image}
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        src={eura_front}
        alt="eura front"
      />
    </Wrapper>
  );
};

export default Ethos;
