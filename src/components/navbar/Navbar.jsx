import React from 'react'

function Navbar() {
    return (
        <nav>
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
    )
}

export default Navbar
