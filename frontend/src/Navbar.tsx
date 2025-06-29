import React, { useState } from 'react';
import { Instagram, ShoppingBag, ChevronDown, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';


const Navbar: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <div className="flex items-center space-x-12">
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
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          {/* Mobile menu button and logo for mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="ml-4">
              <img src="/assets/new logo.png" alt="ASGARD" className="h-10" />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-between items-center">
            <div className="flex space-x-8">
              <Link to="/" className="text-black hover:text-gray-600">HOME</Link>
              <div className="relative group">
                <a href="#" className="text-black hover:text-gray-600 flex items-center">WOMEN <ChevronDown className="h-4 w-4 ml-1" /></a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 rounded-md z-10 min-w-[120px]">
                  <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">SHOP ALL</a>
                  <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">SWIM</a>
                  <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">INTIMATES</a>
                  <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">APPAREL</a>
                  <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">ACCESSORIES</a>
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="text-black hover:text-gray-600 flex items-center">MEN <ChevronDown className="h-4 w-4 ml-1" /></a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 rounded-md z-10 min-w-[120px]">
                  <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">APPAREL</a>
                  <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">ACCESSORIES</a>
                </div>
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
                className="px-4 py-1 border border-gray-700 rounded focus:outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full h-full bg-white z-40 p-4">
              <div className="flex justify-end">
                <button onClick={toggleMobileMenu} className="text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
                  &times;
                </button>
              </div>
              <div className="flex flex-col space-y-4 mt-4">
                <Link to="/" className="text-black hover:text-gray-600 text-lg py-2">HOME</Link>
                <div className="relative">
                  <a href="#" className="text-black hover:text-gray-600 flex items-center text-lg py-2">WOMEN <ChevronDown className="h-5 w-5 ml-2" /></a>
                  <div className="pl-4 pt-2 flex flex-col space-y-2">
                    <a href="#" className="block px-4 py-2 text-base text-black hover:bg-gray-100">SHOP ALL</a>
                    <a href="#" className="block px-4 py-2 text-base text-black hover:bg-gray-100">SWIM</a>
                    <a href="#" className="block px-4 py-2 text-base text-black hover:bg-gray-100">INTIMATES</a>
                    <a href="#" className="block px-4 py-2 text-base text-black hover:bg-gray-100">APPAREL</a>
                    <a href="#" className="block px-4 py-2 text-base text-black hover:bg-gray-100">ACCESSORIES</a>
                  </div>
                </div>
                <div className="relative">
                  <a href="#" className="text-black hover:text-gray-600 flex items-center text-lg py-2">MEN <ChevronDown className="h-5 w-5 ml-2" /></a>
                  <div className="pl-4 pt-2 flex flex-col space-y-2">
                    <a href="#" className="block px-4 py-2 text-base text-black hover:bg-gray-100">APPAREL</a>
                    <a href="#" className="block px-4 py-2 text-base text-black hover:bg-gray-100">ACCESSORIES</a>
                  </div>
                </div>
                <a href="#" className="text-black hover:text-gray-600 text-lg py-2">SALE</a>
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-700 rounded focus:outline-none focus:border-black mt-4"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar; 
