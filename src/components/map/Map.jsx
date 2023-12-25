import React from 'react'
import "./Map.css"
function Map() {
  return (
    <div className='locationService'>
      <div className="home__contents">
        <h1 className='h1'>VENUE LOCATION</h1>
      </div>
      
      <div className="map-section">
       
       <div className="contact__cards">
          <i className="uil uil-location-pin-alt contact__card-icon map"></i>
          <h3 className="contact__card-title">Headquarter</h3>
          <br />
          <span className="contact__card-data">8°57'11.9"N 38°47'13.3"E</span>
          <br />
          <span className="contact__card-data">Bole Bulbula, St. Gebriel building 2nd floor</span>
          <span className="contact__card-data">Addis Ababa, Ethiopia</span>
        </div>

        <div className="gmap-frame">
          <iframe  title='Samrawit Foundation' className='iframe_map' src="https://maps.google.com/maps?width=520&amp;height=500&amp;hl=en&amp;q=Samrawit%20Foundation+(Samrawit%20Foundation)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Samrawit Foundation</a></iframe>
        </div> 

      </div> 

    </div>       
    
  )
}

export default Map