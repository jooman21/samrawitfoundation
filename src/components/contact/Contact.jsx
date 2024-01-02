import React from 'react'
import "./contact.css"
function Contact() {
  const handleCallClick = () => {
    const phoneNumber = "+251911820607";
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
  <section className="contact_section" id="contact">
    
    <div className="home__contents">
      <h1 className="h1 section__title">Get in touch</h1>
    </div>

    <span className="section__subtitle"><strong>Contact Us</strong></span>
    
    <div className="contact__container container grid">
      <div className="contact__content">
        <h3 className="contact__title">Talk to us </h3>
        <div className="contact__info">
          
          <div className="contact__card">
            <i className=" uil uil-envelope-edit contact__card-icon mail"></i>
            <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">samrawitfoundation@gmail.com</span>
              <a href="samrawitfoundation@gmail.com" className="contact__button">Write Us <i className="uil uil-arrow-right contact__button-icon"></i></a>
          </div>

          <div className="contact__card"onClick={handleCallClick}>
            <i className="uil uil-phone contact__card-icon ph"></i>
            <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">+251911820607</span>
              <a href="+251 911 820607" className="contact__button">Call Us <i className="uil uil-arrow-right contact__button-icon"></i></a>
          </div>

          <div className="contact__card">
            <i className="uil uil-facebook contact__card-icon fb"></i>
            <h3 className="contact__card-title">Facebook</h3>
              <span className="contact__card-data">SamrawitFoundation</span>
              <a href="https://www.facebook.com/profile.php?id=100090874201533&mibextid=ZbWKwL" className="contact__button">Write Us <i className="uil uil-arrow-right contact__button-icon"></i></a>
          </div>

        </div>
      </div>

      <div className="contact__content">
        <h3 className="contact__title">Share your thoughts: Let's create positive change together!</h3>
        <form className="contact__form">
          <div className="contact__form-div">
            <label  className="contact__form-tag">Name</label>
            <input type="text" name="name" className='contact__form-input' placeholder='Insert Your Name' autoComplete="off" />
          </div>

          <div className="contact__form-div">
            <label  className="contact__form-tag">Mail</label>
            <input type="email" name="email" className='contact__form-input' placeholder='Insert Your Email' autoComplete="off" />
          </div>

          <div className="contact__form-div contact__form-area">
            <label  className="contact__form-tag">Your Thoughts</label>
            <textarea name="project"  cols="30" rows="10" className='contact__form-input' placeholder='Write Your Thoughts' ></textarea>
          </div>

          <button className='button button--flex'>
            Send Message
            <i className='uil uil-message'></i>
          </button>
        </form>
      </div>
    </div>
   </section>
  )
}

export default Contact