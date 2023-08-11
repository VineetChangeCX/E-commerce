import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import Image from "next/image";
import { UserContext } from "@/contexts/UserContext";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

export default function Userdetail() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const { setUser, setUserRole } = useContext(UserContext);

  const [userOrder, setuserOrder] = useState([]);

  useEffect(() => {
    const fetchOrderhistory = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await api.get("/api/order/auth/orderhistory", {
          headers: {
            Authorization: authToken,
          },
        });
        setuserOrder(response.data);
        console.log("Order History is successfully shown.");
      } catch (error) {
        console.log("Error while displaying order history.", error);
      }
    };
    fetchOrderhistory();
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await api.get("/api/user/auth/userdetails", {
          headers: {
            Authorization: authToken,
          },
        });
        const { name, email, role } = response.data;
        setUserData({ name, email, role });
        setUserRole(role);
      } catch (error) {
        console.log("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const router = useRouter();

  const handleSeeDetails = (orderId) => {
    router.push(`/orderdetailpage?orderId=${orderId}`);
  };

  const deleteAccount = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      await api.patch(
        "/api/user/auth/deleteuser",
        {},
        {
          headers: {
            Authorization: authToken,
          },
        },
      );
      alert("Account deleted successfully.");
      setUser(null);
      localStorage.removeItem("authToken");
      router.push("/login");
    } catch (error) {
      console.log("Error while deleting account..", error);
      alert("Error while deleting account.");
    }
  };

  return (
    <>
      <div className="mx-4 sm:mx-10 lg:mx-20 mt-6">
        <Navbar />
        <div className="relative flex justify-center items-center mt-12">
          <p className="text-black relative text-xl sm:text-2xl md:text-4xl">
            <span className="text-orange-700 absolute font-black bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            User Details
          </p>
        </div>
        <div className="border-2 border-gray-600 mt-10 mb-2 mx-2 sm:mx-10 lg:mx-80 p-4">
          <p>Name : {userData.name}</p>
          <p>Email : {userData.email}</p>
          <p>Password : *******{userData.password}</p>
          <p>Role : {userData.role}</p>
          <p>
            Delete account:
            <button
              className="bg-red-500 text-white px-2 ml-2 font-semibold
                    rounded-none border-2 border-transparent hover:bg-white hover:text-red-500
                    hover:border-red-500 hover:border-solid"
              onClick={() => deleteAccount()}
            >
              Delete
            </button>
          </p>
        </div>

        <div className="border-2 border-gray-500 mb-10 mx-2 sm:mx-10 lg:mx-80 p-4">
          <p>Order History:</p>
          <div className="mt-5">
            {userOrder.length > 0 ? (
              userOrder.map((order) => (
                <div key={order._id} className="mb-8">
                  <hr className="border-t-2 border-gray-500 my-1" />
                  <ul>
                    {order.orderItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex flex-col sm:flex-row item-center justify-between gap-5 mt-5"
                      >
                        <div className="flex items-center">
                          <Image
                            src={item.imageURL}
                            alt={item.title}
                            width={50}
                            height={50}
                          />
                          <div className="ml-3">
                            <p>{item.title}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-0">
                          <button
                            className="bg-orange-500 text-white font-semibold py-1 px-1 
                            rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500
                            hover:border-orange-500 hover:border-solid"
                            onClick={() => handleSeeDetails(order._id)}
                          >
                            See Details
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
