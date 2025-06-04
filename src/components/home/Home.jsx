import React from 'react'
import bg from "./images/bg.svg"
import ss from "./images/ss.jpg"


function Home() {
    return (
        <div  className="parent bg-[#1A1A1A] w-screen h-screen gap-20  flex justify-center items-center relative">
            <img src={bg} className='absolute top-4 object-cover left-0' alt="" />
                        <img src={bg} className='absolute top-4 object-cover right-0' alt="" />
    
            <div className="left z-[100]  w-1/2 flex flex-col justify-center items-center">
                <h1 className='text-white text-5xl font-bold'>Hello, I'm <span className='text-[#FF4D4D]'>Saurabh Srivastav</span></h1>
                <p className='text-white text-lg text-center mt-4'>I am a passionate web developer with a knack for creating stunning and functional websites.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet cum quisquam a velit ad voluptatem id maiores autem ipsum vel, nam obcaecati ipsa deserunt voluptatum aperiam cumque nulla ullam minus unde commodi similique officia quidem totam magni? Laboriosam, aliquam eveniet!
                </p>
                <div className='flex gap-2'>
                    <button className='mt-6 px-6 py-2 bg-[#FF4D4D] text-white rounded-lg hover:bg-[#FF1A1A] transition duration-300'>LinkedIn</button>
                  <button className='mt-6 px-6 py-2 bg-[#FF4D4D] text-white rounded-lg hover:bg-[#FF1A1A] transition duration-300'>Github</button>
                    <button className='mt-6 px-6 py-2 bg-[#FF4D4D] text-white rounded-lg hover:bg-[#FF1A1A] transition duration-300'>Facebook</button>
               
                </div>
                
            </div>
              <div className="right mt-10 mb-20 z-50">
                <img src={ss} className='h-[500px] w-[500px] object-cover rounded-full' alt="" />
           
            </div>

        </div>
    )
}

export default Home
