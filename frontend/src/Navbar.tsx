import React, { useState } from 'react';
import { Instagram, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const Navbar: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  return (
    <>
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={(tok) => setToken(tok)}
      />
      {/* Top Instagram Bar */}
      <div className="bg-black text-white py-1.5 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <a 
            href="https://www.instagram.com/asgard_clothing_co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            className="flex items-center hover:text-[#E1306C] transition-colors duration-300"
          >
            <Instagram className="h-4 w-4 mr-2" />
          </a>
          <div className="flex items-center space-x-6">
            <span className="text-sm">LKR</span>
            {token ? (
              <span className="text-sm">LOGGED IN</span>
            ) : (
              <button className="text-sm hover:text-gray-300" onClick={() => setLoginOpen(true)}>LOGIN</button>
            )}
            <div className="flex items-center">
              <ShoppingBag className="h-4 w-4 mr-1" />
              <span className="text-sm">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              <Link to="/" className="text-black hover:text-gray-600">HOME</Link>
              <div className="relative group">
                <a href="#" className="text-black hover:text-gray-600">WOMEN</a>
              </div>
              <div className="relative group">
                <a href="#" className="text-black hover:text-gray-600">MEN</a>
              </div>
              <a href="#" className="text-black hover:text-gray-600">SALE</a>
            </div>

            <div className="flex-1 flex justify-center">
              <Link to="/">
                <img src="/assets/new logo.png" alt="ASGARD" className="h-14" />
              </Link>
            </div>

            <div className="flex items-center">
              <input
                type="search"
                placeholder="Search"
                className="px-4 py-1 border rounded focus:outline-none focus:border-black"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 