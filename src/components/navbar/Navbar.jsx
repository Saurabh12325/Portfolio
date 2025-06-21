import React, { use, useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCut } from '@fortawesome/free-solid-svg-icons';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        
        <button 
          onClick={() => setIsOpen(true)}
          className='md:hidden absolute top-4 left-4 z-105 p-2 '
        ><FontAwesomeIcon icon={faBars} className="text-[#da4b4b] text-3xl" />
                    </button>
                    <div className=''>
                 <span className='text-[#da4b4b] text-3xl absolute top-4 right-4 p-1 z-40 md:hidden font-'>Portfolio</span>
             </div>
                    {
                        isOpen ? (
                            <div className=' fixed top-0 left-0  md:hidden  bg-opacity-80 z-110 flex items-center '>
                                <div className='bg-[#da4b4b]  p-6 rounded-md relative flex flex-col items-center '>
                                    <button 
                                        onClick={() => setIsOpen(false)} 
                                        className='absolute top-2 right-2'
                                    >
                                        <FontAwesomeIcon icon={faCut} className="text-white font-extrabold text-sm" />
                                    </button>
                                    <h2 className='text-black  text-xl font-extrabold mb-6'>My Portfolio</h2>
                                    <ul className='flex flex-col items-center gap-4 font-semibold text-white'>
                                     
                                         <li><a href="#home">Home</a></li>
                                         <li><a href="#about">About Me</a></li>
                                         <li><a href="#techstack">TechStack</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        ) : null
                    }
       
        <nav className='w-full max-[763px]:hidden'>
            <div className='flex item-center justify-between bg-[#1c1b1b] p-4'>
                 <div className='flex justify-evenly text-white items-center w-full'>
                     <div className="text-white text-4xl font-bold z-[50] animate-bounce">My Portfolio</div>
                     <div className='z-[50] hover:scale-110 transition-transform duration-300 animate-bounce'>
                       <ul className='flex justify-center
                        items-center font-bold gap-5 text-2xl  text-red-400'>
                                         <li><a href="#home">Home</a></li>
                                         <li><a href="#about">About Me</a></li>
                                         <li><a href="#techstack">TechStack</a></li>
                       </ul>
                     </div>
                 </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
