import styles from "../css/AboutUs.module.css";
import { motion } from "framer-motion";

import eura_logo from "../../src/public/asset/image/eura_logo.png";

const AboutUs: React.FC = () => {
  return (
    <div className={styles["about-us"]}>
      <div className={styles["about-us-content"]}>
        <img src={eura_logo} alt="eura logo" width={"200px"} height={"200px"} />
        <motion.h2
          initial={{ x: -40 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
        >
          Hi, we see that you want to know more about us.
          <hr style={{ width: "50%" }} />
        </motion.h2>
        <div style={{ maxWidth: "50%", lineHeight: "150%" }}>
          <motion.p
            initial={{ x: -40 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Established over a decade ago on March 1st, 2012, Eura has
            consistently maintained its position as a{" "}
            <b>robust and reliable </b>
            medical supply distributor. We have successfully fulfilled requests
            from a wide range of clients, from large corporations to small
            businesses.
          </motion.p>
          <motion.p
            initial={{ x: -40 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.52 }}
          >
            Our reputation for excellence is built on a foundation of
            authenticity. We offer <b>genuine products</b> with a modest markup
            to ensure the sustainability of our operations.
          </motion.p>
          <motion.p
            initial={{ x: -40 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.54 }}
          >
            This company profile website is designed to be concise. Like our
            business ethos, we believe in delivering{" "}
            <b>quality through action</b> rather than words.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
