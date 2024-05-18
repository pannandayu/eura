import { useState } from "react";
import styles from "../../css/Introduction.module.css";
import { motion } from "framer-motion";
const Introduction: React.FC = () => {
  const [companyName, setCompanyName] = useState(true);

  const shortName = (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ color: "rgb(114, 114, 114)" }}
    >
      Eura
    </motion.h1>
  );
  const fullName = (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ color: "rgb(114, 114, 114)" }}
    >
      PT. Euraniaga Mitra Abadi
    </motion.h1>
  );

  return (
    <div className={styles.introduction}>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.content}>
          <motion.div
            whileHover={{ cursor: "pointer" }}
            onClick={() => setCompanyName((prev) => !prev)}
            key={companyName ? "a" : "b"}
          >
            {companyName ? shortName : fullName}
          </motion.div>
          <p>
            We are a <b>medical supply distributor</b>, catering to numerous
            hospitals and clinics, as well as individual customers like
            yourself. Committed to offering effective solutions, we ensure{" "}
            <b>affordability</b>, because maintaining good health shouldn't
            break the bank.
          </p>
        </div>
        <hr style={{ width: "10%" }} />
        <p>
          Based in <b>Palembang</b>, South Sumatra
        </p>
        <div className={styles.background} />
      </motion.div>
    </div>
  );
};

export default Introduction;
