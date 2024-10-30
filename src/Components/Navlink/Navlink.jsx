function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-lg text-gray-700 dark:text-gray-200 pb-1 border-b-4 border-transparent hover:border-[#29ADB2] dark:hover:border-[#FFE4C9] transition-colors duration-300"
    >
      {children}
    </a>
  );
}

export default NavLink;
