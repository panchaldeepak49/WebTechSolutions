import React,{ useEffect } from 'react';
import team from '/Images/team.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OurTeam = () => {

  useEffect(()=>{
    Aos.init({ duration: 1000 });
  },[])

  return (
    <>
    <p className='mt-5 flex justify-center text-2xl sm:text-3xl font-Rubik '>OUR<span className='text-green-600 px-2'>RESILIENT</span>  TEAM </p>

     <div className='mt-5 sm:mt-10 sm:flex w-[100%]'>
        <div data-aos ='flip-left' className=' sm:w-[50%] flex justify-center'>
            <img src={team} className='w-[87%] sm:w-[60%] rounded-lg'/>
        </div>
        <div data-aos ='fade-down' className=' sm:w-[50%] flex flex-col items-center'>    {/* bg-green-400 */}
        {/* <p className=' text-xl'>Meet Our Team </p> */}
            <p className=' mt-5  sm:w-[70%] text-base bg-gray-300 rounded-md p-4 mx-6'>Team at Web Tech starts everyday by believing in the quote "Best is yet to come",
                thus overachieving yesterday's mark to create new success story everyday.We thrive on collaboration,
                innovation and a shared committment to deliver high quality solutions. We focus on continuous learning 
                and improvements .We embrace challenges as opportunities to grow and excel.Together we work seamlessly
                to achieve our goals.</p>
            
        </div>
     </div>
    
    </>
  )
}

export default OurTeam