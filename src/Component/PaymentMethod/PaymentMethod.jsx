import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { notify } from '../../Utilits/Alert.jsx';
import axios from 'axios';
import { baseUrl } from '../../Utilits/BaseUrl.js';
import { cartContext } from '../../Context/CartContect.jsx';

export default function PaymentMethod({addressIsConfirm}) {
  let navigator = useNavigate()
  let {removeAll,cart} =useContext(cartContext)
  let token = localStorage.getItem('token')
  async function order() {
    if (addressIsConfirm) {
      removeAll(cart)
    navigator('/thankyou')
      
    }else{
      notify('please confirm address','warning')
    }
  }
  return <>
   <div className="container  w-75 ">
      <div className="row">
      <div className="d-flex justify-content-between ">
  <div className="ms-5 d-flex   align-items-start mt-5">
    <button onClick={()=>{order()}} className='btn me-3  mb-3 fw-bolder text-success border border-3 border-success'>Cash Payment</button>
    <button onClick={()=>{order()}} className='btn  w-75 fw-bolder text-start  text-success border border-3 border-success'>Creadit Card Payment</button>
  

    </div>
    <div className="w-75   d-flex align-items-end pb-5 justify-content-center">
    <i className="fs-2 me-4 text-success fa-solid fa-money-bill-1-wave"></i>
    <i className=" me-4 fs-2 fa-brands fa-amazon-pay"></i>
    <img className='img-payment me-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="" />
    <img className='img-payment' src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png" alt="" />

    </div>
    </div>
    </div>
    </div>
  </>
}
