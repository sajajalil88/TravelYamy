import React from "react";
import Hero from   './components/Hero/Hero' ;
import Destinations from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import ImgCarousel from './components/carousel/ImgCarousel';
import Selects from "./components/selects/Selects";


function Home() {
  return (
    <div>
    
      <Hero />
      <Destinations />
      <Search />
      <Selects/>
      <ImgCarousel />

      
    </div>
  );
}

export default Home;
