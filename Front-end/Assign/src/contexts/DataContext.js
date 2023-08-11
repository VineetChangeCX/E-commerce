import Product from "./ImageMap";
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [productData, setProductData] = useState({});
  // const Imgs = [
  //     {
  //       id: 1,
  //       image: { url: tshirt },
  //       name: "This is T-shirt-1",
  //       price: 25.00,
  //       brand : "XYZ",
  //       rating : 4,
  //       type : "cotton",
  //       flag:true,
  //       quant:1,
  //     },
  //     {
  //       id: 2,
  //       image: { url: tshirt },
  //       name: "This is T-shirt-2",
  //       price: 30.00,
  //       quant:1,
  //       brand :"ABC",
  //       rating: 3,
  //       type :"silk"
  //     },
  //     {
  //       id: 3,
  //       image: { url: tshirt },
  //       name: "This is T-shirt-3",
  //       price: 35.00,
  //       quant:1,
  //       brand :"DEF",
  //       rating: 3,
  //       type :"silk"
  //     },
  //     {
  //       id: 4,
  //       image: { url: tshirt },
  //       name: "This is T-shirt-4",
  //       price: 45.00,
  //       quant:1,
  //       brand :"RTY",
  //       rating: 2,
  //       type :"wool"
  //     },
  //     {
  //       id: 5,
  //       image: { url: tshirt },
  //       name: "This is T-shirt-5",
  //       price: 55.00,
  //       flag: true,
  //       quant:1,
  //       brand :"BNM",
  //       rating: 5,
  //       type :"casual"
  //     },
  //     {
  //       id: 6,
  //       image: { url: tshirt },
  //       name: "This is T-shirt-6",
  //       price: 65.00,
  //       quant:1,
  //       brand: "WER",
  //       rating: 4,
  //       type :"cotton"
  //     },
  //     {
  //       id: 7,
  //       image: { url: tshirt },
  //       name: "This is T-shirt-7",
  //       price: 75.00,
  //       quant:1,
  //       brand :"HER",
  //       rating: 5,
  //       type :"silk"
  //     },
  //     {
  //       id: 8,
  //       image: { url: tshirt },
  //       name: "This is T-shirt-8",
  //       price: 85.00,
  //       quant:1,
  //       brand: "PTY",
  //       rating: 3,
  //       type :"normal"
  //     },
  //     {
  //       id: 9,
  //       image: { url: tshirt },
  //       name:"This is T-shirt-9",
  //       price: 95.00,
  //       quant:1,
  //       brand :"KJY",
  //       rating: 4,
  //       type :"warm"
  //     },
  //   ];

  return (
    <Product.Provider
      value={{ state: { productData }, setProductData: setProductData }}
    >
      {children}
    </Product.Provider>
  );
};

export default ContextProvider;
