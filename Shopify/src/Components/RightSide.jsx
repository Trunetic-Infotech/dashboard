import React, { useState } from "react";
import { Menu, User } from "lucide-react";
import { MessageCircle, Bell } from "lucide-react";
import img from "../assets/spray.jpg";
import img2 from "../assets/shoes1.png";
import { ShoppingCart } from "lucide-react";

import { X } from "lucide-react";
import { FaHamburger } from "react-icons/fa";

import {
  FaBoxOpen,
  FaTags,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";


function RightSide({ setActivePage }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <div className="w-full flex  h-screen relative bg-gray-200 ">
        <div className="absolute top-4 right-4 z-50 lg:hidden ">
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
          className={`bg-gray-200 transition-transform duration-300 ease-in-out 
      ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} 
      fixed top-0 right-0 w-11/12 max-w-sm h-full shadow-lg z-40 lg:translate-x-0 lg:static lg:shadow-none`}
        >
          {/* Your existing sidebar content (unchanged) goes here */}
          {/* ... */}

          <div className="flex flex-col gap-20">
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

            {/* 4 cards*/}

            <div className="flex flex-col gap-5 p-3 ">

              {/* <h1 className="text-2xl">Total Summary</h1> */}
              {/* Box 1: Total Products */}
              <div className="w-full bg-white h-[150px] rounded-xl flex items-center justify-between p-5 shadow-md borderr-shadow">
                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    Total Products
                  </h2>
                  <p className="text-3xl font-semibold text-green-600">128</p>
                </div>
                <FaBoxOpen className="w-12 h-12 text-green-400" />
              </div>

              {/* Box 2: Total Categories */}
              <div className="w-full bg-white h-[150px] rounded-xl flex items-center justify-between p-5 shadow-md borderr-shadow">
                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    Total Categories
                  </h2>
                  <p className="text-3xl font-semibold text-green-600">4</p>
                </div>
                <FaTags className="w-12 h-12 text-green-400" />
              </div>

              {/* Box 3: Total Orders */}
              <div className="w-full bg-white h-[150px] rounded-xl flex items-center justify-between p-5 shadow-md borderr-shadow">
                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    Total Orders
                  </h2>
                  <p className="text-3xl font-semibold text-green-600">245</p>
                </div>
                <FaClipboardList className="w-12 h-12 text-green-400" />
              </div>

              {/* Box 4: Total Customers */}
              <div className="w-full bg-white h-[150px] rounded-xl flex items-center justify-between p-5 shadow-md borderr-shadow">
                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    Total Customers
                  </h2>
                  <p className="text-3xl font-semibold text-green-600">78</p>
                </div>
                <FaUsers className="w-12 h-12 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSide;
