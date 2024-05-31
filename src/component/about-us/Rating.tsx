import { useSetAtom } from "jotai";
import { Link } from "react-router-dom";
import { menuAtom } from "../../context/atom";
import styles from "../../css/Rating.module.css";

const { BASE_URL } = import.meta.env;

const Rating: React.FC = () => {
  const border = { border: "1px solid #eeeba7", borderRadius: "10px" };
  const setMenuState = useSetAtom(menuAtom);

  return (
    <div className={styles.rating}>
      <div>
        <h1>
          <a
            href="https://e-katalog.lkpp.go.id/info/penyedia/552304"
            target="_blank"
          >
            E-Catalogue Rating
          </a>
        </h1>
        <div className={styles["rating-box"]}>
          <div style={border}>
            <h3>Product Accuracy</h3>
            <p>3.9 / 4.0</p>
          </div>
          <div style={border}>
            <h3>Service</h3>
            <p>3.9 / 4.0</p>
          </div>
          <div style={border}>
            <h3>Delivery Speed</h3>
            <p>3.9 / 4.0</p>
          </div>
        </div>
      </div>
      <br />
      <Link
        style={{ color: "#eeeba7", textDecoration: "none" }}
        to={BASE_URL}
        onClick={() => setMenuState(false)}
      >
        Home
      </Link>
    </div>
  );
};

export default Rating;
