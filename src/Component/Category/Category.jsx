import React, { useContext } from 'react'
import { categoryContext } from '../../Context/CategoryContext.jsx'

import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading.jsx'

export default function Category() {
    
    let{categoryies,isLoading}=useContext(categoryContext)

  return <>
  {isLoading&&<Loading/>}
  {!isLoading&&<>
    <div className="container categories ">
        <div className="row ">
            <div className="col-4 p-4 d-flex justify-content-center align-items-center   col-md-3">
                <div>
                    <h2 className='fw-bolder text-success'>Our Category</h2>
                    <p className='ps-2 fs-5 text-muted pt-2'>You can see our categories and each category includes the products in it</p>
                </div>
            </div>
        
           
           {categoryies&& categoryies.map((elm)=>

             <div key={elm._id} className="col-6 g-4  col-md-3">
                <Link to={`${elm._id}`}>
                <div className="category box-shadow rounded-4 p-3">
                    <img className='w-100 rounded-2' height={300} src={elm.image} alt="" />
                    <h4 className='text-center pt-3'>{elm.name}</h4>
                </div>
                </Link>
                </div> 
        
    
    )}
            
        </div>
    </div>
  
  </>}

    
  
  
  </>
}
