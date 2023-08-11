import React, { useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/contexts/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <nav className="bg-white">
        <div>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="bg-black text-white text-lg font-bold px-3 py-2">
                  NOUS
                </span>
              </div>

              <div className="relative ml-3">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none"
                  required
                />
                <label
                  htmlFor="default-search"
                  className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400"
                >
                  Search
                </label>
                <svg
                  className="absolute w-4 h-4 right-3 top-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex">
              <div className="hidden lg:flex flex-wrap items-baseline space-x-4">
                <div className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="/">Shop All</Link>
                </div>
                <div className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="/women">Women</Link>
                </div>
                <div className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="#">Men</Link>
                </div>
                <div className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="#">Sale</Link>
                </div>
                <div className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="#">About</Link>
                </div>
                <div className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="#">Contact</Link>
                </div>
              </div>
            </div>

            <svg
              className="w-4 h-4 lg:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>

            <div className="w-36 flex flex-row hidden lg:flex">
              <div className="flex mr-3">
                <div className="h-6 w-6">
                  <a href="#">
                    <svg
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      id="IconChangeColor"
                      height="46"
                      width="24"
                    >
                      <path
                        fill="currentColor"
                        d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                        id="mainIconPathAttribute"
                      ></path>
                    </svg>
                  </a>
                </div>

                <div className="items-center mt-3 text-base font-medium">
                  <a href="#">Login</a>
                </div>
              </div>

              <div className="relative items-center mt-3 ml-3">
                <Link href="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-bag"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  {cartItems.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
