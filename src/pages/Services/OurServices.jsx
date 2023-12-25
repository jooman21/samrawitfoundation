import React from 'react'
import Services from '../../components/Services/Services'
import ServicesHeader from '../../components/Services/ServicesHeader'
import './OurServices.css'
import Header from '../../components/header/Header'
const OurServices = () => {
  return (
    <>
    <div className="ServicesHeaderback">
      <Header/>
        <ServicesHeader />
    </div>

    <div>
        <Services />
    </div>


</>
  )
}

export default OurServices