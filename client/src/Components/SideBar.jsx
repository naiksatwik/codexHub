import React, { useState } from 'react'
import { Client } from './Client';
import coding from "../assets/coding.png";

export const SideBar = () => {
      const [user, setUser] = useState([
          { socketId: 1, username: "Satwik Naik" },
          { socketId: 2, username: "Sujan Naik" },
          { socketId: 3, username: "Aryan Kumar" },
          { socketId: 4, username: "Siddharth Verma" },
          { socketId: 5, username: "Raju Patel" },
          { socketId: 6, username: "Sohan Naik" },
          { socketId: 7, username: "Priya Sharma" },
          { socketId: 8, username: "Vikram Singh" },
          { socketId: 9, username: "Neha Mehta" },
          { socketId: 10, username: "Karan Gupta" },
          { socketId: 11, username: "Anjali Desai" },
          { socketId: 12, username: "Ravi Kumar" },
          { socketId: 13, username: "Meera Joshi" },
          { socketId: 14, username: "Aditya Nair" },
          { socketId: 15, username: "Sneha Iyer" },
          { socketId: 16, username: "Amit Bansal" },
          { socketId: 17, username: "Divya Menon" },
          { socketId: 18, username: "Rohit Chauhan" },
          { socketId: 19, username: "Pooja Reddy" },
          { socketId: 20, username: "Manoj Das" },
          { socketId: 21, username: "Nisha Pillai" },
          { socketId: 22, username: "Harsh Malhotra" },
          { socketId: 23, username: "Tanya Kapoor" },
          { socketId: 24, username: "Varun Saxena" },
          { socketId: 25, username: "Rajesh Yadav" },
          { socketId: 26, username: "Deepika Shetty" },
          { socketId: 27, username: "Gaurav Sinha" },
          { socketId: 28, username: "Simran Kaur" },
          { socketId: 29, username: "Vivek Pandey" },
          { socketId: 30, username: "Ankur Jain" },
        ]);
  return (
      <div className="w-[13%] h-[100vh] bg-black">
      <div className="py-2 h-[10%] border-b-3 border-b-gray-600   flex items-center justify-center space-x-4">
        <img src={coding} className="h-[3.5rem]"></img>
        <p className="text-2xl text-white hidden xl:block">codexHub</p>
      </div>

      <div className="py-2 h-[78%] ">
        <p className="text-white text-xl font-bold py-4 px-2">Connected</p>
        <div
          className="justify-evenly items-center grid lg:grid-cols-2 sm:grid-cols-1 
              h-[90%] overflow-y-auto"
              style={{
            scrollbarWidth: "none",   /* Firefox */
            msOverflowStyle: "none"   /* IE/Edge */
          }}
        >
          {/* Hide scrollbar for Chrome/Safari/Edge */}
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {user.map((user) => {
            return <Client key={user.socketId} username={user.username} />;
          })}
        </div>
      </div>

      <div className="flex flex-col h-[12%]   items-center justify-evenly">
        <button className="p-2 bg-white font-bold w-[90%] rounded-l">
          Copy ROOM ID
        </button>
        <button className="p-2 bg-red-500 text-white font-bold  w-[90%] rounded-l">
          Leave
        </button>
      </div>
    </div>
  )
}
