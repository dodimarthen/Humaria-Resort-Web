import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import HealingDestination from "./Components/WhitePage/WhitePage";

// Array of image URLs
const backgroundImages = ["/img/TobaLake.jpg", "/img/toba2.jpg"];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="bg-cover bg-center h-screen md:bg-center md:bg-cover sm:bg-auto sm:bg-top transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <Navbar />
      <Header />
      <HealingDestination />
    </div>
  );
}

export default App;
