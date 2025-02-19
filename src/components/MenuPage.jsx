// MenuPage.js
import React from 'react';
import ProductCard from './ProductCard';
import { Link } from "react-router-dom";
import espresso from './images/espresso.jpg';
import doppio from './images/doppio.jpg';
import macchiato from './images/macchiato.jpg';
import cappuccino from './images/cappuccino.webp';
import flat from './images/flat.webp';
import au from './images/au.jpg';
import turkish from './images/turkish.webp';
import irish from './images/irish.jpg';
import americano from './images/americano.jpeg';
import black from './images/black.jpg';
import mocha from './images/mocha.jpg';
import latte from './images/latte.webp';
import frappe from './images/frappe.avif';
import mocha2 from './images/mocha2.jpg';
import borgia from './images/borgia.jpg';
import mazagran from './images/mazagran.webp';

const MenuPage = () => {
  const products = [
    { id: 1, name: 'Espresso', price: 350, image: espresso },
    { id: 2, name: 'Doppio', price: 450, image: doppio },
    { id: 3, name: 'Macchiato', price: 400, image: macchiato },
    { id: 4, name: 'Cappuccino', price: 500, image: cappuccino },
    { id: 5, name: 'Flat White', price: 470, image: flat },
    { id: 6, name: 'Café au Lait', price: 450, image: au },
    { id: 7, name: 'Turkish', price: 380, image: turkish },
    { id: 8, name: 'Irish', price: 250, image: irish },
    { id: 9, name: 'Americano', price: 400, image: americano },
    { id: 10, name: 'Long Black', price: 350, image: black },
    { id: 11, name: 'Vienna Mocha', price: 455, image: mocha },
    { id: 12, name: 'Latte', price: 470, image: latte },
    { id: 13, name: 'Frappé', price: 400, image: frappe },
    { id: 14, name: 'Mocha', price: 305, image: mocha2 },
    { id: 15, name: 'Borgia', price: 405, image: borgia },
    { id: 16, name: 'Mazagran', price: 400, image: mazagran },
  ];

  return (
    <div className="min-h-screen w-full bg-[#e2b371] flex flex-col items-center p-6 p-10 pt-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#371c0a] mb-6">Our Coffees</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link to="/order-details">
        <button className="mt-6 px-6 py-3 bg-[#371c09] text-white text-lg sm:text-xl hover:bg-[#a17859] hover:text-[#371c09] rounded-lg">
          Let's confirm your orders ☕️
        </button>
      </Link>
    </div>
  );
};

export default MenuPage;
