import React, { useState } from 'react'
import "./header.css"
import { Link,} from "react-router-dom";
// import Logo  from '../assets/logo/Logo.png'

function Header() {
   
    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className='header container'>
        <nav className='nav container'>
            <Link to='/' className='nav__logo'><img src={process.env.PUBLIC_URL + '/assets/logo/sam-logo-12.png'} alt='Samrawit Logo' /></Link>

            <div className={Toggle ? "nav__menu show-menu"  : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <Link to="/" onClick={() => setActiveNav('home')} className={activeNav === "#home" ? "nav__link active-link": "nav__link"}>
                        <i className="uil uil-estate nav__icon"></i> <h1 className='navlink'>Home</h1> </Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/foundation"  onClick={() => setActiveNav('foundation')} className={activeNav === "#foundation" ? "nav__link active-link": "nav__link"}>
                        <i className="uil uil-folder-heart nav__icon"></i>
                        <h1 className='navlink'>Foundation</h1>
                        </Link>
                    </li>

                    <li className="nav__item">
                        <Link to ="/about" onClick={() => setActiveNav('#about')} className={activeNav === "about" ? "nav__link active-link": "nav__link"}>
                        <i className="uil uil-user nav__icon"></i>
                        <h1 className='navlink'>About Us</h1> 
                        </Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/galleries" onClick={() => setActiveNav('#galleries')} className= {activeNav === "#galleries" ? "nav__link active-link": "nav__link"}>
                        <i className="uil uil-image nav__icon"></i><h1 className='navlink'>Gallaries</h1>  </Link>
                        
                    </li>

                    <li className="nav__item">
                        <Link to ="/services" onClick={() => setActiveNav('services')} className={activeNav === "services" ? "nav__link active-link": "nav__link"}>
                        <i className="uil uil-briefcase-alt nav__icon"></i>
                        <h1 className='navlink'>Services</h1>
                        </Link>
                    </li>

                    <li className="nav__item">
                        <Link to ="/contact"  onClick={() => setActiveNav('contact')} className={activeNav === "contact" ? "nav__link active-link": "nav__link"}>
                        <i className="uil uil-message nav__icon"></i>
                        <h1 className='navlink'>Contact</h1>
                        </Link>
                    </li>

                </ul>
                
                <i className="uil uil-times nav__close" onClick={() => showMenu (!Toggle)}></i>
            </div>
            <div className="nav__toggle app" onClick={() => showMenu (!Toggle)}>
                <i className="uill uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header