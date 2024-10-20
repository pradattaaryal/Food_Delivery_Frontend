import React, { useState } from "react";
import logo from "../../assets/image/Logo.png";
import icon from "../../assets/image/Icon.jpeg";
import { Link } from "react-router-dom";

const Login = () => {
 
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="bg-white rounded-lg md:shadow-2xl flex flex-col   border-black md:flex-row h-auto md:h-[550px] w-full md:w-2/3">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src={logo}
            alt="Food Image"
            className="object-cover w-full h-full rounded-l-lg"
          />
        </div>
        {/* Right Login Form Section */}
        <div className="flex justify-center items-center md:w-1/2  p-4 md:p-16">
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <img src={icon} alt="Logo" className="h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-1 ">Welcome Back</h2>
              <p className=" text-xs sm:text-sm md:text-base">Please enter your email and password to continue</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium  ">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="admin@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium ">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm ">
                    Remember Me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-green-600 hover:text-green-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
              <Link to={"/insights"}>   <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                 Login
                </button></Link>
              </div>

              <div className="mt-4 text-center">
                <p>
                  Don't have an account?{" "}
                  <a href="#" className="text-green-600 hover:text-green-500">
                    Sign-Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
