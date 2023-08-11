import React, { useContext, useState } from "react";
import { CartContext } from "./../contexts/CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sample from "./Updown";
import Product from "@/contexts/ImageMap";

const Addcart = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  const value = useContext(Product);

  return (
    <>
      <div className="mx-14 my-5">
        <Navbar />
        <div className="mt-16 w-full lg:mx-48 lg:w-4/5">
          <div className="flex flex-wrap gap-8">
            <div className="w-full lg:w-3/5">
              <span>My Cart</span>
              <hr className="border-t-2 border-gray-600 my-1" />
              <div>
                {cartItems.map((e, i) => {
                  return (
                    <>
                      <Sample e={e} i={i} />
                    </>
                  );
                })}
              </div>
            </div>

            <div>
              <span>Order Summary</span>
              <hr className="border-t-2 border-gray-600 my-2" />

              <div className="flex pt-8">
                <span className="font-thin font-extralight mr-auto">
                  Subtotal
                </span>
                <span>{"$" + totalPrice.toFixed(2)}</span>
              </div>

              <div className="pt-4">
                <span className="font-thin font-extralight underline">
                  Estimate Shipping
                </span>
              </div>
              <hr className="border-t-2 border-gray-600 my-1" />

              <div className="flex pt-5">
                <span className="font-semibold mr-auto">Total</span>
                <span className="font-semibold">
                  {"$" + totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="mt-6">
                <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-solid">
                  Checkout
                </button>
              </div>

              <div className="flex items-center mt-2 px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
                <span className="ml-2 font-medium">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Addcart;
