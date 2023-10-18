import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import BrandPage from "../Pages/BrandPage/BrandPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
      {
        path: "/cart",
        element: <MyCart />,
      },
      {
        path: "/brands/:path",
        element: <BrandPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brands/${params.path}`),
      },
    ],
  },
]);

export default router;
