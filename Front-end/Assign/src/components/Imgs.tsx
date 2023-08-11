import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Product from "@/contexts/ImageMap";
import Link from "next/link";
import axios from "axios";
import { UserContext } from "@/contexts/UserContext";
const api = axios.create({
  baseURL: "http://localhost:9000",
});

export const ImgComponent = () => {
  const value = useContext(Product);
  const { searchQuery } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProductData();
  }, [currentPage, searchQuery]);

  const fetchProductData = async () => {
    try {
      const response = await api.get("/api/product/allproduct", {
        params: {
          page: currentPage,
          searchQuery: searchQuery,
        },
      });
      const data = response.data;
      setProducts(data.products);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error while fetching the product details", error);
    }
  };

  const handleData = (data) => {
    value.setProductData(data);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden bg-cover bg-no-repeat"
          >
            <Link href="/pdp">
              <Image
                src={product.imageURL}
                alt="tshirt"
                width={200}
                height={200}
                className="w-72 h-72 p-1 transition duration-300 ease-in-out hover:scale-110"
                onClick={() => handleData(product)}
              />

              {product.flag && (
                <span className="absolute bg-orange-500 text-white text-center text-sm p-1 rounded top-0 left-0">
                  BestSeller
                </span>
              )}
            </Link>
            <p className="text-black text-sm mt-2">{product.title}</p>
            <p className="text-orange-600 text-sm">${product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center pagination mt-10">
        <button
          className="mx-2 px-3 py-1 bg-gray-300"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={`mx-2 px-3 py-1 ${
                currentPage === page ? "bg-gray-800 text-white" : "bg-gray-300"
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ),
        )}
        <button
          className="mx-2 px-3 py-1 bg-gray-300"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};
