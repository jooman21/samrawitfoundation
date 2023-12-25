import React, { useState } from 'react'
import './Gallaries.css'
import GallariesHome from '../../components/GallariesHome/GallariesHome';
import Header from '../../components/header/Header';

const Gallaries = () => {
     const [toggleState, setToggleState] = useState(0);

     const toggleTab = (index) => {
      setToggleState(index);
     }
  return (
    <>
      <div className="Gallariesback">
        <Header />
        <GallariesHome />
        
      </div>

      <div className='gallaries_section container grid'>

        
         <div className="wrapper">
         
          <div className="card">
          <img className = "pics" src={process.env.PUBLIC_URL +'/assets/family/pic1.jpeg'} alt='home-img' />
            <div className="info">
              <h5 className="heading">Heading</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              
              <span className='button' onClick={() => toggleTab(1)}>View More
                <i className='uil uil-arrow-right'></i>
              </span>
              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                      <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                      <h3 className='services__modal-content'>aaa</h3>
                      <p className='services__modal-description'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="infos">
                        <p className="services__modal-info">
                          Lorem ipsum dolor sit amet consectetur adipisicing elicghhjt.
                        </p>
                      </div>
                    </div>
              </div>
            </div>
          </div>
          <div className="card">
          <img className = "pics" src={process.env.PUBLIC_URL +'/assets/family/pic2.jpeg'} alt='home-img' />
            <div className="info">
              <h5 className="heading">Heading</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium assumenda dolore nobis fugit.</p>
              <span className='button' onClick={() => toggleTab(1)}>View More
                <i className='uil uil-arrow-right'></i>
              </span>
              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                      <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                      <h3 className='services__modal-content'>aaa</h3>
                      <p className='services__modal-description'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="infos">
                        <p className="services__modal-info">
                          Lorem ipsum dolor sit amet consectetur adipisicing elicghhjt.
                        </p>
                      </div>
                    </div>
              </div>
            </div>
          </div>
          <div className="card">
          <img className = "pics" src={process.env.PUBLIC_URL +'/assets/family/pic2.jpeg'} alt='home-img' />
            <div className="info">
              <h5 className="heading">Heading</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium assumenda dolore nobis fugit.</p>
              <ul className='services__modal-services grid'>
                         <li className="services__modal-services">
                          <i className='uil uil-check-cricle services__modal-icon'></i>
                          <p className="services__modal-info">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                         </li>
                      </ul>
                      <span className='button' onClick={() => toggleTab(1)}>View More
                <i className='uil uil-arrow-right'></i>
              </span>
              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                      <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                      <h3 className='services__modal-content'>aaa</h3>
                      <p className='services__modal-description'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="infos">
                        <p className="services__modal-info">
                          Lorem ipsum dolor sit amet consectetur adipisicing elicghhjt.
                        </p>
                      </div>
                    </div>
              </div>
            </div>
            
          </div>
          <div className="card">
          <img className = "pics" src={process.env.PUBLIC_URL +'/assets/background/fam.jpg'} alt='home-img' />
            <div className="info">
              <h5 className="heading">Heading</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium .</p>
              <span className='button' onClick={() => toggleTab(1)}>View More
                <i className='uil uil-arrow-right'></i>
              </span>
              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                      <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                      {/* <h3 className='services__modal-content'>aaa</h3> */}
                      <p className='services__modal-description'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="infos">
                        <p className="services__modal-info">
                          Lorem ipsum dolor sit amet consectetur adipisicing elicghhjt.
                        </p>
                      </div>
                    </div>
              </div>
             
            </div>
          </div>
          <div className="card">
          <img className = "pics" src={process.env.PUBLIC_URL +'/assets/background/fam.jpg'} alt='home-img' />
            <div className="info">
              <h5 className="heading">Heading</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium .</p>
              <span className='button' onClick={() => toggleTab(1)}>View More
                <i className='uil uil-arrow-right'></i>
              </span>
              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                      <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                      <h3 className='services__modal-content'>aaa</h3>
                      <p className='services__modal-description'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="infos">
                        <p className="services__modal-info">
                          Lorem ipsum dolor sit amet consectetur adipisicing elicghhjt.
                        </p>
                      </div>
                    </div>
              </div>
             
            </div>
          </div>
          <div className="card">
          <img className = "pics" src={process.env.PUBLIC_URL +'/assets/background/fam.jpg'} alt='home-img' />
            <div className="info">
              <h5 className="heading">Heading</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium .</p>
              <span className='button' onClick={() => toggleTab(1)}>View More
                <i className='uil uil-arrow-right'></i>
              </span>
              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                      <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                      <h3 className='services__modal-content'>aaa</h3>
                      <p className='services__modal-description'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="infos">
                        <p className="services__modal-info">
                          Lorem ipsum dolor sit amet consectetur adipisicing elicghhjt.
                        </p>
                      </div>
                    </div>
              </div>
             
            </div>
          </div>
          <div className="card">
          <img className = "pics" src={process.env.PUBLIC_URL +'/assets/background/fam.jpg'} alt='home-img' />
            <div className="info">
              <h5 className="heading">Heading</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium .</p>
              <span className='button' onClick={() => toggleTab(1)}>View More
                <i className='uil uil-arrow-right'></i>
              </span>
              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                      <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                      <h3 className='services__modal-content'>aaa</h3>
                      <p className='services__modal-description'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="infos">
                        <p className="services__modal-info">
                          Lorem ipsum dolor sit amet consectetur adipisicing elicghhjt.
                        </p>
                      </div>
                    </div>
              </div>
             
            </div>
          </div>
          <div className="card">
          <img className = "pics" src={process.env.PUBLIC_URL +'/assets/background/fam.jpg'} alt='home-img' />
            <div className="info">
              <h5 className="heading">Heading</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium .</p>
              <span className='button' onClick={() => toggleTab(1)}>View More
                <i className='uil uil-arrow-right'></i>
              </span>
              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                      <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                      <h3 className='services__modal-content'>aaa</h3>
                      <p className='services__modal-description'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="infos">
                        <p className="services__modal-info">
                          Lorem ipsum dolor sit amet consectetur adipisicing elicghhjt.
                        </p>
                      </div>
                    </div>
              </div>
             
            </div>
          </div>

         </div>
      </div>
    </>
  )
}

export default Gallaries