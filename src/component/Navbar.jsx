import React from 'react'
import '../style/navbar/Navbar.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { Link } from 'react-router-dom';



export default function navbar() {
  return (
    <div className='NavbarCon bg-[#24101F] h-11 flex pl-10 pr-10'>

<div className='pack1 ml-10 space-x-2'>

<div className='icon1 flex justify-center items-center space-x-1  border-l border-r border-opacity-5 pl-2 pr-2  '>
        <div className=''><FaPhoneAlt className='text-[#C59418]'/></div>
        <Link to='/antheor/er'>  <div className='text-white font-semibold'>Etre Rappelé</div> </Link>
      </div>

  
      <div className='icon2  flex justify-center items-center space-x-1  border-r border-opacity-5  pr-2  ' >
      <div><FaCalendarAlt className='text-[#C59418]'/></div>
      <Link to='/antheor/rv'> <div className='text-white font-semibold'>Prendre RDV</div> </Link>
      </div> 
</div>
     


      <div className='pack2 mr-10 space-x-2'>
      <div  className='icon3 flex justify-center items-center space-x-1  border-l border-r border-opacity-5 pl-2 pr-2'>
              <div><FaTelegramPlane className='text-[#C59418]'/></div>
              <Link to='/antheor/fo'> <div className='text-white font-semibold'>Formulaire de Contact</div> </Link>
            </div>
            <div  className='icon4 flex justify-center items-center space-x-1  border-r border-opacity-5  pr-2'>
              <div><IoIosChatbubbles className='text-[#C59418]'/></div>
              <Link to='/antheor/co'>  <div className='text-white font-semibold'>chat En ligne</div> </Link>
            </div>  
      </div>
            
    </div>
  )
}
