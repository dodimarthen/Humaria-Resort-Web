import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-[#181C14] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-poppins text-3xl font-bold text-gray-700 dark:text-gray-200">
          Humaria D'resort
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-primary"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-primary"
          >
            About
          </a>
          <a
            href="#"
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-primary"
          >
            Our Services
          </a>
          <a
            href="#"
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-primary"
          >
            Contact
          </a>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-[#F3C623]" />
          ) : (
            <MoonIcon className="h-6 w-6 text-[#181C14]" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
