import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SliderImages from './components/SliderImages/SliderImages';

import SliderImages1 from './components/SliderImages1/SliderImages1';
import Footer from './components/Footer';
import GeoLocation from './pages/GeoLocation';


function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      {/* <GeoLocation /> */}
      <Footer />
    </>
  )
}

export default App
