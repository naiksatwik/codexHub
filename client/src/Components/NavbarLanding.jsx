import React from 'react'
import { Link } from 'react-router-dom'
import coding from "../assets/coding.png";

const NavbarLanding =() =>{
  return (
    <nav className=" text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left: Logo */}
      
      <div className='flex justify-center items-center space-x-1.5'>
        <img src={coding} className='h-[2.5rem]'></img>
        <p className='font-bold text-2xl'>codexHub</p>
      </div>
      

      {/* Right: Navigation Buttons */}
      
    </nav>
  )
}

export default NavbarLanding
