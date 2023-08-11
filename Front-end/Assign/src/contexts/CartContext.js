import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [compItem, setcompItem] = useState([]);

  const addtoCompare = (product) => {
    setcompItem([...compItem, product]);
  };

  const removeComp = (productId) => {
    const updatedComp = compItem.filter((item) => item.id !== productId);
    setcompItem(updatedComp);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        compItem,
        addtoCompare,
        setcompItem,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        removeComp,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
