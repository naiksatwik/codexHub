import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLanding =() =>{
  return (
    <nav className=" text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left: Logo */}
      <div className="text-2xl font-bold tracking-wide">
        CHub
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
