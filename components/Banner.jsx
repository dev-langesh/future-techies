import React from "react";

const Banner = () => {
  return (
    <section className="bg-blue-500 w-full text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Discover the Power of IoT</h1>
        <p className="text-lg mb-8">
          Explore our range of embedded products and unlock endless possibilities.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-blue-400 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
