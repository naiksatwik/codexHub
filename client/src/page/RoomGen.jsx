import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getValueAsType, motion } from "framer-motion"; // Optional: for animations
import coding from "../assets/coding.png";
import {v4 as uuidV4} from "uuid";
import toast from "react-hot-toast";

const RoomGen = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [id , setId] = useState("");
  const [userName , setUserName] =  useState("");

  const handleCreateRoom = async () => {
    setLoading(true);
    try {
        const roomId = uuidV4();
        setId(roomId);
        toast.success("Created New Room !")
      // navigate(`/code-editor/${roomId}`);
    } catch (err) {
      console.error("Error creating room", err);
      setLoading(false);
    }
  };
  

  const handleJoin = async() => {
    if(!id || !userName){
      toast.error("Room ID & username is required");
      return;
    }
      navigate(`/code-editor/${id}`,{
        state: {
          userName,
        },
      });
    
   
  }
  return (
    <>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-10 w-full max-w-md shadow-lg"
        >
          <div className="flex justify-center items-center mb-3">
            <img src={coding} className="h-[4rem] "></img>
            <span className="pl-3 text-2xl">codexHub</span>
          </div>

          <div className="flex flex-col h-[10rem] justify-evenly">
            <p className="font-bold text-gray-400">paste invitation ROOM ID</p>
            <input
              placeholder="ROOM ID"
              onChange={(e)=>{
                setId(e.target.value);
              }}
              value={id}
              className="bg-white font-bold text-black rounded-xl p-2 border-2 border-blue-500"
            ></input>
            <input
              placeholder="USERNAME"
              onChange={(e)=>{
                setUserName(e.target.value);
              }}

              value={userName}
              className="bg-white font-bold text-black rounded-xl p-2 border-2 border-blue-500"
            ></input>
          </div>

          <div className="flex space-x-2">
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
            onClick={handleJoin}
            >
              Join
            </button>

            <button
              onClick={handleCreateRoom}
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
            >
              {loading ? "Creating..." : "Create Room"}
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default RoomGen;
