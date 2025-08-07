import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from './landing/LandingPage';
import  Login  from './Auth/Login';
import  Register  from './Auth/Register';
import Home from './page/Home';
import EditorPage from './page/EditorPage';
import RoomGen from './page/RoomGen';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
   <>
   <div>
    <Toaster position='top-right' toastOptions={{
      success:{
        theme:{
          primary: "#4aed88"
        }
      }
    }}></Toaster>
   </div>
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path='/code-editor/:roomId' element={<EditorPage/>}/>
      <Route path='/room-gen'  element={<RoomGen/>}/>
      </Routes>
    </Router>
   </>
  )
}



export default App;