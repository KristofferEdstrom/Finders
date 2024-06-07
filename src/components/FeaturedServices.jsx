import React from 'react';

const services = [
  { name: 'Logo Design', provider: 'John Doe', price: '$50', image: '/images/logo-design.jpg' },
  { name: 'SEO Optimization', provider: 'Jane Smith', price: '$200', image: '/images/seo-optimization.jpg' },
  { name: 'Mobile App Development', provider: 'Sam Wilson', price: '$1500', image: '/images/mobile-app-development.jpg' },
];

const FeaturedServices = () => (
  <div className="p-10 bg-gray-50">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service) => (
        <div key={service.name} className="bg-white shadow-md rounded overflow-hidden">
          <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
            <p className="text-gray-600">by {service.provider}</p>
            <p className="text-green-500 font-bold">{service.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedServices;
