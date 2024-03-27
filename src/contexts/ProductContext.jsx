import { createContext,useState } from "react";

export const ProductContext=createContext(null);

export const ProductContextProvider=(props)=>{
    const[products,setProducts]=useState([])
    console.log(products)
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
}