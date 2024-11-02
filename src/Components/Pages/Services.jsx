// services.jsx
import React from "react";
import CardComponent from "../Card/Card";

const Services = () => {
  const servicesData = [
    {
      imageSrc: "img/test.jpg",
      title: "Hygiene Place",
    },
    {
      imageSrc: "img/toba2.jpg",
      title: "Spa & Wellness",
    },
    {
      imageSrc: "img/TobaLake.jpg",
      title: "Fitness Center",
    },
  ];

  return (
    <div
      id="services"
      className="flex flex-col items-center min-h-screen bg-custom-white dark:bg-[#191717] p-10 text-justify font-poppins"
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
