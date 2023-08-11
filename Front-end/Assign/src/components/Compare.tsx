import React, { useContext } from "react";
import Navbar from "./Navbar";
import Product from "@/contexts/ImageMap";
import Image from "next/image";
import Footer from "./Footer";
import { CartContext } from "@/contexts/CartContext";

const Compare = () => {
  const { compItem, removeComp } = useContext(CartContext);
  const Productdata = useContext(Product);
  const product = Productdata.state.productData;

  const cancelproduct = (id) => {
    console.log(id);
    removeComp(id);
  };
  return (
    <>
      <div className="mx-10 my-5">
        <Navbar></Navbar>
        <div className="mt-12 flex justify-center items-center">
          <p className="text-black relative text-3xl sm:text-4xl md:text-5xl mb-8">
            <span className="text-orange-700 absolute font-black bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            COMPARISON
          </p>
        </div>

        <hr className="border-t-2 border-gray-600" />

        {/* bring product for comparison through pdp. */}

        <div
          className={`flex ${
            compItem.length <= 1 ? "justify-start gap-20" : "justify-evenly"
          } mt-5 mx-10`}
        >
          <div className="grid grid-rows-14 gap-5">
            <div>
              <p>Product Name :</p>
            </div>
            <div className="row-span-5 my-auto">
              <p>Product Image : </p>
            </div>
            <div>
              <p>Price : </p>
            </div>
            <div>
              <p>Brand :</p>
            </div>
            <div>
              <p>Rating : </p>
            </div>
            <div>
              <p>Type : </p>
            </div>
            <div>
              <p>Options : </p>
            </div>
          </div>
          {compItem.map((e, i) => {
            return (
              <div key={i} className="flex justify-between">
                <div className="grid grid-row-7 gap-6">
                  <div>
                    <p>{e.name}</p>
                  </div>
                  <div>
                    <p>
                      <Image
                        src={e.image.url}
                        height={100}
                        width={100}
                        alt="img"
                      />
                    </p>
                  </div>
                  <div>
                    <p>{"$" + e.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <p> {e.brand}</p>
                  </div>
                  <div>
                    <p>{e.rating}</p>
                  </div>
                  <div>
                    <p> {e.type}</p>
                  </div>
                  <div>
                    <button
                      className="bg-orange-500 text-white px-3 py-1 font-semibold
                    rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500
                    hover:border-orange-500 hover:border-solid"
                    >
                      Add
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 font-semibold
                    rounded-none border-2 border-transparent hover:bg-white hover:text-red-500
                    hover:border-red-500 hover:border-solid"
                      onClick={() => cancelproduct(e.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <hr className="border-t-2 border-gray-600 mt-8" />
        <Footer />
      </div>
    </>
  );
};

export default Compare;
