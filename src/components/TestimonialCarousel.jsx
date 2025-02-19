import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

const testimonials = [
  {
    quote: "This coffee exceeded all my expectations! The flavor is rich and satisfying. Highly recommend it!",
    name: "John Doe",
    role: "Coffee Enthusiast",
    img: img1,
  },
  {
    quote: "Fantastic service and delicious coffee. My mornings are incomplete without it now!",
    name: "Jane Smith",
    role: "Verified Customer",
    img: img2,
  },
  {
    quote: "A perfect blend with an incredible aroma. It made me fall in love with coffee all over again!",
    name: "Emily Johnson",
    role: "Coffee Lover",
    img: img3,
  },
];

const TestimonialCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-6 text-white"
        style={{
          fontFamily: '"Montserrat Alternates", serif',
          fontWeight: 800,
          fontStyle: "normal",
        }}
      >
        What Our Customers Say
      </h2>

      <div className="relative w-full max-w-lg mx-auto bg-[#271e1b] bg-opacity-50 rounded-xl shadow-2xl p-6 h-auto">
        {/* Left Arrow */}
        <button
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl md:text-4xl transition z-20"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          &#10094;
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Correct reference
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-6 bg-[#98754c] rounded-lg shadow-lg text-center">
              <div className="flex flex-col items-center">
                <img
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 object-cover shadow-md bg-white"
                  src={testimonial.img}
                  alt={testimonial.name}
                />
                <p className="text-white mb-3 text-sm md:text-base italic">"{testimonial.quote}"</p>
                <h4 className="text-lg md:text-xl font-semibold text-white">{testimonial.name}</h4>
                <p className="text-xs md:text-sm text-white">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-3xl md:text-4xl text-white transition z-20"
          onClick={() => swiperRef.current?.slideNext()}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
