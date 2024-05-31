import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import styles from "../css/Layout.module.css";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <Fragment>
      <main className={styles.container}>
        <NavBar />
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>All Rights Reserved © 2024</p>
      </footer>
    </Fragment>
  );
};

export default Layout;
