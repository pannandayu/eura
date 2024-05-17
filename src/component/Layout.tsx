import { Outlet } from "react-router-dom";
import styles from "../css/Layout.module.css";
import NavBar from "./NavBar";
import { Fragment } from "react/jsx-runtime";

const Layout = () => {
  return (
    <Fragment>
      <main className={styles.container}>
        <NavBar />
        <Outlet />
      </main>
      <footer className={styles.copyright}>
        <p>All Rights Reserved © 2024</p>
      </footer>
    </Fragment>
  );
};

export default Layout;
