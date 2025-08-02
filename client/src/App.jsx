import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from './landing/LandingPage';
import  Login  from './Auth/Login';
import  Register  from './Auth/Register';
import Home from './page/Home';
const App = () => {
  return (
   <>
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
   </>
  )
}


export default App;