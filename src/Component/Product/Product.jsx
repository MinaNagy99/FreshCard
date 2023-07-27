import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContect.jsx';
import axios from 'axios';
import { baseUrl } from '../../Utilits/BaseUrl.js';
import { notify } from '../../Utilits/Alert.jsx';
import { wishlistContext } from '../../Context/WishListContext.jsx';
  

export default function Product({products}) {
  let {addToCart} =useContext(cartContext)
  let {addToWishList,idOfWishList,removeFromWishList}=useContext(wishlistContext)
    
  return<>
          <div className="container-fluid mt-5 p-4">
            <div className="row">
    {products&& products.map((elm)=>
        
            <div key={elm._id} className="col-md-2  col-4">
              <div className="product position-relative fs-5 text-muted">
              {!idOfWishList.find((item)=>item==elm._id)?
              <i onClick={()=>addToWishList(elm._id)} className=" px-4 py-2 fa-regular heart  fa-heart"></i>
              :
              <i onClick={()=>removeFromWishList(elm._id)} className="px-4 py-2 fa-solid  text-danger heart fa-heart"></i>
            
            }
              <Link to={`/product-details/${elm._id}`}>

            <img className='w-100' height={250} src={elm.imageCover} alt="" />
            <p className='text-main  p-0 m-0'>{elm.category.name.split(' ').slice(0,2).join(' ')}</p>
            <p className='fw-bolder'>{elm.title.split(' ').slice(0,2).join(' ')}</p>
            <div className="d-flex justify-content-between px-2 ">
                <p>{elm.priceAfterDiscount||elm.price+' EGP'}</p>

                <p><i className="rating-color fa-solid fa-star"></i>{elm.ratingsAverage}</p>
            </div></Link>
            <button onClick={()=>{addToCart(elm._id)}} className='btn mb-2  bg-main text-white w-100'> Add to cart</button>
        </div>
        </div>
    )}
           </div>
        </div>

  </>
}
