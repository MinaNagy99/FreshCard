import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import * as yup from 'yup'
import { baseUrl } from '../../Utilits/BaseUrl.js'
import { useNavigate } from 'react-router-dom'
import { hasFormSubmit } from '@testing-library/user-event/dist/utils/index.js'
import { addressContext } from '../../Context/AddressContext.jsx'
export default function   AddAddress() {
  const [isLoading, setisLoading] = useState(false)
  const [errorFromDataBase, seterrorFromDataBase] = useState('')
  let{getAddress,addAddress} =useContext(addressContext)
  let token = localStorage.getItem('token')
  let navigate = useNavigate()

let validationSchema = yup.object({
  name:yup.string().min(3).required(),
  phone:yup.number().required(),
  details:yup.string().min(5).required(),
  city:yup.string().min(3).required()
})
  let addressFormik = useFormik({
    initialValues:{
      name:"",
      phone:'',
      city:'',
      details:'',
    },
    validationSchema,
    onSubmit: async values=>{
      setisLoading(true)
        addAddress(values).then((data)=>{
          setisLoading(false)
          navigate('/address')
        })
    }

  })
  return <>
    <header className='d-flex  align-items-end m-5 justify-content-center'>
      <h3 className='mt-5 text-muted'> Enter your  Address <i className="ps-3 fa-solid fa-map-location-dot"></i></h3>
    </header>
 <div className="container w-50 mt-5">
      <div className="row mt-5">

      <form onSubmit={addressFormik.handleSubmit} className='box-shadow' action="">
      <label className='fw-bolder mb-2 ms-3' name='name' htmlFor="">Name</label>
        <input name='name' onBlur={addressFormik.handleBlur} value={addressFormik.values.name} onChange={addressFormik.handleChange} type="text" placeholder='Name' className='form-control mb-4' />
        {addressFormik.errors.name&&addressFormik.touched.name&&
        <div className="alert alert-danger p-2 mt-3">
          {addressFormik.errors.name}
          </div>}
        <label className='fw-bolder mb-2 ms-3' htmlFor="">Address Details</label>
        <input name='details' onBlur={addressFormik.handleBlur} value={addressFormik.values.details} type="text" onChange={addressFormik.handleChange} placeholder='Details Address' className='form-control mb-4' />
        {addressFormik.errors.details&&addressFormik.touched.details&&
        <div className="alert alert-danger p-2 mt-3">
          {addressFormik.errors.details}
          </div>}
        <label className='fw-bolder mb-2 ms-3' htmlFor="">Phone Number</label>
        <input name='phone' onBlur={addressFormik.handleBlur} value={addressFormik.values.phone} type="phone" onChange={addressFormik.handleChange} placeholder='Phone Number' className='form-control mb-4' />
        {addressFormik.errors.phone&&addressFormik.touched.phone&&
        <div className="alert alert-danger p-2 mt-3">
          {addressFormik.errors.phone}
          </div>}
        <label className='fw-bolder mb-2 ms-3' htmlFor="">City / Area</label>
        <input name='city' onBlur={addressFormik.handleBlur} value={addressFormik.values.city} type="text" onChange={addressFormik.handleChange} placeholder='City / Area' className='form-control' />
        {addressFormik.errors.city&&addressFormik.touched.city&&
        <div className="alert alert-danger p-2 mt-3">
          {addressFormik.errors.city}
          </div>}
       {isLoading?
      <button type='submit' className='btn  w-100   my-5 btn-success'>  <i className="fa-solid fa-spinner fa-spin"></i>  </button>:
       <button type='submit' className='btn  w-100   my-5 btn-success'>Submit</button>
             
             }
        
    </form>
    
      </div>

    </div>
  
  </>
}
