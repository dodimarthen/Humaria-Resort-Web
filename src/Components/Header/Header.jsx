// Header.jsx
import React from "react";
import Button from "../Button/Button";
import AlertModal from "../Modal/AlertModal"; // Adjust the path if necessary
import { useDisclosure } from "@nextui-org/react";

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="bg-custom-header bg-cover bg-center w-screen h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center h-full justify-center">
        <h1 className="text-5xl sm:text-2xl md:text-4xl lg:text-7xl text-[#FFF7F1]">
          Explore <span className="underline decoration-[#CBB279]">Toba</span>{" "}
          With Us.
        </h1>
        <div className="flex justify-start w-full mt-2">
          <Button onClick={onOpen} />
        </div>
      </div>
      <AlertModal isOpen={isOpen} onOpenChange={onOpenChange} />{" "}
    </div>
  );
};

export default Header;
