
import React from 'react';

function Loader() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#cb9191] text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#FF4D4D] mb-4"></div>
      <p className='text-4xl font-extrabold '>Welcome to My Portfolio...</p>
    </div>
  );
}

export default Loader;
