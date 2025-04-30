import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
         <div className="h-screen flex justify-center items-center bg-gradient-to-tr from-blue-100 via-white to-purple-100">
      <div className="max-w-sm w-full p-8 bg-white rounded-2xl shadow-2xl hover:shadow-blue-200 transition duration-300">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">Welcome Back</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Email Address
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <Link to="/shopifydashboard">
          <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-200">
            Login
          </button>
        </Link>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signin" className="text-blue-600 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login