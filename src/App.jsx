import React from 'react'
import './App.css' 
import {  BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Contact from './pages/Contact'
import About from './pages/About'
import EandE from './pages/EandE'
function App() {
 

  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='/contact-me' element={<Contact/>} /> 
    <Route path='/about-me' element={<About/>} /> 
    <Route path='/education-and-experience' element={<EandE/>} /> 
    </Routes>
    </Router>  
        
    </>
  )
}

export default App
