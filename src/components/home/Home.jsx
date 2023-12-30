import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import  { useState,} from 'react'
import Description from '../Description/Description'
import ScrollDown from './ScrollDown'


function Home() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
   setToggleState(index);
  }

  return (
   <section className=" home section container grid" id="home">
    <div className="home__container container grid">

        <div >
          <div className="home__content container grid">
            
            <div className='Home-social-div'><Social /></div>

            <div className="homeDescription">
              <Description />
            </div>
        </div>

        <div className='home-Data container '>
          <Data />
        </div>
        
        </div>
        
        <div className='donateSection'> <button className='donate' onClick={() => toggleTab(1)}>Donate</button>
              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                      <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
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
        <ScrollDown />
        
</div>
   </section>
  )
}

export default Home