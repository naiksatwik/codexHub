import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center px-4">
      <div className="bg-zinc-900 rounded-xl p-8 w-full max-w-sm text-white shadow-xl">
        <div className="flex justify-center mb-6">
          {/* Logo box or 3D cube alternative */}
          <div className="w-6 h-6 bg-gray-300 rounded rotate-45" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-6">Create an account</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              name="full_name"
              placeholder="John Doe"
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              placeholder="Re-enter password"
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-medium py-2 rounded-md hover:bg-gray-100"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400 hover:underline cursor-pointer" onClick={()=>{
          navigate("/")
        }}>
          &larr; Go back to Home
        </div>
      </div>

      <footer className="text-xs text-gray-500 mt-10">
        Terms of Service and Privacy Policy
      </footer>
    </div>
  );
};

export default Register;
