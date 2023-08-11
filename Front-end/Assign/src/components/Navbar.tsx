import React, { useContext, useState } from "react";
import Link from "next/link";
import { CartContext } from "@/contexts/CartContext";
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { cartItems } = useContext(CartContext);
  const { user, setUser, setSearchQuery } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    router.push("/login");
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggledropdown = () => {
    setShowMenu(!showMenu);
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  return (
    <>
      <nav className="bg-white">
        <div>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="bg-black text-white text-lg font-bold px-3 py-2">
                  <Link href="/">NOUS</Link>
                </span>
              </div>

              <div className="relative ml-3">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 text-base text-gray-900 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none"
                  required
                  onChange={handleSearch}
                />
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
                  <Link href="/adminside">Admin</Link>
                </div>
                <div className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="#">Contact</Link>
                </div>
              </div>
              <div className="ml-2 relative lg:hidden cursor-pointer">
                <svg
                  height="21"
                  viewBox="0 0 21 21"
                  width="21"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggledropdown}
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m4.5 6.5h12" />
                    <path d="m4.498 10.5h11.997" />
                    <path d="m4.5 14.5h11.995" />
                  </g>
                </svg>
                {showMenu && (
                  <div className="absolute -left-20 z-50 mt-2 w-36 py-1 bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <Link href="/">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Shop All
                      </p>
                    </Link>
                    <Link href="/women">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Women
                      </p>
                    </Link>
                    <Link href="#">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Men
                      </p>
                    </Link>
                    <Link href="#">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sale
                      </p>
                    </Link>
                    <Link href="/adminside">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Admin
                      </p>
                    </Link>
                    <Link href="#">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Contact
                      </p>
                    </Link>
                    <div>
                      {!user ? (
                        <div className="items-center mt-3 text-base font-medium">
                          <a href="/login">Login</a>
                        </div>
                      ) : (
                        user && (
                          <div className="relative inline-block text-left pt-2">
                            <div
                              className="cursor-pointer"
                              onClick={handleDropdownToggle}
                            >
                              <span className="text-sm pl-2">Welcome</span>
                            </div>
                            {showDropdown && (
                              <div
                                className="origin-top-right absolute z-50 right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                              >
                                <div className="py-1 z-10" role="none">
                                  <button
                                    type="button"
                                    className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-100"
                                    role="menuitem"
                                  >
                                    <a href="/userdetail">User Details</a>
                                  </button>
                                </div>
                                <div className="py-1" role="none">
                                  <button
                                    type="button"
                                    className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-100"
                                    role="menuitem"
                                    onClick={handleLogout}
                                  >
                                    Logout
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                    {user && (
                      <Link href="/cart">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          My Cart
                        </p>
                      </Link>
                    )}
                  </div>
                )}
              </div>
              <div className="w-36 flex flex-row hidden lg:flex">
                <div className="flex gap-2">
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
                  <div>
                    {!user ? (
                      <div className="items-center mt-3 text-base font-medium">
                        <a href="/login">Login</a>
                      </div>
                    ) : (
                      user && (
                        <div className="relative inline-block text-left pt-2">
                          <div
                            className="cursor-pointer"
                            onClick={handleDropdownToggle}
                          >
                            Welcome, {user.name}
                          </div>

                          {/* Dropdown panel */}
                          {showDropdown && (
                            <div
                              className="origin-top-right absolute z-50 right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="user-menu"
                            >
                              <div className="py-1 z-10" role="none">
                                <button
                                  type="button"
                                  className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-100"
                                  role="menuitem"
                                >
                                  <a href="/userdetail">User Details</a>
                                </button>
                              </div>
                              <div className="py-1" role="none">
                                <button
                                  type="button"
                                  className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-100"
                                  role="menuitem"
                                  onClick={handleLogout}
                                >
                                  Logout
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>

                  <div className="relative items-center mt-3 ml-3">
                    {user && (
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
                        {cartItems?.length >= 0 && (
                          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                            {cartItems.length}
                          </span>
                        )}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
