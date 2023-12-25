import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className='services_section container' id='services'>
        <div className="home__contents">
            <h1 className='h1'>WHAT WE DO</h1>
        </div>

        <div className="services_section_one">
            <div className="service_description_one">
                <h4 className="service_description_one_h4">Facilitate destitute, excluded and vulnerable children, mothers and elder people in Ethiopia to have the opportunity to improve their lives and become productive citizens who contribute a positive change in their communities.</h4>
                
                <h4 className="service_description_one_h4 paragraphtwo">Fostering individual and institutional participation in philanthropy activities in protecting and advancing the worth and rights of children, mothers, and elder people.</h4>
            </div>

            <div className="services_img_one ">
                <img src={process.env.PUBLIC_URL +"/assets/services/service1.png"} alt="service1" />
            </div>
        </div>

        <div className="services_section_two">
            
            <div className="services_img_two">
                <img src={process.env.PUBLIC_URL +"/assets/services/service2.jpg"} alt="service2" />
            </div>
            
            <div className="service_description_two">
                <h4 className="service_description_two_h4">‘’Every person should have the right to basic needs, so that children, mothers, and elder people may have dignified, healthy, and secure lives.’’</h4>
            </div>
        </div>

        <div className="services_section_three">
            <div className="service_description_three">
                <h4 className="service_description_three_h4">Facilitate destitute, excluded and vulnerable children, mothers and elder people in Ethiopia to have the opportunity to improve their lives and become productive citizens who contribute a positive change in their communities.</h4>
                
                <h4 className="service_description_three_h4">Fostering individual and institutional participation in philanthropy activities in protecting and advancing the worth and rights of children, mothers, and elder people.</h4>
            </div>

            <div className="services_img_three">
                <img src={process.env.PUBLIC_URL +"/assets/services/service3.png"} alt="service3" />
            </div>
        </div>
    


    </div>
  )
}

export default Services