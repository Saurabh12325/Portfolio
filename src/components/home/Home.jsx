import React, { useState, useEffect } from 'react';
import bg from "./images/bg.svg";
import ss from "./images/ss.jpg";
import Loader from '../Loader/Loader';

function Home() {
    const [move, setMove] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setMove(true);
        }, 100);

        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout(animationTimeout);
            clearTimeout(loadingTimeout);
        };
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="bg-[#1A1A1A] w-screen h-screen gap-20 flex justify-center items-center relative overflow-hidden">
            <img src={bg} className='absolute top-4 object-cover left-0' alt="" />
            <img src={bg} className='absolute top-4 object-cover right-0' alt="" />

            {/* ✅ Desktop Content (md:block) with animation */}
            <div className={`left hidden md:flex flex-col justify-center items-center w-1/2 z-[100] transition-all duration-700 ease-in-out
                ${move ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-24 translate-y-24 opacity-0'}
            `}>
                <h1 className='text-white text-5xl font-bold text-center'>
                    Hello, I'm <span className='text-[#FF4D4D]'>Saurabh Srivastav</span>
                </h1>
                <p className='text-white text-lg text-center mt-4'>
                    I am a passionate web developer with a knack for creating stunning and functional websites.
                    Lorem ipsum dolor sit amet consectetur...
                </p>
                <div className='flex gap-2'>
                    <button className='mt-6 px-6 py-2 bg-[#FF4D4D] text-white rounded-lg hover:bg-[#FF1A1A] transition duration-300'>LinkedIn</button>
                    <button className='mt-6 px-6 py-2 bg-[#FF4D4D] text-white rounded-lg hover:bg-[#FF1A1A] transition duration-300'>GitHub</button>
                    <button className='mt-6 px-6 py-2 bg-[#FF4D4D] text-white rounded-lg hover:bg-[#FF1A1A] transition duration-300'>Facebook</button>
                </div>
            </div>

            {/* Desktop Image */}
            <div className="right hidden md:block mt-10 mb-20 z-50">
                <img src={ss} className='h-[500px] w-[500px] object-cover rounded-full' alt="" />
            </div>

            {/* ✅ Mobile Section */}
            <div className='flex flex-col md:hidden justify-center items-center w-full h-full'>
                <div className="right md:hidden mb-28 p-3 z-50">
                    <img src={ss} className='h-[400px] w-[430px] object-cover rounded-[100%] border-red border-3 shadow-red-500 shadow-2xl' alt="" />
                </div>

                <div className={`left md:hidden z-[100] p-2 flex flex-col transition-all duration-700 ease-in-out
                    ${move ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-24 translate-y-24 opacity-0'}
                `}>
                    <h1 className='text-white text-3xl font-bold text-center'>
                        Hello, I'm <span className='text-[#FF4D4D]'><br />Saurabh Srivastav</span>
                    </h1>
                    <p className='text-white text-lg text-center mt-4'>
                        I'm a passionate and curious developer actively exploring full-stack development
                    </p>
                </div>

                <div className='grid grid-cols-3 gap-2'>
                    <a href="https://www.linkedin.com/in/saurabh-srivastav-ab7712285/">
                        <button className='mt-6 px-6 py-2 bg-[#FF4D4D] text-white rounded-lg hover:bg-[#FF1A1A] transition duration-300'>LinkedIn</button>
                    </a>
                    <a href="https://github.com/Saurabh12325">
                        <button className='mt-6 px-6 py-2 bg-[#FF4D4D] text-white rounded-lg hover:bg-[#FF1A1A] transition duration-300'>Facebook</button>
                    </a>
                    <button className='mt-6 px-6 py-2 bg-[#FF4D4D] text-white rounded-lg hover:bg-[#FF1A1A] transition duration-300'>Github</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
