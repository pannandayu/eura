import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Error from "./component/Error";
import AboutUs from "./page/AboutUs";
import Products from "./page/Products";

const { BASE_URL } = import.meta.env;

function App() {
  const router = createBrowserRouter([
    {
      path: BASE_URL,
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: BASE_URL + "/menu", element: <Menu /> },
        { path: BASE_URL + "/products", element: <Products /> },
        { path: BASE_URL + "/about-us", element: <AboutUs /> },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
