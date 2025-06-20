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

  const text =  "I'm Passionate and curious JAVA full-stack developer with a love for building interactive web experiences, Skilled in React, Spring Boot, MongoDB, REST APIs, and aspiring DevOps engineer.Constantly learning, improving, and exploring new technologies and cloud tools";
const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(prev => prev + text[i]);
      i++;
      if (i === text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);


   const[loading, setLoading] = useState(true);
 
     useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

    return (
        <>
             
            <div className="bg-[#1A1A1A] min-[763px]:hidden w-screen h-screen gap-20 flex justify-center items-center ">
                  
                 <img src={bg} className='min-[763px]:hidden absolute top-4 object-cover left-0 ' alt="" />
                 <img src={bg} className='min-[763px]:hidden absolute top-4 object-cover right-0 ' alt="" />

                {/* {Responsive Section} */}
                <div className='md:hidden '>
                <div className='flex flex-col md:hidden justify-center items-center  '>
                  <div className="right  mb-20 p-3 z-50 md:hidden  "> 
                    <motion.img 
                      whileInView={{ scale: [0, 1]}}
                        transition={{ duration: 2, ease: 'easeInOut' }} 
                       
                     img src={ss} className='h-[70vw] w-[70vw] object-cover rounded-[100%] border-red border-3 shadow-red-500 shadow-xl' alt="" />
                </div>
                  <div className=" left md:hidden z-[100] p-2 flex flex-col cursor-pointer ">
                    <motion.h1
                        
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1.5, ease: 'easeIn' }}
                          
                         
                        className={`text-white text-3xl flex relative justify-center font-bold '}`}>
                        Hello, I'm <span className='text-[#c25959] max-[403px]:absolute '><br />Saurabh Srivastav</span>
                    </motion.h1>
                     <motion.p
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ duration: 1 }}
                     
                     className='text-white text-lg text-center mt-9 '>
                       {displayedText}
                         <span className="animate-pulse">|</span>
                    </motion.p>
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

          {/* Laptop section */}
          <div className="bg-[#1A1A1A] max-[763px]:hidden  w-screen h-screen gap-20 flex justify-center items-center m ">
                 
                <img src={bg} className='  absolute top-4 object-cover left-0  w-[70%]' alt="" />
                <img src={bg} className='  absolute top-4 object-cover right-0  w-[70%]' alt="" />
            <div className='left max-md:hidden z-[100] flex flex-col justify-center items-center w-1/2'>
                
                    <div className=" left md:hidden z-[100] p-2 flex flex-col cursor-pointer ">
                    <motion.h1
                        
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1.5, ease: 'easeIn' }}
                          
                         
                        className={`text-white text-3xl flex relative justify-center font-bold '}`}>
                        Hello, I'm <span className='text-[#cb5151] text-5xl max-[403px]:absolute '><br />Saurabh Srivastav</span>
                    </motion.h1>
                    <motion.p
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ duration: 1 }}
                     
                     className='text-white text-lg text-center mt-9 '>
                       {displayedText}
                         <span className="animate-pulse">|</span>
                    </motion.p>
                   </div>
                    <div className='flex grid grid-cols-4 animate-bounce w-[60%]'>
                     <a href="https://www.linkedin.com/in/saurabh-srivastav-ab7712285/"><img src={lin} className='mt-6 px-6 py-2 ' /></a>
                        <a href="https://github.com/Saurabh12325"><img src={git} className='mt-6 px-6 py-2 ' alt="GitHub" /></a>
                         <a href="https://www.facebook.com/profile.php?id=100009390527895"><img src={face} className='mt-6 px-6 py-2  'alt="GitHub" /></a>
                        <a href="https://www.instagram.com/its_saurabh_srivastav55?igsh=MWpsdm9yMjF5ZDE1OA=="><img src={inst} className='mt-6 px-6 py-2  ' alt="Instagram" /></a>
                    </div>
</div>

                <div className="right max-md:hidden flex justify-center  mt-10 mb-20 w-1/2 z-50">
                <motion.img
                         whileInView={{ scale: [0, 0.90,]}}
                        transition={{ duration: 2, ease: 'easeInOut' }} 
                       src={ss} className={`h-[500px] w-[500px] object-cover rounded-full border-red border-3 shadow-red-500 shadow-xl `} alt="" />
                
              </div> 
            </div>
        </>
    );
}

export default Home;  