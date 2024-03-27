import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext';

const Cart = () => {
    const productContext=useContext(ProductContext);
  return (
    <>
    {productContext.products.map((e)=>{
        return(
            <>
        <div>name:{e.name}</div>
        <div>desc:{e.desc}</div>
        </>
        )
    })}
    </>
  )
}

export default Cart