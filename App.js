import React from "react";
import Navbar from './components/Navbar/Navbar';
import Hero from   './components/Hero/Hero' ;
import Destinations from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import ImgCarousel from './components/carousel/ImgCarousel';
import Selects from "./components/selects/Selects";
import Footer from './components/Footer/Footer';
import Experiences from './components/Experiences/Experiences'
import Avatar  from "./components/Avatar/Avatar";
import Contact from './components/Contact/Contact';

import {BrowserRouter as Router ,Route , Routes } from 'react-router-dom';


function App() {
  return (
    <div>
    
    <Router>
        <Navbar />
        <Routes>
        <Route path="/book" element={ <book/> } />
      
        </Routes>
      </Router>

     
      <Hero />
      <Destinations />
      <Search />
      <Selects/>
      <ImgCarousel />
      <Experiences />
      <Avatar />
      <Contact />

      <Footer /> 
      
    </div>
  );
}

export default App;
