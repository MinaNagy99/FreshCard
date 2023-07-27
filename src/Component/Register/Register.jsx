import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { baseUrl } from '../../Utilits/BaseUrl.js';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    let navigate = useNavigate()
    const [errorFromDataBase, seterrorFromDataBase] = useState('')
    const [isLoading, setisLoading] = useState(false)
    let validationSchema = yup.object({
        name:yup.string().min(3).required(),
        email:yup.string().email().required(),
        password:yup.string().matches(/^(?=.*[A-Za-z])[A-Za-z\d]{6,}$/,'at least 6 charchter and start with upperCase').required(),
        rePassword:yup.string().oneOf([yup.ref('password')],'not match the password').required()

    }) 
    const RegisterFormik = useFormik({
        initialValues: {
          name:'',
          email:'',
          password:'',
          rePassword:"",
        },
        validationSchema,
        onSubmit: async values => {
            setisLoading(true)
               await axios.post(`${baseUrl}/auth/signup`,values).then((data)=>{
                setisLoading(false)
                navigate('/login')
          }).catch((err)=>{
            seterrorFromDataBase(err.response.data.message) 
            setisLoading(false)            
          })
      
},
      });

  return <>
  <div className="container mt-5">
    <div className="row w-75 m-auto  p-5"  >
        <form onSubmit={RegisterFormik.handleSubmit}>
    
    <div className="d-flex flex-column align-item-center justify-content-center">
        <p className='h2 '>Register Now :</p>
        {errorFromDataBase&&
        <div className="alert alert-danger p-2 my-2"> {errorFromDataBase}</div>
        }
        <br />
        <p>Name</p>
        <input onBlur={RegisterFormik.handleBlur} value={RegisterFormik.values.name} onChange={RegisterFormik.handleChange} name='name' type="text" className='form-control' />
        {RegisterFormik.errors.name&& RegisterFormik.touched.name&&
         <div className="alert alert-danger p-2 mt-3">
         {RegisterFormik.errors.name}
     </div>}
       
        <br />
        <p>Email</p>
        <input  onBlur={RegisterFormik.handleBlur} value={RegisterFormik.values.email} onChange={RegisterFormik.handleChange} name='email' type="email" className='form-control' />
        { RegisterFormik.errors.email&&RegisterFormik.touched.email&&
         <div className="alert alert-danger p-2 mt-3">
         {RegisterFormik.errors.email}
     </div>}
        <br />
        <p>Password</p>
        <input onBlur={RegisterFormik.handleBlur} value={RegisterFormik.values.password} onChange={RegisterFormik.handleChange} name='password' type="password" className='form-control' />
        {RegisterFormik.errors.password&&RegisterFormik.touched.password&&
         <div className="alert alert-danger p-2 mt-3">
         {RegisterFormik.errors.password}
     </div>}
        <br />
        <p>RePassword</p>
        <input onBlur={RegisterFormik.handleBlur} value={RegisterFormik.values.rePassword} onChange={RegisterFormik.handleChange} name='rePassword' type="password" className='form-control' />
        {RegisterFormik.errors.rePassword&&RegisterFormik.touched.rePassword&&
         <div className="alert alert-danger p-2 mt-3">
         {RegisterFormik.errors.rePassword}
     </div>}
        <br />
        <div className="d-flex">
            {isLoading&&
                        <button type='submit' className='myButton'>  <i className="fa-solid fa-spinner fa-spin"></i>  </button>

                        }
            {!isLoading&&
            <button disabled={!(RegisterFormik.isValid&&RegisterFormik.dirty)} type='submit' className='myButton'>Register</button>
            }

        </div>

    </div>
    </form>
    </div>
  </div>
  </>
}
