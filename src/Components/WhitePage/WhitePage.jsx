// src/components/WhitePage.jsx
import React from "react";

const HealingDestination = () => {
  return (
    <div id="WhitePage" className="mt-10">
      <div className="flex flex-row items-center p-5 bg-gray-100">
        <div className="flex-1 pr-5">
          <h1 className="text-3xl font-bold mb-4">
            Your Next Healing Destination
          </h1>
          <p className="text-base leading-relaxed mb-4">
            Samosir Island is situated at the heart of Lake Toba, offering
            breathtaking views of the lake and a rich immersion in Batak
            culture, which remains deeply rooted in the local community. Humaria
            D'resort provides a welcoming retreat for you, your family, and
            friends. Enjoy our amenities at affordable prices, and experience a
            memorable stay surrounded by the beauty and culture of Lake Toba.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Within this serene wonderland, you'll find an architectural
            masterpiece and living space designed by Our Team, seamlessly
            blending design and tranquility. We aspire for every moment you
            spend with us to evoke a profound and renewed connection between
            your spirit and nature.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/img/toba2.jpg"
            alt="Healing destination surrounded by trees"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HealingDestination;
