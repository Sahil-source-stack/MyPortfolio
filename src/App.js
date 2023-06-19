import React from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<Error/>} />
        <Route exact render={() => <Navigate to="/" />} />
    </Routes>
    </>
  );
}

export default App;