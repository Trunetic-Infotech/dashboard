import { Link } from "react-router-dom";
import React from "react";

function SignIn() {
  return (
    <div>
         <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-100">
      <div className="max-w-sm w-full p-8 bg-white shadow-xl rounded-2xl transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">Create Account</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Name"
          />
        </div>

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

        <div className="mb-4 flex items-start">
          <input type="checkbox" id="terms" className="mt-1 mr-2" />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              Terms and Conditions
            </a>
          </label>
        </div>

        <Link to='/shopifydashboard'>
          <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-200">
            Sign Up
          </button>
        </Link>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default SignIn