import React from "react";
import MainSlider from "../MainSlider/MainSlider.jsx";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider.jsx";
import Products from "../Products/Products.jsx";

export default function HomePage() {
  return (
    <>
      <MainSlider />
      <CategoriesSlider />
      <Products />
    </>
  );
}
