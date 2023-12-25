import React from 'react'
import './ContactUs.css'
import Header from '../../components/header/Header';
import ContactUsHeader from '../../components/contact/ContactUsHeader'
import Contact from '../../components/contact/Contact'
import Map from '../../components/map/Map'


const ContactUs = () => {
  return (
    <>
        <div className="ContactUsHeaderback">
         <Header />
           
            <ContactUsHeader />
        </div>

        <div className='ContactUsBody'>
            <Contact />
            <Map />
        </div>
    
    
    </>
  )
}

export default ContactUs