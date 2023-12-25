import React from 'react'
import './Us.css'
import AboutHeader from '../../components/About/AboutHeader'
import About from '../../components/About/About'
import Header from '../../components/header/Header'

function Us() {
  return (
    <>
    <div className="AboutHeaderback">
        <Header/>
        <AboutHeader />
    </div>

    <div>
        <About />
    </div>


</>
  )
}

export default Us