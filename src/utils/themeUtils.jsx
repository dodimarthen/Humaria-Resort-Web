export const getSavedTheme = () => localStorage.getItem("theme");

export const setTheme = (theme) => localStorage.setItem("theme", theme);

export const applyTheme = (isDarkMode) => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
