import React, { useState , useEffect} from 'react';
import bg from "./images/bg.svg";
import ss from "./images/ss.jpg";
import Loader from '../Loader/Loader';
import { motion } from 'framer-motion';
import lin from "./images/lin.png";
import git from "./images/git.png";
import face from "./images/face.png";
import inst from "./images/inst.png";


function Home() {

    const[move, setMove] = useState(false);
   const[loading, setLoading] = useState(true);
 
     useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

    return (
        <>
             
            <div className="bg-[#1A1A1A] w-screen h-screen gap-20 flex justify-center items-center ">
                 
                <img src={bg} className='absolute top-4 object-cover left-0' alt="" />
                <img src={bg} className='absolute top-4 object-cover right-0' alt="" />
               
               
                <div className="left hidden md:block z-[100] w-1/2">
                    <h1 className='text-white text-5xl font-bold'>
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

                <div className="right hidden md:block  mt-10 mb-20 w-1/2 z-50">
                    <img src={ss} className='h-[500px] w-[500px] object-cover rounded-full ' alt="" />
                </div>
                 


                {/* {Responsive Section} */}
                <div className='md:hidden '>
                <div className='flex flex-col md:hidden justify-center items-center  '>
                  <div className="right md:hidden  mb-20 p-3 z-50  "> 
                    <motion.img 
                      whileInView={{ scale: [0, 1]}}
                        transition={{ duration: 2, ease: 'easeInOut' }} 
                       
                     img src={ss} className='h-[70vw] w-[70vw] object-cover rounded-[100%] border-red border-3 shadow-red-500 shadow-xl' alt="" />
                </div>
                  <div className=" left md:hidden z-[100] p-2 flex flex-col cursor-pointer ">
                    <motion.h1
                        
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1.5, ease: 'easeIn' }}
                          
                         
                        className={`text-white text-3xl flex relative justify-center  font-bold '}`}>
                        Hello, I'm <span className='text-[#c25959] '><br />Saurabh Srivastav</span>
                    </motion.h1>
                     <p className='text-white text-lg text-center mt-9 '>
                       I'm  passionate and curious developer actively exploring full-stack development Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam asperiores accusamus perspici.
                    </p>
                   </div>
                    <div className='flex grid grid-cols-4 animate-pulse w-[90%]'>
                     <a href="https://www.linkedin.com/in/saurabh-srivastav-ab7712285/"><img src={lin} className='mt-6 px-6 py-2 ' /></a>
                        <a href="https://github.com/Saurabh12325"><img src={git} className='mt-6 px-6 py-2 ' alt="GitHub" /></a>
                         <a href="https://www.facebook.com/profile.php?id=100009390527895"><img src={face} className='mt-6 px-6 py-2  ' alt="GitHub" /></a>
                        <a href="https://www.instagram.com/its_saurabh_srivastav55?igsh=MWpsdm9yMjF5ZDE1OA=="><img src={inst} className='mt-6 px-6 py-2  ' alt="Instagram" /></a>
                        
                    </div>
                </div>
            </div>
          </div>
          
        </>
    );
}

export default Home;  