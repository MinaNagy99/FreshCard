import React, { useContext } from 'react'
import { wishlistContext } from '../../Context/WishListContext.jsx'
import { cartContext } from '../../Context/CartContect.jsx';
import Loading from '../Loading/Loading.jsx';
import { Link } from 'react-router-dom';

export default function WishList() {
    let{WishList,isLoading,removeFromWishList} = useContext(wishlistContext)
    let {addToCart} =useContext(cartContext)
  return <>
    <div className="container  header-wishlist">
    <h1 className=' text-center mb-5 border border-3 text-muted   '>List OF WishList</h1>
        {isLoading&&<Loading/>}
        {WishList&&WishList.map((elm)=>
            <div key={elm._id} className="row  box-shadow  mt-3 w-md-75 m-auto border">

            <div className="col-3 d-flex justify-content-center align-items-center ">
            <Link className='d-flex justify-content-center align-items-center '  to={`/product-details/${elm._id}`}>

                <img className='img-width ' src={elm.imageCover} alt="" />
            </Link>
            </div>
            <div className="col-5    d-flex justify-content-around align-items-start flex-column   ">
                <h3>{elm.title}</h3>
                <p>{elm.description}</p>
                <p className=' fs-5 border px-4 py-1 bg-dark rounded-4  text-white'>price : <span className='fw-bold text-success'>{elm.price} LE</span> </p>
            </div>
            <div className="col-4  d-flex flex-column justify-content-around   align-items-center">

                <button onClick={()=>{addToCart(elm._id)}} className=' btn  btn-success'>Add to cart </button>  
                <button onClick={()=>{removeFromWishList(elm._id)}} className='  btn btn-danger'>Remove From WishList </button>            

            </div>
        </div>
      
        )}
        
      
    </div>
  
  
  </>
}
