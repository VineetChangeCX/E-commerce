import Product from "./ImageMap";
import tshirt from "./../../img/image1.jpg";
import { useState } from "react";

const ContextProvider = ({children})=>{
    const [productData , setProductData] = useState({})
    const Imgs = [
        {
          id: 1,
          image: { url: tshirt },
          name: "T1",
          price: 25,
          flag:true,
          quant:1,
        },
        {
          id: 2,
          image: { url: tshirt },
          name: "T2",
          price: 25.00,
          quant:1,
        },
        {
          id: 3,
          image: { url: tshirt },
          name: "T3",
          price: 25.00,
          quant:1,
        },
        {
          id: 4,
          image: { url: tshirt },
          name: "T4",
          price: 25.00,
          quant:1,
        },
        {
          id: 5,
          image: { url: tshirt },
          name: "T5",
          price: 25.00,
          flag: true,
          quant:1,
        },
        {
          id: 6,
          image: { url: tshirt },
          name: "T6",
          price: 25.00,
          quant:1,
        },
        {
          id: 7,
          image: { url: tshirt },
          name: "T7",
          price: 25.00,
          quant:1,
        },
        {
          id: 8,
          image: { url: tshirt },
          name: "T8",
          price: 25.00,
          quant:1,
        },
        {
          id: 9,
          image: { url: tshirt },
          name: "T9",
          price: 25.00,
          quant:1,
        },
      ];

    return (<Product.Provider value={{state:{Imgs , productData} , setProductData:setProductData}}> 
        {children}
    </Product.Provider>)
};

export default ContextProvider;
