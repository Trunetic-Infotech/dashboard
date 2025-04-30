import React, { useState } from "react";

import Electronics1 from '../assets/Electronics/electronics1.jpeg';
import Electronics2 from '../assets/Electronics/electronics2.jpg';
import Electronics3 from '../assets/Electronics/electronics3.jpg';
import Electronics4 from '../assets/Electronics/electronics4.jpg';

import Book1 from "../assets/Books/book1.jpg";
import Book2 from "../assets/Books/book2.jpg";
import Book3 from "../assets/Books/book3.jpg";
import Book4 from "../assets/Books/book4.jpg";

import Home1 from "../assets/HomeImages/home1.jpg";
import Home2 from "../assets/HomeImages/home2.jpg";
import Home3 from "../assets/HomeImages/home3.jpg";
import Home4 from "../assets/HomeImages/home4.jpg";

import Tshirt1 from "../assets/Tshirts/tshirt1.png";
import Tshirt2 from "../assets/Tshirts/tshirt2.jpg";
import Tshirt3 from "../assets/Tshirts/tshirt3.jpg";
import Tshirt4 from "../assets/Tshirts/tshirt4.jpg";

function Category(props) {
  const data = [
    {
      title: "Fashion",
      images: [
        { img: Tshirt1, price: "Rs 499", reviews: "4.5 ★ (120)", size: "M", quantity: 10 },
        { img: Tshirt2, price: "Rs 599", reviews: "4.2 ★ (90)", size: "L", quantity: 7 },
        { img: Tshirt3, price: "Rs 699", reviews: "4.7 ★ (75)", size: "S", quantity: 12 },
        { img: Tshirt4, price: "Rs 799", reviews: "4.1 ★ (60)", size: "XL", quantity: 5 },
      ],
      onShowMore: () => props.setActivePage("fashion"),
    },
    {
      title: "Electronics",
      images: [
        { img: Electronics1, price: "Rs 2999", reviews: "4.8 ★ (50)", size: "-", quantity: 3 },
        { img: Electronics2, price: "Rs 1999", reviews: "4.6 ★ (100)", size: "42", quantity: 8 },
        { img: Electronics3, price: "Rs 349", reviews: "4.3 ★ (150)", size: "100ml", quantity: 20 },
        { img: Electronics4, price: "Rs 499", reviews: "4.5 ★ (120)", size: "M", quantity: 10 },
      ],
      onShowMore: () => props.setActivePage("electronics"),
    },
    {
      title: "Books",
      images: [
        { img: Book1, price: "Rs 2999", reviews: "4.8 ★ (50)", size: "-", quantity: 3 },
        { img: Book2, price: "Rs 1999", reviews: "4.6 ★ (100)", size: "42", quantity: 8 },
        { img: Book3, price: "Rs 349", reviews: "4.3 ★ (150)", size: "100ml", quantity: 20 },
        { img: Book4, price: "Rs 499", reviews: "4.5 ★ (120)", size: "M", quantity: 10 },
      ],
      onShowMore: () => props.setActivePage("books"),
    },
    {
      title: "CategoryHome",
      images: [
        { img: Home1, price: "Rs 2999", reviews: "4.8 ★ (50)", size: "-", quantity: 3 },
        { img: Home2, price: "Rs 1999", reviews: "4.6 ★ (100)", size: "42", quantity: 8 },
        { img: Home3, price: "Rs 349", reviews: "4.3 ★ (150)", size: "100ml", quantity: 20 },
        { img: Home4, price: "Rs 499", reviews: "4.5 ★ (120)", size: "M", quantity: 10 },
      ],
      onShowMore: () => props.setActivePage("categoryhome"),
    },
  ];






  return (
    <div className="px-4 py-6 ">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>

      {data.map((section, index) => (
        <div key={index} className="mb-10 ">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <button
              onClick={section.onShowMore}
              className=" hover:underline bg-green-600 px-2 py-2 rounded-xl text-sm "
            >
              Show More
            </button>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {section.images.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-md p-4 space-y-3 hover:shadow-lg transition duration-300"
              >
                <div className="relative h-[160px] overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    In Stock
                  </span>
                </div>
                <div className="space-y-1 text-sm text-gray-800 ">
                  <div className="font-semibold text-base">{item.price}</div>
                  <div className="text-yellow-500">{item.reviews}</div>
                  <div className="text-gray-600">Size: {item.size}</div>
                  <div className="text-gray-600">Qty: {item.quantity}</div>
                </div>
                <button className="w-full bg-green-600 text-white py-1.5 rounded-xl text-sm hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
