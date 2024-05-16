import styles from "../css/Rating.module.css";
const Rating: React.FC = () => {
  const border = { border: "1px solid black", borderRadius: "10px" };

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
    </div>
  );
};

export default Rating;
