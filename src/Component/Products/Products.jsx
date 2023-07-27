import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Utilits/BaseUrl.js'
import Product from '../Product/Product.jsx'
import Loading from '../Loading/Loading.jsx'

export default function Products() {

    const [products, setproducts] = useState([])
    const [isLoading, setisLoading] = useState(true)
    async function getAllProducts() {
        let{data}= await axios.get(`${baseUrl}/products`)
        setproducts(data.data)
        setisLoading(false)
    }
    useEffect(() => {
        getAllProducts()
    }, [])

  return <>
  
  {isLoading&&<Loading/>}

  {!isLoading&&<Product products={products}/>}
  
  
  
  </>
}
