import { Mail, Phone, MapPin } from "lucide-react";

export default function Contacts() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-100 borderr-shadow">
      <h1 className="text-3xl font-bold text-green-600 mb-10 text-center">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
        {/* Contact Form */}
        <form className="bg-white rounded-xl borderr-shadow p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg "
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded-lg "
          />
          <button className="bg-green-600 text-white w-full py-2 px-4 rounded-xl hover:bg-green-700 transition">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white rounded-xl borderr-shadow shadow p-6 space-y-6 text-gray-700">
          <div className="flex items-center gap-4">
            <Mail className="text-green-600" />
            <span>Amar@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-green-600" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-green-600" />
            <span>400702 Raigad, Uran, JNPT</span>
          </div>

          {/* Optional Map */}
          {/* <iframe
            src="https://maps.google.com/maps?q=san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-48 rounded-lg border"
            allowFullScreen
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}
