import React, { createContext, useEffect, useState } from 'react'
import { baseUrl } from '../Utilits/BaseUrl.js'
import axios from 'axios'
import { notify } from '../Utilits/Alert.jsx'
    export let wishlistContext = createContext('')
export default function WishListProvider({children}) {
    let token =localStorage.getItem('token')
    const [WishList, setWishList] = useState([])
    const [idOfWishList, setidOfWishList] = useState([])

    

    const [isLoading, setisLoading] = useState(true)

    async function addToWishList(id) {
        notify('product added to wishlist','success')
        let {data} = await axios.post(`${baseUrl}/wishlist`,{
          productId:`${id}`
        },{
          headers:{token}
        })
        setidOfWishList(data.data)
        getWishList()
      }
    async function getWishList() {
      if (localStorage.getItem('token')) {
        let {data} = await axios.get(`${baseUrl}/wishlist`,{
          headers:{token}
        })
        setWishList(data.data)
        setidOfWishList(data.data.map((elm)=>elm._id))
        setisLoading(false)
      }
    }  
    async function removeFromWishList(id) {
      notify('product removed from WishList','error')
       await axios.delete(`${baseUrl}/wishlist/${id}`,{
        headers:{token}
      })
      getWishList()
    }
    useEffect(() => {
      getWishList()
    }, [])
    
  return <wishlistContext.Provider value={{idOfWishList,isLoading,removeFromWishList,addToWishList,WishList}}>
{children}

  </wishlistContext.Provider>
}
