import React,{ useState } from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import {RxCross2} from "react-icons/rx";
import ContactUsForm from './ContactUsForm';

const Navbar = () => {

    const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
    const [isContactUs,setIsContactUs] = useState(false);

    function toggleMenu() {
        setIsMainMenuOpen(!isMainMenuOpen);
       }

  return (
    <>
      <div className='fixed z-50 w-full h-20 bg-[#002B46] flex justify-between items-center'>
        {/* <img src={''} className='md:h-19 sm:h-16 h-12 sm:ml-20 ml-5 cursor-pointer' 
        onClick={()=>navigate('/')}></img> */}
        <a href="" className='ml-5 sm:ml-10'>
        <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> 
        <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" 
        class="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" 
        class="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" 
        class="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" 
        class="ccustom" fill="#17CF97"></path> </svg> 
        </a>

        <nav>
        <span className='text-3xl max-[400px]:text-2xl sm:hidden block cursor-pointer ml-20 mr-4 mt-48' onClick={toggleMenu}>
        {isMainMenuOpen ? <RxCross2 className='text-white' /> : <AiOutlineMenu className='text-white'/>}
        </span>
        
        <ul className={` md:flex md:items-center md:justify-between relative  md:mr-0  z-50  md:static md:mt-0 bg-[#002B46] sm:mt-96  md:h-20 h-auto md:w-auto 
                    left-0 md:py-0 py-4 md:pl-0 sm:opacity-100 ${isMainMenuOpen ? 'opacity-100' : 'opacity-0'}  transition-all ease-in duration-500`}>
          
          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-medium text-white sm:text-lg text-xs hover:text-orange-500 transition-0.4s'>
              <a href='/' className=' transition-all duration-300 ease-in-out'>Home</a> 
          </li>
          
          {/* <DistributionAccordion  setIsMainMenuOpen={setIsMainMenuOpen} isProductMobileMenuOpen={isProductMobileMenuOpen} 
          setIsProductMobileMenuOpen={setIsProductMobileMenuOpen} setIsServiceMobileMenuOpen={setIsServiceMobileMenuOpen}
          setIsGetMobileMenuOpen={setIsGetMobileMenuOpen} />

          <RetailAccordion  setIsMainMenuOpen={setIsMainMenuOpen} isServiceMobileMenuOpen={isServiceMobileMenuOpen}
          setIsServiceMobileMenuOpen={setIsServiceMobileMenuOpen} setIsGetMobileMenuOpen={setIsGetMobileMenuOpen}/> */}
          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-medium text-white sm:text-lg text-xs hover:text-orange-500'>
              <a href='#' className='border-b-2 border-[#002B46] hover:border-b-2 hover:border-[#17cf97] transition-all duration-300 ease-in-out'>About</a> 
          </li>

          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-medium text-white sm:text-lg text-xs hover:text-orange-500'>
              <a href='#' className='border-b-2 border-[#002B46] hover:border-b-2 hover:border-[#17cf97] transition-all duration-300 ease-in-out'>Menu</a> 
          </li>

          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-medium text-white sm:text-lg text-xs hover:text-orange-500'>
              <a href='#' className='border-b-2 border-[#002B46] hover:border-b-2 hover:border-[#17cf97] transition-all duration-300 ease-in-out'>Blog</a> 
          </li>

          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-medium text-white sm:text-lg text-xs hover:text-[#17cf97]'>
              {/* <a href='#' className='relative border-b-2 border-transparent hover:border-b-2-[50%] hover:border-[#17cf97] transition-all duration-300 ease-in-out after:content-[""] hover:after:w-1/2 after:absolute'>Contact Us</a>  */}
              <a href='#' className='relative transition-all duration-300 ease-in-out after:content-[""] after:absolute after:bottom-0 after:left-0  after:border-b-2 after:border-[#002B46] hover:after:w-1/2 hover:after:border-[#17cf97]'
                onClick={()=>setIsContactUs(!isContactUs)}>Contact Us</a> 
          </li>

          
        </ul> 
        
       </nav>
       
      
      </div>   

      { isContactUs && <ContactUsForm setIsContactUs={setIsContactUs} />}
    </>
  )
}

export default Navbar