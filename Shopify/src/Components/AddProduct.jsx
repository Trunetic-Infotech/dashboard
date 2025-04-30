import React, { useState } from "react";

function AddProduct({setActivePage}) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product:", product);
    // You would typically send `product` to your backend API here
  };

  return (
    <div className="max-w-3xl mx-auto borderr-shadow bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-green-600">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full p-3 border rounded-lg"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          className="w-full p-3 border rounded-lg"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          className="w-full p-3 border rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full p-3 border rounded-lg"
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          className="w-full p-3 border rounded-lg"
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          className="w-full p-3 border rounded-lg"
          onChange={handleChange}
        />
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Save Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
