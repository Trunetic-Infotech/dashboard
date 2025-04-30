import React from "react";

import img1 from "../assets/bag6.png";
import img2 from "../assets/shoes1.png";
import img3 from "../assets/spray.jpg";

import Tshirt1 from "../assets/Tshirts/tshirt1.png";
import Tshirt2 from "../assets/Tshirts/tshirt2.jpg";
import Tshirt3 from "../assets/Tshirts/tshirt3.jpg";
import Tshirt4 from "../assets/Tshirts/tshirt4.jpg";

import shirts1 from "../assets/shirts/shirt1.jpg";
import shirts2 from "../assets/shirts/shirt2.jpg";
import shirts3 from "../assets/shirts/shirt3.jpg";
import shirts4 from "../assets/shirts/shirt4.jpg";
import shirts5 from "../assets/shirts/shirt5.jpg";
import shirts6 from "../assets/shirts/shirt6.jpg";

import hoodie1 from "../assets/Hoodies/hoodie1.jpg";
import hoodie2 from "../assets/Hoodies/hoodie2.jpg";
import hoodie3 from "../assets/Hoodies/hoodie3.jpg";
import hoodie4 from "../assets/Hoodies/hoodie4.jpg";
import hoodie5 from "../assets/Hoodies/hoodie5.jpg";
import hoodie6 from "../assets/Hoodies/hoodie6.jpg";

const products = [
  { id: 1, title: "Traveling Bag", price: "₹150", rating: "4.6", img: img1 },
  { id: 2, title: "Shoes", price: "₹150", rating: "4.6", img: img2 },
  { id: 3, title: "Heat", price: "₹150", rating: "4.6", img: img3 },
  { id: 4, title: "Tshirt", price: "₹150", rating: "4.6", img: Tshirt1 },
  { id: 5, title: "Tshirt", price: "₹150", rating: "4.6", img: Tshirt2 },
  { id: 6, title: "Tshirt", price: "₹150", rating: "4.6", img: Tshirt3 },
  { id: 7, title: "Tshirt", price: "₹150", rating: "4.6", img: Tshirt4 },
  { id: 8, title: "Shirt", price: "₹150", rating: "4.6", img: shirts1 },
  { id: 9, title: "Shirt", price: "₹150", rating: "4.6", img: shirts2 },
  { id: 10, title: "Shirt", price: "₹150", rating: "4.6", img: shirts3 },
  { id: 11, title: "Shirt", price: "₹150", rating: "4.6", img: shirts4 },
  { id: 12, title: "Shirt", price: "₹150", rating: "4.6", img: shirts5 },
  { id: 13, title: "Shirt", price: "₹150", rating: "4.6", img: shirts6 },
  { id: 14, title: "Hoodie", price: "₹150", rating: "4.6", img: hoodie1 },
  { id: 15, title: "Hoodie", price: "₹150", rating: "4.6", img: hoodie2 },
  { id: 16, title: "Hoodie", price: "₹150", rating: "4.6", img: hoodie3 },
  { id: 17, title: "Hoodie", price: "₹150", rating: "4.6", img: hoodie4 },
  { id: 18, title: "Hoodie", price: "₹150", rating: "4.6", img: hoodie5 },
  { id: 19, title: "Hoodie", price: "₹150", rating: "4.6", img: hoodie6 },
];

function Products() {
  return (
    <div>
      <div className="p-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-6 rounded-3xl bg-white shadow-md space-y-4 transition-transform hover:scale-[1.02] duration-300"
            >
              {/* Image */}
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-[250px] w-full object-fill bg-gray-100"
                />
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
