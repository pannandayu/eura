import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
} from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./page/Home";

import { Provider } from "jotai";
import Error from "./component/Error";
import Brands from "./component/products/Brands";
import Item from "./component/products/Item";
import Items from "./component/products/Items";
import AboutUs from "./page/AboutUs";
import Products from "./page/Products";
import Shop from "./page/Shop";

const { BASE_URL } = import.meta.env;

function App() {
  const router = createBrowserRouter([
    {
      path: BASE_URL,
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: BASE_URL + "products", element: <Products /> },
        {
          path: BASE_URL + "products/items",
          element: <Items />,
        },
        {
          path: BASE_URL + "products/items/:name",
          loader: (props: LoaderFunctionArgs) => {
            return props.params.name || "";
          },
          element: <Item />,
        },
        { path: BASE_URL + "products/brands", element: <Brands /> },
        { path: BASE_URL + "about-us", element: <AboutUs /> },
        { path: BASE_URL + "shop", element: <Shop /> },
      ],
      errorElement: <Error />,
    },
  ]);

  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
