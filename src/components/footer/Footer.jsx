import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__container container grid">
          
        <div className="footer_title_top">
          <h1 className="footer__title">Samrawit Foundation</h1>
          <h5 className="footer__title_sub">“የተቸገሩትን ለመርዳት እስኪተርፈኝ አልጠብቅም”</h5>
        </div>
          
        <div className="footer_Top_Section container">
          <div className="footer_section_top_one">
            <Link to='/' className='nav__logo footerLogo'>
              <img className='footer_img' src={process.env.PUBLIC_URL + '/assets/logo/Logo.png'} alt='Samrawit Logo' />
            </Link>
            <h5 className='Motto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus blanditiis, aliquam quidem repellat voluptas laudantium tempore!</h5>
          </div>

          <div className="footer_section_top_two">
            <ul>
              <li> <strong>S</strong>ympathy  &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;<p className='valuesAmhric'> በርህራሄ ማገልገል</p></li>
              <li> <strong>A</strong>ccountability    &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;  <p className='valuesAmhric'>ተጠያቂነት</p></li>
              <li> <strong>M</strong>orality    &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;<p className='valuesAmhric'>ሞራላዊ መሆን</p></li>
              <li> <strong>R</strong>espect   &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;<p className='valuesAmhric'>በክብር ማገልገል</p></li>
              <li> <strong>A</strong>ssistance   &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;  &#160;&#160;<p className='valuesAmhric'>ድጋፍና ትብብር ማድረግ</p></li>
              <li> <strong>W</strong>ork Responsibly   &#160; &#160; &#160; &#160; &#160;<p className='valuesAmhric'>በኃላፊነት መስራት</p></li>
                <li> <strong>I</strong>ntegrity/honesty   &#160; &#160; &#160; &#160; &#160;<p className='valuesAmhric'> በቅንነት ማገልገል</p></li>
              <li> <strong>T</strong>o Share Love   &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <p className='valuesAmhric'>ፍቅር መስጠት</p></li>
              </ul>
          </div>

          <div className="footer_section_top_three">
            <button className='footerDonate'>Donate</button>
          </div>    
        </div>
          
        <div className="footer__social container">
          <h4 className='footerFollowUs'>Follow us</h4>
          <div className ="cardll">
            <Link to="https://www.youtube.com/"className ="socialContainer containerOne"><img src={process.env.PUBLIC_URL +'/assets/Svg/youtube.svg'} alt="Youtube" className ="socialSvg instagramSvg"/></Link>
             
            <Link to="https://x.com/samrawitfound?t=x4Hd9Ab0xXlOAU2KxPLYOA&s=35" className ="socialContainer containerTwo"><img className ="socialSvg twitterSvg" src={process.env.PUBLIC_URL +'/assets/Svg/icons8-twitterx.svg'} alt='X'></img></Link>
            
            <Link to="https://t.me/samrawitfoundation" className ="socialContainer containerThree"><img src={process.env.PUBLIC_URL +'/assets/Svg/telegram.svg'} alt="Telegram" className ="socialSvg linkdinSvg"/></Link>
              
            <Link to="https://www.facebook.com/profile.php?id=100090874201533&mibextid=ZbWKwL" className ="socialContainer containerFour"><img src={process.env.PUBLIC_URL +'/assets/Svg/facebook-round-color-icon.svg'} alt="Facebook" className ="socialSvg whatsappSvg"/></Link>
                
            <Link to="https://www.tiktok.com/@samrawitfoundation?_t=8hylLGsv1B0&_r=1" className ="socialContainer containerfive"><img src={process.env.PUBLIC_URL +'/assets/Svg/tiktok-color-icon.svg'} alt="TikTok" className ="socialSvg whatsappSvg"/></Link>  
          </div> 
        </div>

        <div className="hr"></div>

        <div className='footerDetalis container'>
          <span className="footer__copy"> <strong>&#169; 2023 Samrawit Foundation. All rights reserved</strong></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer