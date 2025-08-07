import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import coding from "../assets/coding.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const submitData = async (e) => {
      e.preventDefault();
      
      try{
          setError("");

          const res = await axios.post("http://localhost:5000/api/auth/login",{
            email,
            password
          })

          if(res.status == 201){
            navigate("/room-gen")
          }
      }catch(err){
        console.error(err);
        setError("❌ Login failed. invalid password or email");
      }

  }
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center px-4">
      <div className="bg-zinc-900 rounded-xl p-8 w-full max-w-sm text-white shadow-xl">
        <div className="flex justify-center mb-6 ">
          {/* Logo box or 3D cube alternative */}
          <img src={coding} className='h-[4rem]'></img>
        </div>
        <h2 className="text-center text-2xl font-semibold mb-6">Sign in</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
            />

          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-medium py-2 rounded-md hover:bg-gray-100"
            onClick={submitData}
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400 hover:underline cursor-pointer" onClick={()=>{
          navigate("/")
        }}>
          &larr; Go back to Home
        </div>
      </div>

 
    </div>
  );
};

export default Login;
