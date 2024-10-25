import React from 'react'
import SliderImages from '../components/SliderImages1/SliderImages1'
import OurTeam from '../components/HomeComponents/OurTeam'
import WhyChooseUs from '../components/HomeComponents/WhyChooseUs'
import OurProducts from '../components/HomeComponents/OurProducts'
import GoogleMap from '../components/HomeComponents/GoogleMap'

const Home = () => {
  return (
    <>
    <OurProducts />
    <WhyChooseUs />
    <SliderImages />
   
    <OurTeam />
    <GoogleMap />
    </>
  )
}

export default Home