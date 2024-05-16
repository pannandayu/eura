import styles from "./css/App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./component/NavBar";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

  return (
    <div className={styles.container}>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
