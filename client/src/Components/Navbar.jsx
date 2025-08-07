import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar= () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // TODO: Clear session/token logic here
    navigate("/Login");
  };

  return (
    <nav className="text-white px-6 py-4 flex justify-between items-center shadow-md bg-black z-50 relative">
      {/* Left: Logo */}
      <div className="text-2xl font-bold tracking-wide text-cyan-400">
        CHub
      </div>

      {/* Right: Profile Dropdown */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-white text-gray-900 px-4 py-3 rounded-2xl hover:bg-gray-200 transition-all"
        >
          Profile ⬇
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg animate-fade-in z-50">
            <Link
              to="/about"
              className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg transition-all"
            >
              About Us
            </Link>
            <Link
              to="/feedback"
              className="block px-4 py-2 hover:bg-gray-100 transition-all"
            >
              Feedback
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-all"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
