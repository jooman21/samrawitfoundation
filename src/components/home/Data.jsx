import React from 'react'
import "./data.css"
// import { Link,} from "react-router-dom";
function Data() {
  return (
   <div className="home__data">
    <div className="home__description">
      
      <div className ="rotate-container">
        <img src={process.env.PUBLIC_URL +"/assets/logo/cropped-cropped-Samrawit-Foundation2-32x32.png"} alt="home-img" className ="rotate-image" />
      </div>

      <div className="home_detail">
        <p>"Empowering hope is at the core of our mission, driving us to create positive change in the lives of individuals and communities. Through collaborative efforts and a shared commitment, we join hands to make a meaningful impact. Together, we strive to empower, inspire, and transform lives, fostering a brighter and more promising future for all."s</p>
      </div>    
    </div>
   

    <a href="#contact"><button className="button" >Get In Touch
      
      </button></a>
   </div>
  )
}

export default Data