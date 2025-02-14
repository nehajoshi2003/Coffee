import React from 'react';
import bgImage from './images/bg_home.jpg';
import coffeeMug from './images/coffee_mug.png';
const HomePage = () => {
  return (
    <div>
    <div className="relative h-screen w-full bg-cover bg-center"  style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Overlay for blur effect */}
      <div className="absolute inset-0 backdrop-blur-[9px] bg-black/30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-[104px] font-bold mb-4 " style={{ fontFamily: '"Imperial Script", cursive' }}>Cafe Coffee</h1>
          <button
  className="mt-2 px-6 py-3 bg-[#371c09] text-white text-[20px] hover:bg-[#a17859] hover:text-[#371c09] hover:text-[25px] rounded-lg"
  style={{
    fontFamily: '"Montserrat Alternates", serif',
    fontWeight: 600,
    fontStyle: "normal",
  }}
>
  Order Now
</button>
        </div>

      </div>
      
    </div>
<div className="flex items-center justify-center px-2 bg-[#371c09]" >
          <div className="text-white max-w-md md:mr-[150px]">
            <h2 className="text-6xl font-bold mb-4"  style={{
    fontFamily: '"Montserrat Alternates", serif',
    fontWeight: 700,
    fontStyle: "normal",
  }}>Our Speciality</h2>
            <p className="text-xl mb-6 "  style={{
    fontFamily: '"Montserrat Alternates", serif',
    fontWeight: 400,
    fontStyle: "normal",
  }}>
              At Cafe Coffee, we serve freshly brewed coffee with the finest beans sourced globally. Our signature blends and cozy ambiance make every cup special.
            </p>
            <button
  className="mt-2 px-6 py-3 bg-white text-[#371c09] text-[20px] hover:bg-[#a17859] hover:text-[#371c09] hover:text-[25px] rounded-lg"
  style={{
    fontFamily: '"Montserrat Alternates", serif',
    fontWeight: 600,
    fontStyle: "normal",
  }}
>
  Contact Us
</button>
          </div>
          <div className="ml-10">
            <img src={coffeeMug} alt="Rotating Coffee Mug" className="w-100 h-100 animate-spin" style={{ animationDuration: '30s' }} />
          </div>
        </div>
    </div>
  );
};

export default HomePage;
