// import axios from 'axios'
// import React, { createContext } from 'react'
// import { baseUrl } from '../Utilits/BaseUrl.js'
// import { notify } from '../Utilits/Alert.jsx'
// export let orderContext = createContext('')
// export default function OrderContextProvider({children}) {
//     let token = localStorage.getItem('token')
//     async function createCashOrder(value,id) {
//         notify("order is done" , "success")
//         let {data} =    await axios.post(`${baseUrl}/orders/${id}`,{
//             shippingAddress:{value}
//         },{
//             headers:{token}
//         })
//     }
//   return <orderContext.Provider value={{createCashOrder}}>
// {children}
//   </orderContext.Provider>
// }
