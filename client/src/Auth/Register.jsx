import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error message
  const [error, setError] = useState("");

  const submitData = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Simple validation
    if (password !== confirmPassword) {
      setError("❗ Passwords do not match.");
      return;
    }

    try {
  
      setError("");

      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
      });
      
      if (response.status === 201) {
        navigate("/home"); // Redirect on success
      }
    } catch (err) {
      console.error(err);
      setError("❌ Registration failed. User may already exist.");
    }
  };

  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center px-4">
      <div className="bg-zinc-900 rounded-xl p-8 w-full max-w-sm text-white shadow-xl">
        <div className="flex justify-center mb-6">
          <div className="w-6 h-6 bg-gray-300 rounded rotate-45" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-4">Create an account</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={submitData}>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-medium py-2 rounded-md hover:bg-gray-100"
          >
            Register
          </button>
        </form>

        <div
          className="mt-6 text-center text-sm text-gray-400 hover:underline cursor-pointer"
          onClick={() => navigate("/")}
        >
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
