import styles from "../../css/Landing.module.css";
import Address from "./Address";
import Introduction from "./Introduction";

const Landing: React.FC = () => {
  return (
    <div className={styles.landing}>
      <Introduction>
        <Address />
        <br />
        <a
          href="https://instagram.com/euraniaga_alkes"
          target="_blank"
          style={{ textDecoration: "none", color: "#eeeba7" }}
        >
          @euraniaga_alkes
        </a>
      </Introduction>
    </div>
  );
};

export default Landing;
