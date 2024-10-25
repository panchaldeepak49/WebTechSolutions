import React from 'react'

const GoogleMap = () => {

  return (
    <>
     <div className=' mt-10 flex justify-end overflow-hidden px-2'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5327422013074!2d77.30028037457572!3d28.70362088085061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbebbaaaaab1%3A0xb25ce7534cde65d9!2sB%20D%20Memorial%20Public%20School!5e0!3m2!1sen!2sin!4v1729320994083!5m2!1sen!2sin" 
     width="600" height="450" style={{border:0}}
      allowFullScreen Loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
    </>
  )
}

export default GoogleMap