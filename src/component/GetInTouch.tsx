import styles from "../css/GetInTouch.module.css";

const GetInTouch: React.FC = () => {
  return (
    <div className={styles["get-in-touch"]}>
      <div style={{ zIndex: 2 }}>
        <h1 style={{ textAlign: "center" }}>Reach Us Out</h1>
        <hr />
        <div className={styles.links}>
          <div>
            <h1>
              <a
                href="https://maps.app.goo.gl/ongkLavySciN35WDA"
                target="_blank"
              >
                Map
              </a>
            </h1>
            <h1>
              <a href="https://linktr.ee/euraniaga" target="_blank">
                Linktree
              </a>
            </h1>
          </div>
          <div>
            <h1>
              <a href="https://www.tokopedia.com/euraniaga" target="_blank">
                Tokopedia
              </a>
            </h1>
            <h1>
              <a href="https://shopee.co.id/euraniaga" target="_blank">
                Shopee
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>All Rights Reserved © 2024</p>
      </div>
      <div className={styles.background} />
    </div>
  );
};

export default GetInTouch;
