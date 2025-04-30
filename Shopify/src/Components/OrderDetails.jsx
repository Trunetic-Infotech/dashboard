import React from "react";
import img1 from '../assets/shirts/shirt1.jpg'
import img2 from '../assets/shirts/shirt2.jpg'


function OrderDetails() {
  const order = {
    orderId: "#ORD123456",
    orderDate: "April 25, 2025",
    status: "Delivered",
    total: "Rs 2,497",
    paymentMethod: "Credit Card (HDFC ****1234)",
    shippingAddress: {
      name: "Rahul Sharma",
      street: "123 MG Road",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400001",
      phone: "+91 9876543210",
    },
    products: [
      {
        name: "T-shirt - Black (M)",
        price: "Rs 499",
        quantity: 2,
        image: img1,
      },
      {
        name: "Bluetooth Earbuds",
        price: "Rs 1499",
        quantity: 1,
        image:img2,
      },
    ],
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>

      <div className="bg-white shadow rounded-2xl p-6 space-y-6">
        {/* Order Summary */}
        <div className="flex justify-between flex-wrap">
          <div>
            <p className="text-gray-600">Order ID:</p>
            <p className="font-semibold">{order.orderId}</p>
          </div>
          <div>
            <p className="text-gray-600">Order Date:</p>
            <p className="font-semibold">{order.orderDate}</p>
          </div>
          <div>
            <p className="text-gray-600">Status:</p>
            <p className="font-semibold text-green-600">{order.status}</p>
          </div>
          <div>
            <p className="text-gray-600">Total:</p>
            <p className="font-semibold">{order.total}</p>
          </div>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Items</h2>
          <div className="divide-y">
            {order.products.map((product, idx) => (
              <div key={idx} className="flex items-center py-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded-xl object-cover mr-4"
                />
                <div className="flex-1">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-gray-600 text-sm">Quantity:{product.quantity}</p>
                </div>
                <p className="font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Shipping Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shipping */}
          <div>
            <h3 className="font-semibold mb-2">Shipping Address</h3>
            <p>{order.shippingAddress.name}</p>
            <p>{order.shippingAddress.street}</p>
            <p>
              {order.shippingAddress.city}, {order.shippingAddress.state} -{" "}
              {order.shippingAddress.zip}
            </p>
            <p>Phone: {order.shippingAddress.phone}</p>
          </div>

          {/* Payment */}
          <div>
            <h3 className="font-semibold mb-2">Payment Method</h3>
            <p>{order.paymentMethod}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
