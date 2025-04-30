import React from 'react'

import Book1 from '../assets/Books/book1.jpg'
import Book2 from '../assets/Books/book2.jpg'
import Book3 from '../assets/Books/book3.jpg'
import Book4 from '../assets/Books/book4.jpg'
import Book5 from '../assets/Books/book5.jpg'
import Book6 from '../assets/Books/book6.jpg'
import Book7 from '../assets/Books/book7.jpg'
import Book8 from '../assets/Books/book8.jpg'
import Book9 from '../assets/Books/book9.jpg'
import Book10 from '../assets/Books/book10.jpg'
import Book11 from '../assets/Books/book11.jpg'
import Book12 from '../assets/Books/book12.jpg'




const products = [
  { id: 1, title: "Traveling Bag", price: "₹150", rating: "4.6", img: Book1 },
  { id: 2, title: "Shoes", price: "₹150", rating: "4.6", img: Book2 },
  { id: 3, title: "Heat", price: "₹150", rating: "4.6", img: Book3 },
  { id: 1, title: "Traveling Bag", price: "₹150", rating: "4.6", img: Book4 },
  { id: 2, title: "Shoes", price: "₹150", rating: "4.6", img: Book5 },
  { id: 3, title: "Heat", price: "₹150", rating: "4.6", img: Book6 },
  { id: 1, title: "Traveling Bag", price: "₹150", rating: "4.6", img: Book7 },
  { id: 2, title: "Shoes", price: "₹150", rating: "4.6", img: Book8 },
  { id: 3, title: "Heat", price: "₹150", rating: "4.6", img: Book9 },
  { id: 1, title: "Traveling Bag", price: "₹150", rating: "4.6", img: Book10 },
  { id: 2, title: "Shoes", price: "₹150", rating: "4.6", img: Book11 },
  { id: 3, title: "Heat", price: "₹150", rating: "4.6", img: Book12 },
];

function Books() {
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
              <div className="w-full overflow-hidden rounded-2xl relative">
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
                  <label htmlFor={`qty-${product.id}`} className="font-medium">
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
    </div>
  )
}

export default Books