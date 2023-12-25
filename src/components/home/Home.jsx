import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
// import Founders from './Founders'
import ScrollDown from './ScrollDown'
function Home() {
  return (
   <section className=" home section" id="home">
    <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        
        <div className='donateSection'>
          <h2 className='donateSection_detail'>Empowering Hope, Joining Hands to Change Lives</h2>
          <button className='donate'>Donate</button>
        </div>
        
        <ScrollDown />
        
    </div>
   </section>
  )
}

export default Home