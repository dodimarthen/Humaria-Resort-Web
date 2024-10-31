import React from "react";
const Header = () => {
  return (
    <div className="bg-custom-header bg-cover bg-center w-screen h-[90vh] flex flex-col justify-center items-center">
      <div className="">
        <h1 className="font-badscript text-[#FFF7F1] text-2xl sm:text-base md:text-2xl lg:text-4xl">
          Humaria Resort
        </h1>
        <p className="mt-4 text-xl sm:text-xl md:text-4xl lg:text-6xl text-[#FFF7F1]">
          Explore Toba With Us.
        </p>
      </div>
    </div>
  );
};

export default Header;
