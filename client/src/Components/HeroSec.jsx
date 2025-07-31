import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
export const HeroSec = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-[100vh] bg-black text-white flex flex-col justify-center items-center px-6 text-center space-y-8 overflow-hidden">
      {/* Typing Animation */}
      <TypeAnimation
        sequence={[
          '🚀 Collaborate Smarter,',
          1000,
          '🚀 Build Faster',
          1000,
          '🚀 Launch Together',
          1000,
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        className="text-5xl md:text-8xl font-extrabold z-10"
      />

      <p className="text-xl md:text-4xl text-gray-300 max-w-2xl z-10">
        CHub empowers your team to ideate, code, and launch — all in one streamlined space.
      </p>

      <button className="z-10 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg transition duration-300" onClick={()=>{
          navigate("/Login")
        }}>
        Get Started for Free
      </button>

      {/* Floating Circle Animations */}
      <div className="absolute top-10 left-10 h-40 w-40 bg-amber-500 rounded-full animate-float1 z-0 "></div>
      <div className="absolute bottom-10 right-10 h-32 w-32 bg-green-500 rounded-full animate-float2 z-0 "></div>
      <div className="absolute top-20 right-1/4 h-24 w-24 bg-blue-500 rounded-full animate-float3 z-0 "></div>
      <div className="absolute bottom-24 left-1/4 h-28 w-28 bg-red-500 rounded-full animate-float4 z-0 "></div>
      <div className="absolute bottom-24 left-2/4 h-28 w-28 bg-pink-500 rounded-full animate-float4 z-0 "></div>


      {/* Custom animation keyframes */}
      <style>
        {`
          @keyframes float1 {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          .animate-float1 {
            animation: float1 6s ease-in-out infinite;
          }

          @keyframes float2 {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(15px) rotate(-8deg); }
          }
          .animate-float2 {
            animation: float2 5s ease-in-out infinite;
          }

          @keyframes float3 {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(20px); }
          }
          .animate-float3 {
            animation: float3 7s ease-in-out infinite;
          }

          @keyframes float4 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-15px, -15px); }
          }
          .animate-float4 {
            animation: float4 6.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};
