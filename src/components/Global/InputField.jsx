import React from 'react'

const InputField = ({ type, placeholder, onChange , className ,name}) => {
  return (
    <>
    <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className= {` CustomShadowLight placeholder:text-[#515151] text-xs sm:text-[1rem] w-full border-[1px] border-[#bfcbd3] h-[30px]  sm:h-[44px] outline-none pl-4 rounded-lg  ${className} `}
        name = {name}
      />
    </>
  )
}

export default InputField