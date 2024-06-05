import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState } from "react";
import styles from "../../css/VisionMission.module.css";
import arrowImageSrc from "../../public/asset/image/arrow.svg";

const VisionMission: React.FC = () => {
  const [visMis, setVisMis] = useState(true);

  const vision = (
    <Fragment>
      <h1 className={styles["vision-mission-title"]}>Vision</h1>
      <h3>
        Transforming into the <b>ultimate solution</b> for your health concerns
        with our comprehensive medical supplies.
      </h3>
    </Fragment>
  );

  const mission = (
    <Fragment>
      <h1 className={styles["vision-mission-title"]}>Mission</h1>
      <h3>
        Enhance the <b>development</b> and <b>distribution</b> of medical
        equipment along with <b>customer care</b> to maximize business
        potential.
      </h3>
    </Fragment>
  );

  return (
    <Fragment>
      <div className={styles["vision-mission"]}>
        <AnimatePresence mode="popLayout">
          <motion.section
            key={visMis ? "vision" : "mission"}
            className={styles["vision-mission-content"]}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {visMis ? vision : mission}
          </motion.section>
        </AnimatePresence>
        <motion.div
          className={styles["button-container"]}
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setVisMis((prev) => !prev);
          }}
        >
          <img src={arrowImageSrc} alt="arrow button" />
        </motion.div>
      </div>
    </Fragment>
  );
};

export default VisionMission;
