import React from 'react';
import { useCart } from './CartContext';
import bgorder from './images/order-bg.avif';
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const { cart } = useCart(); // Access cart from context

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="relative h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bgorder})` }}>
      {/* Centered Order Details Container */}
      <div className="p-6  w-full max-w-[700px] z-10 flex flex-col text-white items-center bg-[#7e5947] rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-white" style={{
          fontFamily: '"Montserrat Alternates", serif',
          fontWeight: 700,
          fontStyle: "normal",
        }}>
          Your Order Details
        </h1>

        {/* Scrollable Order Items Container */}
        <div className="max-h-[300px] md:max-h-[400px] w-full overflow-y-auto space-y-4 px-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-600 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white">{item.name}</h2>
                  <p className="text-white text-semibold ">Quantity: {item.quantity}</p>
                  <p className="text-white font-medium">₹ {item.price * item.quantity}</p>
                </div>
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              </div>
            ))
          ) : (
            <p className="text-center text-3xl text-white" style={{
              fontFamily: '"Montserrat Alternates", serif',
              fontWeight: 600,
              fontStyle: "normal",
            }}>
              Your cart is empty, let's order something
            </p>
          )}
        </div>

        {/* Show "Order now" button only if the cart is empty */}
        {cart.length === 0 && (
          <div className="flex justify-center mt-4">
            <Link to="/menu">
              <button
                className="px-6 py-3 bg-[#371c09] text-white text-[20px] hover:bg-[#a17859] hover:text-[#371c09] rounded-lg"
                style={{
                  fontFamily: '"Montserrat Alternates", serif',
                  fontWeight: 600,
                  fontStyle: "normal",
                }}
              >
                Order now
              </button>
            </Link>
          </div>
        )}

        {/* Show "Pay now" button only if the cart has items */}
        {cart.length > 0 && (
          <div className="mt-6 text-right w-full px-4">
            <h2 className="text-xl text-white font-semibold">Total: ₹ {totalPrice}</h2>
            <div className="flex justify-center mt-4">
              <Link to="/order-details">
                <button
                  className="px-6 py-3 bg-[#371c09] text-white text-[20px] hover:bg-[#a17859] hover:text-[#371c09] rounded-lg"
                  style={{
                    fontFamily: '"Montserrat Alternates", serif',
                    fontWeight: 600,
                    fontStyle: "normal",
                  }}
                >
                  Pay now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
