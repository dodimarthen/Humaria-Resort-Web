import React, { useMemo } from "react";
import CardDestination from "../Card/CardDestination";

const Carousel = () => {
  const cardsData = useMemo(
    () => [
      {
        image: "img/jesus2.jpg",
        title: "Sibeabea Hill",
        distance: "11.25 miles",
        days: "1 Day Trip",
        bgColor: "bg-[#3C3D37]",
      },
      {
        image: "img/galegale.jpeg",
        title: "Si Gale-gale",
        distance: "17.71 miles",
        days: "1 Day Trip",
        bgColor: "bg-[#CDC2A5]",
      },
      {
        image: "img/holbunghills.jpg",
        title: "Holbung Hills",
        distance: "13.17 miles",
        days: "1 Day Trip",
        bgColor: "bg-[#E6B9A6]",
      },
    ],
    []
  );

  return (
    <div
      id="destination"
      className="flex flex-col min-h-screen items-center py-4 text-justify font-poppins"
    >
      <h1 className="font-serif text-5xl text-gray-900 dark:text-custom-white">
        Top Destinations
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-7">
        {cardsData.map((card, index) => (
          <CardDestination key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
