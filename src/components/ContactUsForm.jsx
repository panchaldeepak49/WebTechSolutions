import React,{ useState,useRef } from 'react'
import InputField from './Global/InputField';
import emailjs from '@emailjs/browser';


const ContactUsForm = ({setIsContactUs}) => {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[mobile,setMobile] = useState("");
    const[query,setQuery] = useState("");

    const form = useRef();
    // const viren = process.env.REACT_APP_SERVICE_ID 
    // console.log(viren);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
            publicKey: process.env.REACT_APP_PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setIsContactUs(false);
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


  return (
    <>
       <div className='fixed z-50 flex justify-center left-16 sm:inset-0 top-20 '>
        
        {/* <div className="bg-gradient-to-r from-blue-400 to-orange-400   sm:w-full sm:h-[97%]  px-5 md:w-[30%] py-5 CustomShadowColored rounded-md md:rounded-[15px]  mt-2"> */}
        <div className="bg-gradient-to-r from-blue-400 to-orange-400   sm:w-full sm:h-[80%]  px-5 md:w-[25%] py-5 CustomShadowColored rounded-md md:rounded-[15px]  mt-2">  
              <h3
                onClick={() =>setIsContactUs(false)}
                className="text-3xl text-end items-end justify-end flex font-semibold   cursor-pointer"
              >
                x
              </h3>
          
            <h3 className="md:text-[22px] text-[20px] text-center md:text-left mb-5 md:mb-0">
              Let’s Get to know you
            </h3>
    
            <form ref={form} className="flex flex-col gap-5 mt-3" onSubmit={sendEmail} >
              <InputField
                placeholder={"Full Name"}
                type={"text"}
                value={name}
                name ="from_name"
                onChange={(e)=>setName(e.target.value)}
              />
              <InputField
                placeholder={"Email"}
                type={"email"}
                value={email}
                name ="from_email"
                onChange={(e)=>setEmail(e.target.value)}
              />
    
              <InputField
                placeholder={"Mobile Number"}
                type={"number"}
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)}
                className={" "}
              />
    
              
              <textarea
                name="message"
                id=""
                cols="10"
                rows="4"
                placeholder="Query"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                className={` CustomShadow placeholder:text-[#515151] text-xs sm:text-[1rem] border-[1px] border-[#bfcbd3] w-full h-[7rem]  outline-none p-4 rounded-lg  `}
                ></textarea>
    
             
              <div className='flex justify-center'>
              <button type="submit" className='py-1 px-6 border-[1px] hover:border-green-600 bg-[#17cf97] hover:bg-orange-400 text-black sm:text-lg  rounded-md ttransition-all duration-300 ease-in-out'
              >Submit</button>
              </div>

            </form>
          </div>
          </div>
    </>
  )
}

export default ContactUsForm