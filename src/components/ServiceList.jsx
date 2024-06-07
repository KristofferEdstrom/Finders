import React from 'react';

const services = [
  { id: 1, name: "Web Development", description: "Building modern web applications", price: "$100/hr" },
  { id: 2, name: "Graphic Design", description: "Creating stunning graphics", price: "$50/hr" },
];

const ServiceList = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold">Services</h2>
    <ul>
      {services.map(service => (
        <li key={service.id} className="border p-4 my-2">
          <h3 className="text-lg font-bold">{service.name}</h3>
          <p>{service.description}</p>
          <p className="text-gray-600">{service.price}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceList;
