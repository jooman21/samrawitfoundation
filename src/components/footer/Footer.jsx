
import "./Footer.css"
import { Link } from "react-router-dom";
import  { React, useState} from 'react'
// import Donate from '../Donate/Donate';


function Footer() {
 
  const [phoneNumbersVisible, setPhoneNumbersVisible] = useState(false);
  const [currentPhoneNumberIndex, setCurrentPhoneNumberIndex] = useState(0);

  // Define the phone numbers array here
  const phoneNumbers = ["+251911820607", "+251912202838", "+251900158320"];

  const handleCallClick = () => {
    setPhoneNumbersVisible(!phoneNumbersVisible);

    if (!phoneNumbersVisible) {
      const currentPhoneNumber = phoneNumbers[currentPhoneNumberIndex];
      window.location.href = `tel:${currentPhoneNumber}`;

      // Move to the next phone number in the list
      const nextIndex = (currentPhoneNumberIndex + 1) % phoneNumbers.length;
      setCurrentPhoneNumberIndex(nextIndex);
    }
  };

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <footer className="footer container">
      <div className="footer__container container grid">
          
        <div className="footer_title_top">
          <h1 className="footer__title">Samrawit Foundation</h1>
          <h5 className="footer__title_sub">“የተቸገሩትን ለመርዳት እስኪተርፈኝ አልጠብቅም”</h5>
        </div>
          
        <div className="footer_Top_Section container">

          <div className="footer_section_top_one container">
            <Link to='/' className='nav__logo footerLogo'>
              <img className='footer_img' src={process.env.PUBLIC_URL + '/assets/logo/Logo.png'} alt='Samrawit Logo' />
            </Link>
            <h2 className='Motto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus blanditiis, aliquam quidem repellat voluptas laudantium tempore!</h2>
          </div>


          <div className="footer_section_top_two ">
            <div className='donateSection_footer'> <button className='donate' onClick={() => toggleTab(1)}>Donate</button>
              <div className={toggleState === 1 ? "footer__modal active-modal" : "footer__modal"}>
                    <div className="footer__modal-content">
                      <i onClick={() => toggleTab(0)} className='uil uil-times footer__modal-close'></i>
                      <div className="infos">
                       <ul className='account'>
                        <li>
                        <i className='uil uil-university'></i> &#160; <strong>Commercial bank of Ethiopia</strong>
                           <br></br>
                           Samrawit Foundation Account No: 1000551542778
                        </li>
                        <hr />
                        <br />

                        <li>
                        <i className='uil uil-university'></i> &#160; <strong>Dashen Bank</strong>
                           <br></br>
                           Samrawit Foundation Account No: 0534334457011
                        </li>
                        <hr />
                        <br />
                       
                        <li className='uil uil-university'>  &#160;  <strong>Telebirr fundraising account: Use telebirr platform, follow the following steps</strong>
                           <br />
                           <br />
                        </li>
                        <li>
                        <i className='uil uil-check-circle checkcolor'></i> &#160; 1. Open your telebirr superapp
                        </li>
                        <li>
                        <i className='uil uil-check-circle checkcolor'></i> &#160; 2. Click ‘’More’’
                        </li>
                        <li>
                        <i className='uil uil-check-circle checkcolor'></i> &#160; 3. Click ‘’Fundraising’’
                        </li>
                        <li>
                        <i className='uil uil-check-circle checkcolor'></i> &#160; 4. From list of Organizations choose ‘’Samrawit Foundation’’
                        </li>
                        <li>
                        <i className='uil uil-check-circle checkcolor'></i> &#160; 5. ‘’Subscribe’’ the amount as you can to periodically donate
                        </li>
                        <br />
                       </ul>
                      </div>
                    </div>
              </div>
            </div>
          </div>   

          <div className="footer_section_top_three" onClick={handleCallClick}>
            <div className="mob">
            <h2>Mobile </h2>
          
        {phoneNumbers.map((phoneNumber, index) => (
          <div key={index}>
            <a href={`tel:${phoneNumber}`}>
              <h4 className="phone">{phoneNumber}</h4>
            </a>
            <br /><br />
          </div>
        ))} 
  
            
            </div>

            <br />
            <br />
            <hr />

            <div className="eml">
              <h2>Email</h2>
              <h4>Info@samrawitfoundation.org.et 
                <br /> Contact@samrawitfoundation.org.et 
                <br />samrawitfoundation@gmail.com </h4>
            </div>
          </div>

        </div>
          
        <div className="footer__social container ">
          <h4 className='footerFollowUs'>Follow us</h4>
          <div className ="cardll">
            <Link to="https://www.youtube.com/"className ="socialContainer containerOne"><img src={process.env.PUBLIC_URL +'/assets/Svg/youtube.svg'} alt="Youtube" className ="socialSvg instagramSvg"/></Link>
             
            <Link to="https://x.com/samrawitfound?t=x4Hd9Ab0xXlOAU2KxPLYOA&s=35" className ="socialContainer containerTwo"><img className ="socialSvg twitterSvg" src={process.env.PUBLIC_URL +'/assets/Svg/icons8-twitterx.svg'} alt='X'></img></Link>
            
            <Link to="https://t.me/samrawitfoundation" className ="socialContainer containerThree"><img src={process.env.PUBLIC_URL +'/assets/Svg/telegram.svg'} alt="Telegram" className ="socialSvg linkdinSvg"/></Link>
              
            <Link to="https://www.facebook.com/profile.php?id=100090874201533&mibextid=ZbWKwL" className ="socialContainer containerFour"><img src={process.env.PUBLIC_URL +'/assets/Svg/facebook-round-color-icon.svg'} alt="Facebook" className ="socialSvg whatsappSvg"/></Link>
                
            <Link to="https://www.tiktok.com/@samrawitfoundation?_t=8hylLGsv1B0&_r=1" className ="socialContainer containerfive"><img src={process.env.PUBLIC_URL +'/assets/Svg/tiktok-color-icon.svg'} alt="TikTok" className ="socialSvg whatsappSvg"/></Link>  
            <Link to="https://www.tiktok.com/@samrawitfoundation?_t=8hylLGsv1B0&_r=1" className ="socialContainer containerfive"><img src={process.env.PUBLIC_URL +'/assets/Svg/linkedin-svgrepo-com.svg'} alt="linkdin" className ="socialSvg whatsappSvg"/></Link>  
          </div> 
          
        </div>

        <hr className="footerHR" />

        <div className='footerDetalis container'>
          <span className="footer__copy"> <strong>&#169; 2023 Samrawit Foundation. All rights reserved</strong></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer