import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const CardDestination = ({ image, title, distance, days, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-md p-2`}>
      <div className="w-full h-48 overflow-hidden rounded-lg">
        {" "}
        <img src={image} alt={title} className="w-[27vh] h-full object-cover" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex items-center text-white">
          <FaMapMarkerAlt className="mr-2" />
          <span>{distance}</span>
        </div>
        <p className="text-white">{days}</p>
      </div>
    </div>
  );
};

export default CardDestination;
