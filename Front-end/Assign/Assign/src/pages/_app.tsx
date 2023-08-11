// Importing the 'React' default import from the 'react' library.
import React from "react";

// Importing the 'CartProvider' from your 'CartContext' file.
import { CartProvider } from "./../contexts/CartContext";
import ContextProvider from "./../contexts/DataContext";

// Importing the 'AppProps' type from the 'next/app' library.
import type { AppProps } from "next/app";

// Importing global styles from a local CSS file.
import "@/styles/globals.css";

// Creating a custom App component.
function App({ Component, pageProps }: AppProps) {
  // Returning the 'CartProvider' wrapping the page component.
  return (
    <ContextProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ContextProvider>
  );
}

// Exporting the custom App component.
export default App;
