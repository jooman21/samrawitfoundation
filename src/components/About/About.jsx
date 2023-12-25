import React from 'react'
import './About.css'
import OtherSources from './OtherSources'

const About = () => {
  let slideIndex = 0;
  function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.style.transform = `translateX(-${slideIndex * 100}%)`);
  }


  return (
    <div className='About_section container' id='about'>
      <div className="About__contents">
        <h1 className='about_title'>About Us</h1>
      </div>
      
      <div className="about_section_one container">
        <OtherSources />
      </div>
      
      <div className="about_section_two container">

        <div className="about_section_Description ">

          <div className='AboutUs'>
            <h4  className='AboutUs__Title'>who we are</h4>
            <h5 className='AboutUs_txt'>The Foundation was founded to share what we have with the humanitarian charity work it is currently undertaking, with the principle of our organization: "I will not wait for you to spare me to help those in need." Accordingly, we have been helping more than 75 children and the elderly in various forms over the past seven months since the organization was founded and completed the legal system to start operations. The children and elderly who are being helped by our organization have deep family poverty and abuse, and many of them have disabilities and health problems.</h5>
          </div>
          
          <div className="about_section_img_Slider">
            <div className="slides">
              <div className="slide"><img src={process.env.PUBLIC_URL + "/assets/img/image1.png"} alt="Image1"></img></div>
              <div className="slide"><img src={process.env.PUBLIC_URL + "/assets/img/image2.png"} alt="Image2"></img></div>
              <div className="slide"><img src={process.env.PUBLIC_URL + "/assets/img/image3.jpg"} alt="Image3"></img></div>
              <div className="slide"><img src={process.env.PUBLIC_URL + "/assets/img/image4.jpg"} alt="Image4"></img></div>
            </div>
              
            <button className="prev Sliderbutton" onClick={() => moveSlide(-1)}>❮</button>
            <button className="next Sliderbutton" onClick={() => moveSlide(1)}>❯</button>
          </div>

        </div>
      </div>

    </div>

  )
}

export default About