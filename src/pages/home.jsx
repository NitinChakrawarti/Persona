import React from 'react'
import Main_home from '../components/hero';
import Aboutfibo from '../components/aboutfibo';
import Benefits from '../components/benefits';
import Activities from '../components/activities';

const Home = () => {
  return (
    <>
      <Main_home />
      <Aboutfibo />
      <Benefits />
      <Activities />
      <div className="h-[400px] bg-white"></div>
    </>

  )
}

export default Home


