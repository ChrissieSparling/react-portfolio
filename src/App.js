
import React, { useState, useEffect } from "react";
import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<About/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
