import React from "react";

const Button = () => {
  return (
    <button
      className="rounded-md bg-transparent py-2 px-4 border border-white-800 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none hover:bg-slate-700 hover:text-white focus:bg-slate-700 active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Button
    </button>
  );
};

export default Button;
