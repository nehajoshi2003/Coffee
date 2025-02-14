import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-[20px] bg-brown/30 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: '"Imperial Script", cursive' }}>Cafe Coffee</h1>
        <ul className="flex space-x-6 text-white font-semibold text-[20px]" style={{
    fontFamily: '"Montserrat Alternates", serif',
    fontWeight: 600,
    fontStyle: "normal",
  }}>
          <li>
            <Link to="/" className="hover:text-[#371c09] ">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-[#371c09] ">Menu</Link>
          </li>
          <li>
            <Link to="/order-details" className="hover:text-[#371c09] ">Order Details</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#371c09]">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
