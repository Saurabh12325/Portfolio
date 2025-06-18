import React, { use, useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCut } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        
        <button 
          onClick={() => setIsOpen(true)}
          className='md:hidden fixed top-4 left-4 z-105 p-2 '
        ><FontAwesomeIcon icon={faBars} className="text-[#da4b4b] text-3xl" />
                    </button>
                    <div className=''>
                 <span className='text-[#da4b4b] text-3xl absolute top-4 right-4 p-2 z-40  '>Portfolio</span>
             </div>
        
                    {
                        isOpen ? (
                            <div className=' fixed top-0 left-0  md:hidden  bg-opacity-80 z-110 flex items-center'>
                                <div className='bg-[#da4b4b]  p-6 rounded-md relative flex flex-col items-center '>
                                    <button 
                                        onClick={() => setIsOpen(false)} 
                                        className='absolute top-2 right-2'
                                    >
                                        <FontAwesomeIcon icon={faCut} className="text-white font-extrabold text-sm" />
                                    </button>
                                    <h2 className='text-black  text-xl font-extrabold mb-6'>My Portfolio</h2>
                                    <ul className='flex flex-col items-center gap-4 font-semibold text-white'>
                                         <li>Home</li>
                                        <li>About</li>
                                        <li>Projects</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        ) : null
                    }
       
        <nav className='w-full hidden md:block'>
            <div className='flex item-center justify-between bg-[#1A1A1A] p-4'>
                 <div className='flex justify-evenly text-white items-center w-full'>
                     <div className="text-white font-bold">My Portfolio</div>
                     <div className=''>
                       <ul className='flex justify-center
                        items-center font-bold gap-5'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                        <li>Contact</li>
                       </ul>
                     </div>
                 </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
