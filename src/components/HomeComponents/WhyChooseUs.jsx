import React,{ useEffect } from 'react';
import Img3 from '/Images/p2.jpg';
import Img2 from '/Images/p1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const WhyChooseUs = () => {

  useEffect(()=>{
    Aos.init({ duration: 1000 });
  },[])

  return (
    <>
      <p className='mt-5 sm:mt-10 flex justify-center text-2xl sm:text-4xl font-Rubik '>Why choose us ?</p>
     
     <div  className='mt-5 sm:mt-10 px-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2'>
       <div className=' w-[100%] flex justify-center sm:justify-end items-center text-lg '>  {/* bg-red-400 */}
         <p data-aos ='fade-up-right' className='sm:w-[70%] text-base bg-blue-200 rounded-md p-4 '>
           We are working with Web Development since 2022.Over this time, we've successfully completed numerous projects,
           including robust admin panels, for a variety of clients.Now we want to reach around world's largest customers.
           Our expertise spans across different industries, allowing us to create tailored solutions that meet the unique 
           needs of each project.
           </p>
       </div>
       <div data-aos ='flip-right' className='flex justify-center'>
       <img src={Img2} className='sm:w-[50%]  sm:h-auto rounded-md'  />
       </div>
     </div>
    </>
  )
}

export default WhyChooseUs