// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20 px-4 md:py-40 md:px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find the Best Services</h1>
        <p className="text-lg md:text-2xl mb-8">Connecting you with top professionals</p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
