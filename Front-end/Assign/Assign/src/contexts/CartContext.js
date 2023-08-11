import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const updateCartItem = (productId, quantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };
  

  const clearCart = () => {
    setCartItems([]);
  };

const calculateTotalPrice = (updatedCartItems = cartItems) => {
  const totalPrice = updatedCartItems.reduce(
    (accumulator, item) =>
     accumulator + item.price * item.quant,
    0
  );
  setTotalPrice(totalPrice);
};


  useEffect(() => {
    calculateTotalPrice(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
