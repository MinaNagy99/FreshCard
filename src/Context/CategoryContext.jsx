import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { baseUrl } from '../Utilits/BaseUrl.js'
export let categoryContext = createContext('')
export default function CategoryContextProvider({children}) {
    const [categoryies, setcategoryies] = useState('')
    const [isLoading, setisLoading] = useState(true)

    async function getCategories() {
        let {data} = await axios.get(`${baseUrl}/categories`)
    setcategoryies(data.data)
    setisLoading(false)   
}
    useEffect(() => {
        getCategories()
          }, [])
    
  return <categoryContext.Provider value={{isLoading,categoryies}}>
  {children}
</categoryContext.Provider>
}
