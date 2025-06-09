import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* INFORMATION */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-black">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-black">Search</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Contact Us</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Returns</a></li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-black">Policies</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Shipping</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Terms + Conditions</a></li>
          </ul>
        </div>

        {/* COLLECTIONS */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-black">Collections</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-black">ASGARD Basics</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">ASGARD Intimates</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">ASGARD Summer Drop 1</a></li>
          </ul>
        </div>

        {/* JOIN THE CREW */}
        <div className="md:col-span-1">
          <h3 className="font-bold mb-4 uppercase text-black">Join The Crew</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="px-4 py-2 border rounded focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-center md:justify-start mt-6">
            <a href="https://www.instagram.com/asgard_clothing_co" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
              <Instagram className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>© 2025 ASGARD Brand. ® VMG Concepts, LLC</p>
      </div>
    </footer>
  );
};

export default Footer; 