import styles from "../../css/Landing.module.css";
import Introduction from "./Introduction";

const Landing: React.FC = () => {
  return (
    <section className={styles.landing}>
      <Introduction />
    </section>
  );
};

export default Landing;
