import React from "react";

function Loader() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#0f0f0f] gap-6">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-[#1a1a1a]" />
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-t-[#cb5151] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
      </div>
      <p className="text-white text-xl font-semibold tracking-widest uppercase">
        Loading Portfolio
        <span className="animate-pulse">...</span>
      </p>
    </div>
  );
}

export default Loader;
