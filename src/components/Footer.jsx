import React from 'react';
import facebookImg from '/Images/facebook.png'
import instagramImg from '/Images/instagram.png'
import twitterImg from '/Images/twitter.png'
import emailImg from '/Images/email.png'
import phoneImg from '/Images/phone.png'

const Footer = () => {
  return (
    <>
    <div className='mt-5 min-[420px]:flex justify-between bg-[#002B46]'>
     {/* footer part-1 */}
        
        <div className='pt-5 pl-5 sm:pl-10' >
        <p className='text-xl sm:text-2xl text-orange-500 font-semibold'> Web<span className='italic ml-1 text-white'>Tech</span>  Solutions</p>
        <p className='mt-2 text-[0.7rem] sm:text-sm text-white'>Address: New Ashok Nagar</p>
        <p className='text-[0.7rem] sm:text-sm text-white'>New Delhi-110073, India</p>
        

        <div className=' flex gap-1 sm:gap-5 sm:my-5 mt-3'>
         <div className='sm:h-7 sm:w-7 h-4 w-4 border rounded-full flex justify-center items-center'>
         <img src={facebookImg} className='sm:w-[20%] w-[15%] sm:h-[0.8rem] h-[0.5rem] '></img>
         </div>
         <div className='sm:h-7 sm:w-7 h-4 w-4 border rounded-full flex justify-center items-center'>
         <img src={instagramImg} className='sm:w-[40%] w-[30%] sm:h-[0.9rem] h-[0.5rem]'></img>
         </div>
         <div className='sm:h-7 sm:w-7 h-4 w-4 border rounded-full flex justify-center items-center'>
         <img src={twitterImg} className='sm:w-[40%] w-[30%] sm:h-[0.9rem] h-[0.5rem]'></img>
         </div>
     </div>
     </div>
       
       <div className='w-[60%] sm:w-[50%] min-[420px]:flex justify-between pl-5'>
       {/* footer part-2 */}
        <div className='pt-5 sm:pt-10'>
            <p className='text-white text-sm sm:text-lg '>Our Specialisation</p>
            <li className='mt-2 text-white text-[0.7rem] sm:text-sm'>Website Development</li>
            <li className='text-white text-[0.7rem] sm:text-sm'>Admin Panel Solutions</li>
            <li className='text-white text-[0.7rem] sm:text-sm'>School ERP Software</li>
        </div>

        {/* footer part-3 */}
        <div className='pt-5 sm:pt-10'>
            <p className='text-white text-sm sm:text-lg '>Help</p>
            <p className='mt-2 text-white text-[0.7rem] sm:text-sm'>Contact Us</p>
            <p className='text-white text-[0.7rem] sm:text-sm'>FAQ</p>
            
        </div>


      {/* footer part-5 */}
    <div className='pt-5 pb-1 sm:pt-10 sm:pb-0 pr-10 '>
     <div className='flex flex-row items-center  sm:gap-4 gap-2'>
     <img src={emailImg} className='sm:w-[12%] w-[9%] sm:h-[0.8rem] h-[0.5rem]'></img>
     <p className='text-white sm:text-xs text-[0.7rem] '>webtechsolutions95@gmail.com</p>
     </div>

    <div className='flex flex-row items-center sm:gap-4 gap-2 sm:mt-2'>
     <img src={phoneImg} className='sm:w-[12%] w-[9%] sm:h-[0.8rem] h-[0.5rem]'></img>
     <p className='text-white sm:text-xs text-[0.7rem] '>8800830327</p>
    </div>
    </div>
    
    </div>

    
    
    </div>
    <p className='border-t-[1px] py-1 border-white flex justify-center text-[8px] sm:text-sm text-gray-400 bg-[#002B46]'>Copyright &copy; 2024 | Web <span className='italic px-1'>Tech</span>  Solutions | Powered by :Synthologic Innovations Pvt. Ltd</p>
    </>
  )
}

export default Footer