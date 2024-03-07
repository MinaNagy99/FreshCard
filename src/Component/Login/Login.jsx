import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { baseUrl } from '../../Utilits/BaseUrl.js';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    let navigate = useNavigate()
    const [errorFromDataBase, seterrorFromDataBase] = useState('')
    const [isLoading, setisLoading] = useState(false)
    let validationSchema = yup.object({
        email:yup.string().email().required(),
        password:yup.string().matches(/.{6,}$/,'Password no valid').required(),

    }) 
    const LoginFormik = useFormik({
        initialValues: {
          email:'',
          password:'',
        },
        validationSchema,
        onSubmit: async values => {
            setisLoading(true)
               await axios.post(`${baseUrl}/auth/signin`,values).then((data)=>{
                console.log(data.data.token);
                localStorage.setItem('token',data.data.token)
                setisLoading(false)
                navigate('/')
          }).catch((err)=>{
            seterrorFromDataBase(err.response.data.message) 
            setisLoading(false)            
          })
      
},
      });

  return <>
  <div className="container mt-5">
    <div className="row w-75 m-auto  p-5"  >
        <form onSubmit={LoginFormik.handleSubmit}>
    
    <div className="d-flex flex-column align-item-center justify-content-center">
        <p className='h2 '>Login Now :</p>
        {errorFromDataBase&&
        <div className="alert alert-danger p-2 my-2"> {errorFromDataBase}</div>
        }
        <br />
   
       
        <br />
        <p>Email</p>
        <input  onBlur={LoginFormik.handleBlur} value={LoginFormik.values.email} onChange={LoginFormik.handleChange} name='email' type="email" className='form-control' />
        { LoginFormik.errors.email&&LoginFormik.touched.email&&
         <div className="alert alert-danger p-2 mt-3">
         {LoginFormik.errors.email}
     </div>}
        <br />
        <p>Password</p>
        <input onBlur={LoginFormik.handleBlur} value={LoginFormik.values.password} onChange={LoginFormik.handleChange} name='password' type="password" className='form-control' />
        {LoginFormik.errors.password&&LoginFormik.touched.password&&
         <div className="alert alert-danger p-2 mt-3">
         {LoginFormik.errors.password}
     </div>}
    
        <br />
        <div className="d-flex">
            {isLoading&&
                        <button type='submit' className='myButton'>  <i className="fa-solid fa-spinner fa-spin"></i>  </button>

                        }
            {!isLoading&&
            <button disabled={!(LoginFormik.isValid&&LoginFormik.dirty)} type='submit' className='myButton'>Sign in</button>
            }

        </div>

    </div>
    </form>
    </div>
  </div>
  </>
}
