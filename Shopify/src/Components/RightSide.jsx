import React, { useState } from "react";
import { Menu, User } from "lucide-react";
import { MessageCircle, Bell } from "lucide-react";
import img from "../assets/spray.jpg";
import img2 from "../assets/shoes1.png";
import { ShoppingCart } from "lucide-react";


import { X } from "lucide-react";
import { FaHamburger } from "react-icons/fa";

function RightSide({ setActivePage }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <div className="w-full flex  h-screen relative">
        <div className="absolute top-4 right-4 z-50 lg:hidden">
          {isSidebarOpen ? (
            <X
              className="h-8 w-8 text-gray-700 cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            />
          ) : (
            <Menu
              className="text-black w-6 h-6 mt-2 cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            />
          )}
        </div>



        <div
          className={`bg-white transition-transform duration-300 ease-in-out 
      ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} 
      fixed top-0 right-0 w-11/12 max-w-sm h-full shadow-lg z-40 lg:translate-x-0 lg:static lg:shadow-none`}
        >
          {/* Your existing sidebar content (unchanged) goes here */}
          {/* ... */}

          <div className="">
            <div className="cursor-pointer flex items-center rounded-xl justify-between">
              {/* Left section: Icons */}
              <div className="flex items-center ml-5">
                <div className="flex gap-4">
                  <MessageCircle className="w-8 h-8 p-1 text-white rounded-full bg-green-500" />
                  <Bell className="w-8 h-8 p-1 text-white rounded-full bg-green-500" />
                </div>
              </div>

              {/* Right section: Text */}
              <div
                onClick={() => setActivePage("profile")}
                className="text-right mr-5 flex gap-3 p-3"
              >
                <User className="w-12 h-12  text-black rounded-full bg-green-500" />

                <div>
                  <h1 className="text-black font-bold text-lg">Amar Kalel</h1>
                  <p className="text-gray-500 text-sm hover:underline">
                    View Profile
                  </p>
                </div>
              </div>

              <h1></h1>
            </div>

            <div className="mt-5">
              <h1 className="text-xl text-gray-800 ml-6 mt-2 font-bold">
                My Cards
              </h1>

              <div className="w-full ">
                {/* Card Section */}
                <div className="relative w-full p-5">
                  {/* Outer gradient frame */}
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-1 shadow-xl">
                    {/* Inner card face */}
                    <div className="relative bg-green-700 text-white rounded-3xl px-8 py-6 overflow-hidden h-64 flex flex-col justify-between shadow-lg">
                      {/* Mastercard Circles - bottom-right */}
                      <div className="absolute bottom-6 right-6 flex space-x-[-8px]">
                        <div className="w-7 h-7 rounded-full bg-red-600 shadow-md"></div>
                        <div className="w-7 h-7 rounded-full bg-yellow-400 opacity-90 shadow-md"></div>
                      </div>

                      {/* Card Number & Header - centered */}
                      <div className="flex flex-col items-center space-y-4">
                        <h1 className="text-white text-2xl font-semibold">
                          Credit Card
                        </h1>
                        <h3 className="text-xl font-mono tracking-widest">
                          **** **** **** 1234
                        </h3>
                        <p className="text-xs text-white/80">
                          Valid till 05/25
                        </p>
                      </div>

                      {/* Cardholder Name - positioned at the bottom-left */}
                      <div className="absolute bottom-6 left-6">
                        <p className="text-md font-semibold sm:text-lg">
                          Amar Kalel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* midd side*/}

              <div className="flex flex-col gap-4">
                <div className="w-[80%] mx-auto">
                  <h1 className="text-xl font-bold text-gray-800 mb-4">
                    Payments
                  </h1>

                  <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300 ">
                    {/* Payment Image */}
                    <div>
                      <img
                        src={img}
                        alt="Payment"
                        className="h-20 w-20  object-cover border-gray-200 shadow-sm"
                      />
                    </div>

                    {/* Payment Info */}
                    <div className="flex flex-col justify-center">
                      <h2 className="text-lg font-semibold text-gray-800">
                        Received ₹12.22
                      </h2>
                      <p className="text-sm text-gray-500">15/06/2025 16:33</p>
                    </div>
                  </div>
                </div>

                <div className="w-[80%] mx-auto">
                  <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                    {/* Payment Image */}
                    <div>
                      <img
                        src={img2}
                        alt="Payment"
                        className="h-20 w-20  object-cover border-gray-200 shadow-sm"
                      />
                    </div>

                    {/* Payment Info */}
                    <div className="flex flex-col justify-center">
                      <h2 className="text-lg font-semibold text-gray-800">
                        Received ₹12.22
                      </h2>
                      <p className="text-sm text-gray-500">15/06/2025 16:33</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Down Side*/}

              <div>
                <div className="w-[80%] mx-auto">
                  <h1 className="text-xl font-bold text-gray-800 mb-4">
                    Recent Activity
                  </h1>

                  <div className=" p-4 flex items-center space-x-4  transition-shadow duration-300">
                    {/* Icon Container */}
                    <div className="bg-green-100 p-3 rounded-full">
                      <ShoppingCart className="h-6 w-6 text-green-600" />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      {/* Progress Line */}
                      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <h2 className="text-md font-semibold text-gray-800">
                          Order
                        </h2>
                        <span className="text-sm text-gray-600 font-semibold">
                          25%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" p-4 flex items-center space-x-4  transition-shadow duration-300">
                    {/* Icon Container */}
                    <div className="bg-green-100 p-3 rounded-full">
                      <ShoppingCart className="h-6 w-6 text-green-600" />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      {/* Progress Line */}
                      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <h2 className="text-md font-semibold text-gray-800">
                          Order
                        </h2>
                        <span className="text-sm text-gray-600 font-semibold">
                          75%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSide;
