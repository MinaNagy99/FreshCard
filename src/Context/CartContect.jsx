import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { baseUrl } from "../Utilits/BaseUrl.js";
import { notify } from "../Utilits/Alert.jsx";
export let cartContext = createContext("");

export default function CartContextProvider({ children }) {
  let token = localStorage.getItem("token");
  const [cart, setcart] = useState("");
  const [cartId, setcartId] = useState("");
  const [cartCount, setcartCount] = useState(0);
  const [totalPrice, settotalPrice] = useState(0);
  const [isEmpty, setisEmpty] = useState(true);

  function getTotalPrice(cart) {
    let arr = [];
   return cart.map((elm) => {
      arr.push(elm.count * elm.price);

      settotalPrice(arr.reduce((total, item) => total + item));
    });
  }
  function removeAll(cart) {
  return  cart.map((elm) => {
      removeFromCart(elm.product._id);
    });
  }
  async function getCart() {
    if (localStorage.getItem("token")) {
      setisEmpty(true);
      let { data } = await axios.get(`${baseUrl}/cart`, {
        headers: { token }
      });
      setcart(data.data.products);
      setcartId(data.data._id);
      setcartCount(data.data.products.length);
      getTotalPrice(data.data.products);
      if (data.data.products.length === 0) {
        setisEmpty(false);
      }
    }
  }
  async function addToCart(id) {
    notify("Product added", "success");
    try {
        await axios.post(
            `${baseUrl}/cart`,
            { productId: id },
            {
                headers: { token }
            }
        );
        getCart();
    } catch (error) {
        console.error("Error adding product to cart:", error);
        notify("Failed to add product to cart", "error");
    }
}


  async function removeFromCart(id) {
    notify("remove product from cart", "error");

    await axios.delete(`${baseUrl}/cart/${id}`, {
      headers: { token }
    });
    getCart();
  }
  async function increaseCount(currentlyCount, id) {
    await axios.put(
      `${baseUrl}/cart/${id}`,
      {
        count: currentlyCount + 1
      },
      {
        headers: { token }
      }
    );
    getCart();
  }

  async function decreaseCount(id, currentlyCount) {
    if (currentlyCount === 1) {
      removeFromCart(id);
    } else {
      await axios.put(
        `${baseUrl}/cart/${id}`,
        { count: currentlyCount - 1 },
        {
          headers: { token }
        }
      );

      getCart();
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <cartContext.Provider
      value={{
        cart,
        removeAll,
        cartCount,
        totalPrice,
        isEmpty,
        addToCart,
        cartId,
        increaseCount,
        getCart,
        decreaseCount,
        removeFromCart
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
