// src/components/Header.jsx
import React from "react";
import Button from "../Button/Button";
const Header = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center space-y-12"
    >
      <p className="text-white text-3xl sm:text-4xl md:text-8xl">
        <span
          className="font-bold"
          style={{ fontFamily: "Amatic SC, cursive" }}
        >
          Extraordinary Experience
        </span>
      </p>
      <p className="text-white text-xs sm:text-2xl md:text-3xl">
        <span className="font-bold" style={{ fontFamily: "Bad Script" }}>
          Samosir Island, North Sumatra
        </span>
      </p>
      <Button />
    </div>
  );
};

export default Header;
