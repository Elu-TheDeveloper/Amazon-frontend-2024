import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product_module.module.css'
function Product() {
  const [products, setProducts]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  useEffect (()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
    setProducts (res.data)
    setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoadingLoading(false)
      
    })
  
  },[])
  return (
    <>
{
  isLoading?(<Loader/>): (<section className={classes.product_container}>
    {
      products.map((singleProduct)=>{
        return <ProductCard product={singleProduct} key={singleProduct.id} renderBtn={true}/>
      })
    }
    
       </section>)
}

    </>
   
  )
}

export default Product;