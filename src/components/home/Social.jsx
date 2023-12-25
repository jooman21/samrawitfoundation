import React from 'react'
import "./social.css"
import { Link} from "react-router-dom";


function Social() {
  return (
    <div className="home__social">

      <Link to = "https://www.facebook.com/profile.php?id=100090874201533&mibextid=ZbWKwL" className="home__social-icon"><img src={process.env.PUBLIC_URL +'/assets/Svg/facebook-round-color-icon.svg'} alt="Facebook" className="socialSvg twitterSvg"/></Link>

      <Link to = "https://t.me/samrawitfoundation" className="home__social-icon"><img src={process.env.PUBLIC_URL +'/assets/Svg/telegram.svg'} alt="Telegram" className="socialSvg twitterSvg"/></Link>

      <Link to = "https://x.com/samrawitfound?t=x4Hd9Ab0xXlOAU2KxPLYOA&s=35" className="home__social-icon" target="_blank"><img src={process.env.PUBLIC_URL +'/assets/Svg/icons8-twitter-x-bg.svg'} alt="X" className="socialSvg twitterSvg"/></Link>

      <Link to="https://www.tiktok.com/@samrawitfoundation?_t=8hylLGsv1B0&_r=1" className="home__social-icon" ><img src={process.env.PUBLIC_URL +'/assets/Svg/tiktok-color-icon.svg'} alt="TikTok" className="socialSvg whatsappSvg"/></Link>

    </div>
  )
}

export default Social