import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Error from "./component/Error";
import AboutUs from "./page/AboutUs";
import Products from "./page/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/menu", element: <Menu /> },
        { path: "/products", element: <Products /> },
        { path: "/about-us", element: <AboutUs /> },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
