import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../Utilits/BaseUrl.js'
import axios from 'axios'
import Loading from '../Loading/Loading.jsx'
import Product from '../Product/Product.jsx'

export default function SpesificCategory() {
    let {id}=useParams()
    const [products, setproducts] = useState([])
    const [isLoading, setisLoading] = useState(true)
    async function getAllProducts() {
        let{data}= await axios.get(`${baseUrl}/products`)
       let myProduct =   data.data.filter((elm)=>elm.category._id===id)
        setproducts(myProduct)
        setisLoading(false)
    }
    useEffect(() => {
        getAllProducts()
    }, [])
  return <>
    
   {isLoading&&<Loading/>}
   {!isLoading&&products&&  <Product products={products}/> }



  </>

}
