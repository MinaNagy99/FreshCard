import React, { useEffect, useState } from 'react'
import MainSlider from '../MainSlider/MainSlider.jsx'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider.jsx'
import Products from '../Products/Products.jsx'
// const [num, setnum] = useState([1,2,3,4])
//   console.log(num);
 
export default function HomePage() {
  return <>
  
  <MainSlider/>
  <CategoriesSlider/>
  <Products/>
  </>
}
