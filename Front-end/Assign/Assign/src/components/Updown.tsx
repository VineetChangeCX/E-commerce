import React, { useContext } from "react";
import Image from "next/image";
import { CartContext } from "./../contexts/CartContext";

const Updown = (props) => {
  const { setCartItems, removeFromCart } = useContext(CartContext);

  const cancelOrder = (id) => {
    removeFromCart(id);
  };

  const increaseCount = () => {
    setCartItems((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === props.e.id) {
          return {
            ...product,
            quant: product.quant + 1,
          };
        }
        return product;
      });
      return updatedProducts;
    });
  };

  const decreaseCount = () => {
    setCartItems((prevProducts) => {
      const updatedProducts = prevProducts
        .map((product) => {
          if (product.id === props.e.id) {
            return {
              ...product,
              quant: product.quant - 1,
            };
          }
          return product;
        })
        .filter((items) => items.quant !== 0);
      return updatedProducts;
    });
  };

  return (
    <>
      <div className="flex py-4 mb-5">
        <div className="w-20" key={props.i}>
          <Image src={props.e.image.url} width={100} height={100} alt="p14" />
        </div>
        <div className="ml-7">
          <div className="size-sm">{props.e.name}</div>
          <div> {"$" + props.e.price.toFixed(2)}</div>
          <div className="text-sm text-black">{props.e.size}</div>
          <div className="text-sm text-slate-500">Colour : Red</div>
        </div>
        <div className="flex items-center border-black border h-5 ml-16">
          <button
            className="px-1 text-black hover:text-gray-700 rounded-l"
            onClick={decreaseCount}
          >
            -
          </button>
          <span className="px-3 py-1 text-gray-700">{props.e.quant}</span>
          <button
            className="px-1 py-1 text-gray-600 hover:text-gray-700 rounded-r"
            onClick={increaseCount}
          >
            +
          </button>
        </div>
        <div className="ml-20 text-sm py-1">
          {"$" + (props.e.price * props.e.quant).toFixed(2)}
        </div>
        <div className="text-xs ml-20 py-2 font-semibold">
          <button onClick={() => cancelOrder(props.e.id)}>X</button>
        </div>
      </div>
    </>
  );
};

export default Updown;
