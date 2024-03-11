import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { baseUrl } from '../Utilits/BaseUrl.js'
import { notify } from '../Utilits/Alert.jsx'
   export let addressContext = createContext('')
export default function AddressContextProvider({children}) {
    let token = localStorage.getItem('token')

    const [addresses, setaddresses] = useState([])
    const [isExistAddress, setisExistAddress] = useState(true)

    async function getAddress() {
   if (localStorage.getItem('token')) {
    let {data} = await axios.get(`${baseUrl}/addresses`,{
        headers:{token}
    })
    setaddresses(data.data)
    if (data.data.length===0) {
        setisExistAddress(false)
    }
   }

    }
    async function removeAddress(id){
        notify('address removed','error')
        
        await axios.delete(`${baseUrl}/addresses/${id}`,{
            headers:{token}
        })
        getAddress()
    }
    async function addAddress(values) {
      let {data}=  await axios.post(`${baseUrl}/addresses`,values,{
            headers:{token}
        })
        getAddress()
        setisExistAddress(true)
    }

 
    useEffect(() => {
        getAddress()
    }, [])
    
return <addressContext.Provider value={{isExistAddress,addresses,removeAddress,addAddress}} >
    {children}

  </addressContext.Provider>
}
