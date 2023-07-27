import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import slider1 from '../../images/slider1.png'
import slider2 from '../../images/slider2.png'
import slider3 from '../../images/slider3.png'
import slider4 from '../../images/slider4.png'
import slider5 from '../../images/slider5.png'

import "slick-carousel/slick/slick-theme.css";
export default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000


      };
  return<>
    <div className="container-fluid rounded-2 mt-5  my-4">
    <Slider  {...settings}>
      <div>
        <img className='w-100 m-auto' src={slider1} alt="" />
      </div>      <div>
        <img className='w-100 m-auto' src={slider2} alt="" />
      </div>      <div>
        <img className='w-100 m-auto'  src={slider3} alt="" />
      </div>      <div>
        <img className='w-100 m-auto' src={slider4} alt="" />
      </div>      <div>
        <img className='w-100 m-auto' src={slider5} alt="" />
      </div>
    </Slider>
    </div>
  
  
  </>
  
  
  
  

}
