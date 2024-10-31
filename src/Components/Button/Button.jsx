import React from "react";

const Button = () => {
  return (
    <div className="mb-10">
      <button
        className="rounded-full bg-[#DBD3D3] py-3 px-4 border border-slate-800 text-center text-sm text-slate-800 transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none hover:bg-slate-700 hover:text-white focus:bg-slate-700 active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Book Now
      </button>
    </div>
  );
};

export default Button;
