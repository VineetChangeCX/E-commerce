import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductForm from "./Addproductform";
import { useRouter } from "next/router";
import { UserContext } from "@/contexts/UserContext";

export default function Adminside() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { userRole, setUser, setUserRole } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setUser(localStorage.getItem("authToken"));
      setUserRole(localStorage.getItem("userRole"));
    }
  }, []);

  const router = useRouter();
  const addproductto = () => {
    setIsFormOpen(true);
  };

  const handleFormSubmit = (formData) => {
    console.log(formData);
    setIsFormOpen(false);
  };

  const updateproductto = () => {
    router.push("/updateproductpage");
  };

  const opendeletepage = () => {
    router.push("/deleteproductpage");
  };
  return (
    <>
      <div className="mx-16 my-5">
        <Navbar />
        <div className="flex justify-center items-center mt-4">
          <p className="text-black relative text-3xl sm:text-4xl md:text-5xl mb-8 text-center">
            <span className="text-orange-700 absolute font-black bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            Admin Portal
          </p>
        </div>
        <div className="w-96 border-solid border-4 p-5 rounded-lg bg-gray-100 mx-auto">
          <p className="text-center text-lg font-bold">Welcome to Admin Page</p>
          <div className="flex flex-col gap-4 mt-6">
            {userRole === "admin" ? (
              <>
                <div className="flex justify-start gap-16 items-center">
                  <p className="text-left">Tap to add product-:</p>
                  <button
                    className="bg-orange-500 text-white font-semibold py-1 px-4 rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-solid"
                    onClick={() => addproductto()}
                  >
                    AddProduct
                  </button>
                </div>
                <div className="flex justify-start gap-8 items-center">
                  <p className="text-left">Tap to update Product details-:</p>
                  <button
                    className="bg-orange-500 text-white font-semibold py-1 px-2 rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-solid"
                    onClick={() => updateproductto()}
                  >
                    UpdateProduct
                  </button>
                </div>
                <div className="flex justify-start gap-10 items-center">
                  <p className="text-left">Tap to Delete Product-:</p>
                  <button
                    className="bg-orange-500 text-white font-semibold py-1 px-3 rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-solid"
                    onClick={() => opendeletepage()}
                  >
                    DeleteProduct
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center text-red-500">
                These functionalities are available to admin only.
              </p>
            )}
          </div>
        </div>
        <Footer />
      </div>
      {isFormOpen && (
        <div className="absolute top-1/4 left-0 w-full h-full bg-opacity-50 bg-gray-500 flex justify-center items-center">
          <div className="w-96 bg-white p-4 rounded-lg">
            <ProductForm onSubmit={handleFormSubmit} />
            <button
              className="mt-4 w-full bg-red-500 text-white font-semibold py-1 px-2 rounded-none border-2 border-transparent hover:bg-white hover:text-red-500 hover:border-red-500 hover:border-solid"
              onClick={() => setIsFormOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
