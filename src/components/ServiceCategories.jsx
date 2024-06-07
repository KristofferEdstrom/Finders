// src/components/ServiceCategories.jsx
import React from 'react';

const ServiceCategories = () => {
  const categories = ['Web Development', 'Graphic Design', 'Digital Marketing', 'Writing & Translation'];

  return (
    <section className="py-20 px-4 md:py-40 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <p>Find the best professionals in {category.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
