import React, { useState, useEffect } from "react";

const slides = [
  {
    color: "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500",
    text: "Slide 1",
  },
  {
    color: "bg-gradient-to-r from-green-400 via-yellow-500 to-red-500",
    text: "Slide 2",
  },
  {
    color: "bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500",
    text: "Slide 3",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[40%] h-80 mx-auto overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          } ${slide.color} flex items-center justify-center`}
        >
          <h2 className="text-white text-2xl font-bold">{slide.text}</h2>
        </div>
      ))}
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
