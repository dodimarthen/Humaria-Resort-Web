// Button.jsx
import React from "react";

const Button = ({ onClick }) => {
  return (
    <div className="mt-7">
      <button
        onClick={onClick}
        className="flex items-center rounded-xl bg-transparent py-3 px-6 border-2 border-white text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none hover:bg-white hover:text-black focus:bg-[#257180] active:bg-[#257180] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Make A Reservation
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4 ml-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Button;
