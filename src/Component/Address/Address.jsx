import React, { useContext, useState } from 'react'
import AddAddress from '../AddAddress/AddAddress.jsx'
import PaymentMethod from '../PaymentMethod/PaymentMethod.jsx'
import { addressContext } from '../../Context/AddressContext.jsx'
import { Link } from 'react-router-dom'

export default function Address() {
  let {addresses,removeAddress,isExistAddress} = useContext(addressContext)
  const [addressIsConfirm, setaddressIsConfirm] = useState('')


  function confirmAddress(id) {
    const addressIsConfirm= addresses.filter((elm)=>elm._id===id)
    setaddressIsConfirm(addressIsConfirm[0])

    }
  return <>
  {isExistAddress?<>
    <header className='d-flex  align-items-end m-5 justify-content-center'>
      <h3 className='mt-5 text-muted'>Welcome user to Payment <i className="fa-solid text-success fa-money-bill-1-wave"></i></h3>
    </header>

    <div className="container">
      <div className="row">
      <table className="bo w-75 m-auto customTable">
  <thead>
    <tr>
      <th className='p-2 fw-boder text-muted'>Name</th>
      <th className='p-2 text-muted'>Details</th>
      <th className='p-2 text-muted'>Phone </th>
      <th className='p-2 text-muted'>City </th>
      <th className='p-2 text-muted'>
      <div className="d-flex justify-content-center  align-items-center">
<i className="fa-solid text-success fs-2 fa-map-location-dot"></i>
</div>
</th>
      
    </tr>
  </thead>
  <tbody>
    {addresses&&addresses.map((elm)=>
 <tr key={elm._id}>
 <td className='p-4'>{elm.name}</td>
 <td className='p-4'>{elm.details}</td>
 <td className='p-4'>{elm.phone}</td>
 <td className='p-4'>{elm.city}</td>
 <td className='p-4'>
  <div className="d-flex">

    
      <button onClick= {()=>{removeAddress(elm._id)}} className='btn btn-danger me-3'>remove</button>
      {addressIsConfirm&&addressIsConfirm._id===elm._id?
      <i className="fa-sharp fs-2 text-success ms-4 fa-solid fa-circle-check"></i>:
      <button  onClick={()=>confirmAddress(elm._id)}  className='btn btn-success'>confirm</button>

    }

 

  </div>  

 </td>
</tr>
    )}
   

  </tbody>
</table>

  <Link className="d-flex  w-75 m-auto" to='/addaddress'>
<button  className=' m-3 btn btn-success '>Add Address</button>
</Link>


      </div>
    </div>
    <PaymentMethod addressIsConfirm={addressIsConfirm}/>  

  </>:
  <>
    <AddAddress/>
    </>
  }
  
  </>
}
