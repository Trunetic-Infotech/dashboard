import React, { useEffect, useState } from "react";
import { User, Menu, X, Contact, Settings, Package } from "lucide-react";
import {
  FaSearch,
  FaHome,
  FaWallet,
  FaExchangeAlt,
  FaFileInvoice,
  FaChartPie,
  FaShopify,
} from "react-icons/fa";
import Dashboard from "../Components/Dashboard";
import RightSide from "../Components/RightSide";
import Products from "../Components/Products";
import Category from "../Components/Category";
import Electronics from "../Components/Electronics";
import Books from "../Components/Books";
import CategoryHome from "../Components/CategoryHome";
import Fashion from "../Components/Fashion";
import OrderDetails from "../Components/OrderDetails";

import Contacts from "../Components/Contacts";
import Profile from "../Components/Profile";
import AddProduct from "../Components/AddProduct";

function ShopifyDashboard() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  const navItems = [
    { name: "Dashboard", icon: <FaHome className="w-6 h-6 text-green-500" /> },
    { name: "Products", icon: <FaWallet className="w-6 h-6 text-green-500" /> },
    {
      name: "Category",
      icon: <FaExchangeAlt className="w-6 h-6 text-green-500" />,
    },
    {
      name: "Order Details",
      icon: <FaFileInvoice className="w-6 h-6 text-green-500" />,
    },
    {
      name: "Contacts",
      icon: <Contact className="w-6 h-6 text-green-500" />,
    },
    {
      name: "Add Product",
      icon: <Package className="w-6 h-6 text-green-500" />,
    },
  ];

  const renderPageContent = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;

      case "Products":
        return <Products />;

      case "Category":
        return <Category setActivePage={setActivePage} />;

      case "Order Details":
        return <OrderDetails />;

      case "electronics":
        return <Electronics />;

      case "books":
        return <Books />;

      case "categoryhome":
        return <CategoryHome />;

      case "fashion":
        return <Fashion />;

      case "Contacts":
        return <Contacts />;

      case "profile":
        return <Profile />;

      case "Add Product":
        return <AddProduct setActivePage={setActivePage} />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="w-full flex  h-screen relative">
        {/* Sidebar */}
        <div
          className={`fixed md:relative top-0 left-0 h-full bg-gray-200 transition-transform duration-300 z-20
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:flex lg:w-[20%] flex-col justify-between items-center py-6 border border-white`}
        >
          <div>
            <div className="flex justify-between items-center w-full px-6 md:hidden mb-4">
              {/* <h1 className="text-black text-xl font-bold">Menu</h1> */}
              <button onClick={() => setIsSidebarOpen(false)}>
                <X className="text-black w-6 h-6 mt-8" />
              </button>
            </div>
            <div className="flex gap-2">
              <FaShopify className="w-6 h-6 text-green-500" />

              <div className="flex">
              <h1 className="text-black font-bold text-2xl text-center  ">
                Trendy
              </h1>
              <h1 className="text-green-600 font-bold text-2xl text-center ">
                Nest
              </h1>
              </div>
            </div>
            <ul className="space-y-4 text-black font-bold text-xl mt-10 w-full px-4">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    setActivePage(item.name);
                    setIsSidebarOpen(false); // Close on mobile tap
                  }}
                  className={`flex items-center gap-3 cursor-pointer px-4 py-2 rounded-lg ${
                    activePage === item.name
                      ? "bg-white text-black shadow-md"
                      : "hover:text-gray-800"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => {
              setActivePage("Profile");
              setIsSidebarOpen(false);
            }}
            className="cursor-pointer flex p-6 gap-4"
          >
            <div className="p-6 bg-white rounded-2xl shadow-md space-y-4 ">
              <h1 className="text-black font-bold lg:text-xl md:text-lg sm:text-md text-lg">
                Need Help? We're Here for You
              </h1>
              <p className="text-gray-700">
                Have a question, need to place a request, or facing an urgent
                issue? Our support team is just a click away.
              </p>
              <p className="text-gray-700">
                Available 24/7 to assist you—anytime, anywhere.
              </p>
              <button className="bg-green-300 text-green-900 font-semibold px-4 py-2 rounded-xl transition duration-300">
                Connect Now
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:w-[60%] w-full h-full bg-white p-4 overflow-auto ml-0 ">
          <div className="sticky top-0 z-10 flex justify-between items-center mb-4">
            {/* Hamburger on small screens */}
            <button
              className="md:hidden text-black"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="  relative flex items-center justify-center mx-auto">
              <input
                type="text"
                className="lg:w-[500px]  border-2 border-black bg-gray-200 rounded-xl p-3 text-sm pr-10 shadow-[inset_0px_3px_5px_rgba(0,0,0,0.3)]"
                placeholder="Search..."
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </div>

          {renderPageContent()}
        </div>

        <div className="lg:w-[20%] bg-gray-200 ">
          <RightSide setActivePage={setActivePage} />
        </div>
      </div>
    </div>
  );
}

export default ShopifyDashboard;
