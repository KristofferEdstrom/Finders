// src/components/FeaturedServices.jsx
import React from 'react';

const FeaturedServices = () => {
  const services = [
    { title: 'Website Design', description: 'Get a professional website design.', image: '/images/website-design.jpg' },
    { title: 'SEO Services', description: 'Improve your website ranking on search engines.', image: '/images/seo-services.jpg' },
    { title: 'Content Writing', description: 'High-quality content writing services.', image: '/images/content-writing.jpg' },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 md:py-40 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
