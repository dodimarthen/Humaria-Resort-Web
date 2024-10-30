import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { getSavedTheme, setTheme, applyTheme } from "../../utils/themeUtils";
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      setTheme(newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    const savedTheme = getSavedTheme();
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  return (
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
  );
}

export default ThemeToggle;
