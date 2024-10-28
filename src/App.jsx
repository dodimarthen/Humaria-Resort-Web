import React from "react";
import Header from "./Components/Header/Header";
import WhitePage from "./Components/WhitePage/WhitePage";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <>
      <div className="bg-custom-bg bg-cover bg-center h-screen md:bg-center md:bg-cover sm:bg-auto sm:bg-top">
        <Navbar />
        <Header />

        <WhitePage />
      </div>
    </>
  );
}

export default App;
