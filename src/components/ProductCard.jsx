
import React, { useState } from 'react';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-[#6b472b] text-white border p-4 w-full sm:w-64 rounded-lg shadow-lg text-center">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-40 object-cover rounded-md" 
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-md font-semibold">₹ {product.price}</p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <button className="bg-gray-200 text-black px-3 py-2 rounded" onClick={handleDecrease}>-</button>
          <span className="text-lg">{quantity}</span>
          <button className="bg-gray-200 text-black px-3 py-2 rounded" onClick={handleIncrease}>+</button>
        </div>
        <button 
          className="bg-[#e2b371] text-[#371c0a] px-3 py-2 rounded-md hover:bg-[#98744c] hover:text-white transition"
          onClick={() => addToCart({ ...product, quantity })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
