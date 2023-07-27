import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categoryContext } from '../../Context/CategoryContext.jsx';
import { Link } from 'react-router-dom';


export default function CategoriesSlider() {
    let{categoryies} =useContext(categoryContext)
 var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 4000


  };
  
    
  return <>
  
      <div className="container-md mt-5 rounded-2  my-4">
        <h3 className='pb-2' >Shop popular Categories</h3>
    <Slider  {...settings}>
    {categoryies&& categoryies.map((elm)=>
        <div key={elm._id}>
                <Link to={`category/${elm._id}`}>
          
            <img className='w-100 sliderOfCategory' height={200} src={elm.image} alt="" />
            <p>{elm.name}</p>
            </Link>
        </div>
    
    )}
    </Slider>
    </div>
  </>
}
