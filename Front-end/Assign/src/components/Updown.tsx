import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { CartContext } from "./../contexts/CartContext";
import { UserContext } from "@/contexts/UserContext";

import axios from "axios";
import Product from "@/contexts/ImageMap";

interface ProductData {
  _id: string;
  title: string;
  price: number;
  size: string;
  imageURL: string;
  quantity: number;
  brand: string;
}

const api = axios.create({
  baseURL: "http://localhost:9000",
});

const Updown = (props) => {
  const [id, setId] = useState();
  const { setCartItems } = useContext(CartContext);
  const [data, setData] = useState<ProductData>({});
  const { user } = useContext(UserContext);
  const Productdata = useContext(Product);
  const product = Productdata.state.productData;

  useEffect(() => {
    fetchCartItem();
  }, []);
  const fetchCartItem = async () => {
    try {
      const response = await api.get("/api/cart/auth/showcart", {
        headers: { authorization: localStorage.getItem("authToken") },
      });
      const data = response.data;
      setCartItems(data);
      console.log("successfully fetch item.");
    } catch (error) {
      console.log("Error while showing item of cart.", error);
    }
  };

  useEffect(() => {
    setId(props?.e?.product);
  }, [props]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await api.get(`/api/product/${id}`);
          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
          console.error("Error while showing data into cart.", error);
        }
      };
      fetchData();
    }
  }, [id]);

  const cancelOrder = async (productID) => {
    try {
      const response = await api.delete(`/api/cart/auth/${productID}`, {
        headers: { authorization: localStorage.getItem("authToken") },
      });
      if (response.status === 200) {
        console.log(response.data);
        fetchCartItem();
        console.log("successfully removed item from cart");
      }
    } catch (error) {
      console.error("Error while removing item from cart.", error);
      alert("Error while removing item.");
    }
  };

  return (
    <>
      <div className="flex py-4 mb-5">
        <div className="w-20">
          <Image src={data?.imageURL} width={100} height={100} alt="p14" />
        </div>
        <div className="ml-7">
          <div className="text-sm font-medium">{data?.title}</div>
          <div className="text-lg font-semibold">
            {"$" + data?.price?.toFixed(2)}
          </div>
          <div className="text-sm text-gray-600">{data?.size}</div>
          <div className="text-sm text-slate-500">Colour: Red</div>
        </div>
        <div className="flex items-center ml-5">
          <div className="text-xs">Quantity: {props.e.quantity}</div>
          <div className="ml-3 text-xs">Brand: {data?.brand}</div>
        </div>
        <div className="ml-20 text-sm py-1 font-semibold">
          {"$" + (data?.price * data?.quantity).toFixed(2)}
        </div>
        <div className="text-xs ml-20 py-2 font-semibold">
          <button
            className="px-2 py-1 text-white bg-red-500 rounded-md"
            onClick={() => cancelOrder(data?._id)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Updown;
