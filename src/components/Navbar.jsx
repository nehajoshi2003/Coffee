import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-[20px] bg-brown/30 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-white"
          style={{ fontFamily: '"Imperial Script", cursive' }}
        >
          Cafe Coffee
        </h1>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex space-x-6 text-white font-semibold text-[20px]"
          style={{
            fontFamily: '"Montserrat Alternates", serif',
            fontWeight: 600,
            fontStyle: 'normal',
          }}
        >
          <li>
            <Link to="/" className="hover:text-[#371c09]">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-[#371c09]">Menu</Link>
          </li>
          <li>
            <Link to="/order-details" className="hover:text-[#371c09]">Order Details</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#371c09]">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-brown/30 backdrop-blur-[20px] transition-all duration-300 ${
          isOpen ? 'h-auto py-4 opacity-100' : 'h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul
          className="flex flex-col items-center space-y-4 text-white font-semibold text-[20px]"
          style={{
            fontFamily: '"Montserrat Alternates", serif',
            fontWeight: 600,
            fontStyle: 'normal',
          }}
        >
          <li>
            <Link to="/" className="hover:text-[#371c09]" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-[#371c09]" onClick={() => setIsOpen(false)}>Menu</Link>
          </li>
          <li>
            <Link to="/order-details" className="hover:text-[#371c09]" onClick={() => setIsOpen(false)}>Order Details</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#371c09]" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
