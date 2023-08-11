import React, { useContext, useState } from "react";
import { CartContext } from "./../contexts/CartContext";
import { UserContext } from "./../contexts/UserContext";
import Image from "next/image";
import whats from "./../../img/whatsapplogo.png";
import tshirt from "./../../img/image1.jpg";
import Link from "next/link";
import axios from "axios";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Product from "@/contexts/ImageMap";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

export default function Pdp() {
  const Productdata = useContext(Product);
  const product = Productdata.state.productData;
  const { addToCart, addtoCompare, compItem, setcompItem } =
    useContext(CartContext);

  const { user } = useContext(UserContext);

  const [quantity, setQuantity] = useState(1);
  const [currsize, setsize] = useState("");

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  console.log("heloo ..", quantity);
  const handleCompare = () => {
    const productAlreadyInCompare = compItem.find(
      (item) => item.id === product.id,
    );

    if (!productAlreadyInCompare) {
      if (compItem.length >= 3) {
        const newCompItem = compItem.slice(1);
        setcompItem([...newCompItem, product]);
      } else {
        addtoCompare(product);
      }
    }
  };

  const handleAddToCart = async () => {
    if (!localStorage.getItem("authToken")) {
      alert("Please log in to add items to the cart.");
      return;
    }

    try {
      const response = await api.patch(
        "/api/cart/auth/addcart",
        {
          product: product._id,
          quantity: quantity,
        },
        { headers: { authorization: localStorage.getItem("authToken") } },
      );
      if (response.status === 200) {
        if (product._id) {
          const responseProduct = await api.get(`api/product/${product._id}`);
          addToCart(responseProduct.data);
        }
      }
    } catch (error) {
      console.error("Error while adding product to cart:", error);
      alert("Error while adding product to cart.");
    }
  };

  const handleSizeChange = (event) => {
    setsize(event.target.value);
  };
  const hoverImg = [
    {
      id: 1,
      imag: { url: product.imageURL },
    },
    {
      id: 2,
      imag: { url: product.imageURL },
    },
    {
      id: 3,
      imag: { url: product.imageURL },
    },
  ];
  const [currImg, setImg] = useState(hoverImg[0]);

  return (
    <>
      <div className="mx-10 my-5">
        {/* <!-- navbar start here  -->*/}

        <Navbar />

        {/* <!-- product details start here --> */}

        <div className="mx-10 lg:mx-72">
          {/* <!-- Home / Women / I'm a produc< Prev | Next > --> */}

          <div className="flex flex-wrap justify-between mt-5">
            <div>
              <span className="text-xs">
                <a href="#" className="text-black font-bold">
                  Home
                </a>{" "}
                /
                <a href="#" className="text-black font-bold">
                  Women
                </a>{" "}
                /
                <a href="#" className="text-gray-400">
                  I'm a product
                </a>
              </span>
            </div>

            <div>
              <button className="text-black font-normal px-1 text-xs">
                <span>&lt;</span> Prev
              </button>
              <span className="mx-2"> | </span>
              <button className="text-black font-normal px-1 text-xs">
                Next <span>&gt;</span>
              </button>
            </div>
          </div>

          {/* <!-- images and details of the products --> */}

          <div className="flex flex-wrap gap-4 mt-4">
            {/* <!-- images  --> */}
            <div className="w-full lg:w-1/2 mt-3">
              <div className="h-72 w-full">
                <Image
                  src={product.imageURL}
                  alt="tshirt"
                  width={600}
                  height={600}
                  className="w-64 h-72 p-2"
                />
              </div>

              <div className="flex flex-wrap gap-2 mx-auto">
                {hoverImg.map((e, id) => (
                  <div key={id}>
                    <Image
                      key={e.id}
                      src={e.imag.url}
                      alt={"tshirt"}
                      width={200}
                      height={200}
                      className="w-20 h-20 p-2 p-1  hover:border-orange-500 border-2"
                      onClick={() => setImg(e)}
                    ></Image>
                  </div>
                ))}
              </div>

              <div className="text-xs text-left">
                <p className="w-auto">
                  Lorem ipsum dolor sit amet, conse adipiscing elit. Vitae
                  malesuad lacus. I m the tshit in this house.
                </p>
              </div>
            </div>

            {/* <!-- product details --> */}
            <div className="w-full lg:w-64 mt-2">
              <div>
                <span className="text-black font-extrabold text-2xl">
                  {product.title}
                </span>
              </div>

              <div>
                <span className="text-xs">SKU : 0011</span>
              </div>

              <div>
                <span className=" text-orange-500 line-through">$99.00</span>
                <span className="text-orange-500 ml-3">
                  {"$" + product.price}
                </span>
              </div>

              <div>
                <span>Color</span>
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    id="radio1"
                    name="color"
                    value="orange"
                    className="hidden"
                  />
                  <label
                    htmlFor="radio1"
                    className="w-4 h-4 rounded-full bg-orange-500 cursor-pointer"
                  ></label>

                  <input
                    type="radio"
                    id="radio2"
                    name="color"
                    value="black"
                    className="hidden"
                  />
                  <label
                    htmlFor="radio2"
                    className="w-4 h-4 rounded-full bg-black cursor-pointer"
                  ></label>
                </div>
              </div>

              <div>
                <span>Size</span>
                <div className="w-64 pt-1">
                  <select
                    id="size"
                    name="size"
                    className="block w-40 border border-gray-300 rounded-none py-2 px-3"
                    onChange={handleSizeChange}
                  >
                    <option value="" disabled selected hidden>
                      Select size
                    </option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-large">X-Large</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-7">
                <div>
                  <span>Quantity</span>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={quantity}
                    min={1}
                    className="w-10 block border border-gray-300 rounded-none py-1 px-1"
                    onChange={handleQuantityChange}
                  />
                </div>

                <div>
                  <Link href="/compare">
                    <button
                      className="mt-5 w-25 bg-orange-400 text-white font-semibold 
                    py-1 px-2 rounded-none border-2 border-transparent hover:bg-white
                     hover:text-orange-500 hover:border-orange-500 hover:border-solid"
                      onClick={handleCompare}
                    >
                      Compare
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <div className="my-2">
                  <button
                    className="w-44 bg-orange-500 text-white font-semibold py-2 px-4 
                  rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500
                  hover:border-orange-500 hover:border-solid"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>

                <button className="border-orange-500 bg-white border-solid border-2 text-orange-500 font-bold py-2 px-4   rounded-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hover:fill-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>

              <div>
                <button className="w-60 bg-black text-white font-semibold py-2 px-4 rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-solid">
                  Buy Now
                </button>
              </div>

              <div className="mt-6 font-normal text-xs">
                <div className="flex justify-between ">
                  <h2 className="text-base lg:text-xl">PRODUCT INFO</h2>
                  <span x-show="isOpen">-</span>
                </div>
                <div className="p-1">
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae malesuada lacus. Quisque mollis cursus elit a
                    placerat. Fusce sollicitudin feugiat metus.
                  </p>
                </div>
              </div>
              <hr className="border-t-2 border-gray-600 my-1" />

              <div className="mt-1.5">
                <div className="p-1 flex">
                  <h2 className="text-base lg:text-xl mr-auto">
                    RETURN AND REFUND POLICY
                  </h2>
                  <span>+</span>
                </div>
              </div>
              <hr className="border-t-2 border-gray-600 my-1" />

              <div className="mt-1.5">
                <div className="p-1 flex">
                  <h2 className="text-base lg:text-xl mr-auto">
                    SHIPPING INFO
                  </h2>
                  <span>+</span>
                </div>
              </div>

              <div className="items-center">
                <Image src={whats} alt="whatslogo" className="h-5 w-5 mt-4" />
              </div>
            </div>
          </div>

          {/* <!-- related products heading --> */}
          <div className="relative mt-8 text-center">
            {/* <!-- Previous symbol --> */}
            <span className="absolute left-6 top-28 text-gray-600 text-lg lg:text-3xl">
              &lt;
            </span>
            {/* <!-- Next symbol --> */}
            <span className="absolute right-6 top-28 text-gray-600 text-lg lg:text-3xl">
              &gt;
            </span>
            <p className="text-black text-lg lg:text-2xl font-semibold pl-10">
              Related Products
            </p>
          </div>

          {/* <!-- Carousel images of related products --> */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <div>
              <Image src={tshirt} alt="Image 1" className="w-40 h-40 p-1" />
              <p className="text-black pt-1 text-xs lg:text-sm">
                I'm a product
              </p>
              <p className="text-orange-600 text-xs lg:text-sm">$25.00</p>
            </div>

            <div>
              <Image src={tshirt} alt="Image 2" className="w-40 h-40 p-1" />
              <p className="text-black pt-1 text-xs lg:text-sm">
                I'm a product
              </p>
              <p className="text-orange-600 text-xs lg:text-sm">$25.00</p>
            </div>

            <div className="relative">
              <Image src={tshirt} alt="Image 1" className="w-40 h-40 p-1" />
              <p className="text-black pt-1 text-xs lg:text-sm">
                I'm a product
              </p>
              <p className="text-orange-600 text-xs lg:text-sm">$25.00</p>
              <div className="absolute top-0 left-0 bg-orange-500 text-white px-1 py-1 text-xs rounded-tl rounded-br">
                Sale
              </div>
            </div>

            <div className="relative">
              <Image src={tshirt} alt="Image 3" className="w-40 h-40 p-1" />
              <p className="text-black pt-1 text-xs lg:text-sm">
                I'm a product
              </p>
              <p className="text-orange-600 text-xs lg:text-sm">$25.00</p>
            </div>
          </div>
        </div>

        {/* <!-- footer start here  --> */}
        <Footer />
      </div>
    </>
  );
}
