import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ThankYouForOrder() {
    let navigator = useNavigate()
  return <>
    <div className=" flex-column bg-success text-white d-flex justify-content-around thank-you align-items-center mt-5">
    <h1>THANK YOU</h1>
    <i className="iconOfThank rounded-circle border border-5 p-5 fa-solid fa-check"></i>
    <p className='fs-5'>Thank you for shopping with us at Fresh Card</p>
    <button onClick={()=>{navigator('/')}} className='fs-2 btn btn-success mb-5'>Contain to Shoping</button>
    </div>
  </>
}
