import React,{ useEffect } from 'react';
import Img1 from '/Images/main.jpg';

import Img3 from '/Images/p2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OurProducts = () => {
     
  useEffect(()=>{
    Aos.init({ duration: 1000 });
  },[])


  return (
    <>
      <img src={Img1} className='w-full h-[70vh] sm:h-[85vh]'  />
      <p className='mt-5 sm:mt-10 flex justify-center text-2xl sm:text-4xl font-Rubik'>Our Products</p>

      <div  className='w-full mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 px-2 sm:px-4'>
        <img data-aos ='fade-down-right' src={Img1} className='w-[100%] h-auto sm:h-52 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'  />
        <img data-aos ='fade-down-right' src={Img1} className='w-[100%] h-auto sm:h-52 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'  />
        <img data-aos ='fade-down-left' src={Img1} className='w-[100%] h-auto sm:h-52 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'  />
        <img data-aos ='fade-down-left' src={Img1} className='w-[100%] h-auto sm:h-52 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'  />

        <img data-aos ='fade-up-right' src={Img3} className='w-[100%] h-auto sm:h-52 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'  />
        <img data-aos ='fade-up-right' src={Img3} className='w-[100%] h-auto sm:h-52 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'  />
        <img data-aos ='fade-up-left' src={Img3} className='w-[100%] h-auto sm:h-52 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'  />
        <img data-aos ='fade-up-left' src={Img3} className='w-[100%] h-auto sm:h-52 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'  />
      </div>
    </>
  )
}

export default OurProducts