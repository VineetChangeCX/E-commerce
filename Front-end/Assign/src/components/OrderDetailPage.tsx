import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import Image from "next/image";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

export default function OrderDetailPage() {
  const [orderData, setOrderData] = useState(null);
  const router = useRouter();
  const { orderId } = router.query;

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const response = await api.get(`/api/order/${orderId}`);
        if (response.status === 200) {
          const totalOrderPrice = response.data.orderItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
          );
          response.data.orderTotal = totalOrderPrice;
          setOrderData(response.data);
        }
      } catch (error) {
        console.log("Error while fetching order details:", error);
        alert("Error while fetching order details.");
      }
    };
    if (orderId) {
      fetchOrderDetail();
    }
  }, [orderId]);

  return (
    <>
      <div className="mx-16 my-5">
        <Navbar />
        <div className="relative mt-4 flex justify-center items-center mt-12">
          <p className="text-black relative text-3xl sm:text-4xl md:text-5xl mb-8">
            <span className="text-orange-700 absolute font-black bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            Order Details
          </p>
        </div>
        {orderData !== null ? (
          <div className="mx-10 bg-white border-4 p-6 shadow-md rounded-lg">
            <p className="text-xl font-bold mb-4">Order Details</p>
            <p className="text-gray-600">Order ID: {orderData._id}</p>
            <p className="text-gray-600">Customer ID: {orderData.customer}</p>
            <p className="text-gray-600">Status: {orderData.status}</p>
            <p className="text-gray-600">
              Order Total: ${orderData.orderTotal}
            </p>
            <p className="text-gray-600">
              Payment Status: {orderData.paymentStatus}
            </p>
            <p className="text-gray-600">
              Order Date: {new Date(orderData.orderDate).toLocaleString()}
            </p>
            {orderData.orderItems ? (
              <div className="mt-4">
                <p className="text-lg font-bold mb-2">Order Item</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {orderData.orderItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center bg-gray-100 p-4 rounded"
                    >
                      <div className="w-16 h-16 mr-4">
                        <Image
                          src={item.imageURL}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold">
                          {item.title}
                        </p>
                        <p className="text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-gray-600">Price: ${item.price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No order items found.</p>
            )}
          </div>
        ) : (
          <p>Loading order details...</p>
        )}
        <Footer />
      </div>
    </>
  );
}
