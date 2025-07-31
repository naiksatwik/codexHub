import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from './landing/LandingPage';
import  Login  from './Auth/Login';
import  Register  from './Auth/Register';

const App = () => {
  return (
   <>
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
   </>
  )
}


export default App;