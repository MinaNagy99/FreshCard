import React from "react";
import Products from "./Component/Products/Products.jsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout.jsx";
import HomePage from "./Component/HomePage/HomePage.jsx";
import ProductDetails from "./Component/ProductDetails/ProductDetails.jsx";
import Register from "./Component/Register/Register.jsx";
import Login from "./Component/Login/Login.jsx";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute.jsx";
import Cart from "./Component/Cart/Cart.jsx";
import CartContextProvider from "./Context/CartContect.jsx";
import { ToastContainer } from "react-toastify";
import Category from "./Component/Category/Category.jsx";
import CategoryContextProvider from "./Context/CategoryContext.jsx";
import SpesificCategory from "./Component/SpesificCategory/SpesificCategory.jsx";
import Brands from "./Component/Brands/Brands.jsx";
import Address from "./Component/Address/Address.jsx";
import WishList from "./Component/WishList/WishList.jsx";
import WishListProvider from "./Context/WishListContext.jsx";
import AddressContextProvider from "./Context/AddressContext.jsx";
import AddAddress from "./Component/AddAddress/AddAddress.jsx";
import ThankYouForOrder from "./Component/ThankYouForOrder/ThankYouForOrder.jsx";
import CartEmpty from "./Component/CartEmpty/CartEmpty.jsx";

export default function App() {
  let routes = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/FreshCard", element: <HomePage /> },
        { path: "/products", element: <Products /> },
        { path: "/product-details/:id", element: <ProductDetails /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          )
        },
        { path: "/category", element: <Category /> },
        { path: "/category/:id", element: <SpesificCategory /> },
        { path: "/brands", element: <Brands /> },
        { path: "/address", element: <Address /> },
        { path: "/addaddress", element: <AddAddress /> },

        {
          path: "/wishlist",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          )
        },
        { path: "/cartEmpty", element: <CartEmpty /> },

        { path: "/thankYou", element: <ThankYouForOrder /> }
      ]
    }
  ]);
  return (
    <>
      <AddressContextProvider>
        <WishListProvider>
          <CartContextProvider>
            <CategoryContextProvider>
              <RouterProvider router={routes} />
            </CategoryContextProvider>
            <ToastContainer autoClose="3000" theme="colored" />
          </CartContextProvider>
        </WishListProvider>
      </AddressContextProvider>
    </>
  );
}
