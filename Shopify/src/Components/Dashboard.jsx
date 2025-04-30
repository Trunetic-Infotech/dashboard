import React from "react";
import img1 from "../assets/bag6.png";
import img2 from "../assets/shoes1.png";
import img3 from "../assets/spray.jpg";
import Transaction from "./Transaction";
import RightSide from "./RightSide";

const products = [
  { id: 1, title: "Traveling Bag", price: "₹150", rating: "4.6", img: img1 },
  { id: 2, title: "Shoes", price: "₹150", rating: "4.6", img: img2 },
  { id: 3, title: "Heat", price: "₹150", rating: "4.6", img: img3 },
];

function Dashboard({setActivePage}) {
  return (
    <div className="">
      <div className=" ">
        <div className="">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-6 rounded-3xl bg-white shadow-md space-y-4 transition-transform hover:scale-[1.02] duration-300 "
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden rounded-2xl ">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-[22vh] w-[50vh] object-fit bg-gray-100"
                  />
                  {/* Stock Badge */}
                  <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    In Stock
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-lg font-semibold text-gray-900">
                  {product.title}
                </h1>

                {/* Price and Rating */}
                <div className="flex justify-between items-center text-gray-700 text-sm font-medium">
                  <span className="text-green-600 text-base font-semibold">
                    {product.price}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    ⭐{" "}
                    <span className="text-gray-700">
                      {product.rating} Reviews
                    </span>
                  </span>
                </div>

                {/* Size Selector */}
                <div className="flex items-center gap-4 text-sm text-gray-700">
                  <label htmlFor={`size-${product.id}`} className="font-medium">
                    Size:
                  </label>
                  <select
                    id={`size-${product.id}`}
                    className="border rounded-lg px-2 py-1 text-sm focus:outline-none"
                  >
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <label
                      htmlFor={`qty-${product.id}`}
                      className="font-medium"
                    >
                      Qty:
                    </label>
                    <input
                      id={`qty-${product.id}`}
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-16 border rounded-lg px-2 py-1 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-xl text-sm hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/*  transaction */}

        <div>
          <Transaction />
        </div>
        
      
      </div>
     
    </div>
  );
}

export default Dashboard;
