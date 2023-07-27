import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../../Context/CartContect.jsx'
import { wishlistContext } from '../../Context/WishListContext.jsx'

export default function Navbar() {
  let{cartCount} =useContext(cartContext)
  let{WishList}=useContext(wishlistContext)
  const [isLogin, setisLogin] = useState(false)
  let navigate = useNavigate()
  function logOut() {
    localStorage.removeItem('token')
    navigate('/login')
  }
  function checkIsLogin() {
    if (localStorage.getItem('token')) {
      setisLogin(true)
    }else{
      setisLogin(false)
    }
  }
  useEffect(() => {
      checkIsLogin()
  }, [isLogin])
  
  return <>
  
  <nav className="navbar navbar-expand-lg bg-main-light">
  <div className="container">
    <Link className="navbar-brand" to="/">

    <img src="https://amaged1896.github.io/react-ecommerce-context/static/media/freshcart-logo.53f7a424c3aedc30a0fb46dc2278137c.svg" alt="" />

    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto my-2 mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>    <li className="nav-item">
          <Link className="nav-link" to="/category">Categories</Link>
        </li>    <li className="nav-item">
          <Link className="nav-link" to="/brands">Brands</Link>
        </li>   
    
      
      </ul>
    
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 my-2">
      {localStorage.getItem('token')&&
      <>
         <li className="nav-item ps-2  ">
        <Link to={'/cart'}  type="button" className="btn nav-link   position-relative">
        Cart
        <i className="ps-1  fa-solid fa-cart-shopping"></i>
     {cartCount>0?
     <>
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success">
              {cartCount}
    <span className="visually-hidden">unread messages</span>
  </span></>:''}
          </Link>
          </li>   
      <li className="nav-item ps-2  ">
        <Link  to='/wishlist' type="button" className="btn nav-link   position-relative">
        Wishelist
        <i className="ps-1 fa-regular fa-heart"></i>
   {WishList.length>0?
   <>
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success">
              {WishList.length}
    <span className="visually-hidden">unread messages</span>
  </span></>:''}
          </Link>
          </li> 


        <li className="nav-item ps-1  ">
          <a className="nav-link " onClick={logOut} href="#">Logout</a>
        </li> 
      
      </>
      }
     
     {!localStorage.getItem('token')&&
     <>
       <li className="nav-item">
          <Link className="nav-link" to='/login'>Login</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to='/register'>register</Link>
        </li> 
     </>
     }
       
       
      
      </ul>
    
    </div>
  </div>
</nav>
  </>
}
