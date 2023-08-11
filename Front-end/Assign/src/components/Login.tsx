import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import loginlogo from "../../img/draw2.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import { UserContext } from "@/contexts/UserContext";
const api = axios.create({
  baseURL: "http://localhost:9000",
});

export default function Login() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;
      if (isLogin) {
        response = await api.post("/api/user/login", userData);
        if (response.status === 200) {
          setUser(response.data);
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("userRole", response.data.role);
          router.push("/homepage");
        }
        if (response.status === 404) {
          alert("Account does not exist.Kindly signup first.");
        }
      } else {
        response = await api.post("/api/user/signup", userData);
        console.log(response.data.message);
        if (response.data.message === "Account created successfully.") {
          alert("Account Created successfully.");
        }
      }
    } catch (error) {
      if (error.response.status === 400) alert("Email id already exist...");
      if (error.response && error.response.status === 409) {
        alert(
          "Account already exists. Please log in or use a different email.",
        );
      } else if (error.response && error.response.status === 401) {
        alert("Wrong credentials.");
      } else if (error.response && error.response.status === 403) {
        alert("This account has been deleted. Contact the admin.");
      }
    }
  };

  return (
    <>
      <div className="mx-4 md:mx-10 lg:mx-20 mt-6">
        <Navbar></Navbar>
        <div className="relative mt-10 flex justify-center items-center">
          <p className="text-black relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-orange-700 absolute font-black bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            {isLogin ? "LOGIN" : "SIGNUP"}
          </p>
        </div>
        {/* start... */}
        <div className="border-2 border-gray-500 flex flex-col md:flex-row gap-5 mt-4 mx-2 md:mx-10 lg:mx-48">
          <div className="flex justify-center items-center">
            <Image
              src={loginlogo}
              className="w-48 h-48 md:w-72 md:h-72"
              alt="Sample image"
            />
          </div>
          <div className="p-4 md:p-10 lg:w-96">
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    className="border border-gray-500 rounded-md p-2 w-full"
                  />
                </div>
              )}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  {isLogin ? "UserName" : "Email"}
                </label>
                <input
                  type="text"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="border border-gray-500 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  className="border border-gray-500 rounded-md p-2 w-full"
                />
              </div>
              <div className="mt-5 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="border-2 border-orange-500 text-white bg-orange-500 px-4 py-2 rounded-md hover:text-orange-500 hover:bg-white hover:border-2"
                >
                  {isLogin ? "Login" : "SignUp"}
                </button>
                <button
                  type="button"
                  className="border-2 border-orange-500 text-white bg-orange-500 px-4 py-2 rounded-md hover:text-orange-500 hover:bg-white hover:border-2 mt-2 sm:mt-0"
                  onClick={toggleForm}
                >
                  {isLogin ? "SignUp" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
