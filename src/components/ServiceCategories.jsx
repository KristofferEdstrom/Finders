import React from 'react';

const categories = [
  { name: 'Graphic Design', image: '/images/graphic-design.jpg' },
  { name: 'Digital Marketing', image: '/images/digital-marketing.jpg' },
  { name: 'Writing & Translation', image: '/images/writing-translation.jpg' },
  { name: 'Video & Animation', image: '/images/video-animation.jpg' },
  { name: 'Programming & Tech', image: '/images/programming-tech.jpg' },
];

const ServiceCategories = () => (
  <div className="p-10">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Categories</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div key={category.name} className="bg-white shadow-md rounded overflow-hidden">
          <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ServiceCategories;
