function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-block max-w-max pt-2 text-sm sm:text-base md:text-md lg:text-md text-gray-700 dark:text-gray-200 pb-0.5 border-b-2 border-transparent hover:border-[#EB8317] dark:hover:border-[#B4B4B3] transition-colors duration-200 relative"
    >
      {children}
      <span className="absolute left-0 right-0 bottom-0 h-0.25 bg-[#EB8317] dark:bg-[#B4B4B3] rounded-full transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </a>
  );
}

export default NavLink;
