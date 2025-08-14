import React, { useState } from "react";
import { Client } from "./Client";
import coding from "../assets/coding.png";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export const SideBar = ({ user }) => {
  const roomId = useParams();
  const handleClick = () =>{
       navigator.clipboard.writeText(roomId.roomId).then(()=>{
        toast.success(`RoomId get Copied`)
       })
       .catch((e)=>{
         toast.error("RoomId not Copied")
      })
  }
  return (
    <div className="w-[13%] h-[100vh] bg-black">
      <div className="py-2 h-[10%] border-b-3 border-b-gray-600   flex items-center justify-center space-x-4">
        <img src={coding} className="h-[3.5rem]"></img>
        <p className="text-2xl text-white hidden xl:block">codexHub</p>
      </div>

      <div className="py-2 h-[78%] ">
        <p className="text-white text-xl font-bold py-4 px-2">Connected</p>
        <div
          className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 overflow-y-auto"
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE/Edge */,
          }}
        >
          <style>
            {`
      div::-webkit-scrollbar {
        display: none;
      }
    `}
          </style>
          {user.map((user) => (
            <Client key={user.socketId} username={user.userName} />
          ))}
        </div>
      </div>

      <div className="flex flex-col h-[12%]   items-center justify-evenly">
        <button className="p-2 bg-white font-bold w-[90%] rounded-l"
         onClick={handleClick}
        >
          Copy ROOM ID
        </button>
        <button className="p-2 bg-red-500 text-white font-bold  w-[90%] rounded-l">
          Leave
        </button>
      </div>
    </div>
  );
};
