import React from 'react';
//import React, { useEffect } from 'react';
import './Teams.css';
import { Link } from "react-router-dom";

function Teams() {

  // useEffect(() => {
  //   const element = document.querySelector('.hello');
  //   console.log('Element:', element);
  // }, []); // Empty dependency array ensures the effect runs only once after initial render
  return (
    <div className="teams" id="services">
      <section className="team">
        
        <div className="team_title home__contents">
          <h1 className="h1">Meet Our Team</h1>
        </div>
        
        <div className="container team__container">
          
          <article className="team__member">
            <div className="team__member-img">
              <img className = "pics" src={process.env.PUBLIC_URL +'/assets/Teams/team-22.JPG'} alt='home-img' />
            </div>

            <div className="team__member-info">
              <h3 className='person_the_name person_name'>Etaferahu Andarge Mekuria</h3>
              <h2 className='person_the_title'>Founder & Executive Board chairman</h2>

              <div className="team__member-socials">

                <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                
                <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>

                <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
              </div>
            </div>

          </article>

          <article className="team__member">
            <div className="team__member-img">
            <img className = "pics" src={process.env.PUBLIC_URL +'/assets/family/father.jpg'} alt='home-img' />
            </div>
            <div className="team__member-info">
              <h3 className='person_the_name'>Tagel Nigatu Kebede (Engineer)</h3>
              <h2 className='person_the_title'>Founder & Executive Director</h2>

              <div className="team__member-socials">

                <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                
                <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>

                <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
              </div>
            </div>
          </article>

          <article className="team__member">
            <div className="team__member-img">
            <img className = "pics" src={process.env.PUBLIC_URL +'/assets/Teams/team-3.jpg'} alt='home-img' />
            </div>
            <div className="team__member-info">
              <h3 className='person_the_name'>Wubamlak Mekonen</h3>
              <h2 className='person_the_title'>Executive Board member</h2>
              
              <div className="team__member-socials">

                <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                
                <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>

                <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
              </div>
            </div>
          </article>

          <article className="team__member">
            <div className="team__member-img">
            <img className = "pics" src={process.env.PUBLIC_URL +'/assets/Teams/team-4.jpg'} alt='home-img' />
            </div>
            <div className="team__member-info">
              <h3 className='person_the_name'>Gizaw Alemu </h3>
              <h2 className='person_the_title'>Executive Board member</h2>
              
              <div className="team__member-socials">

                <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                
                <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>

                <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
              </div>
            </div>
          </article>
        </div>
        
        
        <Link to="/teamembers" className='grid' ><button className="button Team_cardBtn"> <svg fill="currentColor" viewBox="0 0 24 24" className="icon"><path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path></svg></button></Link>
      </section>
    </div>
  );
}

export default Teams;
