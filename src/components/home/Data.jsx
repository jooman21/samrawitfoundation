import React from 'react'
import "./data.css"
import { Link } from "react-router-dom";


function Data() {
  return (
   <div className="home__data container grid ">
    <div className="home__description">
      
      <div className="home_detail dataComonenet ">
        <p>"Empowering hope is at the core of our mission, driving us to create positive change in the lives of individuals and communities. Through collaborative efforts and a shared commitment, we join hands to make a meaningful impact. Together, we strive to empower, inspire, and transform lives, fostering a brighter and more promising future for all."s</p>
      </div>    
    </div>
    
    <div className="get-in-touch">
      <Link to ="/contact"><button className="button" >Get In Touch</button></Link>
    </div>
   
    
   </div>
  )
}

export default Data