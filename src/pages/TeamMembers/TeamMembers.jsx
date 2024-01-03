import React from 'react';
import { Link } from "react-router-dom";
import './TeamMembers.css'
import Header from '../../components/header/Header';
import TeamsHome from "../../components/teamsHome/teamsHome";

const TeamMembers = () => {
  return (
    <>
      <div className="Teamback">
        <Header />
        <TeamsHome />
      </div>
      
      <div className="teamMembers_section container grid">

        <div className="teamDetail">
          
          <div className="home__contents">
            <h1 className='h1'>Other Team Members</h1>
          </div>
          
          <div className="Top">
            <article className="team__member">
              <div className="team__member-img profile">
                <img className = "pics" src={process.env.PUBLIC_URL +'/assets/Teams/team-5.jpg'} alt='home-img' />
              </div>
              <div className="team__member-info">
                <h3 className='person_the_name'>Letikat Kinde</h3>
                <h2 className='person_the_title'>Finance Manager</h2>

                <div className="team__member-socials">
                  <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                  <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>
                  <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
                </div>
              </div>
            </article>

            <article className="team__member">
              <div className="team__member-img profile">
                <img className = "pics" src={process.env.PUBLIC_URL +'/assets/Teams/team-6.jpg'} alt='home-img' />
              </div>

              <div className="team__member-info">
                <h3 className='person_the_name person_name'>Getabalew Ayalkibet</h3>
                <h2 className='person_the_title'>Program Coordinator</h2>

                <div className="team__member-socials">

                  <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>

                  <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>

                  <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
                </div>
              </div>
            </article>

            <article className="team__member">
              <div className="team__member-img profile">
                <img className = "pics" src={process.env.PUBLIC_URL +'/assets/Teams/team-6.png'} alt='home-img' />
              </div>
              <div className="team__member-info">
                <h3 className='person_the_name'></h3>
                <h2 className='person_the_title'></h2>

                <div className="team__member-socials">
                  <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                  <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>
                  <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
                </div>
              </div>
            </article>

            <article className="team__member">
              <div className="team__member-img profile">
                <img className = "pics" src={process.env.PUBLIC_URL +'/assets/placeholder.png'} alt='home-img' />
              </div>
              <div className="team__member-info">
                <h3 className='person_the_name'>Name</h3>
                <h2 className='person_the_title'>Title</h2>

                <div className="team__member-socials">
                  <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                  <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>
                  <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
                </div>
              </div>
            </article>
          </div>


          <div className="home__contents middle-title">
            <h1 className='h1'>Middle level</h1>
          </div>
          
          <div className="middle">
            <article className="team__member">
              <div className="team__member-img profile">
                <img className = "pics" src={process.env.PUBLIC_URL +'/assets/placeholder.png'} alt='home-img' />
              </div>
               <div className="team__member-info">
                 <h3 className='person_the_name'>Name</h3>
                 <h2 className='person_the_title'>Title</h2>
                 
                 <div className="team__member-socials">
                    <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                    <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>
                    <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
                 </div>
               </div>
            </article>

            <article className="team__member">
              <div className="team__member-img profile">
                <img className = "pics" src={process.env.PUBLIC_URL +'/assets/placeholder.png'} alt='home-img' />
              </div>
               <div className="team__member-info">
                 <h3 className='person_the_name'>Name</h3>
                 <h2 className='person_the_title'>Title</h2>
                 
                 <div className="team__member-socials">
                    <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                    <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>
                    <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
                 </div>
               </div>
            </article>

            <article className="team__member">
              <div className="team__member-img profile">
                <img className = "pics" src={process.env.PUBLIC_URL +'/assets/placeholder.png'} alt='home-img' />
              </div>
               <div className="team__member-info">
                 <h3 className='person_the_name'>Name</h3>
                 <h2 className='person_the_title'>Title</h2>
                 
                 <div className="team__member-socials">
                    <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                    <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>
                    <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
                 </div>
               </div>
            </article>

            <article className="team__member">
              <div className="team__member-img profile">
                <img className = "pics" src={process.env.PUBLIC_URL +'/assets/placeholder.png'} alt='home-img' />
              </div>
               <div className="team__member-info">
                 <h3 className='person_the_name'>Name</h3>
                 <h2 className='person_the_title'>Title</h2>
                 
                 <div className="team__member-socials">
                    <Link to="https://twitter.com"><i className="uil uil-twitter-alt"></i></Link>
                    <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>
                    <Link to="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></Link>
                 </div>
               </div>
            </article>

          </div>
        
        </div>

      </div>

      <div className="foundation_legal_entity container grid" >
        
        <div className="englishversion">
          <h2 className='person_the_name'>The foundation has got legal entity from the Federal Democratic Republic of Ethiopia Authority for Civil Society Organizations with certificate no 6345. Currently, the foundation started its operation after signing a tri party project implementation agreement with Addis Ababa city Finance bureau & Addis Ababa city administration women, children & Social affairs bureau in two sub cities of Gulele & Bole. From Gulele sub city Woreda 1 & Woreda 3 from Bole sub city Woreda 12 was chosen for our project implementation.</h2>
        </div>

        <div className="entity-line"></div>
        
        <div className="amhricversion">
          <h2 className="person_the_name">ድርጅታችን ሳምራዊት ፋዉንዴሽን ከኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ የሲቪል ማህበረሰብ ድርጅቶች ባለስልጣን በሰርተፊኬት ቁጥር 6345 የተመዘገበ ህጋዊ እውቅና ያለው የበጎ አድራጎት ተቋም ነው፡፡ ከዚህ በተጨማሪ ለሚሰራቸው የበጎ አድራጎት ሥራ ከአዲስ አበባ ከተማ አስተዳደር ሴቶች ህጻናትና ማህበራዊ ጉዳይ ቢሮ እና ከአዲስ አበባ ከተማ አስተዳደር ፋይናንስ ቢሮ ጋር የሶስትዮሽ የፕሮጀክት ትግበራ ስምምነትን ተፈራርሞ በከተማችን በሁለት ክፍለ ከተሞች ማለትም በቦሌ እና በጉለሌ ክፍለ ከተማ በሶስት ወረዳዎች ማለትም በጉለሌ ክፍለ ከተማ ወረዳ 1 እና ወረዳ 3 እንዲሁም በቦሌ ክፍለ ከተማ ወረዳ 12 ላይ የሰብዓዊ ድጋፍ አገልግሎቱን እየሰጠ ይገኛል፡፡</h2>
        </div>








      </div>
    </>
  )
}

export default TeamMembers