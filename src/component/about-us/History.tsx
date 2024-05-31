import { motion } from "framer-motion";
import styles from "../../css/History.module.css";

import eura_banner from "../../../src/public/asset/image/eura_banner2.jpg";
import Wrapper from "./Wrapper";

const History: React.FC = () => {
  return (
    <Wrapper>
      <motion.div
        className={styles["history-headline"]}
        initial={{ x: -40 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span style={{ fontSize: "30px" }}>Our</span>
        <span style={{ fontSize: "150px" }}>History</span>
        <motion.div
          className={styles["history-content"]}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h3 style={{ marginBottom: 0 }}>
            Eura, established over a decade ago on March 1st, 2012, has
            consistently maintained its position as a robust and reliable
            medical supply distributor.
          </h3>
          <h3>
            We have successfully fulfilled requests from a wide range of
            clients, including large corporations and small businesses.
          </h3>
        </motion.div>
      </motion.div>
      <motion.img
        className={styles.image}
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        src={eura_banner}
        alt="eura banner"
      />
    </Wrapper>
  );
};

export default History;
