// services.jsx
import React from "react";
import CardComponent from "../Card/Card";

const Services = () => {
  const servicesData = [
    {
      imageSrc: "img/housekeeping.jpg",
      title: "House keeping",
    },
    {
      imageSrc: "img/spa.jpg",
      title: "Relaxing Spa",
    },
    {
      imageSrc: "img/campfire.jpg",
      title: "Campfire ",
    },
  ];

  return (
    <div
      id="services"
      className="flex flex-col min-h-screen items-center  py-4 text-justify font-poppins"
    >
      <h1 className="text-5xl text-gray-900 dark:text-custom-white">
        Our Services
      </h1>
      <div className="mt-10 flex space-x-4">
        {servicesData.map((service, index) => (
          <CardComponent
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
