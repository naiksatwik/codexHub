import React, { useState } from "react";
import {CodeEditor }from "../Components/CodeEditor";
import { SideBar } from "../Components/SideBar";
import { EdiNav } from "../Components/EdiNav";
import useDisableZoom from "../Components/useDisableZoom";

const EditorPage = () => {

  useDisableZoom();
  
  const [code, setCode] = useState("");

  const [language, setLanguage] = useState("");

  const [output, setOutput] = useState("click run to code")

  const [input, setInput] = useState("");
  //
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
    <div className=" flex">
      <SideBar />

      <div className="w-full h-[100vh] ">
        <EdiNav language ={language} setLanguage ={setLanguage} code ={code} setOutput={setOutput}/>
        <CodeEditor language ={language}  code={code} setCode ={setCode} output={output} input={input} setInput={setInput} />
      </div>
    </div>
  );
};

export default EditorPage;
