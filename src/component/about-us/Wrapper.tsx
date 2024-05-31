import { ReactNode } from "react";
import styles from "./Wrapper.module.css";

const Wrapper: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
};

export default Wrapper;
