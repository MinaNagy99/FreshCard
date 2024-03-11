import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../Utilits/BaseUrl.js'
import Loading from '../Loading/Loading.jsx'

export default function Brands() {
    const [brands, setbrands] = useState('')
    const [isLoading, setisLoading] = useState(true)

    async function getBrands() {
        let {data} = await axios.get(`${baseUrl}/brands`)
    setbrands(data.data)  
    setisLoading(false) 
}
    useEffect(() => {
        getBrands()
          }, [])
  return <>
  {isLoading&&<Loading/>}
  {!isLoading&&<>
    <div className="container categories ">
        <div className="row ">
            <div className="col-4 p-4 d-flex justify-content-center align-items-center   col-md-3">
                <div>
                    <h2 className='fw-bolder text-success'>Our brands</h2>
                    <p className='ps-2 fs-5 text-muted pt-2'>You can see our Brands </p>
                </div>
            </div>
        
           
           {brands&& brands.map((elm)=>

             <div key={elm._id} className="col-6 g-4  col-md-3">
                
                <div className="category box-shadow rounded-4 p-3">
                    <img className='w-100 rounded-2' height={170} src={elm.image} alt="" />
                    <h4 className='text-center pt-3'>{elm.name}</h4>
                </div>
            
                </div> 
        
    
    )}
            
        </div>
    </div>
  </>}

    
  
  
  </>
}
