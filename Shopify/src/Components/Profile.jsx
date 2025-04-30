import React from "react";
import { Plus } from "lucide-react";

function Profile() {
  return (
    <div className="min-h-screen  py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-600">
          My Profile
        </h1>

        <div className="bg-gray-400 shadow-xl rounded-2xl p-8 space-y-8">
          {/* Profile Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 relative">
            {/* Profile image with Plus button */}
            <div className="relative">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-green-600 shadow-lg object-cover group-hover:scale-105 transition"
              />
              <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full border-2 border-white hover:scale-110 transition">
                <Plus className="w-5 h-5 text-white" strokeWidth={4} />
              </button>
            </div>

            {/* User Info */}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-gray-800">Amar</h2>
              <p className="text-gray-500">Amar@gmail.com</p>
            </div>
          </div>

          {/* Personal Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value="Amar"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value="Amar@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
                disabled
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">
                Shipping Address
              </label>
              <input
                type="text"
                value="Uran, JNPT, Township"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
                disabled
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
         
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
