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
      <div className="space-x-4">
        <Link
          to="/Login"
          className="bg-white text-gray-900 px-4 py-3 rounded-2xl hover:bg-gray-200 transition-all"
        >
          Sign In
        </Link>
        <Link
          to="/Register"
          className="bg-white text-gray-900 px-4 py-3 rounded-2xl hover:bg-gray-200 transition-all"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  )
}

export default NavbarLanding
