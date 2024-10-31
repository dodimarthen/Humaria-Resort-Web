import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // For Heroicons v2
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import NavLink from "../Navlink/Navlink";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-[#191717] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Toggle Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          )}
        </button>

        <div className="font-poppins md:text-3xl sm:text-xl font-bold text-gray-700 dark:text-gray-200">
          Humaria
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-9">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Our Services</NavLink>
          <NavLink href="#">Reservation</NavLink>
        </div>

        <ThemeToggle />

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-[#191717] shadow-lg p-4 flex flex-col space-y-4">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Our Services</NavLink>
            <NavLink href="#">Reservation</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
